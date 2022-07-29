import{_ as d,o as r,c as l,t as g,r as y,F as k,d as C,e as B,n as E,f as n,a as o}from"./index.85abbc0a.js";const A={props:["category"]},f={class:"packCategoriesLbl"};function N(e,t,a,c,m,u){return r(),l("label",f,g(a.category),1)}const _=d(A,[["render",N]]);const x={components:{PackCategories:_},props:["categories","firstElement"]},T={key:1,class:"packCategoriesLbl"};function b(e,t,a,c,m,u){const i=y("PackCategories");return r(),l("div",{class:E(["packCategories",{displayNone:!a.firstElement}])},[a.categories?(r(!0),l(k,{key:0},C(a.categories,s=>(r(),B(i,{category:s},null,8,["category"]))),256)):(r(),l("label",T,"No Categories"))],2)}const R=d(x,[["render",b]]),I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD50lEQVRoge2YTWhcVRTHf2de8mYmKlRoWqvgVxAX00jMHbHJCCIUF0IhfiAuxOIHFKF+bFy4EKx0LaLo0g8EFUSwWCou3Ig4TWbuG5IwoAvTKhFtoy2iZD5eeMfNFEJmJvPu800Wmj+8xdx7zv/8zzv3nnfnwi528f+GDIu4VCpd02q1jgI0Go336/X638OIMzIMUoBms3kKuA8gn8/PAYeHEWcoFSgWiyVV/XbzWCaTKVUqle/SjpVJmxAgiqLjccbSQOoVMMYcAM4D/papcGNj45bFxcVf0oyXegVE5Bjd4gFGPc97JvV4aZIZY0aBc8ANfUx+bTabN9fr9XZaMVOtgIg8Qn/xAAfy+fxDacZMNYE4G1VVU93MqS2hYrF4p6oGcWyjKLqrVqtV04ibZgWei2soIs+mFTSVChhj9gI/A/mYLq0wDG9cWlq6+G9jOyUwOTl5re/7+4G9qjouItcB48DdwAOOsc8A88Caqv4mImvA7+12+8Ly8vLluCRdCczMzORbrdbxTCZzh6ruA/Z3RI4Do44ikyIE1jrPBRG5qKqLvu+/XS6XG5sNuw5z7Xb7LRF5WlV3SGtPjALXdx46Wh4Pw/A24Nhmw16b+N5hq0sKVe3S1pWAqn6xM3IS4fTWga4EJiYmXgLe2RE5DlDVd4GXt4737ULGmBeA1xnSkdsBKiKvVavVV3tNbttGi8Xiw6r6IfH7e9poAU9Zaz/qZzDwOzA9PX1IRE4B+9JUFgOXoih6sFarfbOd0cDlEQTB2UwmMwP8kJq0wVgRkdlB4iHm+q5UKiu+78+KyEDCFHA2DMOZarUa64V5cVlXV1cbY2NjH+dyuVuBycTytoGqfpbNZuestX/G9UlymBNjzHvA0QS+2+EDa+2TgNMRIEmLVKAx0Mod6ziKh+Q9/p6EfqlzOi+hqampPZ7n/UH6H7jI9/3xcrl8ycXJWYTneaUkfnG0hGF4yNkpQaBSAp+hcTsnICJDSyCKImdupz1QKBT8XC53GRhzDRQTjWazucfl4supAr7vG+KLXwde6TzrMX3ynRix4ZSAiMRtdac9zztorT1prT05MjJye+dUO1hQJuO0jFwTGES+oqpHrLVHFhYWzl0ZnJ+fXw2C4Ikoig4D3w/gGFoCAsz2mWuKyAnf9w8GQdD1t+8KarXa177vT4vICaDZx6yEw96MbVgoFK7O5XJ/9Zg6Azxvrf0xLheAMWYCeJPe90lXWWtj7RunLmSM+Qq4v/PzJ+BFa+3nLhw9OOeAN4CbAFT1yyAIYl+SOSXQufR6TEQi4NO4b2kQjDFjqvooINls9pOtl1e72MUu/sP4Bw7UQgZbnWBQAAAAAElFTkSuQmCC";let p;const h={components:{PackRounds:R},props:["author","name","rounds"],data(){return{nextRound:function(e){e.stopImmediatePropagation();let t=Array.from(e.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")).findIndex(a=>a.style.display!=="none");t+1<Array.from(e.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")).length&&(e.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")[t].style.display="none",e.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")[t+1].style.display="flex",e.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("roundOfCategories")[0].innerText=`Round ${t+2}`)},prevRound:function(e){e.stopImmediatePropagation();let t=Array.from(e.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")).findIndex(a=>a.style.display!=="none");t>0&&(e.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")[t].style.display="none",e.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("packCategories")[t-1].style.display="flex",e.target.parentElement.getElementsByClassName("categoriesRoundBlock")[0].getElementsByClassName("roundOfCategories")[0].innerText=`Round ${t}`)},onPack:function(e){switch(e.currentTarget.parentElement.id){case"packsBlock":document.getElementById("packQuestionForm").style.display="block",document.getElementById("findPack").style.display="none",console.log(e.currentTarget),document.getElementById("packNameAtQuestionForm").textContent=`${e.currentTarget.getElementsByClassName("packName")[0].textContent}`,console.log(n.data().packs);for(let t=0;t<n.data().packs[e.currentTarget.getElementsByClassName("packName")[0].textContent].rounds.length;t++){Array.from(document.getElementById("packQuestionForm").getElementsByTagName("main"))[0].insertAdjacentHTML("beforeend",`
                                        <h1>Round ${t+1}</h1>
                                    `),n.data().packs[e.currentTarget.getElementsByClassName("packName")[0].textContent].rounds[t].categories==null&&(n.data().packs[e.currentTarget.getElementsByClassName("packName")[0].textContent].rounds[t].categories=["","","","","","",""]);for(let a=0;a<n.data().packs[e.currentTarget.getElementsByClassName("packName")[0].textContent].rounds[t].categories.length;a++){document.getElementById("packQuestionForm").getElementsByTagName("main")[0].insertAdjacentHTML("beforeend",`
                                        <h2>${n.data().packs[e.currentTarget.getElementsByClassName("packName")[0].textContent].rounds[t].categories[a]}</h2>
                                    `);for(let c=5*a;c<(a+1)*(n.data().packs[e.currentTarget.getElementsByClassName("packName")[0].textContent].rounds[t].questions.length/7)-1;c++)document.getElementById("packQuestionForm").getElementsByTagName("main")[0].insertAdjacentHTML("beforeend",`
                                        <h3>${n.data().packs[e.currentTarget.getElementsByClassName("packName")[0].textContent].rounds[t].questions[c]}</h3>
                                    `)}}break;case"pickPackBlock":document.getElementById("lobbyGame").style.display="block",document.getElementById("pickPackBlock").style.display="none",document.getElementById("lobbyGame").insertAdjacentElement("afterbegin",e.currentTarget),p=n.data().packs[e.currentTarget.getElementsByClassName("packName")[0].innerText];break}},pickedPack:p}}},V=o("img",{class:"packStar",src:I,alt:"star"},null,-1),F={class:"packName"},P={class:"packAuthor"},G={class:"packCategoriesBlock"},j={class:"categoriesRoundBlock"},q=o("label",{class:"roundOfCategories"},"Round 1",-1);function w(e,t,a,c,m,u){const i=y("PackRounds");return r(),l("div",{class:"pack",onClick:t[2]||(t[2]=s=>m.onPack(s))},[V,o("label",F,g(a.name),1),o("label",P,g(a.author),1),o("div",G,[o("button",{onClick:t[0]||(t[0]=s=>m.prevRound(s)),class:"prevRound"},"<"),o("div",j,[q,(r(!0),l(k,null,C(a.rounds,s=>(r(),B(i,{categories:s.categories,firstElement:a.rounds[0]==s},null,8,["categories","firstElement"]))),256))]),o("button",{onClick:t[1]||(t[1]=s=>m.nextRound(s)),class:"nextRound"},">")])])}const M=d(h,[["render",w]]);export{M as P};
