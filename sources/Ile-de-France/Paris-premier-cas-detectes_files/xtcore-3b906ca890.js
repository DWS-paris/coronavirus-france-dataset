window.Xtconf={xt1:".francetvinfo.fr",xtLogDom:".xiti.com/hit.xiti",xtfirst:!1,xt2:"1",xt3:365,xt4sec:"20",xt4rss:"20",xt4epr:"20",xt4erec:"20",xt4adi:"20",xt4adc:"20",xt4al:"20",xtsds:"https://logs1238",xtsd:"http://logc238",xtsts:0,xtsite:function(t){return t+xt8},xtscript:"",xtpreview:!1,xtnocookies:!1,xtcode:"",xt46:"1",xt50:"1",xt48:"",xt54:!1,xt58:!1,xtdocl:!1,xttredir:500,xtkwv:"xtmc",xtkwp:"xtnp"},window.Xtcore=function(){function t(t){return void 0!==t}function e(t){var n=typeof t;if("object"!==n||null===t)return"string"===n&&(t=encodeURIComponent('"'+t+'"')),String(t);var i,r,o=[],a=t&&t.constructor==Array;for(i in t)n=typeof(r=t[i]),t.hasOwnProperty(i)&&"function"!==n&&("string"===n?r=encodeURIComponent('"'+r.replace(/[^\\]"/g,'\\"')+'"'):"object"===n&&null!==r&&(r=e(r)),o.push((a?"":encodeURIComponent('"'+i+'":'))+String(r)));return(a?"[":"{")+String(o)+(a?"]":"}")}function n(t){return t.replace(/%3C/g,"<").replace(/%3E/g,">").replace(/[<>]/g,"")}function i(t,e,n,i,r){e=0===r?e:encodeURIComponent(e),p||(I.cookie=t+"="+e+";expires="+n.toGMTString()+";path=/"+i)}function r(e,i,r){var o;try{o=N.location.href}catch(t){o=L.location.href}if(0<(i=null!==i&&t(i)?i:n(o.toLowerCase().replace(/%3d/g,"="))).indexOf(e+"=")){if(e=(i=i.substr(1)).substr(i.indexOf(e+"=")),2!=r){if(1!=r)try{e=decodeURIComponent(e)}catch(t){e=unescape(e)}if(i=e.match(/(\[[^\]]*\])/g)){o="";for(var a=0,c=i.length;a<c;a++)o=i[a].substring(1,i[a].length-1),e=e.replace(o,encodeURIComponent(o))}}return i=e.indexOf("#"),o=-1==(o=e.search(/&.[^&]+=/gi))?-1==i?e.length:i:0<i&&i<o?i:o,1==r?decodeURIComponent(e.substring(e.indexOf("=")+1,o)):2==r?e.substring(e.indexOf("=")+1,o):e.substring(e.indexOf("=")+1,o).replace("&","%26")}return null}function o(e,n,i,o){0!==Q&&3!=Q&&"C"==e||"P"==e||(P&&"0"==h&&"F"==e?(Pe=(Pe=Pe.replace("&p="+r("p",Pe,2),"")).replace("&s2="+r("s2",Pe),""),AT_hit.isPreviewOrPrerendering()||AT_hit.sendTag(e,null,null,n),P=!1):AT_hit.sendTag(e,n)),null!==i&&t(i)&&"M"!=e&&(""===o||null===o?I.location=i:window.open(i,"xfen","").focus())}function a(t){return 10>(t-=100*Math.floor(t/100))?"0"+t:t}function c(t){return Math.floor(Math.random()*Math.pow(10,t))}var l=this;l.sentHits=[];var d=Xtconf.xt1,s=Xtconf.xtscript,x=window.xtLogDom=Xtconf.xtLogDom,u=Xtconf.xtpreview,f=Xtconf.xtfirst,p=Xtconf.xtnocookies,g=Xtconf.xtcode,h=Xtconf.xt46,m=Xtconf.xt50,w=Xtconf.xt48,v=Xtconf.xt54,T=Xtconf.xt58,_=Xtconf.xtdocl,b=Xtconf.xt2,y=Xtconf.xt3;window.xttredir=Xtconf.xttredir;var A=Xtconf.xtkwv,O=Xtconf.xtkwp,k=[],X=[];X.sec=Xtconf.xt4sec,X.rss=Xtconf.xt4rss,X.epr=Xtconf.xt4epr,X.erec=Xtconf.xt4erec,X.adi=Xtconf.xt4adi,X.adc=Xtconf.xt4adc,X.al=Xtconf.xt4al,X.es=Xtconf.xt4epr,X.ad=Xtconf.xt4adi;var D=[],P=!0,E=!1,C=null,L=window.xw=window,I=window.xd=document,M=navigator,F=window.xtv=L.xtczv?"4.5.8-"+L.xtczv:"4.5.8",N=(d=window.xt1=L.xtdmc?";domain="+L.xtdmc:""!==d?";domain="+d:"",L.xtnv?L.xtnv:I),R=window.xt7=L.xtsdi?L.xtsdi:L.xtsd?L.xtsd+x:("https:"===I.location.protocol?Xtconf.xtsds:Xtconf.xtsd)+x,U=L.xtsts?L.xtsts:Xtconf.xtsts,$="";if(v){var j="";try{j=N.location.href}catch(t){j=L.location.href}var H=null;try{H=j.match(/#.*/)[0]}catch(t){H=null}$=($=H)?"&sta="+encodeURIComponent(n($)):""}var S=L.xtcustom?e(L.xtcustom):"",B=window.xt8=L.xtsite?L.xtsite:0,Z=window.xt9=L.xtn2?"&s2="+L.xtn2:"",z=window.xt8b=(0===B?"":"s="+B)+(0===U?"":0===B?"sts="+U:"&sts="+U),V=window.xtp=L.xtpage?L.xtpage:"",q=L.xto_force?L.xto_force.toLowerCase():null,W="redirect"===B,G=L.xtdi?"&di="+L.xtdi:"",Y=L.xtidp?"&idpays="+L.xtidp:"",J=L.xtidprov?"&idprov="+L.xtidprov:"",K=L.xtparam?L.xtparam:"",Q=(h=L.xtnopage&&"1"===L.xtnopage?"0":h,m=L.xtergo&&"0"===L.xtergo?"0":m,L.scriptOnClickZone&&"1"===m?L.scriptOnClickZone:0),tt=""!==g?"&code="+g:"",et=[],nt=[],it=[],rt=[],ot=[],at=[];window.xt44=L.xtprod_load?"&pdtl="+L.xtprod_load:"",L.addEventListener?L.addEventListener("unload",function(){},!1):L.attachEvent&&L.attachEvent("onunload",function(){}),I.addEventListener?(I.addEventListener("keydown",function(){E=!0},!1),I.addEventListener("keyup",function(){E=!1},!1)):I.attachEvent&&(I.attachEvent("onkeydown",function(){E=!0}),I.attachEvent("onkeyup",function(){E=!1}));var ct=L.roimt&&0>K.indexOf("&roimt",0)?"&roimt="+L.roimt:"",lt=0>K.indexOf("&mc=",0)?L.xtmc?"&mc="+L.xtmc:r(A)?"&mc="+r(A):r("xtmc")?"&mc="+r("xtmc"):"":"",dt=r("xtcr")?"&mcrg="+r("xtcr"):"",st=L.xtac&&0>K.indexOf("&ac=",0)?"&ac="+L.xtac:"",xt=L.xtat&&0>K.indexOf("&at=",0)?"&at="+L.xtat:"",ut=L.xtan&&0>K.indexOf("&an=",0)?"&an="+L.xtan:"",ft=0>K.indexOf("&np=",0)?L.xtnp?"&np="+L.xtnp:r(O)?"&np="+r(O):r("xtnp")?"&np="+r("xtnp"):"":"",pt=L.xtprm&&0>K.indexOf("&x",0)?L.xtprm:"",gt=(K=K+(ct+lt+dt+st+(""!==ut?ut:xt)+ft+pt+$),"");try{gt=top.document.referrer}catch(t){try{gt=N.referrer}catch(t){}}var ht=screen,mt=window.xt21=new Date,wt=mt.getTime()/36e5,vt=window.xtf1=function(e,i){if(p)return null;i=null!==i&&t(i)?i:"0";var r=RegExp("(?:^| )"+e+"=([^;]+)").exec(I.cookie)||null;if(r&&(r=n(r[1]),"1"!=i))try{r=decodeURIComponent(r)}catch(t){r=unescape(r)}return r};if(window.xt_addchain=function(t,e){var n=e||"abmv",i=k[n]?k[n]:0;K+="&"+n+ ++i+"="+t,k[n]=i},"function"==typeof xt_adch&&xt_adch(),window.wck=i,window.xtf3=r,window.xt_mvt=function(t,e,n,i,r){if(i)for(var a=1;a<i.length+1;a++)n+="&"+(r||"abmv")+a+"="+i[a-1];o("","&p="+t+"&s2="+e+"&abmvc="+n+"&type=mvt")},window.xt_med=function(n,i,r,a,c,l,d,s){o(n,"&s2="+i+"&p="+r+(a="F"!=n||null!==a&&t(a)?"M"==n?"&a="+a+"&m1="+c+"&m2="+l+"&m3="+d+"&m4="+s:"&clic="+a+(d?"&stc="+e(d):""):""),c,l)},f=window.xtfirst=-1!=M.userAgent.indexOf("Safari")&&0>M.userAgent.indexOf("Chrome")||-1!=M.userAgent.indexOf("iPhone")||-1!=M.userAgent.indexOf("iPod")||-1!=M.userAgent.indexOf("iPad")||f||L.xtidc||p){var Tt;null===(yt=L.xtidc?L.xtidc:vt("xtidc"))&&(yt=Math.floor(999999*Math.random()),100>(Tt=mt.getYear())&&(Tt+=2e3),100<Tt&&2e3>Tt&&(Tt+=1900),yt=a(Tt)+""+a(mt.getMonth())+a(mt.getDate())+a(mt.getHours())+a(mt.getMinutes())+a(mt.getSeconds())+yt);var _t=new Date;_t.setTime(_t.getTime()+31536e7),i("xtidc",yt,_t,d,1);var bt=vt("xtidc"),yt=yt+(L.xtidc||null!==bt&&bt==yt?"":"-NO")}window.xt_ad=function(t,n,i,r){o("AT","&atc="+t+"&type=AT&patc="+V+"&s2atc="+L.xtn2+(r?"&stc="+e(r):""),n,i)},window.xt_adi=function(t,e,n){o("AT","&ati="+t+"&type=AT",e,n)},window.xt_adc=function(t,n,i,r,a){return o("AT","&atc="+n+"&type=AT&patc="+V+"&s2atc="+L.xtn2+(a?"&stc="+e(a):"")),AT_click.do_navig(t,i,r?"_blank":null,!0)},window.xt_click=function(n,i,r,a,c,l,d,s){return o(i,"&s2="+r+"&p="+a+(c="F"!=i||null!==c&&t(c)?"&clic="+c+(s?"&stc="+e(s):""):"")),AT_click.do_navig(n,l,d?"_blank":null,!0)},window.xt_form=function(n,i,r,a,c,l,d){return o(i,"&s2="+r+"&p="+a+(c="F"!=i||null!==c&&t(c)?"&clic="+c+(d?"&stc="+e(d):""):"")),AT_click.do_submit(n,!0,l)},window.xt_rm=function(t,e,n,i,r,a,l,d,s,x,u,f,p,g){o(t,r="&p="+n+"&s2="+e+"&type="+t+"&a="+i+"&m5="+u+"&m6="+f+(null!==r&&"0"!=r?"&"+r:"")+(null!==l&&"pause"!=i&&"stop"!=i?"&m1="+l+"&"+d+"&m3="+s+"&m4="+x+"&m7="+p+"&m8="+g+"&prich="+V+"&s2rich="+L.xtn2:"")+(null!==a&&"0"!=a&&null!==l?"&rfsh="+a:"")+"&rn="+c(10)),r=new Date,null===a||"0"==a||"play"!=i&&"play&buf=1"!=i&&"refresh"!=i?"pause"!=i&&"stop"!=i||null===D||(L.clearTimeout(D[t]),"stop"==i?et[t]=0:at[t]=r.getTime()):(at[t]&&18e5<r.getTime()-at[t]&&(it[t]=0),"play"!=i&&"play&buf=1"!=i||it[t]?"refresh"==i&&("live"==f||!rt[t]||300<rt[t]&&2>100*et[t]/rt[t])&&(i=at[t]?ot[t]:r.getTime()/1e3-it[t],5>100*nt[t]/(i+30)&&(nt[t]=(i+30)/100*5),at[t]&&(at[t]=!1,it[t]=r.getTime()/1e3-ot[t]),ot[t]=i):(it[t]=r.getTime()/1e3,rt[t]=parseInt(l),i=1500<(i=Math.floor(a))?1500:5>i?5:i,et[t]=i,nt[t]=i,at[t]=!1),D[t]=L.setTimeout("xt_rm('"+t+"','"+e+"','"+n+"','refresh','0','"+a+"',null,'"+d+"','"+s+"','"+x+"','"+u+"','"+f+"')",1e3*nt[t]))};var At=window.xtidpg=a(mt.getHours())+""+a(mt.getMinutes())+a(mt.getSeconds())+c(7),Ot=0,kt=0;if(window.xt16="",window.xt_addProduct=function(t,e,n,i,r,o){Ot++,L.xt16+="&pdt"+Ot+"=",L.xt16+=t?t+"::":"",L.xt16+=e||"",L.xt16+=n?"&qte"+Ot+"="+n:"",L.xt16+=i?"&mt"+Ot+"="+i:"",L.xt16+=r?"&dsc"+Ot+"="+r:"",L.xt16+=o?"&pcode"+Ot+"="+o:""},window.xt_rd=c,window.xt_addProduct_v2=function(t,e,n,i,r,o,a,c,l){Ot++,L.xt16+="&pdt"+Ot+"=",L.xt16+=t?t+"::":"",L.xt16+=e||"",L.xt16+=n?"&qte"+Ot+"="+n:"",L.xt16+=i?"&mt"+Ot+"="+i:"",L.xt16+=r?"&mtht"+Ot+"="+r:"",L.xt16+=o?"&dsc"+Ot+"="+o:"",L.xt16+=a?"&dscht"+Ot+"="+a:"",L.xt16+=l?"&roimt"+Ot+"="+l:"",L.xt16+=c?"&pcode"+Ot+"="+c:""},window.xt_addProduct_load=function(t,e,n){e&&(kt++,L.xt44+=1==kt?"&pdtl=":"|",L.xt44+=t?t+"::":"",L.xt44+=e,L.xt44+=n?";"+n:"")},"function"==typeof xt_cart?xt_cart():L.xt16="",window.xt_ParseUrl=function(t,e,n){AT_hit.sendTag(n?"F":"old",e)},window.xt_ParseUrl3=function(t,e,n,i,r){AT_hit.sendTag("&ati="==r?"AT":"PDT",e,null,"&type="+("&ati="==r?"AT":"PDT"))},window.AT_click={id:0,objs:[],elem:function(n,i,r,o,a,c,l,d){var s={};return s.urlDest=a,s.type=n,s.n2=i,s.label=r,s.typeClick=o,s.target=c,s.submit=!1!==a,s.redir=!t(l)||l,s.xtcust=t(d)?"&stc="+e(d):"",s},addListener:function(t,e,n){window.addEventListener?t.addEventListener(e,n,!1):window.attachEvent&&t.attachEvent("on"+e,n)},tag:function(t,e,n,i,r,o,a,c,l){if(t&&"function"==typeof t.setAttribute)this.addElem(t,e,n,i,r,o,a,c,l);else if("object"==typeof t)for(var d in t)t.hasOwnProperty(d)&&"function"==typeof t[d].setAttribute&&this.addElem(t[d],e,n,i,r,o,a,c,l)},addElem:function(t,e,n,i,r,o,a,c,l){this.id++,t.setAttribute("data-xtclickid",this.id),this.objs[this.id]=this.elem(e,n,i,r,o,a,c,l),"FORM"!=t.nodeName?this.addListener(t,"click",this.on_click_submit):this.addListener(t,"submit",this.on_click_submit)},on_click_submit:function(t){try{var e=t.target||t.srcElement,n=e.getAttribute("data-xtclickid"),i={},r="",a=t.defaultPrevented,c=window.AT_click;if(!n)for(var l=e.parentNode;l;){if(l.getAttribute("data-xtclickid")){n=l.getAttribute("data-xtclickid");break}l=l.parentNode}n&&("AT"!=(i=c.objs[n]).type?r+="&p="+i.label+("C"==i.type?"&clic="+i.typeClick+i.xtcust:""):"AT"==i.type&&(r+="&type=AT&atc="+i.label+i.xtcust),o(i.type,"&s2="+i.n2+r),!a&&i.redir&&(t.preventDefault(),"FORM"!=e.nodeName?c.do_navig(e,i.urlDest,i.target):c.do_submit(e,null,i.submit)))}catch(t){}},do_navig:function(t,e,n,i){var r=null;if("A"!=t.nodeName)for(var o=t.parentNode;o;){if("A"==o.nodeName){r=o;break}o=o.parentNode}else r=t;if(r){if(r.target=n||t.target||"_self",r.href=e||t.href||r.href,!i||i&&!E)if(t=r.href.split('"').join('\\"'),0>r.href.indexOf("mailto:"))if("_self"==r.target.toLowerCase()){if(setTimeout('self.location.href="'+t+'"',L.xttredir),i)return!1}else if("_top"==r.target.toLowerCase()){if(setTimeout('top.location.href="'+t+'"',L.xttredir),i)return!1}else{if("_parent"!=r.target.toLowerCase())return!0;if(setTimeout('parent.location.href="'+t+'"',L.xttredir),i)return!1}else if(setTimeout('AT_click.mail_to("'+t+'");',L.xttredir),i)return!1}else if(e||t.href)if(0>(e=e||t.href).indexOf("mailto:")){if("_blank"==n)setTimeout('(xw.open("'+e.split('"').join('\\"')+'","_blank")).focus();',1);else if(setTimeout('self.location.href="'+e.split('"').join('\\"')+'"',L.xttredir),i)return!1}else if(setTimeout('AT_click.mail_to("'+e.split('"').join('\\"')+'");',L.xttredir),i)return!1;if(i)return E=!1,!0},do_submit:function(t,e,n){if(n&&(setTimeout(function(){t.submit()},500),e&&n))return!1},mail_to:function(t){window.location=t}},window.AT_hit={first:!0,referrer:("acc_dir"==r("xtref")?"":null!==r("xtref")?r("xtref"):"acc_dir"==vt("xtref")?"":vt("xtref")||gt.replace(/[<>]/g,"")||"").replace(/[<>]/g,"").substring(0,1600),parse:function(t,e,n,i){var o=[""];if(1600>=e.length)o[0]=e;else{t=AT_hit.first&&"F"==t?At:At.substring(0,6)+c(8);var a,l="",d="",s={};a=[];var x=0;if(0<=e.indexOf("&ref=")&&(l=e.substring(e.indexOf("&ref=")),e=e.replace(l,"")),i)for(var u in i)i.hasOwnProperty(u)&&0<=e.indexOf("&"+u+"=")&&1600<(d=r(u,e,2)).length&&(e=e.replace("&"+u+"="+d,""),a=RegExp("["+i[u]+"]","gi"),s[u]=d.replace(/&/g,"%26").split(a));for(var f in a=RegExp("["+n+"]","gi"),a=e.split(a))a.hasOwnProperty(f)&&(1600>=o[x].length+a[f].length+1?o[x]+=""!==a[f]?"&"+a[f]:"":(o.push(""),o[++x]=1600>a[f].length?o[x]+(""!==a[f]?"&"+a[f]:""):o[x]+"&mherr=1&"+a[f].substring(0,1600)));for(var p in s)if(s.hasOwnProperty(p))for(e="&"+p+"=",n=!1,u=s[p].length,f=0;f<u;f++)1600>=o[x].length+s[p][f].length+1?(n||(o[x]+=e,n=!0),o[x]+=""!==s[p][f]?s[p][f]+("stc"===p&&u-1===f?"":i[p]):""):(o.push(e),n=!0,o[++x]=1600>s[p][f].length?o[x]+(""!==s[p][f]?s[p][f]+("stc"===p&&u-1===f?"":i[p]):""):o[x]+"mherr=1"+i[p]);for(l&&(1600>=o[x].length+l.length||(o.push(""),x++),o[x]+=l),i=0;i<o.length;i++)o[i]="&mh="+(i+1)+"-"+o.length+"-"+t+o[i]}return o},sendTag:function(t,e,n,i){var r;for(n=n||Le+z,n+=L.xtfirst?"&idclient="+yt:"",t=t||"F",e=e||Pe,e+=(i||"")+"&vtag="+F+AT_hit.localHour()+AT_hit.resolution(),AT_hit.first&&"F"==t&&(e+=S?"&stc="+S:"",e+="&ref="+AT_hit.referrer.replace(/&/g,"$")),"C"===t&&(e+="&pclick="+V+"&s2click="+(L.xtn2?L.xtn2:"")),r=AT_hit.parse(t,e,"&",{ati:",",atc:",",pdtl:"|",stc:",",dz:"|"}),e=0;e<r.length;e++)AT_hit.loadImage(n+r[e]);AT_hit.first&&"F"==t&&""!==s&&AT_hit.loadFile("script",s,!0,"text/javascript"),"F"==t&&(AT_hit.first=!1)},loadImage:function(t){var e=new Image;e.src=t,l.sentHits instanceof Array&&l.sentHits.push(t),e.onload=function(){e.onload=null}},loadFile:function(t,e,n,i,r){(t=document.createElement(t)).type=i,t.async=n,t.src=e,(r||document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode).insertBefore(t,null)},localHour:function(t){return"&hl="+(t=t||new Date).getHours()+"x"+t.getMinutes()+"x"+t.getSeconds()},resolution:function(){if(4<=parseFloat(M.appVersion))try{var t;return t=void 0!==window.devicePixelRatio?window.devicePixelRatio:1,"&r="+ht.width*t+"x"+ht.height*t+"x"+ht.pixelDepth+"x"+ht.colorDepth}catch(t){}return""},prerenderDisplaying:function(){AT_hit.first&&(AT_hit.sendTag("F"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+V+(L.xt_pageID?"&pid="+L.xt_pageID+"&pchap="+(L.xt_chap||"")+"&pidt="+(L.xt_pageDate||""):"")))},isPreviewOrPrerendering:function(){return window.navigator&&"preview"===window.navigator.loadPurpose&&-1!=M.userAgent.indexOf("Safari")&&0>M.userAgent.indexOf("Chrome")?(u&&(AT_hit.sendTag("F",null,null,"&pvw=1"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+V+(L.xt_pageID?"&pid="+L.xt_pageID+"&pchap="+(L.xt_chap||"")+"&pidt="+(L.xt_pageDate||""):""))),!0):"prerender"==I.webkitVisibilityState&&(I.addEventListener("webkitvisibilitychange",AT_hit.prerenderDisplaying,!1),!0)}},0!==B||0!==U||W){var Xt="";if(""!==w){(Xt=vt("xtvid"))||(C=Xt=mt.getTime()+""+c(6));var Dt=new Date;Dt.setMinutes(Dt.getMinutes()+30),i("xtvid",Xt,Dt,"",1)}window.xtvid=Xt;var Pt,Et,Ct=Xtconf.xtsite("xtor"),Lt=Xtconf.xtsite("xtdate"),It=Xtconf.xtsite("xtocl"),Mt=Xtconf.xtsite("xtan"),Ft=Xtconf.xtsite("xtat"),Nt=Xtconf.xtsite("xtant"),Rt=r("xtor"),Ut=r("xtdt"),$t=r("xtan"),jt=r("xtat"),Ht=r("an",K),St=r("at",K),Bt=r("ac",K),Zt=vt(It),zt=vt("xtgo"),Vt=vt("xtord"),qt=vt("xtvrn"),Wt=null!==Zt?Zt:"$",Gt="0"===zt?Vt:null,Yt=null!==zt?zt:"0",Jt=null!==qt?qt:"$",Kt=mt.getTime()/6e4,Qt=null===Ut||r("xts")!=B&&!W?Yt:30>Kt-Ut&&0<=Kt-Ut?"2":"1",te="1"==Yt?"&pgt="+Vt:"1"==Qt&&null!==Rt?"&pgt="+Rt:"",ee=null!==q?q:null!==Rt&&"0"==Qt?Rt:W?null:Gt,ne=(ee=0>Wt.indexOf("$"+ee+"$")||"$"==Wt?ee:null,"0"==Qt?ee:"2"==Yt?Vt:"2"==Qt?Rt:null);null!==ne?Pt=X[Et=ne.substring(0,ne.indexOf("-"))]:Pt="1",null!==Pt&&t(Pt)||(Pt=X.ad),null===$t&&!W&&($t=vt("xtanrd")),null===jt&&!W&&(jt=vt("xtatrd"));var ie=vt(Mt),re=vt(Ft),oe=vt(Nt),ae=new Date,ce=window.xt29=new Date,le=new Date;W?ae.setTime(ae.getTime()+3e4):ae.setTime(ae.getTime()+864e5*Pt),le.setTime(le.getTime()+18e5),ce.setTime(ce.getTime()+864e5*y);var de=null!==$t?$t.indexOf("-"):0,se=null!==jt?jt.indexOf("-"):0,xe=null!==Ht?"":null!==$t&&0<de?"&ac="+$t.substring(0,de)+"&ant=0&an="+$t.substring(de+1,$t.length):null!==ie?"&anc="+ie+"&anct="+oe:"",ue=null!==St?"":null!==jt&&0<se?"&ac="+jt.substring(0,se)+"&ant=0&at="+jt.substring(se+1,jt.length):null!==re?"&attc="+re+"&anct="+oe:"",fe=0>Jt.indexOf("$"+B+"$")?"&vrn=1":"",pe=null!==r("xtatc")&&null===r("atc",K)?"&atc="+r("xtatc"):"";""!==fe&&i("xtvrn",141>Jt.length?Jt+B+"$":Jt.substring(0,141),ce,d,0),fe+=null===ee?"":"&xto="+ee,fe+=(""!==xe?xe:ue)+te+pe,null!==Ht?(i(Mt,Bt+"-"+Ht,ce,d,1),i(Nt,"1",ce,d,1)):null!==$t&&"1"!=oe&&(i(Mt,$t,ce,d,1),i(Nt,"0",ce,d,1)),null!==St?(i(Ft,Bt+"-"+St,ce,d,1),i(Nt,"1",ce,d,1)):null!==jt&&"1"!=oe&&(i(Ft,jt,ce,d,1),i(Nt,"0",ce,d,1));var ge=vt(Ct),he=vt(Lt),me=(he=(/[a-zA-Z]/.test(he)?new Date(he).getTime()/36e5:parseFloat(vt(Lt)))||(new Date).getTime()/36e5,0<=Math.floor(wt-he)?Math.floor(wt-he):0);fe=fe+(null===ge?"":"&xtor="+ge+"&roinbh="+me);if(W)i("xtgo",Qt,ae,d,1),null!==Rt&&i("xtord",Rt,ae,d,1),null!==$t&&i("xtanrd",$t,ae,d,1),null!==jt&&i("xtatrd",jt,ae,d,1),i("xtref",AT_hit.referrer?AT_hit.referrer.replace(/&/g,"$"):"acc_dir",ae,d,0),L.xtloc&&(N.location=L.xtloc);else{null!==ne&&(0>Wt.indexOf("$"+encodeURIComponent(ne)+"$")||"$"==Wt)&&i(It,Wt+ne+"$",le,d,1);var we,ve=M.appName+" "+M.appVersion,Te=ve.indexOf("MSIE");0<=Te?(we=parseInt(ve.substr(Te+5)),Te=!0):(we=parseFloat(M.appVersion),Te=!1);var _e=0<=ve.indexOf("Netscape"),be=0<=ve.indexOf("Mac"),ye=0<=M.userAgent.indexOf("Opera"),Ae="",Oe="",ke="",Xe="";if(Te&&5<=we&&!be&&!ye&&!W)try{I.body.addBehavior("#default#clientCaps"),Ae="&cn="+I.body.connectionType,Ae+="&ul="+I.body.UserLanguage,I.body.addBehavior("#default#homePage"),Oe=I.body.isHomePage(location.href)?"&hm=1":"&hm=0",Xe="&re="+I.body.offsetWidth+"x"+I.body.offsetHeight}catch(t){}else 5<=we&&(Xe="&re="+L.innerWidth+"x"+L.innerHeight);_e&&4<=we||ye?ke="&lng="+M.language:Te&&4<=we&&!ye&&(ke="&lng="+M.userLanguage),i("xtord","",mt,d,1),null===ne||null!==ge&&"1"!=b||(i(Ct,ne,ae,d,1),i(Lt,mt.getTime()/36e5,ae,d,1));var De=_?"&docl="+encodeURIComponent(N.location.href.replace(/&/g,"#ec#")):"",Pe=Z+"&p="+V+G+Y+J+fe+De+tt+K+Ae+Oe+ke+"&idp="+At,Ee=vt("xtvalCZ",1);if(null!==Ee){Pe=Pe+Ee.replace("&c=","&current=").replace("&b=","&before=").replace("&a=","&after=");var Ce=new Date;Ce.setTime(Ce.getTime()-36e5),i("xtvalCZ",Ee,Ce,d,1)}var Le=window.Xt_id=R+"?",Ie=vt("xtide");if(null!==ne)switch(Et.toLowerCase()){case"erec":case"epr":case"es":var Me=null;try{var Fe,Ne=ne.match(/(\[[^\]]*\])|([^\-]+)|(-)/g),Re=0;for(Fe in Ne)"-"==Ne[Fe]&&Re++,5==Re&&"-"!=Ne[Fe]&&(Me=Ne[Fe])}catch(t){Me=null}null!==Me&&i("xtide",Ie=Me,ce,"",1)}Pe+="&jv="+(M.javaEnabled()?"1":"0")+Xe+xt16+(null!==Ie?"&ide="+Ie:""),C&&(Pe+="&lnk="+w+"&vid="+C),"0"!=h&&!AT_hit.isPreviewOrPrerendering()&&(AT_hit.sendTag("F"),""!==xt44&&AT_hit.sendTag("PDT",xt44,null,"&type=PDT&p="+V+(L.xt_pageID?"&pid="+L.xt_pageID+"&pchap="+(L.xt_chap||"")+"&pidt="+(L.xt_pageDate||""):"")))}}0<Q&&"function"==typeof xtNodesload&&(T?L.addEventListener?L.addEventListener("load",xtNodesload,!1):L.attachEvent&&L.attachEvent("onload",xtNodesload):xtNodesload())},window.attag=new Xtcore;