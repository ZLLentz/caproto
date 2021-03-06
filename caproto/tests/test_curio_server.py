import ast
import datetime

import pytest
import curio
import curio.subprocess

import caproto as ca

from caproto import ChannelType
from .epics_test_utils import (run_caget, run_caput)

caget_checks = sum(
    ([(pv, dtype),
      (pv, ca.promote_type(dtype, use_status=True)),
      (pv, ca.promote_type(dtype, use_time=True)),
      (pv, ca.promote_type(dtype, use_ctrl=True)),
      (pv, ca.promote_type(dtype, use_gr=True)),
      ]
     for pv in ('int', 'pi', 'enum')
     for dtype in ca.native_types),
    []
)

caget_checks += [('char', ChannelType.CHAR),
                 ('char', ChannelType.STS_CHAR),
                 ('char', ChannelType.TIME_CHAR),
                 ('char', ChannelType.GR_CHAR),
                 ('char', ChannelType.CTRL_CHAR),
                 ('str', ChannelType.STRING),
                 ('str', ChannelType.STS_STRING),
                 ('str', ChannelType.TIME_STRING),

                 ('str', ChannelType.STSACK_STRING),
                 ('str', ChannelType.CLASS_NAME),
                 ]


@pytest.mark.parametrize('pv, dbr_type', caget_checks)
def test_with_caget(curio_server, pv, dbr_type):
    ctrl_keys = ('upper_disp_limit', 'lower_alarm_limit',
                 'upper_alarm_limit', 'lower_warning_limit',
                 'upper_warning_limit', 'lower_ctrl_limit',
                 'upper_ctrl_limit', 'precision')
    curio_server, caget_pvdb = curio_server

    async def client():
        print('* client_test', pv, dbr_type)
        db_entry = caget_pvdb[pv]
        # native type as in the ChannelData database
        db_native = ca.native_type(db_entry.data_type)
        # native type of the request
        req_native = ca.native_type(dbr_type)

        data = await run_caget(pv, dbr_type=dbr_type)
        print('dbr_type', dbr_type, 'data:')
        print(data)

        db_value = db_entry.value

        # convert from string value to enum if requesting int
        if (db_native == ChannelType.ENUM and
                not (req_native == ChannelType.STRING
                     or dbr_type in (ChannelType.CTRL_ENUM,
                                     ChannelType.GR_ENUM))):
            db_value = db_entry.enum_strings.index(db_value)
        if req_native in (ChannelType.INT, ChannelType.LONG, ChannelType.CHAR):
            if db_native == ChannelType.CHAR:
                assert int(data['value']) == ord(db_value)
            else:
                assert int(data['value']) == int(db_value)
        elif req_native in (ChannelType.STSACK_STRING, ):
            db_string_value = db_entry.alarm.alarm_string
            string_length = len(db_string_value)
            read_value = data['value'][:string_length]
            assert read_value == db_string_value
        elif req_native in (ChannelType.CLASS_NAME, ):
            assert data['class_name'] == 'caproto'
        elif req_native in (ChannelType.FLOAT, ChannelType.DOUBLE):
            assert float(data['value']) == float(db_value)
        elif req_native == ChannelType.STRING:
            if db_native == ChannelType.STRING:
                db_string_value = str(db_value[0])
                string_length = len(db_string_value)
                read_value = data['value'][:string_length]
                assert int(data['element_count']) == 1
                assert read_value == db_string_value
                # due to how we monitor the caget output, we get @@@s where
                # null padding bytes are. so long as we verify element_count
                # above and the set of chars that should match, this assertion
                # should pass
            else:
                assert data['value'] == str(db_value)
        elif req_native == ChannelType.ENUM:
            bad_strings = ['Illegal Value (', 'Enum Index Overflow (']
            for bad_string in bad_strings:
                if data['value'].startswith(bad_string):
                    data['value'] = data['value'][len(bad_string):-1]

            if (db_native == ChannelType.ENUM and
                    (dbr_type in (ChannelType.CTRL_ENUM,
                                  ChannelType.GR_ENUM))):
                # ctrl enum gets back the full string value
                assert data['value'] == db_value
            else:
                assert int(data['value']) == int(db_value)
        else:
            raise ValueError('TODO ' + str(dbr_type))

        # TODO metadata should be cast to requested type as well!
        same_type = (ca.native_type(dbr_type) == db_native)

        if (dbr_type in ca.control_types and same_type
                and dbr_type != ChannelType.CTRL_ENUM):
            for key in ctrl_keys:
                if (key == 'precision' and
                        ca.native_type(dbr_type) != ChannelType.DOUBLE):
                    print('skipping', key)
                    continue
                print('checking', key)
                assert float(data[key]) == getattr(db_entry, key), key

        if dbr_type in ca.time_types:
            timestamp = datetime.datetime.fromtimestamp(db_entry.timestamp)
            assert data['timestamp'] == timestamp

        if (dbr_type in ca.time_types or dbr_type in ca.status_types or
                dbr_type == ChannelType.STSACK_STRING):
            severity = data['severity']
            if not severity.endswith('_ALARM'):
                severity = '{}_ALARM'.format(severity)
            severity = getattr(ca._dbr.AlarmSeverity, severity)
            assert severity == db_entry.severity, key

            status = data['status']
            status = getattr(ca._dbr.AlarmStatus, status)
            assert status == db_entry.status, key

            if 'ackt' in data:
                ack_transient = data['ackt'] == 'YES'
                assert ack_transient == db_entry.alarm.must_acknowledge_transient

            if 'acks' in data:
                ack_severity = data['acks']
                ack_severity = getattr(ca._dbr.AlarmSeverity, ack_severity)
                assert ack_severity == db_entry.alarm.severity_to_acknowledge

    async def task():
        server_task = await curio.spawn(curio_server)

        try:
            await client()
        finally:
            await server_task.cancel()

    with curio.Kernel() as kernel:
        kernel.run(task)
    print('done')


