

<template>
<div id="createPacke" v-on:load="createTable()">
    <!-- <h1>Create Pack</h1> -->
<header>
    <router-link :to="'/'">Back</router-link>
    <button @click="onSave()">Save</button>
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
                    <textarea id="answerInputArea" rows="4" placeholder="write answer here"></textarea>
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
</div>
</template>


<script setup>
let currentInputPick, round = 1
// let table = document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')[0]
// console.log(table)
let pack = {
    rounds: []
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
    let pack = {
    rounds: []
}
    for (let round = 0; round < Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')).length; round++){
        pack.rounds.push({
            points: [],
            categories: [],
            questions: [],
            answers: []
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
        }
        Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')[round].getElementsByClassName('questionMark')).forEach(element => {
            let index = Array.from(document.getElementById('createPacke').getElementsByClassName('tabelQuestionCreate')[round].getElementsByTagName('div')).indexOf(element.parentElement)
            pack.rounds[round].questions[index] = element.parentElement.getAttribute('question')
            pack.rounds[round].answers[index] = element.parentElement.getAttribute('answer')
        })
    }
    console.log(pack)
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
}
function onCloseQuestion(){
    document.getElementById('makeQuestion').style.display = 'none'
    document.getElementById('bgBlur').style.display = 'none'
    currentInputPick.setAttribute('question', document.getElementById('questionInputArea').value)
    currentInputPick.setAttribute('answer', document.getElementById('answerInputArea').value)
    document.getElementById('questionInputArea').value = ''
    document.getElementById('answerInputArea').value = ''
}
function onDoneQuestion(){
    document.getElementById('makeQuestion').style.display = 'none'
    document.getElementById('bgBlur').style.display = 'none'
    if (currentInputPick.firstElementChild !== null){
        currentInputPick.firstElementChild.remove()
    }
    if (document.getElementById('questionInputArea').value !== '' && document.getElementById('answerInputArea').value !== ''){
        currentInputPick.insertAdjacentHTML('beforeend', `<img class="questionMark" height="100%" style="pointer-events: none;" src="img/questionMark.png"></img>`)
    } else {
        currentInputPick.insertAdjacentHTML('beforeend', `<img height="100%" style="pointer-events: none;" src="img/minus.png"></img>`)
    }
    currentInputPick.setAttribute('question', document.getElementById('questionInputArea').value)
    currentInputPick.setAttribute('answer', document.getElementById('answerInputArea').value)
    document.getElementById('questionInputArea').value = ''
    document.getElementById('answerInputArea').value = ''
}
function prevRound(){
    round--
    round = Math.max(1, round)
    document.getElementById('roundNumber').innerText = `Round ${round}`
    console.log(Array.from(document.getElementById('createPacke').getElementsByTagName('main')[0].getElementsByClassName('tabelQuestionCreate')).length)
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
</script>