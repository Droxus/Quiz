import{_ as u,f as m,o as s,c as d,a as e,t as i,b as y,r as c,d as h,w as f,F as G,e as k,g as B,h as J}from"./index.e17a0330.js";const x={props:["gameName","host","players","gameId","joinType"],data(){return{onGameJoin:function(l){m.data().joinGameRoom(l.currentTarget.getAttribute("gameId"))}}}},C=["gameId"];function I(l,o,t,_,a,p){return t.joinType=="Opened"?(s(),d("div",{key:0,class:"gamesOnPick",onClick:o[0]||(o[0]=r=>a.onGameJoin(r)),gameId:t.gameId},[e("label",null,i(t.gameName),1),e("label",null,i(t.host),1),e("label",null,i(t.players),1)],8,C)):y("",!0)}const b=u(x,[["render",I]]);const N={components:{GameRooms:b},data(){return{gameRooms:m.data().gameRooms,onJoinByCodeBtn:function(){m.data().joinByCode()}}}},v=e("h1",null,"Join Game",-1),T=J("Back"),j=e("input",{id:"codeToJoinGameInp",type:"number",min:"0",max:"4",maxlength:"4",pattern:"[0-9]{4}",placeholder:"Code",size:"4"},null,-1),V={id:"allGames"};function $(l,o,t,_,a,p){const r=c("router-link"),g=c("GameRooms");return s(),d("div",null,[e("header",null,[v,h(r,{to:"/"},{default:f(()=>[T]),_:1}),j,e("button",{onClick:o[0]||(o[0]=n=>a.onJoinByCodeBtn())},"Join")]),e("main",null,[e("div",V,[(s(!0),d(G,null,k(a.gameRooms,n=>(s(),B(g,{gameName:n.name,host:n.host.name,players:n.players?n.players.length:0,gameId:n.ID,joinType:n.toJoin},null,8,["gameName","host","players","gameId","joinType"]))),256))])])])}const D=u(N,[["render",$]]);export{D as default};
