

<template>
<div id="createPacke" v-on:load="createTable()">
    <!-- <h1>Create Pack</h1> -->
<div class="headerCreateGame">
    <button id="backBtn" @click="onBack()"> <svg class="backBtn" width="70" height="127" viewBox="0 0 151 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3 65.6964L4 59.1071L16.3 53.3964L127 2L26.3636 59.9058L127 125L16.3 65.6964Z" fill="#145367"/>
            <path d="M16.3 65.6964L4 59.1071L16.3 53.3964M16.3 65.6964L127 125L16.3 53.3964M16.3 65.6964L127 2L16.3 53.3964" stroke="#145367" stroke-width="3"/>
            <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668L148.962 23.9644L84.5634 61.7001L149.587 103.033L78.1236 65.4737Z" fill="#145367"/>
            <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668M78.1236 65.4737L149.587 103.033L78.0611 57.5668M78.1236 65.4737L148.962 23.9644L78.0611 57.5668" stroke="#145367" stroke-width="3"/>
            </svg>
    </button>
    <label class="pageName">Create Pack</label>
</div>
<main>
    <div class="tabelQuestionCreate">
        <input disabled="disabled" value="Category">
        <input class="points" value="100" type="number">
        <input class="points" value="200" type="number">
        <input class="points" value="300" type="number">
        <input class="points" value="400" type="number">
        <input class="points" value="500" type="number">
        <input class="category">
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <input class="category">
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <input class="category">
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <input class="category">
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <input class="category">
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <input class="category">
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <input class="category">
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
        <div class="questions" @click="onQN($event)"></div>
    </div>
</main>
    <footer>
        <div id="switchRoundBlock">
            <button @click="prevRound()">&lt</button>
            <label id="roundNumber">Round 1</label>
            <button @click="nextRound()">></button>
        </div>
        <button id="saveBtn" @click="onSaveBtn()">Save</button>
    </footer>
    <div id="makeQuestion">
                    <img draggable="false" class="qnCreateIcons" src="/img/questionMark.png" alt="qnMark">
                    <textarea id="questionInputArea" rows="1" placeholder="write question here"></textarea>
                    <img draggable="false" class="qnCreateIcons" src="/img/ExclamationPoint.png" alt="exclamationPoint">
                    <textarea id="answerInputArea" rows="1" placeholder="write answer here"></textarea>
                    <img draggable="false" class="qnCreateIcons" src="/img/cross.png" alt="cross">
                    <textarea class="wrongAnswerInputArea" rows="1" placeholder="write WRONG answer here"></textarea>
                    <textarea class="wrongAnswerInputArea" rows="1" placeholder="write WRONG answer here"></textarea>
                    <textarea class="wrongAnswerInputArea" rows="1" placeholder="write WRONG answer here"></textarea>
        <form method="post" enctype="multipart/form-data">
            <div @click="onFileChooseClick()" id="fileUploadBlock">
                <label id="chooseFileLbl" for="file">Choose file to upload</label>
                    <input type="file" id="fileDropInp" name="file" multiple @input="onFileLoad($event)">
                    <img draggable="false" id="fileIcon" class="qnCreateIcons" src="/img/fileIcon.png" alt="fileIcon">
            </div>
        </form>
        <button id="questionDone" @click="onDoneQuestion()">Done</button>
    </div>
    <div id="bgBlur" @click="onCloseQuestion()">

    </div>
    <div id="bgBlurForSaveWindow" @click="onCloseSaveWindow()">

    </div>
    <div id="savePackWindow">
        <label>Enter Pack Name</label>
        <input type="text" id="nameOfPack">
        <label>Access</label>
        <div id="pickIsGlobalPackBlock">
            <label>Only for me</label>
            <label class="switch">
            <input type="checkbox" id="isGlobalPack">
            <span class="slider round"></span>
            </label>
            <label>For All</label>
        </div>
        <button id="savePackBtn" @click="onSave()">Save</button>
    </div>
    <div id="clarifyQuite">
        <label>You have unsaved data!</label>
        <div id="unsavedDataBtnsBlock">
            <button @click="back()">Dont Save</button>
            <button @click="onSaveBtn()">Save</button>
        </div>
    </div>
    <div id="bgBlurQuite" @click="onBackCancel()">

    </div>
</div>
</template>

