Search.setIndex({docnames:["api","basics","examples/curio_client","examples/curio_server","examples/index","examples/singleshot_server","examples/synchronous_client","index","references","release-notes"],envversion:51,filenames:["api.rst","basics.rst","examples/curio_client.rst","examples/curio_server.rst","examples/index.rst","examples/singleshot_server.rst","examples/synchronous_client.rst","index.rst","references.rst","release-notes.rst"],objects:{"caproto.AccessRightsResponse":{access_rights:[0,2,1,""],cid:[0,2,1,""]},"caproto.Broadcaster":{log:[0,2,1,""],new_search_id:[0,3,1,""],next_command:[0,3,1,""],our_role:[0,2,1,""],recv:[0,3,1,""],register:[0,3,1,""],search:[0,3,1,""],send:[0,3,1,""]},"caproto.ClearChannelRequest":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClearChannelResponse":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClientChannel":{clear:[0,3,1,""],client_name:[0,3,1,""],create:[0,3,1,""],host_name:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ClientNameRequest":{name:[0,2,1,""]},"caproto.CreateChFailResponse":{cid:[0,2,1,""]},"caproto.ErrorResponse":{cid:[0,2,1,""],status_code:[0,2,1,""]},"caproto.EventAddRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],high:[0,2,1,""],low:[0,2,1,""],mask:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""],to:[0,2,1,""]},"caproto.EventAddResponse":{data_count:[0,2,1,""],data_type:[0,2,1,""],sid:[0,2,1,""],status_code:[0,2,1,""],subscriptionid:[0,2,1,""],values:[0,2,1,""]},"caproto.EventCancelRequest":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelResponse":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.HostNameRequest":{name:[0,2,1,""]},"caproto.NotFoundResponse":{cid:[0,2,1,""],version:[0,2,1,""]},"caproto.ReadNotifyRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ReadNotifyResponse":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""],status:[0,2,1,""]},"caproto.RepeaterConfirmResponse":{repeater_address:[0,2,1,""]},"caproto.RepeaterRegisterRequest":{client_address:[0,2,1,""]},"caproto.RsrvIsUpResponse":{address:[0,2,1,""],address_string:[0,2,1,""],beacon_id:[0,2,1,""],server_port:[0,2,1,""],version:[0,2,1,""]},"caproto.SearchRequest":{cid:[0,2,1,""],name:[0,2,1,""],payload_size:[0,2,1,""],reply:[0,2,1,""],version:[0,2,1,""]},"caproto.SearchResponse":{cid:[0,2,1,""],ip:[0,2,1,""],port:[0,2,1,""],version:[0,2,1,""]},"caproto.ServerChannel":{clear:[0,3,1,""],create:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ServerDisconnResponse":{cid:[0,2,1,""]},"caproto.VersionRequest":{priority:[0,2,1,""],version:[0,2,1,""]},"caproto.VersionResponse":{version:[0,2,1,""]},"caproto.VirtualCircuit":{host:[0,2,1,""],key:[0,2,1,""],log:[0,2,1,""],new_channel_id:[0,3,1,""],new_ioid:[0,3,1,""],new_subscriptionid:[0,3,1,""],next_command:[0,3,1,""],our_role:[0,2,1,""],port:[0,2,1,""],recv:[0,3,1,""],send:[0,3,1,""]},"caproto.WriteNotifyRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""],values:[0,2,1,""]},"caproto.WriteNotifyResponse":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""],status:[0,2,1,""]},caproto:{AWAIT_CREATE_CHAN_RESPONSE:[0,0,1,""],AWAIT_SEARCH_RESPONSE:[0,0,1,""],AWAIT_VERSION_RESPONSE:[0,0,1,""],AccessRightsResponse:[0,1,1,""],Broadcaster:[0,1,1,""],CLIENT:[0,0,1,""],CLOSED:[0,0,1,""],CONNECTED:[0,0,1,""],ClearChannelRequest:[0,1,1,""],ClearChannelResponse:[0,1,1,""],ClientChannel:[0,1,1,""],ClientNameRequest:[0,1,1,""],CreateChFailResponse:[0,1,1,""],ERROR:[0,0,1,""],EchoRequest:[0,1,1,""],EchoResponse:[0,1,1,""],ErrorResponse:[0,1,1,""],EventAddRequest:[0,1,1,""],EventAddResponse:[0,1,1,""],EventCancelRequest:[0,1,1,""],EventCancelResponse:[0,1,1,""],EventsOffRequest:[0,1,1,""],EventsOnRequest:[0,1,1,""],HostNameRequest:[0,1,1,""],IDLE:[0,0,1,""],LocalProtocolError:[0,1,1,""],MUST_CLOSE:[0,0,1,""],NEED_CIRCUIT:[0,0,1,""],NEED_DATA:[0,0,1,""],NotFoundResponse:[0,1,1,""],REQUEST:[0,0,1,""],RESPONSE:[0,0,1,""],ReadNotifyRequest:[0,1,1,""],ReadNotifyResponse:[0,1,1,""],ReadRequest:[0,1,1,""],ReadResponse:[0,1,1,""],ReadSyncRequest:[0,1,1,""],RemoteProtocolError:[0,1,1,""],RepeaterConfirmResponse:[0,1,1,""],RepeaterRegisterRequest:[0,1,1,""],RsrvIsUpResponse:[0,1,1,""],SEND_CREATE_CHAN_REQUEST:[0,0,1,""],SEND_CREATE_CHAN_RESPONSE:[0,0,1,""],SEND_SEARCH_REQUEST:[0,0,1,""],SEND_SEARCH_RESPONSE:[0,0,1,""],SEND_VERSION_REQUEST:[0,0,1,""],SEND_VERSION_RESPONSE:[0,0,1,""],SERVER:[0,0,1,""],SearchRequest:[0,1,1,""],SearchResponse:[0,1,1,""],ServerChannel:[0,1,1,""],ServerDisconnResponse:[0,1,1,""],VersionRequest:[0,1,1,""],VersionResponse:[0,1,1,""],VirtualCircuit:[0,1,1,""],WriteNotifyRequest:[0,1,1,""],WriteNotifyResponse:[0,1,1,""],WriteRequest:[0,1,1,""]}},objnames:{"0":["py","data","Python data"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"]},objtypes:{"0":"py:data","1":"py:class","2":"py:attribute","3":"py:method"},terms:{"0x2b7bba467378":1,"31ida":[1,2,5,6],"abstract":[1,2],"break":[1,2,3,5,6],"byte":[0,1,2,3,7],"case":[1,2],"class":[0,2,3],"default":0,"enum":3,"final":1,"float":1,"function":[1,2,6],"import":[0,1,2,3,5,6,7],"int":3,"new":[0,1,2,6,7],"return":[0,1,2,3,5,6],"super":3,"true":[0,1,2,3,5,6],"try":[1,3,6],"while":[0,1,2,3,5,6],And:[0,7],But:[1,7],For:[0,7],IDs:1,Its:[1,7],Not:1,PVs:2,That:7,The:[1,2,7],There:1,These:[0,1,8],Use:[0,7],Using:1,With:0,__init__:[0,2,3],__len__:3,__main__:[2,3,6],__name__:[2,3,6],__repr__:0,_callback:2,_dbr:[1,3],_get_my_ip:3,_monitor:2,_process_command:3,abid:1,about:[0,2,6,8],abov:[1,7],acceler:7,accept:[0,5],access:[0,2,3,8],access_respons:1,access_right:[0,1,3,5],accessrightsrespons:[0,1,3,5],actual:[0,1],add:[0,2],add_req:6,adding:2,addit:1,addr:3,address:[0,1,2,5,6],address_str:0,adher:1,advantag:7,af_inet:[1,2,3,5,6],af_inet_info:3,afaik:3,affect:1,affirm:0,after:0,again:[1,2],aim:7,all:[0,1,2,7],alloc:0,alreadi:[2,3],also:[0,1],alwai:[0,1,2],andrew:8,ani:[0,1,2,3,7],announc:[0,1],anoth:[0,1],answer:[0,1],anticip:7,anyth:1,api:[1,7],append:[1,2,3,5,6],appli:2,applic:[2,3],aren:1,arg:2,argument:0,around:7,arrai:1,arriv:[1,6],asid:1,ask:[1,2],assert:[2,5,6],assign:0,async:[4,7],asynchron:[1,2,7],attribut:[0,1,2],attributeerror:3,authent:1,author:7,auto:1,automat:0,avail:[1,2],await:[2,3],await_create_chan_respons:0,await_search_respons:0,await_version_respons:0,back:7,base:[6,8],basic:[0,7],battl:7,beacon:0,beacon_id:0,beazlei:8,becaus:1,becom:1,been:[0,1,2],befor:[0,1],begin:1,being:0,benchmark:4,better:[1,7],between:[0,1],binari:8,bind:[3,5],blog:8,bookkeep:1,bookkeepinig:7,borrow:0,both:[0,1,6],bottleneck:7,bound:3,branch:8,bring:7,broad:7,broadcast:[1,2,3,5,6,7],bsd:[3,7],buffer:[0,2,3],bug:7,build:[2,7],built:[0,1],bundl:[1,6],bytes_receiv:[1,2,3,5,6],bytes_to_send:[1,2,3,5,6],byteslik:0,ca_repeater_port:[5,6],ca_server_port:[5,6],cach:[1,2,3],caget:[4,7],call:[0,1,2,7],caller:7,camonitor:7,can:[0,1,2,3,7],cancel:[2,3],cancel_req:6,canon:1,caproto:[0,1,2,3,4,5,6],caprotoerror:0,caprotokeyerror:0,caput:[6,7],care:1,chan1:[2,6],chan2:2,chan:[1,2,3],chang:[0,1,6],channel:[2,3,6,8],channels_sid:3,channnel:0,check:[0,2],check_access:3,chnage:0,choic:7,choos:1,chtype:3,cid:[0,1,2,3,5,6],circuit:[0,1,2,3,5,6,7],circuitst:0,claus:7,clean:1,clear:[0,1,2,3,6],clearchannelrequest:[0,1,3,6],clearchannelrespons:[0,1,5],clever:7,click:0,client:[0,3,4,7],client_address:[0,5],client_nam:[0,1,2],client_udp_address:5,clientchannel:[0,1,2,6],clientnamerequest:[0,1,6],clog:1,close:[0,5,6],code:[0,1,8],codebas:7,collect:1,com:0,comannd:[2,3],come:1,command:[1,2,3,5,6,7],commun:[0,1,7],compani:7,companion:0,compar:[0,7],complet:[0,1,4,7],compos:1,concept:[1,7,8],concurr:7,condens:1,confirm:[0,2],congest:0,connect:[0,1,2,5,6],constant:[1,2,7],constitut:1,consum:2,context:[2,3],continu:[2,3],control:[0,7],conveni:[0,1,6],convention:1,convert:[0,1],convert_to:3,copi:[1,7],core:7,corountin:2,coroutin:2,correctli:7,correspond:0,could:1,count:[0,1],cours:7,cpu:2,creat:[0,2,5],create_chan_respons:1,create_channel:2,create_connect:[1,2,6],createchanrequest:[0,1,3,6],createchanrespons:[0,1,3,5],createchfailrespons:0,creation:0,crucial:7,ctrl:6,ctx:[2,3],curio:[4,7],current:[0,1],darwin:3,data:[1,2,3,5,6,7],data_count:[0,1,3,5,6],data_typ:[0,1,3,5,6],databaserecordbas:3,databaserecorddoubl:3,databaserecordenum:3,databaserecordinteg:3,databaserecordnumer:3,datagram:[0,1,3,6],david:8,davidsav:[1,8],db_entri:3,dbr:[0,3,7],dbr_doubl:[1,3],dbr_enum:3,dbr_id:3,dbr_long:3,dbr_type:0,debug:[2,3,5,6,7],decod:3,def:[1,2,3,5,6],default_protocol_vers:0,defens:7,demonstr:1,depend:7,deprec:0,depth:8,describ:0,design:[0,1,7],desir:0,detail:[0,1],determin:1,develop:[7,8],devic:7,dict:[5,6],differ:1,direct:0,directli:[0,1,5,7],discard:2,disconnect:[0,2,3],disconnectedcircuit:3,dispatch:[2,3],distribut:7,document:[7,8],doe:[0,1],doesn:1,doing:0,don:[1,2],done:1,doodl:3,down:[4,7],drive:7,each:[0,1,7],easi:[1,7],easier:1,echo:0,echorequest:0,echorespons:0,effect:1,effort:7,either:1,element:[0,1],elif:[2,3],els:[2,3],enabl:7,encapsul:[0,1],encapul:0,encod:[0,1,3,7],end:[0,1],enough:1,ensur:1,environ:1,epic:[0,1,5,7,8],epics_ca1_port:[2,3],epics_ca2_port:[2,3],epics_ca_addr_list:1,equival:1,era:7,error:[0,7],error_messag:0,errorrespons:0,especi:1,etc:1,evan:8,event:[0,2],event_add_command:2,eventadd:2,eventaddrequest:[0,1,3,6],eventaddrespons:[0,1,2],eventcancelrequest:[0,1,3,6],eventcancelrespons:[0,1,2],eventsoffrequest:0,eventsonrequest:0,everi:[0,1],exactli:[0,1,7],exampl:[0,1,7],except:[3,6,7],execut:2,exist:1,expand:0,expect:[1,3],experi:1,experiment:7,extra:7,extract_address:[2,6],facilit:1,fail:[0,3],failur:[0,1,3],fairli:[4,7],fake:5,fals:2,famili:7,field:[0,1],fill:1,find_next_tcp_port:3,first:[0,1,2,5],fist:2,fix:7,flavor:1,follow:1,format:3,formula:8,found:[1,7],fresh:[0,2],from:[0,1,2,3,7],from_dtyp:3,full:[2,3],fulli:0,func:2,fund:7,gener:[0,1,2,7],get:[0,2,3,7],get_address_list:[2,6],get_circuit:2,get_db_entri:3,get_ev:2,gethostbynam:0,gethostnam:[0,5],getpass:[0,3,5,6],getus:[0,5],give:[0,1,7],given:[0,1],going:1,grow:7,h11:[0,7,8],handl:[1,7,8],happen:1,hard:0,has:[0,1,2,3,7],have:[0,1,2],haven:7,header:0,heartbeat:[0,1],help:1,here:[1,6],hex:1,high:[0,1,6,7],higher:1,highest:0,hit:6,hold:[5,6],homebrew:8,host:[0,1,2,3,6],host_nam:[0,1,2],hostnamerequest:[0,1,6],how:1,human:7,hurrai:1,idea:7,identif:0,identifi:0,idl:[0,2],ifaddress:3,ignor:[1,2],illeg:[0,1],illustr:4,immedi:2,implement:[0,1,2,4,7],importerror:3,incident:1,includ:[0,1,4,7],incom:[1,2,3,7],increment:0,independ:1,index:3,indic:0,indispens:7,individu:[0,1],industri:7,info:6,ingest:6,inherit:0,initi:[0,1,2,5,6,7],inspir:7,instal:7,instanc:[0,2],instanti:0,instead:[0,7],integ:[0,1],integr:7,intens:2,interact:[0,1],interest:1,interfac:3,intern:[0,1],interpret:1,introduc:7,introduct:7,introspect:7,ioc:7,ioerror:3,ioid:[0,1,2,3,6],ipproto_udp:[1,2,6],ipv4:3,isinst:[2,3],iter:1,its:[0,1,7],itself:[1,7],jinja:7,job:1,johnson:8,join:3,juggl:1,just:[0,1,2],keep:[0,7],kei:0,ken:8,kenneth:8,keyboardinterrupt:6,keyerror:0,known_pv:3,kwarg:[2,3],laboratori:7,larg:7,last_read:2,later:2,latin:3,lauer:8,layout:[1,7],least:1,len:3,length:0,let:[0,1,3],level:[0,1],libca:[1,7],librari:1,licens:7,like:[0,1,7],limit:1,link:7,list:[0,2,3,7],listen:5,load:0,localhost:[1,6],localprotocolerror:[0,1],locat:1,log:[0,2,3,5,6,7],logger:0,look:[0,1,2],low:[0,1,6],lower_alarm_limit:3,lower_ctrl_limit:3,lower_disp_limit:3,lower_warning_limit:3,lowest:[0,1],lyric:1,machin:[1,7],mai:[0,1,7],main:[2,6],maintain:0,major:7,make:[1,2,5,6],manag:[0,7],mani:[0,1,7],manual:1,map:2,mask:[0,1,6],match:[0,1,2],matrix:1,mayb:2,mean:[0,1,7],meanwhil:6,mechan:2,meet:7,messag:[0,1,5,7],messagehead:0,metadata:[0,1,3],method:[0,1,2],michael:8,might:[0,1],mit:7,model:[0,7],modul:[4,7],monitor:[6,7],monitoring_task:2,more:[0,1,3,7],most:2,motor:[1,7],motorsim:[1,2,7,8],move:1,mtr:[1,2,6],much:1,multipl:1,must:[1,2],must_clos:[0,2],mutat:1,name:[0,1,2,3,6],nativ:[0,1],native_data_count:[0,6],native_data_typ:[0,6],native_float_typ:3,native_from:3,native_int_typ:3,native_to:3,native_typ:3,necessari:2,need:[0,1,2],need_circuit:0,need_data:[0,1,2,3,5,6],neg:0,neo:1,netifac:3,network:[1,7,8],new_channel_id:[0,3],new_ioid:0,new_search_id:0,new_subscriptionid:0,next:[0,1,2,3],next_command:[0,1,2,3,5,6],no_repli:[0,3],no_str:3,none:[0,2,3,5],normal:5,note:7,notfoundrespons:0,notic:[0,1],notif:0,notifc:0,notifi:[0,2],now:1,number:0,numpi:[0,1,7],obei:1,obj:0,object:[1,7],obtain:0,obviou:0,off:[0,7],old:[1,2],onc:1,one:[0,1,2,3,4,6,7],ones:1,onli:0,opaqu:0,open:[0,1],oper:[1,5],option:[0,1,7,8],order:0,origin:0,original_request:0,osx:8,other:[1,2],our:[0,1,5,6],our_hostnam:5,our_rol:[0,1,2,3,5,6],our_usernam:5,out:[0,1,2],outgo:[1,7],output:0,over:[0,1,2,3,7],overflow:8,overload:1,owes:7,own:7,packet:[0,3],pad:0,paramet:[0,1],parameter1:0,parameter2:0,parlanc:1,pars:[0,1,7,8],part:0,particl:7,particular:1,pass:[0,1,2,3,6],patch:7,pattern:[1,7],payload:7,payload_s:0,peer:[0,1],per:0,perform:3,permiss:1,physic:7,place:2,plai:[0,1,7],plugin:8,polic:1,pop:[2,6],port:[0,1,2,3],possess:1,post:8,potenti:7,precis:3,previou:1,primari:7,principl:7,print:[2,3,5,6],priorit:0,prioriti:[0,1,2,5,6],probabl:7,process:[0,1,2,3,7],process_subscript:2,program:7,project:[0,7,8],properli:1,properti:3,protcol:8,protocol:[0,1],protocol_vers:0,protocolerror:0,provid:[0,1,7],pure:1,purpos:4,pv1:[2,5,6],pv2:2,pvdb:3,pyepic:[7,8],python:[0,1,8],queri:0,rais:[0,1,2,3],rang:1,rather:0,rational:7,raw:1,read:[0,2,3,4,7],readabl:1,readi:2,readnotifyrequest:[0,1,3,6],readnotifyrespons:[0,1,2,5],readrequest:0,readrespons:0,readsyncrequest:0,reagan:7,realli:1,rebroadcast:1,recal:1,receipt:[0,5],receiv:[0,1,2,3,5,6],recent:2,reciev:0,recogn:2,record:1,recv:[0,1,2,3,5,6],recvfrom:[1,2,3,5,6],reduc:7,redund:2,refer:[0,2,7],regist:[0,2,6],register_user_callback:2,registr:0,relat:[2,7],releas:7,reliabl:3,remind:7,remot:0,remoteprotocolerror:[0,1],repeat:[0,2,6],repeater_address:[0,1],repeaterconfirmrespons:[0,1,2],repeaterregisterrequest:[0,1,2,6],repli:[0,3],report:[0,1],repr:1,repres:0,repsons:3,req:1,request:[0,1,2,6],requir:[0,1,6,7],res1:5,res:3,resourc:[7,8],respect:0,respond:[0,3,4,7],respons:[0,1,2,3,5,6],response_command:3,restor:0,result:2,reus:1,reusabl:7,right:[0,1,7],role:[0,1],root:7,rsrvisuprespons:0,rule:1,run:[2,3],runtimeerror:2,sai:1,same:[0,1],san:[1,7,8],search:[0,2,6],search_command:2,search_result:2,searchrequest:[0,1,3,5,6],searchrespons:[0,1,2,3,5,6],section:1,secur:1,see:[0,1,7],seen:0,self:[2,3],send:[0,1,2,3,5,6],send_create_chan_request:0,send_create_chan_respons:0,send_search_request:0,send_search_respons:0,send_version_request:0,send_version_respons:0,sendal:[3,5],sender_address:3,sendto:[1,2,3,5,6],sent:[0,1,5],sentinel:0,separ:[2,7],sequenti:0,serv:[0,1,7],server:[0,1,2,4,7],server_port:0,serverchannel:0,serverdisconnrespons:0,set:[1,2],setlevel:[2,3,5,6],setsockopt:[1,2,3,5,6],sever:[0,1,3],should:[0,1,2],shut:[4,7],sid:[0,1,3,5,6],side:0,signal:2,simpl:[1,4,7],simpli:1,simplifi:7,simul:[1,7],singl:[0,1],singleton:0,size:7,sleep:6,slide:8,so_broadcast:[1,2,3,5,6],so_reuseaddr:[3,5],so_reuseport:[3,5],sock3:5,sock:[1,2,3],sock_dgram:[1,2,3,5,6],sock_stream:[3,5],socket:[0,1,2,3,5,6,7,8],sol_socket:[1,2,3,5,6],some:[0,1,2,4,7],someth:0,sort:0,sourc:[0,8],spawn:[2,3],speak:7,spec:[0,2,8],special:[1,7],specif:[0,1],specifi:[0,1,7],spell:1,sprawl:1,stack:8,standard:7,star:7,start:[0,2,7],starting_port:3,stash:[1,2],state:[1,2,3,7],statu:[0,1,3],status_cod:[0,1],step:1,still:1,store:0,stori:1,str:3,strateg:7,string:[0,1,3],struct:[1,7],submit:7,subscrib:[0,2,3,4,7],subscript:[0,1,2,6],subscriptionid:[0,1,2,3,6],success:[0,1],succinct:1,succinctli:1,suction:2,support:1,synchron:1,synchrotron:7,system:[1,7],take:[0,7],talent:1,talk:[1,2,7,8],task:2,taskcancel:3,tbl:[1,2,6],tcp:[0,1,2,3,5,6],tcp_address:5,tcp_handler:3,tcp_server:3,tcp_task:3,tech:8,telescop:7,tell:[0,2,7],templat:7,temporarili:0,term:[0,1],test:[0,2,6,7],thei:[0,2],them:[0,1,2,3,7],themselv:0,thi:[0,1,2,3,8],thing:[1,7],think:[0,1],those:[1,7],thread:[2,7],through:0,time:[1,3,5,6,7],timestamp:[1,3],to_dtyp:3,todo:3,togeth:0,too:1,toolkit:7,track:[0,1,7],trade:7,traffic:[1,8],tranport:[2,3],transact:0,transcript:7,translat:1,transmit:[0,1],transport:[1,2,6,7],tri:0,trick:[0,7],trigger:0,tune:8,tupl:[0,1,3],turn:0,two:[0,1,2],type:[1,3,5,6,7],typeerror:3,typic:1,udp:[0,1,2,3,5],udp_serv:3,udp_sock:[1,2,5,6],udp_task:3,unanswered_search:2,under:[0,7],understand:7,uniqu:[0,1],unit:3,unless:1,unlimit:0,unsubscrib:[0,1,2,3],until:[1,6],unus:0,updat:[0,2,3],upper_alarm_limit:3,upper_ctrl_limit:3,upper_disp_limit:3,upper_warning_limit:3,upstream:7,use:[0,1,2,6],used:[0,1,2,7],useful:[0,7,8],user:[0,1,2],user_callback:2,usernam:6,uses:0,using:[0,1,4,7],val:[1,2,6],valid:[0,1,2,3,6,7],valu:[0,2,3,6],variabl:1,variou:[0,1,7],ver_command:2,veri:7,verifi:1,version:[0,1,2,6],versionrequest:[0,1,3,5,6],versionrespons:[0,1,2,3,5,6],via:1,view:0,virtual:[0,1,7],virtualcircuit:[1,2,3,5,6,7],virtualciruit:0,wai:[0,1,7],wait:[2,5],wait_for_connect:2,want:1,war:7,watch:[1,6],waveform:1,well:3,were:[7,8],what:[0,1],when:[0,1,2],where:7,whether:0,which:[0,1,2,3,7],why:1,wire:1,wireshark:8,without:2,word:1,work:[0,1,2],world:7,worth:[2,3],would:7,wrap:[2,3,7],write:[0,2,3,4,7],writenotifyrequest:[0,1,3,6],writenotifyrespons:[0,1,2],writerequest:0,x00:1,x01:1,x11:1,x18:1,x7f:1,yet:[0,1,2,7],yield:3,you:[0,1],young:7,your:[0,7]},titles:["API Documentation","Getting Started: Writing Your Own Channel Access Client","Fairly complete client using curio for async I/O","Fairly complete server using curio for async I/O","Examples","Simple server that responds to one &#8216;caget&#8217; and shuts down","Simple client that reads, subscribes, writes, and shuts down","caproto: a pure-Python Channel Access protocol library","References","Release Notes"],titleterms:{The:0,access:[1,7],acknowledg:7,api:0,async:[2,3],basic:1,bookkeepinig:1,broadcast:0,caget:5,caproto:7,channel:[0,1,7],client:[1,2,6],close:1,command:0,complet:[2,3],constant:0,content:[0,7],creat:1,curio:[2,3],data:0,document:0,down:[5,6],event:1,exampl:4,except:0,fairli:[2,3],get:1,how:7,know:7,librari:7,machin:0,note:9,object:0,one:5,own:1,payload:0,perform:7,protocol:7,pure:7,python:7,read:[1,6],refer:8,regist:1,releas:9,repeat:1,respond:5,search:1,server:[3,5],should:7,shut:[5,6],simpl:[5,6],simplifi:1,special:0,start:1,state:0,statist:7,subscrib:[1,6],thi:7,type:0,updat:1,use:7,using:[2,3],valu:1,virtualcircuit:0,vital:7,why:7,work:7,write:[1,6],you:7,your:1}})