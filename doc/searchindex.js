Search.setIndex({docnames:["api","basics","curio-client","curio-server","index","references","release-notes","threading-client"],envversion:51,filenames:["api.rst","basics.rst","curio-client.rst","curio-server.rst","index.rst","references.rst","release-notes.rst","threading-client.rst"],objects:{"caproto.AccessRightsResponse":{access_rights:[0,2,1,""],cid:[0,2,1,""]},"caproto.Broadcaster":{log:[0,2,1,""],new_search_id:[0,3,1,""],next_command:[0,3,1,""],our_role:[0,2,1,""],recv:[0,3,1,""],register:[0,3,1,""],search:[0,3,1,""],send:[0,3,1,""]},"caproto.ClearChannelRequest":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClearChannelResponse":{cid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ClientChannel":{clear:[0,3,1,""],client_name:[0,3,1,""],create:[0,3,1,""],host_name:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ClientNameRequest":{name:[0,2,1,""]},"caproto.CreateChFailResponse":{cid:[0,2,1,""]},"caproto.ErrorResponse":{cid:[0,2,1,""],status_code:[0,2,1,""]},"caproto.EventAddRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],high:[0,2,1,""],low:[0,2,1,""],mask:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""],to:[0,2,1,""]},"caproto.EventAddResponse":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],sid:[0,2,1,""],status_code:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelRequest":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.EventCancelResponse":{data_type:[0,2,1,""],sid:[0,2,1,""],subscriptionid:[0,2,1,""]},"caproto.HostNameRequest":{name:[0,2,1,""]},"caproto.NotFoundResponse":{cid:[0,2,1,""],version:[0,2,1,""]},"caproto.ReadNotifyRequest":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""]},"caproto.ReadNotifyResponse":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],metadata:[0,2,1,""],status:[0,2,1,""]},"caproto.RepeaterConfirmResponse":{repeater_address:[0,2,1,""]},"caproto.RepeaterRegisterRequest":{client_address:[0,2,1,""]},"caproto.RsrvIsUpResponse":{address:[0,2,1,""],address_string:[0,2,1,""],beacon_id:[0,2,1,""],server_port:[0,2,1,""],version:[0,2,1,""]},"caproto.SearchRequest":{cid:[0,2,1,""],name:[0,2,1,""],payload_size:[0,2,1,""],reply:[0,2,1,""],version:[0,2,1,""]},"caproto.SearchResponse":{cid:[0,2,1,""],ip:[0,2,1,""],port:[0,2,1,""],version:[0,2,1,""]},"caproto.ServerChannel":{clear:[0,3,1,""],create:[0,3,1,""],create_fail:[0,3,1,""],disconnect:[0,3,1,""],read:[0,3,1,""],subscribe:[0,3,1,""],unsubscribe:[0,3,1,""],version:[0,3,1,""],write:[0,3,1,""]},"caproto.ServerDisconnResponse":{cid:[0,2,1,""]},"caproto.VersionRequest":{priority:[0,2,1,""],version:[0,2,1,""]},"caproto.VersionResponse":{version:[0,2,1,""]},"caproto.VirtualCircuit":{disconnect:[0,3,1,""],host:[0,2,1,""],key:[0,2,1,""],log:[0,2,1,""],new_channel_id:[0,3,1,""],new_ioid:[0,3,1,""],new_subscriptionid:[0,3,1,""],next_command:[0,3,1,""],our_role:[0,2,1,""],port:[0,2,1,""],recv:[0,3,1,""],send:[0,3,1,""]},"caproto.WriteNotifyRequest":{data:[0,2,1,""],data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],metadata:[0,2,1,""],sid:[0,2,1,""]},"caproto.WriteNotifyResponse":{data_count:[0,2,1,""],data_type:[0,2,1,""],ioid:[0,2,1,""],sid:[0,2,1,""],status:[0,2,1,""]},caproto:{AWAIT_CREATE_CHAN_RESPONSE:[0,0,1,""],AWAIT_SEARCH_RESPONSE:[0,0,1,""],AWAIT_VERSION_RESPONSE:[0,0,1,""],AccessRightsResponse:[0,1,1,""],Broadcaster:[0,1,1,""],CLIENT:[0,0,1,""],CLOSED:[0,0,1,""],CONNECTED:[0,0,1,""],ClearChannelRequest:[0,1,1,""],ClearChannelResponse:[0,1,1,""],ClientChannel:[0,1,1,""],ClientNameRequest:[0,1,1,""],CreateChFailResponse:[0,1,1,""],DISCONNECTED:[0,0,1,""],EchoRequest:[0,1,1,""],EchoResponse:[0,1,1,""],ErrorResponse:[0,1,1,""],EventAddRequest:[0,1,1,""],EventAddResponse:[0,1,1,""],EventCancelRequest:[0,1,1,""],EventCancelResponse:[0,1,1,""],EventsOffRequest:[0,1,1,""],EventsOnRequest:[0,1,1,""],FAILED:[0,0,1,""],HostNameRequest:[0,1,1,""],IDLE:[0,0,1,""],LocalProtocolError:[0,1,1,""],MUST_CLOSE:[0,0,1,""],NEED_DATA:[0,0,1,""],NotFoundResponse:[0,1,1,""],REQUEST:[0,0,1,""],RESPONSE:[0,0,1,""],ReadNotifyRequest:[0,1,1,""],ReadNotifyResponse:[0,1,1,""],ReadRequest:[0,1,1,""],ReadResponse:[0,1,1,""],ReadSyncRequest:[0,1,1,""],RemoteProtocolError:[0,1,1,""],RepeaterConfirmResponse:[0,1,1,""],RepeaterRegisterRequest:[0,1,1,""],RsrvIsUpResponse:[0,1,1,""],SEND_CREATE_CHAN_REQUEST:[0,0,1,""],SEND_CREATE_CHAN_RESPONSE:[0,0,1,""],SEND_SEARCH_REQUEST:[0,0,1,""],SEND_SEARCH_RESPONSE:[0,0,1,""],SEND_VERSION_REQUEST:[0,0,1,""],SEND_VERSION_RESPONSE:[0,0,1,""],SERVER:[0,0,1,""],SearchRequest:[0,1,1,""],SearchResponse:[0,1,1,""],ServerChannel:[0,1,1,""],ServerDisconnResponse:[0,1,1,""],VersionRequest:[0,1,1,""],VersionResponse:[0,1,1,""],VirtualCircuit:[0,1,1,""],WriteNotifyRequest:[0,1,1,""],WriteNotifyResponse:[0,1,1,""],WriteRequest:[0,1,1,""]}},objnames:{"0":["py","data","Python data"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"]},objtypes:{"0":"py:data","1":"py:class","2":"py:attribute","3":"py:method"},terms:{"31ida":[1,2],"abstract":1,"break":1,"byte":[0,1,4],"case":[1,4],"class":0,"default":0,"enum":3,"final":1,"float":1,"function":[1,2],"import":[0,1,2,3,4,7],"int":3,"new":[0,1,2,3,4],"return":[0,1],"true":[0,1,2],"try":[1,2],"while":[0,1],And:[0,4],But:[1,4],For:[0,4],IDs:1,Its:[1,4],Not:1,PVs:2,That:4,The:[1,2,3,4,7],There:[1,4],These:[0,1,5],Use:[0,4],Using:1,With:0,__init__:0,__repr__:0,_default_context:7,abid:1,about:[0,5],abov:[1,4],acceler:4,accept:0,access:[0,2,3,5,7],access_respons:1,access_right:[0,1],accessrightsrespons:[0,1],actual:[0,1],add:0,addit:1,address:[0,1,3],address_str:0,adher:1,advantag:4,af_inet:1,affect:1,affirm:0,after:0,again:1,aim:4,all:[0,1,2,4],alloc:0,alreadi:[2,4,7],also:[0,1],alwai:[0,1],andrew:5,ani:[0,1,4],announc:[0,1],anoth:[0,1],answer:[0,1],anyth:1,api:[1,4],append:[1,2],aren:1,argument:0,around:4,arrai:[0,1,4],arriv:1,asid:1,ask:1,assert:2,assign:0,associ:3,async:[2,3],asynchron:[1,4],attribut:0,authent:1,author:4,auto:1,automat:0,avail:1,await:[2,3],await_create_chan_respons:0,await_search_respons:0,await_version_respons:0,back:4,background:[2,7],base:[2,4,5],basic:[0,4],battl:4,beacon:0,beacon_id:0,beazlei:5,becaus:1,becom:1,been:[0,1,4],befor:[0,1,2,7],begin:[1,2,3],being:0,benchmark:4,better:[1,4],between:[0,1,4],beyond:4,bigendianstructur:0,binari:5,blog:5,bookkeep:1,bookkeepinig:4,borrow:0,both:[0,1],branch:5,bring:4,broad:4,broadcast:[1,4],bsd:[1,4],buffer:0,buffers_to_send:[0,1],bug:4,build:4,built:[0,1,4],bundl:1,bytes_receiv:1,bytes_to_send:[0,1],byteslik:0,cach:1,caget:[4,7],call:[0,1,2,3,4],caller:4,camonitor:4,can:[0,1,2,4],canon:1,caproto:[0,1,2,3,7],caprotoerror:0,caprotokeyerror:0,caput:[4,7],care:1,chan1:2,chan2:2,chan:1,chang:[0,1],channel:[2,3,5,7],channnel:0,check:0,chnage:0,choic:4,choos:1,cid:[0,1],circuit:[0,1,4],circuitst:0,claus:4,clean:1,clear:[0,1,2],clearchannelrequest:[0,1],clearchannelrespons:[0,1],clever:4,cli:[2,7],click:0,client:[0,4],client_address:0,client_nam:[0,1],clientchannel:[0,1],clientnamerequest:[0,1],clog:1,close:0,code:[0,1,4,5],codebas:4,collect:[1,2],com:0,come:1,command:[1,2,4],commun:[0,1,4],compani:4,companion:0,compar:0,complet:[0,1,4],compos:1,concept:[1,4,5],concurr:4,condens:1,configur:1,confirm:0,congest:0,connect:[0,1,2],constant:[1,4],constitut:1,context:[2,3,7],control:[0,4],conveni:[0,1],convention:1,convert:[0,1],copi:[1,4],core:4,correctli:4,correspond:0,could:1,count:[0,1],cours:4,cover:4,creat:[0,2,3],create_chan_respons:1,create_channel:2,create_connect:1,create_fail:0,createchanrequest:[0,1],createchanrespons:[0,1],createchfailrespons:0,creation:0,crucial:4,ctx:[2,3],ctype:0,curio:[2,3],current:[0,1],darwin:1,data:[1,2,4],data_count:[0,1],data_typ:[0,1],databaserecorddoubl:3,databaserecordenum:3,databaserecordinteg:3,datagram:[0,1],david:5,davidsav:[1,5],dbr:0,dbr_type:0,debug:4,def:[1,2],default_protocol_vers:0,defens:4,defin:3,demonstr:1,depend:4,dependeni:[2,3],deprec:0,depth:5,describ:0,design:[0,1,4],desir:0,detail:[0,1],determin:1,develop:[4,5],devic:4,dictionari:3,differ:1,direct:0,directli:[0,1,4],disconnect:0,distribut:4,document:[4,5],doe:[0,1],doesn:1,doing:0,don:1,done:1,doodl:3,drive:4,each:[0,1,4],easi:[1,4],easier:1,echo:0,echorequest:0,echorespons:0,effect:1,effort:4,either:1,element:[0,1],enabl:4,encapsul:[0,1,3],encapul:0,encod:[0,1,4],end:[0,1],enough:1,ensur:1,environ:1,epic:[0,1,2,4,5,7],epics_ca_addr_list:1,equival:1,era:4,error:[0,4],error_messag:0,errorrespons:0,especi:1,etc:1,evan:5,event:0,eventaddrequest:[0,1],eventaddrespons:[0,1],eventcancelrequest:[0,1],eventcancelrespons:[0,1],eventsoffrequest:0,eventsonrequest:0,everi:[0,1],exactli:[0,1],exampl:[0,1,2,3,4],except:4,exist:1,expand:0,expect:1,experi:1,experiment:4,extra:4,facilit:1,fact:4,fail:0,failur:0,fairli:4,famili:4,familiar:7,fast:4,faster:4,field:[0,1],fill:1,find_next_tcp_port:3,first:[0,1],flavor:1,follow:1,formula:5,found:1,framework:[2,3],fresh:0,from:[0,1,2,3,4,7],fulli:0,fun:4,fund:4,gener:[0,1,4],get:[0,4,7],gethostbynam:0,gethostnam:0,getpass:0,getus:0,give:[0,1,4],given:[0,1,3],going:1,greater:4,grow:4,h11:[0,4,5],hand:4,handl:[1,4,5],happen:1,hard:0,has:[0,1,2,4],have:[0,1],header:0,heartbeat:[0,1],help:1,here:[1,2,3],hex:1,high:[0,1],higher:1,highest:0,homebrew:5,host:[0,1],host_nam:[0,1],hostnamerequest:[0,1],how:1,human:4,hurrai:1,identif:0,identifi:0,idl:0,ignor:1,illeg:[0,1],implement:[0,1,2,3,4,7],incident:1,includ:[0,1,4],incom:[1,4],increment:0,independ:1,indic:0,indispens:4,individu:[0,1],industri:4,inherit:0,initi:[0,1,4],inspir:4,instal:[2,3,4],instanc:0,instanti:0,instead:[0,4],integ:[0,1],integr:4,interact:[0,1],interest:1,interfac:[4,7],intern:[0,1],interpret:1,introduc:4,introduct:4,introspect:4,ioc:4,ioid:[0,1],ipproto_udp:1,iter:1,its:[0,1,4],itself:[1,4],job:1,johnson:5,juggl:1,just:[0,1],kah:4,keep:[0,4],kei:0,ken:5,kenneth:5,keyerror:0,laboratori:4,larg:4,lauer:5,layout:[1,4],least:1,length:0,let:[0,1],level:[0,1],libca:[1,4],librari:1,licens:4,like:[0,1,4],limit:1,line:4,link:4,list:[0,4],load:0,localhost:1,localprotocolerror:[0,1],locat:1,log:[0,4],logger:0,look:[0,1],lost:0,low:[0,1],lower_alarm_limit:3,lower_ctrl_limit:3,lower_disp_limit:3,lower_warning_limit:3,lowest:[0,1],lyric:1,machin:[1,4],mai:[0,1,2,3,4,7],main:2,maintain:0,make:[1,2,3,4],manag:[0,4],mani:[0,1,4],manual:1,map:3,mask:[0,1],match:[0,1],matrix:1,mean:[0,1,4],meet:4,messag:[0,1,4],messagehead:0,metadata:[0,1,3],method:[0,1],michael:5,might:[0,1],mirror:4,mit:4,model:[0,4],modul:4,monitor:4,more:[0,1,4],moreov:4,motor:[1,4],motorsim:[1,2,4,5],move:1,mtr:[1,2],much:1,multipl:1,must:1,must_clos:0,mutat:1,name:[0,1,3],nativ:[0,1],native_data_count:0,native_data_typ:0,ndarrai:0,need:[0,1,2,3],need_data:[0,1],neg:0,neo:1,network:[1,4,5],new_channel_id:0,new_ioid:0,new_search_id:0,new_subscriptionid:0,next:[0,1,4],next_command:[0,1],no_repli:0,none:[0,1],note:4,notfoundrespons:0,notic:[0,1],notif:0,notifc:0,notifi:0,now:1,number:0,numpi:[0,1,4],obei:1,obj:0,object:[1,2,3,4],obtain:0,obviou:0,off:[0,4],old:1,onc:1,one:[0,1,2,4,7],ones:1,onli:[0,1],opaqu:0,open:[0,1],oper:1,optimizi:4,option:[0,1,3,4,5],order:0,origin:0,original_request:0,osx:5,other:1,our:[0,1,2],our_rol:[0,1],out:[0,1,2],outgo:[1,4],output:0,over:[0,1,4],overflow:5,overload:1,owes:4,own:4,packet:0,pad:0,paramet:[0,1],parameter1:0,parameter2:0,parlanc:1,pars:[0,1,4,5],part:0,particl:4,particular:1,pass:[0,1,3,4],patch:4,pattern:[1,4],payload:4,payload_s:0,peer:[0,1],per:0,permiss:1,physic:4,pip:[2,3],plai:[0,1,4],plugin:5,polic:1,port:[0,1],possess:1,post:5,potenti:4,precis:3,previou:1,primari:4,principl:4,print:2,priorit:0,prioriti:[0,1],probabl:4,process:[0,1,2,4,7],program:[2,3,4],project:[0,4,5],pronounc:4,properli:1,protcol:5,proto:4,protocol:[0,1],protocol_vers:0,protocolerror:0,provid:[0,1,2,4,7],publish:4,pure:1,purpos:4,put:7,pv1:2,pv2:2,pvdb:3,pvname:7,pyepic:[4,5],python:[0,1,2,3,5],queri:0,rais:[0,1],rang:1,rather:0,rational:4,raw:1,read:[0,2,4],readabl:1,readnotifyrequest:[0,1],readnotifyrespons:[0,1],readrequest:0,readrespons:0,readsyncrequest:0,reagan:4,realli:1,reapeat:7,rebroadcast:1,recal:1,receipt:0,receiv:[0,1,2],reciev:0,record:1,recv:[0,1],recvfrom:1,reduc:4,refer:[0,4],regist:[0,2,7],register_user_callback:2,registr:0,relat:4,releas:4,remot:0,remoteprotocolerror:[0,1],repeat:[0,2,7],repeater_address:[0,1],repeaterconfirmrespons:[0,1],repeaterregisterrequest:[0,1],repli:0,report:[0,1],repres:0,req:1,request:[0,1,2],requir:[0,1,2,3,4],resourc:[4,5],respect:0,respond:[0,4],respons:[0,1,2],restor:0,result:2,reus:1,reusabl:4,right:[0,1,4],role:[0,1],root:4,rsrvisuprespons:0,rule:1,run:[2,3,7],sai:[1,4],same:[0,1],san:[1,4,5],scrape:4,search:[0,2],searchrequest:[0,1],searchrespons:[0,1],section:1,secur:1,see:[0,1,4],seen:0,send:[0,1,2],send_create_chan_request:0,send_create_chan_respons:0,send_search_request:0,send_search_respons:0,send_version_request:0,send_version_respons:0,sendmsg:1,sendto:1,sent:[0,1],sentinel:0,separ:[2,3,4],sequenti:0,serv:[0,1,4],server:[0,1,4],server_port:0,serverchannel:0,serverdisconnrespons:0,set:[1,2],setsockopt:1,setup:7,sever:[0,1],should:[0,1,2,7],sid:[0,1],side:0,simpl:[1,4],simpli:1,simplifi:4,simul:[1,4],singl:[0,1],singleton:0,slide:5,so_broadcast:1,so_reuseaddr:1,so_reuseport:1,sock:1,sock_dgram:1,socket:[0,1,4,5],sol_socket:1,some:[0,1,2,4],someth:0,sort:0,sourc:[0,5],speak:4,spec:[0,5],special:[1,4],specif:[0,1],specifi:[0,1,4],spell:1,sprawl:1,stack:5,stage:4,standard:4,star:4,start:[0,2,3,7],stash:1,state:[1,4],statu:[0,1],status_cod:[0,1],step:1,still:1,store:0,stori:1,str:3,strateg:4,string:[0,1],struct:[1,4],structur:0,submit:4,subscrib:[0,2],subscript:[0,1,2],subscriptionid:[0,1],success:[0,1],succinct:1,succinctli:1,support:[1,4],synchron:1,synchrotron:4,syntax:[2,3],system:[1,4],take:[0,4],talent:1,talk:[1,4,5],task:3,tbl:[1,2],tcp:[0,1],tech:5,telescop:4,tell:0,templat:4,temporarili:0,term:[0,1],test:[0,2,4],than:4,thei:0,them:[0,1],themselv:0,thi:[0,1,3,5],thing:1,think:[0,1],those:1,thread:4,through:0,time:[1,4],timestamp:1,togeth:0,too:1,toolkit:4,top:4,track:[0,1,4],trade:4,traffic:[1,5],transact:0,transcript:4,translat:1,transmit:[0,1],transport:[1,4],tri:0,trick:[0,4],trigger:0,tune:[4,5],tupl:[0,1],turn:0,two:[0,1,2],type:[1,4],typic:1,udp:[0,1],udp_sock:1,uncov:4,under:[0,4],understand:4,uniqu:[0,1],unit:[3,4],unless:1,unlimit:0,unsubscrib:[0,1,2],until:1,unus:0,updat:0,upper_alarm_limit:3,upper_ctrl_limit:3,upper_disp_limit:3,upper_warning_limit:3,upstream:4,use:[0,1,2,3,7],used:[0,1,2,4],useful:[0,4,5],user:[0,1,2,7],user_callback:2,uses:0,using:[0,1,2,3,7],val:[1,2],valid:[0,1,4],valu:[0,3],variabl:1,variou:[0,1,4],veri:4,verifi:[1,2],version:[0,1],versionrequest:[0,1],versionrespons:[0,1],via:1,view:0,virtual:[0,1,4],virtualcircuit:[1,4],virtualciruit:0,wai:[0,1,4],wait:2,wait_for_connect:[2,7],want:1,war:4,watch:1,waveform:[1,4],were:[4,5],what:[0,1],when:[0,1,2],whether:0,which:[0,1,2,4],why:1,wire:1,wireshark:5,without:2,word:1,work:[0,1],world:4,would:4,wrap:4,write:[0,2,4],writenotifyrequest:[0,1],writenotifyrespons:[0,1],writerequest:0,x00:1,x01:1,x11:1,x18:1,x7f:1,yet:[0,1],you:[0,1,2,3,7],young:4,your:[0,4]},titles:["API Documentation","Writing Your Own Channel Access Client","Asynchronous Client","Asynchronous Server","caproto: a pure-Python Channel Access protocol library","References","Release Notes","Thread-based Client Mirroring pyepics API"],titleterms:{The:0,access:[1,4],acknowledg:4,api:[0,7],asynchron:[2,3],base:7,basic:1,bookkeepinig:1,broadcast:0,caproto:4,channel:[0,1,4],client:[1,2,7],close:1,command:0,constant:0,content:[0,4],creat:1,data:0,document:0,event:1,except:0,how:4,know:4,librari:4,machin:0,mirror:7,note:6,object:0,own:1,payload:0,perform:4,protocol:4,pure:4,pyepic:7,python:4,read:1,refer:5,regist:1,releas:6,repeat:1,search:1,server:3,should:4,simplifi:1,special:0,state:0,statist:4,subscrib:1,thi:4,thread:7,type:0,updat:1,use:4,valu:1,virtualcircuit:0,vital:4,why:4,work:4,write:1,you:4,your:1}})