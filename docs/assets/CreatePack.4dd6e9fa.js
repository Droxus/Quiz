import{r as g,o as p,c,a as n,b as C,w as k,e as E,d as B}from"./index.30cd2282.js";const b=B("Back"),q={class:"tabelQuestionCreate"},I=E('<input disabled="disabled" value="Category"><input class="points" value="100" type="number"><input class="points" value="200" type="number"><input class="points" value="300" type="number"><input class="points" value="400" type="number"><input class="points" value="500" type="number"><input class="category">',7),f=n("input",{class:"category"},null,-1),A=n("input",{class:"category"},null,-1),N=n("input",{class:"category"},null,-1),w=n("input",{class:"category"},null,-1),Q=n("input",{class:"category"},null,-1),P=n("input",{class:"category"},null,-1),T={id:"switchRoundBlock"},x=n("label",{id:"roundNumber"},"Round 1",-1),M={id:"makeQuestion"},$=n("textarea",{id:"questionInputArea",rows:"12",placeholder:"write question here"},null,-1),R=n("textarea",{id:"answerInputArea",rows:"2",placeholder:"write answer here"},null,-1),L=n("form",{method:"post",enctype:"multipart/form-data"},[n("div",{id:"fileUploadBlock"},[n("label",{for:"file"},"Choose file to upload"),n("input",{type:"file",id:"fileDropInp",name:"file",multiple:""})])],-1),j={__name:"CreatePack",setup(D){let d,o=1;function u(){Array.from(document.getElementById("createPacke").getElementsByTagName("main"))[0].insertAdjacentHTML("beforeend",`
    <div class="tabelQuestionCreate">
        <input disabled="disabled" value="Category">
        <input class="points" value="100" type="number">
        <input class="points" value="200" type="number">
        <input class="points" value="300" type="number">
        <input class="points" value="400" type="number">
        <input class="points" value="500" type="number">
        <input class="category">
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <input class="category">
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <input class="category">
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <input class="category">
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <input class="category">
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <input class="category">
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <input class="category">
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
        <div class="questions"></div>
    </div>
    `),Array.from(document.getElementsByClassName("questions")).forEach(i=>i.addEventListener("click",s))}function a(){let i={rounds:[]};for(let e=0;e<Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")).length;e++){i.rounds.push({points:[],categories:[],questions:[],answers:[]}),Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByClassName("points")).forEach(l=>{i.rounds[e].points.push(Number(l.value))}),Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByClassName("category")).forEach(l=>{l.value!==""&&i.rounds[e].categories.push(l.value)});for(let l=0;l<i.rounds[e].points.length*i.rounds[e].categories.length;l++)i.rounds[e].questions[l]="",i.rounds[e].answers[l]="";Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByClassName("questionMark")).forEach(l=>{let t=Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByTagName("div")).indexOf(l.parentElement);i.rounds[e].questions[t]=l.parentElement.getAttribute("question"),i.rounds[e].answers[t]=l.parentElement.getAttribute("answer")})}console.log(i)}function s(i){document.getElementById("makeQuestion").style.display="grid",document.getElementById("bgBlur").style.display="block",d=i.target,d.getAttribute("question")!==null&&(document.getElementById("questionInputArea").value=d.getAttribute("question")),d.getAttribute("answer")!==null&&(document.getElementById("answerInputArea").value=d.getAttribute("answer"))}function r(){document.getElementById("makeQuestion").style.display="none",document.getElementById("bgBlur").style.display="none",d.setAttribute("question",document.getElementById("questionInputArea").value),d.setAttribute("answer",document.getElementById("answerInputArea").value),document.getElementById("questionInputArea").value="",document.getElementById("answerInputArea").value=""}function m(){document.getElementById("makeQuestion").style.display="none",document.getElementById("bgBlur").style.display="none",d.firstElementChild!==null&&d.firstElementChild.remove(),document.getElementById("questionInputArea").value!==""&&document.getElementById("answerInputArea").value!==""?d.insertAdjacentHTML("beforeend",'<img class="questionMark" height="100%" style="pointer-events: none;" src="/img/questionMark.png"></img>'):d.insertAdjacentHTML("beforeend",'<img height="100%" style="pointer-events: none;" src="/img/minus.png"></img>'),d.setAttribute("question",document.getElementById("questionInputArea").value),d.setAttribute("answer",document.getElementById("answerInputArea").value),document.getElementById("questionInputArea").value="",document.getElementById("answerInputArea").value=""}function v(){o--,o=Math.max(1,o),document.getElementById("roundNumber").innerText=`Round ${o}`,document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate").length>1&&(document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[o].style.display="none"),document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[o-1].style.display="grid"}function y(){o++,o=Math.max(1,o),document.getElementById("roundNumber").innerText=`Round ${o}`,o>document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate").length?(document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[o-2].style.display="none",u()):(document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[o-2].style.display="none",document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[o-1].style.display="grid")}return(i,e)=>{const l=g("router-link");return p(),c("div",{id:"createPacke",onLoad:e[40]||(e[40]=t=>u())},[n("header",null,[C(l,{to:"/"},{default:k(()=>[b]),_:1}),n("button",{onClick:e[0]||(e[0]=t=>a())},"Save")]),n("main",null,[n("div",q,[I,n("div",{onClick:e[1]||(e[1]=t=>s(t))}),n("div",{onClick:e[2]||(e[2]=t=>s(t))}),n("div",{onClick:e[3]||(e[3]=t=>s(t))}),n("div",{onClick:e[4]||(e[4]=t=>s(t))}),n("div",{onClick:e[5]||(e[5]=t=>s(t))}),f,n("div",{onClick:e[6]||(e[6]=t=>s(t))}),n("div",{onClick:e[7]||(e[7]=t=>s(t))}),n("div",{onClick:e[8]||(e[8]=t=>s(t))}),n("div",{onClick:e[9]||(e[9]=t=>s(t))}),n("div",{onClick:e[10]||(e[10]=t=>s(t))}),A,n("div",{onClick:e[11]||(e[11]=t=>s(t))}),n("div",{onClick:e[12]||(e[12]=t=>s(t))}),n("div",{onClick:e[13]||(e[13]=t=>s(t))}),n("div",{onClick:e[14]||(e[14]=t=>s(t))}),n("div",{onClick:e[15]||(e[15]=t=>s(t))}),N,n("div",{onClick:e[16]||(e[16]=t=>s(t))}),n("div",{onClick:e[17]||(e[17]=t=>s(t))}),n("div",{onClick:e[18]||(e[18]=t=>s(t))}),n("div",{onClick:e[19]||(e[19]=t=>s(t))}),n("div",{onClick:e[20]||(e[20]=t=>s(t))}),w,n("div",{onClick:e[21]||(e[21]=t=>s(t))}),n("div",{onClick:e[22]||(e[22]=t=>s(t))}),n("div",{onClick:e[23]||(e[23]=t=>s(t))}),n("div",{onClick:e[24]||(e[24]=t=>s(t))}),n("div",{onClick:e[25]||(e[25]=t=>s(t))}),Q,n("div",{onClick:e[26]||(e[26]=t=>s(t))}),n("div",{onClick:e[27]||(e[27]=t=>s(t))}),n("div",{onClick:e[28]||(e[28]=t=>s(t))}),n("div",{onClick:e[29]||(e[29]=t=>s(t))}),n("div",{onClick:e[30]||(e[30]=t=>s(t))}),P,n("div",{onClick:e[31]||(e[31]=t=>s(t))}),n("div",{onClick:e[32]||(e[32]=t=>s(t))}),n("div",{onClick:e[33]||(e[33]=t=>s(t))}),n("div",{onClick:e[34]||(e[34]=t=>s(t))}),n("div",{onClick:e[35]||(e[35]=t=>s(t))})])]),n("footer",null,[n("div",T,[n("button",{onClick:e[36]||(e[36]=t=>v())},"<"),x,n("button",{onClick:e[37]||(e[37]=t=>y())},">")])]),n("div",M,[$,R,L,n("button",{id:"questionDone",onClick:e[38]||(e[38]=t=>m())},"Done")]),n("div",{id:"bgBlur",onClick:e[39]||(e[39]=t=>r())})],32)}}};export{j as default};