<style>
#createPacke{
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 7% 76% 17%;
}
.tabelQuestionCreate{
    place-self: center;
    width: 96vw;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(8, 1fr);
    border: 4px solid #145367;
    border-radius: 10px;
}
.tabelQuestionCreate > * {
    border: 1px solid #145367;
    width: 100%;
    height: 100%;
    background: transparent;
    text-align: center;
    color: rgb(70, 70, 70);
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    place-items: center;
    place-content: center;
    border-radius: 5px;
    font-family: 'Jua', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: white;
    line-height: 25px;
    outline: none;
}
#makeQuestion{
  grid-template-columns: 100%;
  grid-template-rows: repeat(8, 8%) 26% 10%;
  z-index: 11;
  display: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #76c5ef;
  border-radius: 25px;
  position: absolute;
  height: 80vh;
}
#makeQuestion > textarea::-webkit-scrollbar{
    width: 0;
    display: none;
}
#makeQuestion > textarea::placeholder{
    color: #2185A6;
    text-align: center;
}
main{
    display: grid;
}
footer{
    display: grid;
    justify-items: center;
}
.headerCreateGame{
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 20% 80%;
}
#chooseFileLbl{
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
}
#saveBtn{
    width: 100vw;
    width: 100vw;
    align-self: end;
    height: 80%;
    border: none;
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
    background: #E17BB3;
    color: #145367;
}
#backBtn{
    background: transparent;
    border: none;
    width: 0;
    height: 5vh;
    padding: 0;
}
#questionDone{
    background: #E17BB3;
    border-radius: 25px;
    border: none;
    color: #145367;
}
.qnCreateIcons{
    max-height: 100%;
    place-self: center;
}
#fileUploadBlock{
  width:100%;
  height:100%;
  display: grid;
  place-self: center;
  grid-template-columns: 100%;
  grid-template-rows: 25% 75%;
}
#fileDropInp{
  height: 100%;
  background: transparent;
  border: none;
  display: none;
}
#questionInputArea{
    resize: none;
    background: transparent;
    border: none;
    border-bottom: 1px solid #145367;
    outline: none;
    width: 100%;
    font-size: 24px;
    color: white;
    padding: 5%;
    scrollbar-width: none;
}
#questionInputArea::selection{
    color: black;
}
#answerInputArea{
    resize: none;
    background: transparent;
    border: none;
    border-bottom: 1px solid #145367;
    outline: none;
    width: 100%;
    font-size: 24px;
    color: white;
    padding: 5%;
    scrollbar-width: none;
}
.wrongAnswerInputArea{
    resize: none;
    background: transparent;
    border: none;
    border-bottom: 1px solid #145367;
    outline: none;
    width: 100%;
    font-size: 24px;
    color: white;
    padding: 5%;
    scrollbar-width: none;
}
.wrongAnswerInputArea::placeholder{
  font-size: 18px;
}
#answerInputArea::placeholder{
  font-size: 18px;
}
#questionInputArea::selection{
  color: black;
}
.invisible{
  display: none;
}
#bgBlur{
  z-index: 10;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px) brightness(0.7);
}
#switchRoundBlock{
    display: grid;
    width: 200px;
    grid-template-columns: 30% 40% 30%;
    grid-template-rows: 100%;
}
#switchRoundBlock > *{
    place-self: center;
}
#switchRoundBlock > button{
    background: none;
    color: white;
    border: none;
    font-size: 24px;
    font-weight: bold;
    font-family: unset;
}
#bgBlurForSaveWindow{
  z-index: 10;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px) brightness(0.7);
}
#bgBlurQuite{
  z-index: 0;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px) brightness(0.7);
}
.fileMediaElement{
    max-width: 90%;
    max-height: 90%;
    place-self: center;
}
.minusIcon{
    pointer-events: none;
    max-width: 100%;
    max-height: 100%;
}
.questionMark{
    pointer-events: none;
    max-width: 100%;
    max-height: 100%;
}
#savePackWindow{
    grid-template-columns: 100%;
    grid-template-rows: 20% 20% 15% 15% 30%;
    z-index: 11;
    display: none;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #76c5ef;
    border-radius: 25px;
    position: absolute;
    height: 40vh;
}
#savePackWindow > *{
    text-align: center;
    align-self: center;
}
#savePackBtn{
    background: #E17BB3;
    border-radius: 25px;
    border: none;
    height: 60%;
    align-self: end;
    color: #145367;
}
#pickIsGlobalPackBlock{
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 30% 40% 30%;
    width: 200px;
    place-self: center;
}
#nameOfPack{
    border: 5px solid #145367;
    border-radius: 20px;
    background: transparent;
    text-align: center;
    font-size: 1.5em;
}
#nameOfPack::placeholder{
    font-family: 'Jua', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: white;
    font-size: 1em;
    line-height: 40px;
}
#clarifyQuite{
    grid-template-columns: 100%;
    grid-template-rows: 70% 30%;
    z-index: 11;
    display: none;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #76c5ef;
    border-radius: 25px;
    position: absolute;
    height: 30vh;
}
#unsavedDataBtnsBlock{
    width: 100%;
    height: 100%;
    display: flex;
}
#clarifyQuite > label{
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
}
#unsavedDataBtnsBlock > button:nth-child(even){
    background: #145367;
    flex: 1;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    border: none;
    height: 100%;
    box-sizing: content-box;
}
#unsavedDataBtnsBlock > button:nth-child(odd){
    background: #2185A6;
    flex: 1;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    border: none;
    height: 100%;
    box-sizing: content-box;
}
#fileIcon{
    max-height: 50%;
}
</style>

