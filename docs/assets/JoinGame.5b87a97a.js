import{_ as u,f as l,o as m,c as d,a as e,t as r,b as y,r as c,d as f,w as h,F as G,e as I,g as J,h as k}from"./index.277f8908.js";const B={props:["gameName","host","players","gameId","joinType"],data(){return{onGameJoin:function(t){l.data().joinGameRoom(t.currentTarget.getAttribute("gameId"))}}}},x=["gameId"];function b(t,a,o,_,s,p){return o.joinType=="Opened"?(m(),d("div",{key:0,class:"gamesOnPick",onClick:a[0]||(a[0]=i=>s.onGameJoin(i)),gameId:o.gameId},[e("label",null,r(o.gameName),1),e("label",null,r(o.host),1),e("label",null,r(o.players),1)],8,x)):y("",!0)}const v=u(B,[["render",b]]);const T={components:{GameRooms:v},data(){return{gameRooms:l.data().gameRooms,onJoinByCodeBtn:function(){Object.keys(l.data().gameRooms).findIndex(t=>t==document.getElementById("codeToJoinGameInp").value)!==-1&&l.data().joinGameRoom(document.getElementById("codeToJoinGameInp").value)}}}},C=e("h1",null,"Join Game",-1),N=k("Back"),j=e("input",{id:"codeToJoinGameInp",type:"number",min:"0",max:"4",maxlength:"4",pattern:"[0-9]{4}",placeholder:"Code",size:"4"},null,-1),R={id:"allGames"};function V(t,a,o,_,s,p){const i=c("router-link"),g=c("GameRooms");return m(),d("div",null,[e("header",null,[C,f(i,{to:"/"},{default:h(()=>[N]),_:1}),j,e("button",{onClick:a[0]||(a[0]=n=>s.onJoinByCodeBtn())},"Join")]),e("main",null,[e("div",R,[(m(!0),d(G,null,I(s.gameRooms,n=>(m(),J(g,{gameName:n.name,host:n.host.name,players:n.players?n.players.length:0,gameId:n.ID,joinType:n.toJoin},null,8,["gameName","host","players","gameId","joinType"]))),256))])])])}const E=u(T,[["render",V]]);export{E as default};
