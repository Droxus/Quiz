import{_ as p,o,c as m,t as _,r as u,F as g,f as y,g as C,n as B,h as r,a,b as E,w as f,d as N}from"./index.17001c13.js";import{_ as h}from"./star.2046cd51.js";const x={props:["category"]},$={class:"packCategoriesLbl"};function P(t,e,n,c,l,k){return o(),m("label",$,_(n.category),1)}const R=p(x,[["render",P]]);const T={components:{PackCategories:R},props:["categories","firstElement"]};function F(t,e,n,c,l,k){const i=u("PackCategories");return o(),m("div",{class:B(["packCategories",{displayNone:!n.firstElement}])},[(o(!0),m(g,null,y(n.categories,s=>(o(),C(i,{category:s},null,8,["category"]))),256))],2)}const b=p(T,[["render",F]]);const I={components:{PackRounds:b},props:["author","name","rounds"],data(){return{nextRound:function(t){t.stopImmediatePropagation();let e=Array.from(t.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")).findIndex(n=>n.style.display!=="none");e+1<Array.from(t.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")).length&&(t.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")[e].style.display="none",t.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")[e+1].style.display="flex",t.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("roundOfCategories")[0].innerText=`Round ${e+2}`)},prevRound:function(t){t.stopImmediatePropagation();let e=Array.from(t.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")).findIndex(n=>n.style.display!=="none");e>0&&(t.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")[e].style.display="none",t.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")[e-1].style.display="flex",t.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("roundOfCategories")[0].innerText=`Round ${e}`)},onPack:function(t){document.getElementById("packQuestionForm").style.display="block",document.getElementById("findPack").style.display="none",console.log(t.currentTarget),document.getElementById("packNameAtQuestionForm").textContent=`${t.currentTarget.getElementsByClassName("packName")[0].textContent}`,console.log(r.data().packs);for(let e=0;e<r.data().packs[t.currentTarget.getElementsByClassName("packName")[0].textContent].rounds.length;e++){Array.from(document.getElementById("packQuestionForm").getElementsByTagName("main"))[0].insertAdjacentHTML("beforeend",`
                    <h1>Round ${e+1}</h1>
                `),r.data().packs[t.currentTarget.getElementsByClassName("packName")[0].textContent].rounds[e].categories==null&&(r.data().packs[t.currentTarget.getElementsByClassName("packName")[0].textContent].rounds[e].categories=["","","","","","",""]);for(let n=0;n<r.data().packs[t.currentTarget.getElementsByClassName("packName")[0].textContent].rounds[e].categories.length;n++){document.getElementById("packQuestionForm").getElementsByTagName("main")[0].insertAdjacentHTML("beforeend",`
                    <h2>${r.data().packs[t.currentTarget.getElementsByClassName("packName")[0].textContent].rounds[e].categories[n]}</h2>
                `);for(let c=5*n;c<(n+1)*(r.data().packs[t.currentTarget.getElementsByClassName("packName")[0].textContent].rounds[e].questions.length/7)-1;c++)document.getElementById("packQuestionForm").getElementsByTagName("main")[0].insertAdjacentHTML("beforeend",`
                    <h3>${r.data().packs[t.currentTarget.getElementsByClassName("packName")[0].textContent].rounds[e].questions[c]}</h3>
                `)}}}}}},A=a("img",{class:"packStar",src:h,alt:"star"},null,-1),Q={class:"packName"},L={class:"packAuthor"},j={class:"packCategoriesBlock"},w={class:"categoriesRoundBlock"},H=a("label",{class:"roundOfCategories"},"Round 1",-1);function M(t,e,n,c,l,k){const i=u("PackRounds");return o(),m("div",{class:"pack",onClick:e[2]||(e[2]=s=>l.onPack(s))},[A,a("label",Q,_(n.name),1),a("label",L,_(n.author),1),a("div",j,[a("button",{onClick:e[0]||(e[0]=s=>l.prevRound(s))},"<"),a("div",w,[H,(o(!0),m(g,null,y(n.rounds,s=>(o(),C(i,{categories:s.categories,firstElement:n.rounds[0]==s},null,8,["categories","firstElement"]))),256))]),a("button",{onClick:e[1]||(e[1]=s=>l.nextRound(s))},">")])])}const O=p(I,[["render",M]]);const V={components:{Packs:O},data(){return{packs:r.data().packs,closePackForm:function(){for(document.getElementById("packQuestionForm").style.display="none";document.getElementById("packQuestionForm").getElementsByTagName("main")[0].firstElementChild;)document.getElementById("packQuestionForm").getElementsByTagName("main")[0].firstElementChild.remove();document.getElementById("findPack").style.display="block"}}}},q={id:"findPack"},S=a("h1",null,"Find Pack",-1),v=N("Back"),z={id:"packsBlock"},D={id:"packQuestionForm"},G=a("label",{id:"packNameAtQuestionForm"},null,-1),J=a("main",null,null,-1);function K(t,e,n,c,l,k){const i=u("router-link"),s=u("Packs");return o(),m(g,null,[a("div",q,[a("header",null,[S,E(i,{to:"/"},{default:f(()=>[v]),_:1})]),a("main",null,[a("div",z,[(o(!0),m(g,null,y(l.packs,d=>(o(),C(s,{author:d.author,name:d.name,rounds:d.rounds},null,8,["author","name","rounds"]))),256))])])]),a("div",D,[a("header",null,[a("button",{onClick:e[0]||(e[0]=d=>l.closePackForm())},"Back"),G]),J])],64)}const X=p(V,[["render",K]]);export{X as default};