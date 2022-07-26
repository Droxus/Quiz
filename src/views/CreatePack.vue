

<template>
<div id="createPacke" v-on:load="createTable()">
    <!-- <h1>Create Pack</h1> -->
<header>
    <button @click="onBack()">Back</button>
    <button @click="onSaveBtn()">Save</button>
</header>
<main>
    <div class="tabelQuestionCreate">
        <input disabled="disabled" value="Category">
        <input class="points" value="100" type="number">
        <input class="points" value="200" type="number">
        <input class="points" value="300" type="number">
        <input class="points" value="400" type="number">
        <input class="points" value="500" type="number">
        <input class="category">
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <input class="category">
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <input class="category">
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <input class="category">
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <input class="category">
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <input class="category">
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <input class="category">
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
    </div>
</main>
    <footer>
        <div id="switchRoundBlock">
            <button @click="prevRound()">&lt</button>
            <label id="roundNumber">Round 1</label>
            <button @click="nextRound()">></button>
        </div>
    </footer>
    <div id="makeQuestion">
                    <textarea id="questionInputArea" rows="12" placeholder="write question here"></textarea>
                    <textarea id="answerInputArea" rows="1" placeholder="write answer here"></textarea>
                    <textarea class="wrongAnswerInputArea" rows="1" placeholder="write WRONG answer here"></textarea>
                    <textarea class="wrongAnswerInputArea" rows="1" placeholder="write WRONG answer here"></textarea>
                    <textarea class="wrongAnswerInputArea" rows="1" placeholder="write WRONG answer here"></textarea>
        <form method="post" enctype="multipart/form-data">
            <div id="fileUploadBlock">
                <label for="file">Choose file to upload</label>
                <input type="file" id="fileDropInp" name="file" multiple>
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
        <div>
            <label>Only for me</label>
            <label class="switch">
            <span class="slider round"></span>
            </label>
            <label>For All</label>
        </div>
        <button @click="onSave()">Save</button>
    </div>
    <div id="clarifyQuite">
        <label>You have unsaved data!</label>
        <button @click="onSaveBtn()">Save</button>
        <button @click="back()">Dont Save</button>
    </div>
    <div id="bgBlurQuite" @click="onBackCancel()">

    </div>
</div>
</template>


<script setup>
import firebase from '../firebase.js'
import router from '../router/index.js'