caput_checks = [('int', '1', [1]),
                ('pi', '3.18', [3.18]),
                ('enum', 'd', 'd'),  # TODO inconsistency
                # ('enum2', 'cc', 'cc'),  # TODO inconsistency
                # ('str', 'resolve', [b'resolve']),  # TODO inconsistency - encoding
                # ('char', 'testing', 'testing'),  # TODO comes in as byte array
                # TODO string array, longer char array
                ]


@pytest.mark.parametrize('pv, put_value, check_value', caput_checks)
# @pytest.mark.parametrize('async_put', [True, False])
def test_with_caput(curio_server, pv, put_value, check_value, async_put=True):
    curio_server, caget_pvdb = curio_server

    async def client():
        print('* client_test', pv, 'put value', put_value, 'check value',
              check_value)

        db_entry = caget_pvdb[pv]
        db_old = db_entry.value
        data = await run_caput(pv, put_value,
                               as_string=isinstance(db_entry, ca.ChannelChar))
        db_new = db_entry.value

        if isinstance(db_entry, (ca.ChannelInteger, ca.ChannelDouble)):
            clean_func = ast.literal_eval
        # elif isinstance(db_entry, ca.ChannelString):
        #     clean_func = lambda v: v.split(' ', 1)[1]
        else:
            clean_func = None

        if clean_func is not None:
            for key in ('old', 'new'):
                data[key] = clean_func(data[key])
        print('caput data', data)
        print('old from db', db_old)
        print('new from db', db_new)
        print('old from caput', data['old'])
        print('new from caput', data['new'])

        # check value from database compared to value from caput output
        assert db_new == data['new']
        # check value from database compared to value the test expects
        assert db_new == check_value

    async def task():
        server_task = await curio.spawn(curio_server)

        try:
            await client()
        finally:
            await server_task.cancel()

    with curio.Kernel() as kernel:
        kernel.run(task)
    print('done')
