import{_ as g,j as d,f as m,o as y,c as v,a as n,i as c}from"./index.7ab19692.js";let i,a=1,r={rounds:[]};const p={data(){return{back:function(){d.push("/")},onBack:function(){document.getElementById("createPacke").getElementsByClassName("questionMark").length>0?(document.getElementById("clarifyQuite").style.display="grid",document.getElementById("bgBlurQuite").style.display="block"):this.back()},onBackCancel:function(){document.getElementById("clarifyQuite").style.display="none",document.getElementById("bgBlurQuite").style.display="none"},createTable:function(){Array.from(document.getElementById("createPacke").getElementsByTagName("main"))[0].insertAdjacentHTML("beforeend",`
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
                `),Array.from(document.getElementsByClassName("questions")).forEach(o=>o.addEventListener("click",this.onQN))},onSave:function(){if(document.getElementById("nameOfPack").value!==""&&document.getElementById("nameOfPack").value!==null){let o={rounds:[]};o.name=document.getElementById("nameOfPack").value,o.author=m.data().userName,o.isGlobal=document.getElementById("isGlobalPack").checked;for(let e=0;e<Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")).length;e++){o.rounds.push({points:[],categories:[],questions:[],answers:[],wrongAnswers:[],mediaFiles:r.rounds[e]?r.rounds[e]:[]}),Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByClassName("points")).forEach(l=>{o.rounds[e].points.push(Number(l.value))});for(let l=0;l<Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByClassName("category")).length;l++)Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByClassName("category"))[l].value!==""?o.rounds[e].categories.push(Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByClassName("category"))[l].value):Array.from(document.getElementsByClassName("questionMark")).length>0&&Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByClassName("questions")).findIndex(s=>s==Array.from(document.getElementsByClassName("questionMark"))[Array.from(document.getElementsByClassName("questionMark")).length-1].parentElement)+1>l*Array.from(document.getElementsByClassName("points")).length&&o.rounds[e].categories.push(`Category ${l+1}`);for(let l=0;l<o.rounds[e].points.length*o.rounds[e].categories.length;l++)o.rounds[e].questions[l]="",o.rounds[e].answers[l]="",o.rounds[e].wrongAnswers[l]="";Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByClassName("questionMark")).forEach(l=>{let u=Array.from(document.getElementById("createPacke").getElementsByClassName("tabelQuestionCreate")[e].getElementsByTagName("div")).indexOf(l.parentElement);o.rounds[e].questions[u]=l.parentElement.getAttribute("question"),o.rounds[e].answers[u]=l.parentElement.getAttribute("answer"),o.rounds[e].wrongAnswers[u]=Array.from(JSON.parse(l.parentElement.getAttribute("wrongAnswers"))).filter(s=>s!=="")})}m.data().setPackData(o),d.push("/")}},onQN:function(o){if(document.getElementById("makeQuestion").style.display="grid",document.getElementById("bgBlur").style.display="block",i=o.target,i.getAttribute("question")!==null&&(document.getElementById("questionInputArea").value=i.getAttribute("question")),i.getAttribute("answer")!==null&&(document.getElementById("answerInputArea").value=i.getAttribute("answer")),i.getAttribute("wrongAnswers")!==null)for(let e=0;e<Array.from(document.getElementsByClassName("wrongAnswerInputArea")).length;e++){let l=JSON.parse(i.getAttribute("wrongAnswers"));Array.from(document.getElementsByClassName("wrongAnswerInputArea"))[e].value=l[e]}},onCloseQuestion:function(){document.getElementById("makeQuestion").style.display="none",document.getElementById("bgBlur").style.display="none",i.setAttribute("question",document.getElementById("questionInputArea").value),i.setAttribute("answer",document.getElementById("answerInputArea").value);let o=[];Array.from(document.getElementsByClassName("wrongAnswerInputArea")).forEach(e=>o.push(e.value)),i.setAttribute("wrongAnswers",JSON.stringify(o)),document.getElementById("questionInputArea").value="",document.getElementById("answerInputArea").value="",document.getElementById("fileDropInp").value="",document.getElementById("fileDropInp").parentElement.getElementsByClassName("fileMediaElement").length>0&&document.getElementById("fileDropInp").parentElement.getElementsByClassName("fileMediaElement")[0].remove(),Array.from(document.getElementsByClassName("wrongAnswerInputArea")).forEach(e=>e.value="")},onDoneQuestion:function(){document.getElementById("makeQuestion").style.display="none",document.getElementById("bgBlur").style.display="none",i.firstElementChild!==null&&i.firstElementChild.remove(),document.getElementById("questionInputArea").value!==""&&document.getElementById("answerInputArea").value!==""?i.insertAdjacentHTML("beforeend",'<img class="questionMark" height="100%" style="pointer-events: none;" src="img/questionMark.png"></img>'):i.insertAdjacentHTML("beforeend",'<img height="100%" style="pointer-events: none;" src="img/minus.png"></img>'),i.setAttribute("question",document.getElementById("questionInputArea").value),i.setAttribute("answer",document.getElementById("answerInputArea").value);let o=[];Array.from(document.getElementsByClassName("wrongAnswerInputArea")).forEach(e=>o.push(e.value)),i.setAttribute("wrongAnswers",JSON.stringify(o)),document.getElementById("questionInputArea").value="",document.getElementById("answerInputArea").value="",document.getElementById("fileDropInp").value="",document.getElementById("fileDropInp").parentElement.getElementsByClassName("fileMediaElement").length>0&&document.getElementById("fileDropInp").parentElement.getElementsByClassName("fileMediaElement")[0].remove(),Array.from(document.getElementsByClassName("wrongAnswerInputArea")).forEach(e=>e.value="")},prevRound:function(){a--,a=Math.max(1,a),document.getElementById("roundNumber").innerText=`Round ${a}`,document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate").length>1&&(document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[a].style.display="none"),document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[a-1].style.display="grid"},nextRound:function(){a++,a=Math.max(1,a),document.getElementById("roundNumber").innerText=`Round ${a}`,a>document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate").length?(document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[a-2].style.display="none",this.createTable()):(document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[a-2].style.display="none",document.getElementById("createPacke").getElementsByTagName("main")[0].getElementsByClassName("tabelQuestionCreate")[a-1].style.display="grid")},onSaveBtn:function(){this.onBackCancel(),document.getElementById("savePackWindow").style.display="grid",document.getElementById("bgBlurForSaveWindow").style.display="block"},onCloseSaveWindow:function(){document.getElementById("savePackWindow").style.display="none",document.getElementById("bgBlurForSaveWindow").style.display="none",document.getElementById("nameOfPack").value=""},onFileLoad:function(o){switch(o.target.files[0].type.slice(0,5)){case"image":o.target.parentElement.insertAdjacentHTML("beforeend",`<img width="100%" class="fileMediaElement" src="${window.URL.createObjectURL(o.target.files[0])}" alt="photo" id="thisPhoto"></img>`);break;case"video":o.target.parentElement.insertAdjacentHTML("beforeend",`<video class="fileMediaElement" width="100%" controls><source src="${window.URL.createObjectURL(o.target.files[0])}"></video>`);break;case"audio":o.target.parentElement.insertAdjacentHTML("beforeend",`<audio width="100%" class="fileMediaElement" controls><source src="${window.URL.createObjectURL(o.target.files[0])}"></audio>`);break}r.rounds==null&&(r.rounds=[],r.rounds[a-1]=Array(35).fill("")),r.rounds[a-1]==null&&(r.rounds[a-1]=[],r.rounds[a-1]=Array(35).fill(""));let e=Array.from(i.parentElement.getElementsByClassName("questions")).findIndex(l=>l==i);e!==-1&&(r.rounds[a-1][e]=o.target.files[0])}}}},E={class:"tabelQuestionCreate"},B=c('<input disabled="disabled" value="Category"><input class="points" value="100" type="number"><input class="points" value="200" type="number"><input class="points" value="300" type="number"><input class="points" value="400" type="number"><input class="points" value="500" type="number"><input class="category">',7),f=n("input",{class:"category"},null,-1),C=n("input",{class:"category"},null,-1),k=n("input",{class:"category"},null,-1),b=n("input",{class:"category"},null,-1),N=n("input",{class:"category"},null,-1),q=n("input",{class:"category"},null,-1),I={id:"switchRoundBlock"},A=n("label",{id:"roundNumber"},"Round 1",-1),w={id:"makeQuestion"},Q=c('<textarea id="questionInputArea" rows="12" placeholder="write question here"></textarea><textarea id="answerInputArea" rows="1" placeholder="write answer here"></textarea><textarea class="wrongAnswerInputArea" rows="1" placeholder="write WRONG answer here"></textarea><textarea class="wrongAnswerInputArea" rows="1" placeholder="write WRONG answer here"></textarea><textarea class="wrongAnswerInputArea" rows="1" placeholder="write WRONG answer here"></textarea>',5),P={method:"post",enctype:"multipart/form-data"},x={id:"fileUploadBlock"},M=n("label",{for:"file"},"Choose file to upload",-1),T={id:"savePackWindow"},S=n("label",null,"Enter Pack Name",-1),O=n("input",{type:"text",id:"nameOfPack"},null,-1),R=n("label",null,"Access",-1),L=n("div",null,[n("label",null,"Only for me"),n("label",{class:"switch"},[n("input",{type:"checkbox",id:"isGlobalPack"}),n("span",{class:"slider round"})]),n("label",null,"For All")],-1),D={id:"clarifyQuite"},W=n("label",null,"You have unsaved data!",-1);function j(o,e,l,u,s,F){return y(),v("div",{id:"createPacke",onLoad:e[47]||(e[47]=t=>s.createTable())},[n("header",null,[n("button",{onClick:e[0]||(e[0]=t=>s.onBack())},"Back"),n("button",{onClick:e[1]||(e[1]=t=>s.onSaveBtn())},"Save")]),n("main",null,[n("div",E,[B,n("div",{class:"questions",onClick:e[2]||(e[2]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[3]||(e[3]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[4]||(e[4]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[5]||(e[5]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[6]||(e[6]=t=>s.onQN(t))}),f,n("div",{class:"questions",onClick:e[7]||(e[7]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[8]||(e[8]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[9]||(e[9]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[10]||(e[10]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[11]||(e[11]=t=>s.onQN(t))}),C,n("div",{class:"questions",onClick:e[12]||(e[12]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[13]||(e[13]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[14]||(e[14]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[15]||(e[15]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[16]||(e[16]=t=>s.onQN(t))}),k,n("div",{class:"questions",onClick:e[17]||(e[17]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[18]||(e[18]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[19]||(e[19]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[20]||(e[20]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[21]||(e[21]=t=>s.onQN(t))}),b,n("div",{class:"questions",onClick:e[22]||(e[22]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[23]||(e[23]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[24]||(e[24]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[25]||(e[25]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[26]||(e[26]=t=>s.onQN(t))}),N,n("div",{class:"questions",onClick:e[27]||(e[27]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[28]||(e[28]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[29]||(e[29]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[30]||(e[30]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[31]||(e[31]=t=>s.onQN(t))}),q,n("div",{class:"questions",onClick:e[32]||(e[32]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[33]||(e[33]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[34]||(e[34]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[35]||(e[35]=t=>s.onQN(t))}),n("div",{class:"questions",onClick:e[36]||(e[36]=t=>s.onQN(t))})])]),n("footer",null,[n("div",I,[n("button",{onClick:e[37]||(e[37]=t=>s.prevRound())},"<"),A,n("button",{onClick:e[38]||(e[38]=t=>s.nextRound())},">")])]),n("div",w,[Q,n("form",P,[n("div",x,[M,n("input",{type:"file",id:"fileDropInp",name:"file",multiple:"",onInput:e[39]||(e[39]=t=>s.onFileLoad(t))},null,32)])]),n("button",{id:"questionDone",onClick:e[40]||(e[40]=t=>s.onDoneQuestion())},"Done")]),n("div",{id:"bgBlur",onClick:e[41]||(e[41]=t=>s.onCloseQuestion())}),n("div",{id:"bgBlurForSaveWindow",onClick:e[42]||(e[42]=t=>s.onCloseSaveWindow())}),n("div",T,[S,O,R,L,n("button",{onClick:e[43]||(e[43]=t=>s.onSave())},"Save")]),n("div",D,[W,n("button",{onClick:e[44]||(e[44]=t=>s.onSaveBtn())},"Save"),n("button",{onClick:e[45]||(e[45]=t=>s.back())},"Dont Save")]),n("div",{id:"bgBlurQuite",onClick:e[46]||(e[46]=t=>s.onBackCancel())})],32)}const G=g(p,[["render",j]]);export{G as default};