let currentInputPick, round = 1
function back(){
    router.push('/')
}
function onBack(){
    if (document.getElementById('createPacke').getElementsByClassName('questionMark').length > 0){
        document.getElementById('clarifyQuite').style.display = 'grid'
        document.getElementById('bgBlurQuite').style.display = 'block'
    } else {
        back()
    }
}
function onBackCancel(){
    document.getElementById('clarifyQuite').style.display = 'none'
    document.getElementById('bgBlurQuite').style.display = 'none'
}
function createTable(){
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
    Array.from(document.getElementsByClassName('questions')).forEach(element => element.addEventListener('click', onclick))
}
function onSave(){
    if (document.getElementById('nameOfPack').value !== '' && document.getElementById('nameOfPack').value !== null){
    let pack = {
    rounds: []
}
pack.name = document.getElementById('nameOfPack').value
pack.author = firebase.data().userName
    for (let round = 0; round < Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')).length; round++){
        pack.rounds.push({
            points: [],
            categories: [],
            questions: [],
            answers: [],
            wrongAnswers: [],
        }) 
        Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')[round].getElementsByClassName('points')).forEach(element => {
            pack.rounds[round].points.push(Number(element.value))
        });
        Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')[round].getElementsByClassName('category')).forEach(element => {
            if (element.value !== ''){
                pack.rounds[round].categories.push(element.value)
            }
        });
        for (let i = 0; i < pack.rounds[round].points.length * pack.rounds[round].categories.length; i++){
            pack.rounds[round].questions[i] = ''
            pack.rounds[round].answers[i] = ''
            pack.rounds[round].wrongAnswers[i] = ''
        }
        Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')[round].getElementsByClassName('questionMark')).forEach(element => {
            let index = Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')[round].getElementsByTagName('div')).indexOf(element.parentElement)
            pack.rounds[round].questions[index] = element.parentElement.getAttribute('question')
            pack.rounds[round].answers[index] = element.parentElement.getAttribute('answer')
            pack.rounds[round].wrongAnswers[index] = element.parentElement.getAttribute('wrongAnswers')
        })
    }
    console.log(pack)
    firebase.data().setData(`packs/${pack.name}`, pack)
    router.push('/')
} else {
    console.log('Enter Pack Name')
}
}
function onclick(event){
    document.getElementById('makeQuestion').style.display = 'grid'
    document.getElementById('bgBlur').style.display = 'block'
    currentInputPick = event.target
    if (currentInputPick.getAttribute('question') !== null){
        document.getElementById('questionInputArea').value = currentInputPick.getAttribute('question')
    }
    if (currentInputPick.getAttribute('answer') !== null){
        document.getElementById('answerInputArea').value = currentInputPick.getAttribute('answer')
    }
    if (currentInputPick.getAttribute('wrongAnswers') !== null){
        for (let i = 0; i < Array.from(document.getElementsByClassName('wrongAnswerInputArea')).length; i++){
            let arr = currentInputPick.getAttribute('wrongAnswers').split(',', 3)
            Array.from(document.getElementsByClassName('wrongAnswerInputArea'))[i].value = arr[i]
        }
    }
}
function onCloseQuestion(){
    document.getElementById('makeQuestion').style.display = 'none'
    document.getElementById('bgBlur').style.display = 'none'
    currentInputPick.setAttribute('question', document.getElementById('questionInputArea').value)
    currentInputPick.setAttribute('answer', document.getElementById('answerInputArea').value)
    let arrayWrongAnswers = []
    Array.from(document.getElementsByClassName('wrongAnswerInputArea')).forEach(element => arrayWrongAnswers.push(element.value))
    currentInputPick.setAttribute('wrongAnswers', arrayWrongAnswers)
    document.getElementById('questionInputArea').value = ''
    document.getElementById('answerInputArea').value = ''
    Array.from(document.getElementsByClassName('wrongAnswerInputArea')).forEach(element => element.value = '')
}
function onDoneQuestion(){
    document.getElementById('makeQuestion').style.display = 'none'
    document.getElementById('bgBlur').style.display = 'none'
    if (currentInputPick.firstElementChild !== null){
        currentInputPick.firstElementChild.remove()
    }
    if (document.getElementById('questionInputArea').value !== '' && document.getElementById('answerInputArea').value !== ''){
        currentInputPick.insertAdjacentHTML('beforeend', `<img class="questionMark" height="100%" style="pointer-events: none;" src="/img/questionMark.png"></img>`)
    } else {
        currentInputPick.insertAdjacentHTML('beforeend', `<img height="100%" style="pointer-events: none;" src="/img/minus.png"></img>`)
    }
    currentInputPick.setAttribute('question', document.getElementById('questionInputArea').value)
    currentInputPick.setAttribute('answer', document.getElementById('answerInputArea').value)
    let arrayWrongAnswers = []
    Array.from(document.getElementsByClassName('wrongAnswerInputArea')).forEach(element => arrayWrongAnswers.push(element.value))
    currentInputPick.setAttribute('wrongAnswers', arrayWrongAnswers)
    document.getElementById('questionInputArea').value = ''
    document.getElementById('answerInputArea').value = ''
    Array.from(document.getElementsByClassName('wrongAnswerInputArea')).forEach(element => element.value = '')
}
function prevRound(){
    round--
    round = Math.max(1, round)
    document.getElementById('roundNumber').innerText = `Round ${round}`
    if (document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate').length > 1){
        document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate')[round].style.display = 'none'
    }
    document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate')[round-1].style.display = 'grid'
}
function nextRound(){
    round++
    round = Math.max(1, round)
    document.getElementById('roundNumber').innerText = `Round ${round}`
    if (round > document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate').length){
        document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate')[round-2].style.display = 'none'
        createTable()
    } else {
        document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate')[round-2].style.display = 'none'
        document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate')[round-1].style.display = 'grid'
    }
}
function onSaveBtn(){
    onBackCancel()
    document.getElementById('savePackWindow').style.display = 'grid'
    document.getElementById('bgBlurForSaveWindow').style.display = 'block'
}
function onCloseSaveWindow(){
    document.getElementById('savePackWindow').style.display = 'none'
    document.getElementById('bgBlurForSaveWindow').style.display = 'none'
    document.getElementById('nameOfPack').value = ''
}
</script>