import{f as b}from"./firebase.93cda460.js";import{o as f,c as A,a as n,e as g,f as v}from"./index.ce1e333e.js";const w={class:"tabelQuestionCreate"},I=g('<input disabled="disabled" value="Category"><input class="points" value="100" type="number"><input class="points" value="200" type="number"><input class="points" value="300" type="number"><input class="points" value="400" type="number"><input class="points" value="500" type="number"><input class="category">',7),q=n("input",{class:"category"},null,-1),N=n("input",{class:"category"},null,-1),P=n("input",{class:"category"},null,-1),Q=n("input",{class:"category"},null,-1),x=n("input",{class:"category"},null,-1),T=n("input",{class:"category"},null,-1),$={id:"switchRoundBlock"},W=n("label",{id:"roundNumber"},"Round 1",-1),O={id:"makeQuestion"},S=g('<textarea id="questionInputArea" rows="12" placeholder="write question here"></textarea><textarea id="answerInputArea" rows="1" placeholder="write answer here"></textarea><textarea class="wrongAnswerInputArea" rows="1" placeholder="write WRONG answer here"></textarea><textarea class="wrongAnswerInputArea" rows="1" placeholder="write WRONG answer here"></textarea><textarea class="wrongAnswerInputArea" rows="1" placeholder="write WRONG answer here"></textarea>',5),M=n("form",{method:"post",enctype:"multipart/form-data"},[n("div",{id:"fileUploadBlock"},[n("label",{for:"file"},"Choose file to upload"),n("input",{type:"file",id:"fileDropInp",name:"file",multiple:""})])],-1),R={id:"savePackWindow"},D=n("label",null,"Enter Pack Name",-1),L=n("input",{type:"text",id:"nameOfPack"},null,-1),F=n("label",null,"Access",-1),G=n("div",null,[n("label",null,"Only for me"),n("label",{class:"switch"},[n("input",{type:"checkbox",id:"accessPack"}),n("span",{class:"slider round"})]),n("label",null,"For All")],-1),j={id:"clarifyQuite"},H=n("label",null,"You have unsaved data!",-1),z={__name:"CreatePack",setup(V){let l,o=1;function d(){v.push("/")}function y(){document.getElementById("createPacke").getElementsByClassName("questionMark").length>0?(document.getElementById("clarifyQuite").style.display="grid",document.getElementById("bgBlurQuite").style.display="block"):d()}function u(){document.getElementById("clarifyQuite").style.display="none",document.getElementById("bgBlurQuite").style.display="none"}function r(){Array.from(document.getElementById("createPacke").getElementsByTagName("main"))[0].insertAdjacentHTML("beforeend",`
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
    `),Array.from(document.getElementsByClassName("questions")).forEach(i=>i.addEventListener("click",s))}function c(){if(document.getElementById("nameOfPack").value!==""&&document.getElementById("nameOfPack").value!==null){let i={rounds:[]};i.name=document.getElementById("nameOfPack").value,i.author="NONAME",i.access=document.getElementById("accessPack").checked?"Global":"Local";for(let e=0;e<Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")).length;e++){i.rounds.push({points:[],categories:[],questions:[],answers:[],wrongAnswers:[]}),Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByClassName("points")).forEach(t=>{i.rounds[e].points.push(Number(t.value))}),Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByClassName("category")).forEach(t=>{t.value!==""&&i.rounds[e].categories.push(t.value)});for(let t=0;t<i.rounds[e].points.length*i.rounds[e].categories.length;t++)i.rounds[e].questions[t]="",i.rounds[e].answers[t]="",i.rounds[e].wrongAnswers[t]="";Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByClassName("questionMark")).forEach(t=>{let a=Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByTagName("div")).indexOf(t.parentElement);i.rounds[e].questions[a]=t.parentElement.getAttribute("question"),i.rounds[e].answers[a]=t.parentElement.getAttribute("answer"),i.rounds[e].wrongAnswers[a]=t.parentElement.getAttribute("wrongAnswers")})}console.log(i),b.data().setData(`packs/${i.name}`,i),v.push("/")}else console.log("Enter Pack Name")}function s(i){if(document.getElementById("makeQuestion").style.display="grid",document.getElementById("bgBlur").style.display="block",l=i.target,l.getAttribute("question")!==null&&(document.getElementById("questionInputArea").value=l.getAttribute("question")),l.getAttribute("answer")!==null&&(document.getElementById("answerInputArea").value=l.getAttribute("answer")),l.getAttribute("wrongAnswers")!==null)for(let e=0;e<Array.from(document.getElementsByClassName("wrongAnswerInputArea")).length;e++){let t=l.getAttribute("wrongAnswers").split(",",3);Array.from(document.getElementsByClassName("wrongAnswerInputArea"))[e].value=t[e]}}function p(){document.getElementById("makeQuestion").style.display="none",document.getElementById("bgBlur").style.display="none",l.setAttribute("question",document.getElementById("questionInputArea").value),l.setAttribute("answer",document.getElementById("answerInputArea").value);let i=[];Array.from(document.getElementsByClassName("wrongAnswerInputArea")).forEach(e=>i.push(e.value)),l.setAttribute("wrongAnswers",i),document.getElementById("questionInputArea").value="",document.getElementById("answerInputArea").value="",Array.from(document.getElementsByClassName("wrongAnswerInputArea")).forEach(e=>e.value="")}function k(){document.getElementById("makeQuestion").style.display="none",document.getElementById("bgBlur").style.display="none",l.firstElementChild!==null&&l.firstElementChild.remove(),document.getElementById("questionInputArea").value!==""&&document.getElementById("answerInputArea").value!==""?l.insertAdjacentHTML("beforeend",'<img class="questionMark" height="100%" style="pointer-events: none;" src="/img/questionMark.png"></img>'):l.insertAdjacentHTML("beforeend",'<img height="100%" style="pointer-events: none;" src="/img/minus.png"></img>'),l.setAttribute("question",document.getElementById("questionInputArea").value),l.setAttribute("answer",document.getElementById("answerInputArea").value);let i=[];Array.from(document.getElementsByClassName("wrongAnswerInputArea")).forEach(e=>i.push(e.value)),l.setAttribute("wrongAnswers",i),document.getElementById("questionInputArea").value="",document.getElementById("answerInputArea").value="",Array.from(document.getElementsByClassName("wrongAnswerInputArea")).forEach(e=>e.value="")}function B(){o--,o=Math.max(1,o),document.getElementById("roundNumber").innerText=`Round ${o}`,document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate").length>1&&(document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[o].style.display="none"),document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[o-1].style.display="grid"}function E(){o++,o=Math.max(1,o),document.getElementById("roundNumber").innerText=`Round ${o}`,o>document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate").length?(document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[o-2].style.display="none",r()):(document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[o-2].style.display="none",document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[o-1].style.display="grid")}function m(){u(),document.getElementById("savePackWindow").style.display="grid",document.getElementById("bgBlurForSaveWindow").style.display="block"}function C(){document.getElementById("savePackWindow").style.display="none",document.getElementById("bgBlurForSaveWindow").style.display="none",document.getElementById("nameOfPack").value="",document.getElementById("accessPack").value=!1}return(i,e)=>(f(),A("div",{id:"createPacke",onLoad:e[46]||(e[46]=t=>r())},[n("header",null,[n("button",{onClick:e[0]||(e[0]=t=>y())},"Back"),n("button",{onClick:e[1]||(e[1]=t=>m())},"Save")]),n("main",null,[n("div",w,[I,n("div",{onClick:e[2]||(e[2]=t=>s(t))}),n("div",{onClick:e[3]||(e[3]=t=>s(t))}),n("div",{onClick:e[4]||(e[4]=t=>s(t))}),n("div",{onClick:e[5]||(e[5]=t=>s(t))}),n("div",{onClick:e[6]||(e[6]=t=>s(t))}),q,n("div",{onClick:e[7]||(e[7]=t=>s(t))}),n("div",{onClick:e[8]||(e[8]=t=>s(t))}),n("div",{onClick:e[9]||(e[9]=t=>s(t))}),n("div",{onClick:e[10]||(e[10]=t=>s(t))}),n("div",{onClick:e[11]||(e[11]=t=>s(t))}),N,n("div",{onClick:e[12]||(e[12]=t=>s(t))}),n("div",{onClick:e[13]||(e[13]=t=>s(t))}),n("div",{onClick:e[14]||(e[14]=t=>s(t))}),n("div",{onClick:e[15]||(e[15]=t=>s(t))}),n("div",{onClick:e[16]||(e[16]=t=>s(t))}),P,n("div",{onClick:e[17]||(e[17]=t=>s(t))}),n("div",{onClick:e[18]||(e[18]=t=>s(t))}),n("div",{onClick:e[19]||(e[19]=t=>s(t))}),n("div",{onClick:e[20]||(e[20]=t=>s(t))}),n("div",{onClick:e[21]||(e[21]=t=>s(t))}),Q,n("div",{onClick:e[22]||(e[22]=t=>s(t))}),n("div",{onClick:e[23]||(e[23]=t=>s(t))}),n("div",{onClick:e[24]||(e[24]=t=>s(t))}),n("div",{onClick:e[25]||(e[25]=t=>s(t))}),n("div",{onClick:e[26]||(e[26]=t=>s(t))}),x,n("div",{onClick:e[27]||(e[27]=t=>s(t))}),n("div",{onClick:e[28]||(e[28]=t=>s(t))}),n("div",{onClick:e[29]||(e[29]=t=>s(t))}),n("div",{onClick:e[30]||(e[30]=t=>s(t))}),n("div",{onClick:e[31]||(e[31]=t=>s(t))}),T,n("div",{onClick:e[32]||(e[32]=t=>s(t))}),n("div",{onClick:e[33]||(e[33]=t=>s(t))}),n("div",{onClick:e[34]||(e[34]=t=>s(t))}),n("div",{onClick:e[35]||(e[35]=t=>s(t))}),n("div",{onClick:e[36]||(e[36]=t=>s(t))})])]),n("footer",null,[n("div",$,[n("button",{onClick:e[37]||(e[37]=t=>B())},"<"),W,n("button",{onClick:e[38]||(e[38]=t=>E())},">")])]),n("div",O,[S,M,n("button",{id:"questionDone",onClick:e[39]||(e[39]=t=>k())},"Done")]),n("div",{id:"bgBlur",onClick:e[40]||(e[40]=t=>p())}),n("div",{id:"bgBlurForSaveWindow",onClick:e[41]||(e[41]=t=>C())}),n("div",R,[D,L,F,G,n("button",{onClick:e[42]||(e[42]=t=>c())},"Save")]),n("div",j,[H,n("button",{onClick:e[43]||(e[43]=t=>m())},"Save"),n("button",{onClick:e[44]||(e[44]=t=>d())},"Dont Save")]),n("div",{id:"bgBlurQuite",onClick:e[45]||(e[45]=t=>u())})],32))}};export{z as default};
