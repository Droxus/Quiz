import{_ as n}from"./star.2046cd51.js";import{r as k,o as d,c as m,b as p,w as g,a as l,e as o,d as C}from"./index.17001c13.js";const u={id:"createGame"},y=l("h1",null,"Create Game",-1),B=C("Back"),_={id:"pickPackBlock"},E=l("img",{class:"packStar",src:n,alt:"star"},null,-1),L=l("label",{class:"packName"},"Pack Name",-1),N=l("label",{class:"packAuthor"},"Author",-1),v={class:"packCategoriesBlock"},A=o('<div class="categoriesRoundBlock"><label class="roundOfCategories">Round 1</label><div class="packCategories"><label class="packCategoriesLbl">Anime</label><label class="packCategoriesLbl">Anime</label><label class="packCategoriesLbl">Anime</label><label class="packCategoriesLbl">Anime</label><label class="packCategoriesLbl">Anime</label><label class="packCategoriesLbl">Anime</label><label class="packCategoriesLbl">Anime</label><label class="packCategoriesLbl">Anime</label></div><div class="packCategories" style="display:none;"><label class="packCategoriesLbl">Kekw</label><label class="packCategoriesLbl">Kekw</label><label class="packCategoriesLbl">Kekw</label><label class="packCategoriesLbl">Kekw</label><label class="packCategoriesLbl">Kekw</label><label class="packCategoriesLbl">Kekw</label><label class="packCategoriesLbl">Kekw</label><label class="packCategoriesLbl">Kekw</label></div></div>',1),f={id:"lobbyGame"},w={class:"packAtPickBlock"},x=l("img",{class:"packStar",src:n,alt:"star"},null,-1),h=l("label",{class:"packName"},"Pack Name",-1),R=l("label",{class:"packAuthor"},"Author",-1),K={class:"packCategoriesBlock"},P=o('<div class="categoriesRoundBlock"><label class="roundOfCategories">Round 1</label><div class="packCategories"><label class="packCategoriesLbl">Anime</label><label class="packCategoriesLbl">Anime</label><label class="packCategoriesLbl">Anime</label><label class="packCategoriesLbl">Anime</label><label class="packCategoriesLbl">Anime</label><label class="packCategoriesLbl">Anime</label><label class="packCategoriesLbl">Anime</label><label class="packCategoriesLbl">Anime</label></div><div class="packCategories" style="display:none;"><label class="packCategoriesLbl">Kekw</label><label class="packCategoriesLbl">Kekw</label><label class="packCategoriesLbl">Kekw</label><label class="packCategoriesLbl">Kekw</label><label class="packCategoriesLbl">Kekw</label><label class="packCategoriesLbl">Kekw</label><label class="packCategoriesLbl">Kekw</label><label class="packCategoriesLbl">Kekw</label></div></div>',1),G=o('<div><div><label>Text</label><label class="switch"><input type="checkbox"><span class="slider round"></span></label><label>Voice</label></div><div><label>Invited</label><label class="switch"><input type="checkbox"><span class="slider round"></span></label><label>Opened</label></div><div><label>Game Name</label><input id="inputNameGame" type="text"></div></div><div id="lobby"></div><button id="startGame">Start Game</button>',3),S={__name:"CreateGame",setup(I){function i(a){a.stopImmediatePropagation();let e=Array.from(a.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")).findIndex(t=>t.style.display!=="none");e+1<Array.from(a.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")).length&&(a.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")[e].style.display="none",a.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")[e+1].style.display="flex",a.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("roundOfCategories")[0].innerText=`Round ${e+2}`)}function c(a){a.stopImmediatePropagation();let e=Array.from(a.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")).findIndex(t=>t.style.display!=="none");e>0&&(a.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")[e].style.display="none",a.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")[e-1].style.display="flex",a.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("roundOfCategories")[0].innerText=`Round ${e}`)}function b(){document.getElementById("lobbyGame").style.display="block",document.getElementById("pickPackBlock").style.display="none"}function r(){document.getElementById("lobbyGame").style.display="none",document.getElementById("pickPackBlock").style.display="block"}return(a,e)=>{const t=k("router-link");return d(),m("div",u,[y,p(t,{to:"/"},{default:g(()=>[B]),_:1}),l("div",_,[l("div",{class:"packAtPickBlock",onClick:e[2]||(e[2]=s=>b())},[E,L,N,l("div",v,[l("button",{onClick:e[0]||(e[0]=s=>c(s))},"<"),A,l("button",{onClick:e[1]||(e[1]=s=>i(s))},">")])])]),l("div",f,[l("button",{onClick:e[3]||(e[3]=s=>r())},"Back"),l("div",w,[x,h,R,l("div",K,[l("button",{onClick:e[4]||(e[4]=s=>c(s))},"<"),P,l("button",{onClick:e[5]||(e[5]=s=>i(s))},">")])]),G])])}}};export{S as default};