<script>
import firebase from '../firebase.js'
import router from '../router/index.js'

let currentInputPick, round = 1
let mediaFiles = {
    rounds: []
}
export default {
    data() {
        return {
            back: function(){
                router.push('/')
            },
            onBack: function(){
                if (document.getElementById('createPacke').getElementsByClassName('questionMark').length > 0){
                    document.getElementById('clarifyQuite').style.display = 'grid'
                    document.getElementById('bgBlurQuite').style.display = 'block'
                } else {
                    this.back()
                }
            },
            onBackCancel: function(){
                document.getElementById('clarifyQuite').style.display = 'none'
                document.getElementById('bgBlurQuite').style.display = 'none'
            },
            createTable: function(){
                Array.from(document.getElementById('createPacke').getElementsByTagName('main'))[0].insertAdjacentHTML('beforeend', `
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
                `)
                Array.from(document.getElementsByClassName('questions')).forEach(element => element.addEventListener('click', this.onQN))
            },
            onSave: function(){
                if (document.getElementById('nameOfPack').value !== '' && document.getElementById('nameOfPack').value !== null){
                let pack = {
                rounds: []
            }
            pack.name = document.getElementById('nameOfPack').value
            pack.author = firebase.data().userName
            pack.isGlobal = document.getElementById('isGlobalPack').checked
                for (let round = 0; round < Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')).length; round++){
                    pack.rounds.push({
                        points: [],
                        categories: [],
                        questions: [],
                        answers: [],
                        wrongAnswers: [],
                        mediaFiles: mediaFiles.rounds[round] ? mediaFiles.rounds[round] : [],
                    }) 
                    Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')[round].getElementsByClassName('points')).forEach(element => {
                        pack.rounds[round].points.push(Number(element.value))
                    });
                    for (let category = 0; category < Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')[round].getElementsByClassName('category')).length; category++){
                        if (Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')[round].getElementsByClassName('category'))[category].value !== ''){
                            pack.rounds[round].categories.push(Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')[round].getElementsByClassName('category'))[category].value)
                        } else {
                            if (Array.from(document.getElementsByClassName('questionMark')).length > 0) {
                                let index = Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')[round].getElementsByClassName('questions'))
                                .findIndex(element => element == Array.from(document.getElementsByClassName('questionMark'))[Array.from(document.getElementsByClassName('questionMark')).length-1].parentElement)                
                                if ((index+1) > category * Array.from(document.getElementsByClassName('points')).length){
                                    pack.rounds[round].categories.push(`Category ${category+1}`)
                                }
                            }
                        }
                    }
                    for (let i = 0; i < pack.rounds[round].points.length * pack.rounds[round].categories.length; i++){
                        pack.rounds[round].questions[i] = ''
                        pack.rounds[round].answers[i] = ''
                        pack.rounds[round].wrongAnswers[i] = ''
                    }
                    Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')[round].getElementsByClassName('questionMark')).forEach(element => {
                        let index = Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')[round].getElementsByTagName('div')).indexOf(element.parentElement)
                        pack.rounds[round].questions[index] = element.parentElement.getAttribute('question')
                        pack.rounds[round].answers[index] = element.parentElement.getAttribute('answer')
                        pack.rounds[round].wrongAnswers[index] = Array.from(JSON.parse(element.parentElement.getAttribute('wrongAnswers'))).filter(element => element !== '')
                    })
                }
                firebase.data().setPackData(pack)
                router.push('/')
            } else {
            }
            },
            onQN: function(event){
                document.getElementById('makeQuestion').style.display = 'grid'
                document.getElementById('bgBlur').style.display = 'block'
                document.getElementById('fileIcon').style.display = 'block'
                currentInputPick = event.target
                if (currentInputPick.getAttribute('question') !== null){
                    document.getElementById('questionInputArea').value = currentInputPick.getAttribute('question')
                }
                if (currentInputPick.getAttribute('answer') !== null){
                    document.getElementById('answerInputArea').value = currentInputPick.getAttribute('answer')
                }
                if (currentInputPick.getAttribute('wrongAnswers') !== null){
                    for (let i = 0; i < Array.from(document.getElementsByClassName('wrongAnswerInputArea')).length; i++){
                        let arr = JSON.parse(currentInputPick.getAttribute('wrongAnswers'))
                        Array.from(document.getElementsByClassName('wrongAnswerInputArea'))[i].value = arr[i]
                    }
                }
                let index = Array.from(currentInputPick.parentElement.getElementsByClassName('questions')).findIndex(element => element == currentInputPick)
                if (index !== -1){
                    if (mediaFiles.rounds[round-1] !== undefined){
                        if (mediaFiles.rounds[round-1][index]){
                            if (document.getElementsByClassName('fileMediaElement').length > 0){
                                Array.from(document.getElementsByClassName('fileMediaElement')).forEach(element => element.remove())
                            }
                            switch (mediaFiles.rounds[round-1][index].type.slice(0, 5)) {
                                case 'image':
                                    document.getElementById('fileUploadBlock').insertAdjacentHTML('beforeend', `<img draggable="false" class="fileMediaElement" src="${window.URL.createObjectURL(mediaFiles.rounds[round-1][index])}" alt="photo" id="thisPhoto"></img>`)
                                    break;
                                case 'video':
                                    document.getElementById('fileUploadBlock').insertAdjacentHTML('beforeend', `<video class="fileMediaElement" controls><source src="${window.URL.createObjectURL(mediaFiles.rounds[round-1][index])}"></video>`)
                                    break;
                                case 'audio':
                                    document.getElementById('fileUploadBlock').insertAdjacentHTML('beforeend', `<audio class="fileMediaElement" controls><source src="${window.URL.createObjectURL(mediaFiles.rounds[round-1][index])}"></audio>`)
                                    break;
                            }
                            document.getElementById('fileIcon').style.display = 'none'
                        }
                    }
                }
            },
            onCloseQuestion: function(){
                document.getElementById('makeQuestion').style.display = 'none'
                document.getElementById('bgBlur').style.display = 'none'
                currentInputPick.setAttribute('question', document.getElementById('questionInputArea').value)
                currentInputPick.setAttribute('answer', document.getElementById('answerInputArea').value)
                let arrayWrongAnswers = []
                Array.from(document.getElementsByClassName('wrongAnswerInputArea')).forEach(element => arrayWrongAnswers.push(element.value))
                currentInputPick.setAttribute('wrongAnswers', JSON.stringify(arrayWrongAnswers))
                document.getElementById('questionInputArea').value = ''
                document.getElementById('answerInputArea').value = ''
                document.getElementById('fileDropInp').value = ''
                if (document.getElementsByClassName('fileMediaElement').length > 0){
                    Array.from(document.getElementsByClassName('fileMediaElement')).forEach(element => element.remove())
                }
                Array.from(document.getElementsByClassName('wrongAnswerInputArea')).forEach(element => element.value = '')
            },
            onDoneQuestion: function(){
                document.getElementById('makeQuestion').style.display = 'none'
                document.getElementById('bgBlur').style.display = 'none'
                if (currentInputPick.firstElementChild !== null){
                    currentInputPick.firstElementChild.remove()
                }
                if (document.getElementById('questionInputArea').value !== '' && document.getElementById('answerInputArea').value !== ''){
                    currentInputPick.insertAdjacentHTML('beforeend', `<img draggable="false" class="questionMark" src="img/questionMark.png"></img>`)
                } else {
                    currentInputPick.insertAdjacentHTML('beforeend', `<img draggable="false" class="minusIcon" src="img/minus.png"></img>`)
                }
                currentInputPick.setAttribute('question', document.getElementById('questionInputArea').value)
                currentInputPick.setAttribute('answer', document.getElementById('answerInputArea').value)
                let arrayWrongAnswers = []
                Array.from(document.getElementsByClassName('wrongAnswerInputArea')).forEach(element => arrayWrongAnswers.push(element.value))
                currentInputPick.setAttribute('wrongAnswers', JSON.stringify(arrayWrongAnswers))
                document.getElementById('questionInputArea').value = ''
                document.getElementById('answerInputArea').value = ''
                document.getElementById('fileDropInp').value = ''
                if (document.getElementsByClassName('fileMediaElement').length > 0){
                    Array.from(document.getElementsByClassName('fileMediaElement')).forEach(element => element.remove())
                }
                Array.from(document.getElementsByClassName('wrongAnswerInputArea')).forEach(element => element.value = '')
            },
            prevRound: function(){
                round--
                round = Math.max(1, round)
                document.getElementById('roundNumber').innerText = `Round ${round}`
                if (document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate').length > 1){
                    document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate')[round].style.display = 'none'
                }
                document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate')[round-1].style.display = 'grid'
            },
            nextRound: function(){
                round++
                round = Math.max(1, round)
                document.getElementById('roundNumber').innerText = `Round ${round}`
                if (round > document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate').length){
                    document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate')[round-2].style.display = 'none'
                    this.createTable()
                } else {
                    document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate')[round-2].style.display = 'none'
                    document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate')[round-1].style.display = 'grid'
                }
            },
            onSaveBtn: function(){
                this.onBackCancel()
                document.getElementById('savePackWindow').style.display = 'grid'
                document.getElementById('bgBlurForSaveWindow').style.display = 'block'
            },
            onCloseSaveWindow: function(){
                document.getElementById('savePackWindow').style.display = 'none'
                document.getElementById('bgBlurForSaveWindow').style.display = 'none'
                document.getElementById('nameOfPack').value = ''
            },
            onFileLoad: function(event){
                if (event.target.files[0] !== undefined){
                if (document.getElementsByClassName('fileMediaElement').length > 0){
                    Array.from(document.getElementsByClassName('fileMediaElement')).forEach(element => element.remove())
                }

                    
                    switch (event.target.files[0].type.slice(0, 5)) {
                        case 'image':
                            event.target.parentElement.insertAdjacentHTML('beforeend', `<img draggable="false" class="fileMediaElement" src="${window.URL.createObjectURL(event.target.files[0])}" alt="photo" id="thisPhoto"></img>`)
                            break;
                        case 'video':
                            event.target.parentElement.insertAdjacentHTML('beforeend', `<video class="fileMediaElement" controls><source src="${window.URL.createObjectURL(event.target.files[0])}"></video>`)
                            break;
                        case 'audio':
                            event.target.parentElement.insertAdjacentHTML('beforeend', `<audio class="fileMediaElement" controls><source src="${window.URL.createObjectURL(event.target.files[0])}"></audio>`)
                            break;
                    }
                    document.getElementById('fileIcon').style.display = 'none'
                    if (mediaFiles.rounds == undefined){
                        mediaFiles.rounds = []
                        mediaFiles.rounds[round-1] = Array(35).fill('')
                    }
                    if ( mediaFiles.rounds[round-1] == undefined){
                        mediaFiles.rounds[round-1] = []
                        mediaFiles.rounds[round-1] = Array(35).fill('')
                    }
                    let index = Array.from(currentInputPick.parentElement.getElementsByClassName('questions')).findIndex(element => element == currentInputPick)
                    if (index !== -1){
                        mediaFiles.rounds[round-1][index] = event.target.files[0]
                    }
                }
            },
            onFileChooseClick: function(){
                document.getElementById('fileDropInp').click()
            }
        }
    }
}
</script>