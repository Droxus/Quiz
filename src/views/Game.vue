<template>
<div id="game">
    <div id="showBlock">
        <label id="mainLbl"></label>
        <label id="subMainLbl"></label>
    </div>    
    <div id="gameBlock">
        <div id="headerOfGame">
        </div>
        <div id="tableWithQuestions">

        </div>
        <div id="questionBlock">
            <label id="questionLbl"></label>
            <div id="mediaFile"></div>
            <div id="testTypeAnswer"><form></form></div>
            <label id="answerLbl"></label>
            <input id="answerInp" type="text">
            <label id="rightAnswerLbl"></label>
        </div>
        <div id="playersBlock">
            
        </div>
    </div>
    <div id="pauseWindow">
        <label>Game Paused</label>
        <button id="resumeGameBtn" @click="onResumeGame()"><img draggable="false" src="/img/play.png" alt="resume"></button>
    </div>
    <div id="playerChangePointsBlock" @click="closePointchangeWindow($event)">
        <div id="playerChangePoints" @click="$event.stopPropagation()">
            <button @click="onChangePointsInpBtns($event)">+</button>
            <input id="changePointsInp" type="number">
            <button @click="onChangePointsInpBtns($event)">-</button>
        </div>
    </div>
    <div id="announceWinnerBlock" @click="onFinishGameLeave()">
        <label>Winner is</label>
        <label id="winerIsPlayer"></label>
    </div>
</div>
</template>

<script>
import firebase from  '../firebase.js'

let timerOnPickQn
let timer
let intervalTimer
let timerOnAnswer
let indexAnswer
let intervalTimerAnswer
let round = 0
let currPlayerOnChangePoints
function onLeaveBtn(){
    clearTimeout(timerOnPickQn)
    clearTimeout(timerOnAnswer)
    clearInterval(intervalTimer)
    clearInterval(intervalTimerAnswer)
    firebase.data().leaveGame()
}
function onStartGame(){
    let activePlayers = firebase.data().pickedGame.players.filter(element => element.inGame == true)
    if (activePlayers.length > 1){
         firebase.data().startGame()
    }
}

function onIsItRightAnswer(event){
    if (firebase.data().pickedGame.isHost == "NoHost"){
        firebase.data().informVoiting(event.currentTarget.innerText)
    } else {
        firebase.data().hostVoited(event.currentTarget.innerText)
    }
}
function onAnsweredBtn(){
                this.onAnswered
                let answer
                if (firebase.data().pickedGame.gameLine.turn.id !== firebase.data().uid){
                    if (firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers !== undefined && firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers !== null){
                        if (Array.isArray(firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer])){
                            if (firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer].length > 0){
                                let playerAnswer = Array.from(document.getElementsByClassName('answersTest')).find(element => element.value == firebase.data().pickedGame.gameLine.answer.answer)
                                if (playerAnswer){
                                    playerAnswer.parentElement.style.background = '#2185A6'
                                }
                            } else {
                                document.getElementById('answerLbl').innerText = firebase.data().pickedGame.gameLine.answer.answer
                            } 
                        } else {
                                document.getElementById('answerLbl').innerText = firebase.data().pickedGame.gameLine.answer.answer
                        } 
                    } else {
                    document.getElementById('answerLbl').innerText = firebase.data().pickedGame.gameLine.answer.answer
                    }
                } 
                if (firebase.data().pickedGame.gameLine.turn.id == firebase.data().uid){
                    indexAnswer = firebase.data().pickedGame.gameLine.pikedQuestion
                    answer = document.getElementById('answerInp').value
                    if (Array.isArray(firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers)){
                        if (Array.isArray(firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer])){
                            if (firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer].length > 0){
                                answer = Array.from(document.getElementsByClassName('answersTest')).find(element => element.checked === true)
                                answer = answer ? answer.value : false
                            }
                        }
                    } 
                    firebase.data().onAnswer(answer, indexAnswer)
                }
                while (document.getElementById('onAnsweredBtn')){
                    document.getElementById('onAnsweredBtn').remove()
                }
                document.getElementById('answerLbl').innerText = document.getElementById('answerInp').value
                document.getElementById('answerInp').style.display = 'none'
                document.getElementById('answerInp').value = ''
                
                clearTimeout(timerOnPickQn)
                clearTimeout(timerOnAnswer)
                clearInterval(intervalTimer)
                if (firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers !== undefined){
                    if (Array.isArray(firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer])){
                        if (firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer].length > 0){
                            let rightAnswer = Array.from(document.getElementsByClassName('answersTest')).find(element => element.value == firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer])
                            rightAnswer.parentElement.style.background = '#76C5EF'
                        } else {
                            document.getElementById('rightAnswerLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]
                            if (document.getElementsByClassName('fileMediaElement')[0] !== undefined){
                                if (document.getElementsByClassName('fileMediaElement')[0].tagName !== 'IMG'){
                                    document.getElementsByClassName('fileMediaElement')[0].firstElementChild.remove()
                                    document.getElementsByClassName('fileMediaElement')[0].remove()
                                }
                            }
                        }            
                    } else {
                            document.getElementById('rightAnswerLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]
                            if (document.getElementsByClassName('fileMediaElement')[0] !== undefined){
                                if (document.getElementsByClassName('fileMediaElement')[0].tagName !== 'IMG'){
                                    document.getElementsByClassName('fileMediaElement')[0].firstElementChild.remove()
                                document.getElementsByClassName('fileMediaElement')[0].remove()
                                }
                            }
                    }     
                } else {
                    document.getElementById('rightAnswerLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]
                    if (document.getElementsByClassName('fileMediaElement')[0] !== undefined){
                        if (document.getElementsByClassName('fileMediaElement')[0].tagName !== 'IMG'){
                            document.getElementsByClassName('fileMediaElement')[0].firstElementChild.remove()
                        document.getElementsByClassName('fileMediaElement')[0].remove()
                        }
                    }
                }
                if (firebase.data().pickedGame.gameLine.turn.id !== firebase.data().uid){
                    document.getElementById('answerLbl').innerText = firebase.data().pickedGame.gameLine.answer.answer
                }
                if ((firebase.data().pickedGame.isHost == "Host" && firebase.data().pickedGame.host.id == firebase.data().uid) || (firebase.data().pickedGame.isHost == "NoHost" && firebase.data().pickedGame.gameLine.turn.id !== firebase.data().uid)){
                    if (document.getElementsByClassName('markAnswerBtns').length < 1){
                        document.getElementById('questionBlock').insertAdjacentHTML('beforeend', `
                        <div id="chooseRightOrWrongAnswer">
                        <button class="markAnswerBtns" id="wrongAnswerBtn">Wrong</button>
                        <button class="markAnswerBtns" id="rightAnswerBtn">Right</button>
                        </div>
                        `)
                        Array.from(document.getElementsByClassName('markAnswerBtns')).forEach(element => element.addEventListener('click', onIsItRightAnswer))
                    }
                }
            }
            
            function onTestAnswerChoose(event){
                Array.from(event.target.parentElement.parentElement.getElementsByClassName('answersTest')).forEach(element => element.parentElement.style.background = '#2185A6')
                if (event.target.checked === true){
                    event.target.parentElement.style.background = '#145367'
                } else {
                    event.target.parentElement.style.background = '#2185A6'
                }
            }
            function wrongAnswersAddWithRand(){
                let randAnswer = Math.round(Math.random() * Array.from(document.getElementsByClassName('answersTest')).length)
                if (firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers){
                    let wrongAnswers = firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer]
                        if (Array.isArray(firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer])){
                            if (wrongAnswers.length > 0){
                                if (firebase.data().uid == firebase.data().pickedGame.gameLine.turn.id){
                                    firebase.data().informWrongAnswer(randAnswer)
                                }
                            document.getElementById('testTypeAnswer').style.display = 'grid'
                            document.getElementById('testTypeAnswer').getElementsByTagName('form')[0].style.display = 'grid'
                            while (document.getElementById('testTypeAnswer').getElementsByTagName('form')[0].firstElementChild){
                                document.getElementById('testTypeAnswer').getElementsByTagName('form')[0].firstElementChild.remove()
                            }
                            for (let i = 0; i < wrongAnswers.length; i++){
                                document.getElementById('testTypeAnswer').getElementsByTagName('form')[0].insertAdjacentHTML('beforeend', `
                                <label><input type="radio" class="answersTest" name="answers" value="${wrongAnswers[i]}">
                                <i>${wrongAnswers[i]}</i></label>`)
                            }
                            if (randAnswer > (Array.from(document.getElementsByClassName('answersTest')).length-1)){
                                Array.from(document.getElementsByClassName('answersTest'))[randAnswer-1].parentElement.insertAdjacentHTML('afterend', `
                                <label><input type="radio" class="answersTest" name="answers" value="${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}">
                                <i>${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}</i></label>`)
                            } else {
                                Array.from(document.getElementsByClassName('answersTest'))[randAnswer].parentElement.insertAdjacentHTML('beforebegin', `
                                <label><input type="radio" class="answersTest" name="answers" value="${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}">
                                <i>${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}</i></label>`)
                            }
                            Array.from(document.getElementsByClassName('answersTest')).forEach(element => element.addEventListener('click', onTestAnswerChoose))
                            document.getElementById('answerInp').display = 'none'
                            if (document.getElementById('questionBlock') == undefined){
                                document.getElementById('questionBlock').insertAdjacentHTML('beforeend', `<button id="onAnsweredBtn">Answered</button>`)
                            }
                        }   
                    }
                }
            }
             function onSkipRound(){
                if (firebase.data().pickedGame.host.id == firebase.data().uid){
                    if (document.getElementById('questionBlock').style.display !== 'none'){
                        firebase.data().onAnswer(false, indexAnswer)
                        document.getElementById('questionBlock').style.display = 'none'
                        document.getElementById('tableWithQuestions').style.display = 'grid'
                    }
                    firebase.data().nextRound()
                }
            }
export default {
    data() {
        return {
            pickedGame: firebase.data().pickedGame,
            players: firebase.data().pickedGame ? firebase.data().pickedGame.players : null,
            startGame: function(){
                this.showPlayers()
                this.showHeader()
                this.showMain()
                firebase.data().setGameDataListeners()
            },
            showPlayers: function(){
                if (document.getElementById('playersBlock')){
                    while (document.getElementById('playersBlock').firstElementChild) {
                        document.getElementById('playersBlock').firstElementChild.remove()
                    }
                }
                let activePlayers = firebase.data().pickedGame.players.filter(element => element.inGame == true)
                for (let i = 0; i < activePlayers.length; i++){
                    document.getElementById('playersBlock').insertAdjacentHTML('beforeend', `
                        <div class="player">
                        <img draggable="false" class="playerAvatars" src="${activePlayers.icon ? activePlayers.icon : '#'}" alt="Icon">
                        <label class="playersNick">${activePlayers[i].name}</label>
                        <label class="playersPoints">${activePlayers[i].points ? activePlayers[i].points : 0}</label>
                    </div>`)
                }
                Array.from(document.getElementsByClassName('player')).forEach(element => element.addEventListener('click', this.onPlayer))
            },
            updatePlayerPoints: function(){
                let activePlayers = this.players.filter(element => element.inGame == true)
                for (let i = 0; i < activePlayers.length; i++){
                    Array.from(document.getElementsByClassName('playersPoints'))[i].innerText = activePlayers[i].points ? activePlayers[i].points : 0
                }
            },
            onPlayer: function(event){
                if (firebase.data().pickedGame.host.id == firebase.data().uid){
                    currPlayerOnChangePoints = Array.from(document.getElementsByClassName('player')).findIndex(element => element == event.currentTarget)
                    document.getElementById('playerChangePointsBlock').style.display = 'grid'
                    document.getElementById('changePointsInp').value = Number(event.currentTarget.getElementsByClassName('playersPoints')[0].innerText)
                }
            },  
            closePointchangeWindow: function(event){
                event.stopPropagation()
                if (document.getElementById('changePointsInp').value){

                }
                document.getElementById('playerChangePointsBlock').style.display = 'none'
                firebase.data().updatePointsByHost(currPlayerOnChangePoints, Number(document.getElementById('changePointsInp').value))
            },
            onChangePointsInpBtns: function(event){
                if (event.currentTarget.innerText == '+'){
                    document.getElementById('changePointsInp').value !== '' ? document.getElementById('changePointsInp').value = Number(document.getElementById('changePointsInp').value) + 100 : document.getElementById('changePointsInp').value = 100
                } else{
                    document.getElementById('changePointsInp').value !== '' ? document.getElementById('changePointsInp').value = Number(document.getElementById('changePointsInp').value) - 100 : document.getElementById('changePointsInp').value = -100
                }
            },
            showHeader: function(){
                while (document.getElementById('headerOfGame').firstElementChild) {
                document.getElementById('headerOfGame').firstElementChild.remove()
                }
                if (this.pickedGame.host.id == firebase.data().uid){
                    document.getElementById('headerOfGame').insertAdjacentHTML('beforeend', `<button id="leaveBtn"><svg class="backBtn" width="70" height="127" viewBox="0 0 151 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964L127 2L26.3636 59.9058L127 125L16.3 65.6964Z" fill="#145367"/>
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964M16.3 65.6964L127 125L16.3 53.3964M16.3 65.6964L127 2L16.3 53.3964" stroke="#145367" stroke-width="3"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668L148.962 23.9644L84.5634 61.7001L149.587 103.033L78.1236 65.4737Z" fill="#145367"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668M78.1236 65.4737L149.587 103.033L78.0611 57.5668M78.1236 65.4737L148.962 23.9644L78.0611 57.5668" stroke="#145367" stroke-width="3"/>
                </svg></button>`)    
                    if (!this.pickedGame.started){
                        document.getElementById('headerOfGame').insertAdjacentHTML('beforeend', `<button id="startingGame">Start Game</button>`)
                        document.getElementById('startingGame').addEventListener('click', onStartGame)
                        if(this.pickedGame.toJoin == 'Invited'){
                            document.getElementById('headerOfGame').insertAdjacentHTML('beforeend', `<label id="gameCode">${this.pickedGame.ID}</label>`)
                            document.getElementById('gameCode').addEventListener('click', (event) => {
                                navigator.clipboard.writeText(event.target.innerText)
                            })
                        }
                    } else {
                        document.getElementById('headerOfGame').insertAdjacentHTML('beforeend', `
                        <button id="pauseGame"><img draggable="false" src="img/pause.png" alt="pause"></button>
                        <button id="skipQuestion">></button>
                        <button id="skipRound">> ></button>`)
                        document.getElementById('pauseGame').addEventListener('click', this.onPauseGameBtn)
                        document.getElementById('skipQuestion').addEventListener('click', this.onSkipQuestionBtn)
                        document.getElementById('skipRound').addEventListener('click', this.onSkipRoundBtn)
                    }   
                } else {
                    document.getElementById('headerOfGame').insertAdjacentHTML('beforeend', `
                    <button id="leaveBtn"><svg class="backBtn" width="70" height="127" viewBox="0 0 151 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964L127 2L26.3636 59.9058L127 125L16.3 65.6964Z" fill="#145367"/>
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964M16.3 65.6964L127 125L16.3 53.3964M16.3 65.6964L127 2L16.3 53.3964" stroke="#145367" stroke-width="3"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668L148.962 23.9644L84.5634 61.7001L149.587 103.033L78.1236 65.4737Z" fill="#145367"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668M78.1236 65.4737L149.587 103.033L78.0611 57.5668M78.1236 65.4737L148.962 23.9644L78.0611 57.5668" stroke="#145367" stroke-width="3"/>
                </svg></button>
                    `)
                }
                document.getElementById('headerOfGame').insertAdjacentHTML('beforeend', `
                <label id="nowTurnPlayerName"></label>
                <label id="timerForGame"></label>`)
                document.getElementById('leaveBtn').addEventListener('click', onLeaveBtn)
            },
            showMain: function(){  
                if (!document.getElementById('tableWithQuestions').firstElementChild){
                    document.getElementById('tableWithQuestions').insertAdjacentHTML('beforeend', `<input disabled="disabled" value="Category">`)
                    for (let i = 0; i < this.pickedGame.pickedPack.rounds[round].points.length; i++){
                        document.getElementById('tableWithQuestions').insertAdjacentHTML('beforeend', `<div class="points">${this.pickedGame.pickedPack.rounds[round].points[i]}</div>`)
                    }
                    let categoriesLength = this.pickedGame.pickedPack.rounds[round].categories ? this.pickedGame.pickedPack.rounds[round].categories.length : 0
                    for (let i = 0; i < Math.max(Math.min(7, Math.ceil(this.pickedGame.pickedPack.rounds[round].questions.findLastIndex(element => element !== "") / this.pickedGame.pickedPack.rounds[round].points.length)), categoriesLength); i++){
                        if (this.pickedGame.pickedPack.rounds[round].categories !== undefined){
                            document.getElementById('tableWithQuestions').insertAdjacentHTML('beforeend', `<div class="category">${this.pickedGame.pickedPack.rounds[round].categories[i]}</div>`)
                        } else {
                            document.getElementById('tableWithQuestions').insertAdjacentHTML('beforeend', `<div class="category">Category ${i+1}</div>`)
                        }
                        for (let j = 0; j < this.pickedGame.pickedPack.rounds[round].points.length; j++){
                            document.getElementById('tableWithQuestions').insertAdjacentHTML('beforeend', `<div class="qustions"><img draggable="false" class="questionMark" src="img/questionMark.png" alt="?"></div>`)
                        }
                    }
                    Array.from(document.getElementsByClassName('qustions')).forEach(element => element.addEventListener('click', this.onQuestion))
                }
            },
            showGameInfo: function(){
                document.getElementById('showBlock').style.display = 'grid'
                document.getElementById('mainLbl').innerText = firebase.data().pickedGame.name
                document.getElementById('subMainLbl').innerText = firebase.data().pickedGame.host.name
                setTimeout(() => {
                    document.getElementById('mainLbl').innerText = firebase.data().pickedGame.pickedPack.name
                    document.getElementById('subMainLbl').innerText = firebase.data().pickedGame.pickedPack.author
                    setTimeout(() => {
                        document.getElementById('mainLbl').style.display = 'none'
                        document.getElementById('subMainLbl').style.display = 'none'
                        while (document.getElementById('showBlock').firstElementChild){
                            document.getElementById('showBlock').firstElementChild.remove()
                        }
                        if (firebase.data().pickedGame.pickedPack.rounds[0].categories !== undefined){
                            for (let i = 0; i < firebase.data().pickedGame.pickedPack.rounds[0].categories.length; i++){
                                document.getElementById('showBlock').insertAdjacentHTML('beforeend', `<label>${firebase.data().pickedGame.pickedPack.rounds[0].categories[i]}<label>`)
                            }
                        } else {
                            for (let i = 0; i < Array.from(document.getElementsByClassName('category')).length; i++){
                                document.getElementById('showBlock').insertAdjacentHTML('beforeend', `<label>Category ${i+1}<label>`)
                            }
                        }
                        setTimeout(() => {
                                document.getElementById('showBlock').style.display = 'none'
                                if (document.getElementById('startingGame')){
                                    document.getElementById('startingGame').remove()
                                    if (document.getElementById('gameCode')){
                                        document.getElementById('gameCode').remove()
                                    }
                                    document.getElementById('headerOfGame').insertAdjacentHTML('beforeend', `
                                    <button id="pauseGame"><img draggable="false" src="img/pause.png" alt="pause"></button>
                                    <button id="skipQuestion">></button>
                                    <button id="skipRound">> ></button>`)
                                    document.getElementById('pauseGame').addEventListener('click', this.onPauseGameBtn)
                                    document.getElementById('skipQuestion').addEventListener('click', this.onSkipQuestionBtn)
                                    document.getElementById('skipRound').addEventListener('click', this.onSkipRoundBtn)
                                }
    
                        this.nextTurn()  
                        }, 3000)
                    }, 2000)

                }, 2000)

            },
            onPauseGameBtn: function(){
                if (firebase.data().pickedGame.host.id == firebase.data().uid){
                    this.pauseGame
                    firebase.data().pauseGame()
                    Array.from(document.getElementsByClassName('backBtn')[0].children).forEach(element => {element.style.stroke = '#E17BB3'; element.style.fill = '#E17BB3'}) 
                }
            },
            pauseGame: function(){
                if (firebase.data().pickedGame.gameLine.paused){
                    document.getElementById('pauseWindow').style.display = 'grid'
                    document.getElementById('resumeGameBtn').style.display = 'none'
                    clearTimeout(timerOnPickQn)
                    clearTimeout(timerOnAnswer)
                    clearInterval(intervalTimer)
                    clearInterval(intervalTimerAnswer)
                    if (firebase.data().pickedGame.host.id == firebase.data().uid){
                        document.getElementById('resumeGameBtn').style.display = 'block'
                    }
                    if (document.getElementsByClassName('fileMediaElement')[0] !== undefined){
                        if (document.getElementsByClassName('fileMediaElement')[0].tagName !== 'IMG'){
                            document.getElementsByClassName('fileMediaElement')[0].pause()
                        }
                    }
                    Array.from(document.getElementsByClassName('backBtn')[0].children).forEach(element => {element.style.stroke = '#E17BB3'; element.style.fill = '#E17BB3'}) 
                } else {
                    Array.from(document.getElementsByClassName('backBtn')[0].children).forEach(element => {element.style.stroke = '#145367'; element.style.fill = '#145367'}) 
                    document.getElementById('pauseWindow').style.display = 'none'
                    let delay = document.getElementById('timerForGame').innerText
                    if (document.getElementById('tableWithQuestions').style.display !== 'none'){
                        timer = delay
                        intervalTimer = setInterval(() => {
                            timer--
                            document.getElementById('timerForGame').innerText = timer
                        }, 1000)
                        timerOnPickQn = setTimeout(() => {
                            this.pickRandomQuestion()
                            clearInterval(intervalTimer)
                        }, delay * 1000)
                    } else {
                        timer = delay
                        timerOnAnswer = setTimeout(onAnsweredBtn, delay * 1000)
                        intervalTimer = setInterval(() => {
                            timer--
                            document.getElementById('timerForGame').innerText = timer
                        }, 1000)
                    }
                    if (document.getElementsByClassName('fileMediaElement')[0] !== undefined){
                        if (document.getElementsByClassName('fileMediaElement')[0].tagName !== 'IMG'){
                            document.getElementsByClassName('fileMediaElement')[0].play()
                        }
                    }
                }
            },
            onSkipQuestionBtn: function(){
                if (firebase.data().pickedGame.host.id == firebase.data().uid){
                    if (document.getElementById('questionBlock').style.display !== 'none'){
                        firebase.data().onAnswer(false, indexAnswer)
                        document.getElementById('questionBlock').style.display = 'none'
                        document.getElementById('tableWithQuestions').style.display = 'grid'
                        if (Array.from(document.getElementsByClassName('questionMark')).length > 0){
                            firebase.data().nextTurn()
                        } else {
                            onSkipRound()
                        }
                    }
                }
            },
            onSkipRoundBtn: function(){
                if (firebase.data().pickedGame.host.id == firebase.data().uid){
                    if (document.getElementById('questionBlock').style.display !== 'none'){
                        firebase.data().onAnswer(false, indexAnswer)
                        document.getElementById('questionBlock').style.display = 'none'
                        document.getElementById('tableWithQuestions').style.display = 'grid'
                    }
                    firebase.data().nextRound()
                }
            },
            onResumeGame: function(){
                if (firebase.data().pickedGame.host.id == firebase.data().uid){
                    document.getElementById('pauseWindow').style.display = 'none'
                    firebase.data().resumeGame()
                }
            },
            wrongAnswersAdd: function(randAnswer){
                if (firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers){
                    let wrongAnswers = firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer]
                        if (Array.isArray(firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer])){
                            if (wrongAnswers.length > 0){
                                if (firebase.data().uid == firebase.data().pickedGame.gameLine.turn.id){
                                    firebase.data().informWrongAnswer(randAnswer)
                                }
                            document.getElementById('testTypeAnswer').style.display = 'grid'
                            document.getElementById('testTypeAnswer').getElementsByTagName('form')[0].style.display = 'grid'
                            while (document.getElementById('testTypeAnswer').getElementsByTagName('form')[0].firstElementChild){
                                document.getElementById('testTypeAnswer').getElementsByTagName('form')[0].firstElementChild.remove()
                            }
                            for (let i = 0; i < wrongAnswers.length; i++){
                                document.getElementById('testTypeAnswer').getElementsByTagName('form')[0].insertAdjacentHTML('beforeend', `
                                <label><input type="radio" class="answersTest" name="answers" value="${wrongAnswers[i]}">
                                <i>${wrongAnswers[i]}</i></label>`)
                            }
                            if (randAnswer > (Array.from(document.getElementsByClassName('answersTest')).length-1)){
                                if (Array.from(document.getElementsByClassName('answersTest'))[randAnswer-1] !== undefined){
                                    Array.from(document.getElementsByClassName('answersTest'))[randAnswer-1].parentElement.insertAdjacentHTML('afterend', `
                                    <label><input type="radio" class="answersTest" name="answers" value="${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}">
                                    <i>${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}</i></label>`)
                                } else {
                                if (Array.from(document.getElementsByClassName('answersTest'))[randAnswer] !== undefined){
                                    Array.from(document.getElementsByClassName('answersTest'))[randAnswer].parentElement.insertAdjacentHTML('beforebegin', `
                                    <label><input type="radio" class="answersTest" name="answers" value="${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}">
                                    <i>${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}</i></label>`)
                                }
                            }
                            } else {
                                Array.from(document.getElementsByClassName('answersTest'))[randAnswer].parentElement.insertAdjacentHTML('beforebegin', `
                                <label><input type="radio" class="answersTest" name="answers" value="${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}">
                                <i>${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}</i></label>`)
                            }
                            Array.from(document.getElementsByClassName('answersTest')).forEach(element => element.addEventListener('click', onTestAnswerChoose))
                        }   
                    }
                }
            },
            onFinishGameLeave: function(){
                clearTimeout(timerOnPickQn)
                clearTimeout(timerOnAnswer)
                clearInterval(intervalTimer)
                clearInterval(intervalTimerAnswer)
                firebase.data().leaveGame()
            },
            onQuestionPick: function(){
                document.getElementById('nowTurnPlayerName').innerText = firebase.data().pickedGame.gameLine.turn.name
                    clearInterval(intervalTimer)
                    clearTimeout(timerOnPickQn)
                    clearTimeout(timerOnAnswer)
                timer = firebase.data().pickedGame.timeOnPickQuestion
                document.getElementById('timerForGame').innerText = timer
                intervalTimer = setInterval(() => {
                    timer--
                    document.getElementById('timerForGame').innerText = timer
                }, 1000)
                timerOnPickQn = setTimeout(() => {
                    this.pickRandomQuestion()
                    clearInterval(intervalTimer)
                }, firebase.data().pickedGame.timeOnPickQuestion * 1000)
            },
            onQuestion: function(event){
                if (firebase.data().uid == firebase.data().pickedGame.gameLine.turn.id && Array.from(event.currentTarget.getElementsByClassName('questionMark')).length > 0){
                if (document.getElementById('chooseRightOrWrongAnswer')){
                    document.getElementById('chooseRightOrWrongAnswer').remove()
                }
                document.getElementById('rightAnswerLbl').innerText = ''
                document.getElementById('answerLbl').innerText = ''
                clearTimeout(timerOnPickQn)
                clearTimeout(timerOnAnswer)
                clearInterval(intervalTimer)
                timer = firebase.data().pickedGame.timeOnGiveAnswer
                intervalTimer = setInterval(() => {
                    timer--
                    document.getElementById('timerForGame').innerText = timer
                }, 1000)
                
                    indexAnswer = Array.from(document.getElementsByClassName('qustions')).indexOf(event.currentTarget)
                    firebase.data().informPickedQuestion(indexAnswer)
                    document.getElementById('questionBlock').style.display = 'grid'
                    document.getElementById('tableWithQuestions').style.display = 'none'
                    document.getElementById('questionLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].questions[indexAnswer]
                    while (document.getElementById('mediaFile').firstElementChild){
                        document.getElementById('mediaFile').firstElementChild.remove()
                    }
                    if (firebase.data().pickedGame.pickedPack.rounds[round].mediaFiles !== undefined){
                        if (firebase.data().pickedGame.pickedPack.rounds[round].mediaFiles[indexAnswer] !== ''){
                            firebase.data().getQnFile(round, indexAnswer)
                        }
                    }
                    document.getElementById('testTypeAnswer').style.display = 'none'
                    wrongAnswersAddWithRand()
                    document.getElementById('questionBlock').insertAdjacentHTML('beforeend', `<button id="onAnsweredBtn">Answered</button>`)
                    document.getElementById('onAnsweredBtn').addEventListener('click', onAnsweredBtn)
                    if (firebase.data().pickedGame.answerType == 'Text' && Array.from(document.getElementsByClassName('answersTest')).length < 1){
                        document.getElementById('answerInp').style.display = 'block'
                    } else {
                        document.getElementById('answerInp').style.display = 'none'
                    }
                    timerOnAnswer = setTimeout(onAnsweredBtn, firebase.data().pickedGame.timeOnGiveAnswer * 1000)
                    Array.from(document.getElementsByClassName('qustions'))[indexAnswer].removeEventListener('click', this.onQuestion)
                    Array.from(document.getElementsByClassName('qustions'))[indexAnswer].getElementsByClassName('questionMark')[0].remove()
                }
            },
            onGetQuestion: function(){
                if (firebase.data().uid !== firebase.data().pickedGame.gameLine.turn.id){
                    clearTimeout(timerOnPickQn)
                    clearInterval(intervalTimer)
                    clearTimeout(timerOnAnswer)
                    timer = firebase.data().pickedGame.timeOnGiveAnswer
                    intervalTimerAnswer = setInterval(() => {
                        timer--
                        document.getElementById('timerForGame').innerText = timer
                    }, 1000)
                    document.getElementById('questionBlock').style.display = 'grid'
                    document.getElementById('tableWithQuestions').style.display = 'none'
                    if (document.getElementById('chooseRightOrWrongAnswer')){
                        document.getElementById('chooseRightOrWrongAnswer').remove()
                    }
                    document.getElementById('rightAnswerLbl').innerText = ''
                    document.getElementById('answerLbl').innerText = ''
                    indexAnswer = firebase.data().pickedGame.gameLine.pikedQuestion
                    document.getElementById('questionLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].questions[indexAnswer]
                    while (document.getElementById('mediaFile').firstElementChild){
                        document.getElementById('mediaFile').firstElementChild.remove()
                    }
                    if (firebase.data().pickedGame.pickedPack.rounds[round].mediaFiles !== undefined){
                        if (firebase.data().pickedGame.pickedPack.rounds[round].mediaFiles[indexAnswer] !== ''){
                            firebase.data().getQnFile(round, indexAnswer)
                        }
                    }
                    document.getElementById('testTypeAnswer').style.display = 'none'
                    while (document.getElementById('onAnsweredBtn')){
                        document.getElementById('onAnsweredBtn').remove()
                    }
                    document.getElementById('answerInp').style.display = 'none'
                    timerOnAnswer = setTimeout(onAnsweredBtn, firebase.data().pickedGame.timeOnGiveAnswer * 1000)
                    Array.from(document.getElementsByClassName('qustions'))[indexAnswer].removeEventListener('click', this.onQuestion)
                    if (Array.from(document.getElementsByClassName('qustions'))[indexAnswer].getElementsByClassName('questionMark')[0] !== undefined){
                        Array.from(document.getElementsByClassName('qustions'))[indexAnswer].getElementsByClassName('questionMark')[0].remove()
                    }
                }
            },
            nextTurn: function(){
                if (Array.from(document.getElementsByClassName('questionMark')).length > 0){
                    document.getElementById('questionBlock').style.display = 'none'
                    document.getElementById('tableWithQuestions').style.display = 'grid'
                    firebase.data().nextTurn()
                } else {
                    firebase.data().nextRound()
                }
            },
            pickRandomQuestion: function(){
                if (Array.from(document.getElementsByClassName('questionMark')).length > 0){
                    document.getElementById('rightAnswerLbl').innerText = ''
                    let indexQnAnswer = Math.round(Math.random() * (Array.from(document.getElementsByClassName('questionMark')).length - 1))
                    for (let i = 0; i < Array.from(document.getElementsByClassName('qustions')).length; i++){
                        if (Array.from(document.getElementsByClassName('qustions'))[i].getElementsByClassName('questionMark')[0] !== undefined){
                            if (Array.from(document.getElementsByClassName('qustions'))[i].getElementsByClassName('questionMark')[0] == Array.from(document.getElementsByClassName('questionMark'))[indexQnAnswer]){
                                indexAnswer = i
                                break
                            }
                        }
                    }
                if (firebase.data().uid == firebase.data().pickedGame.gameLine.turn.id){
                    if (document.getElementById('chooseRightOrWrongAnswer')){
                        document.getElementById('chooseRightOrWrongAnswer').remove()
                    }
                    document.getElementById('answerLbl').innerText = ''
                    clearTimeout(timerOnPickQn)
                    clearTimeout(timerOnAnswer)
                    clearInterval(intervalTimer)
                    timer = firebase.data().pickedGame.timeOnGiveAnswer
                    intervalTimerAnswer = setInterval(() => {
                    timer--
                    document.getElementById('timerForGame').innerText = timer
                    }, 1000)
                        firebase.data().informPickedQuestion(indexAnswer)
                        document.getElementById('questionBlock').style.display = 'grid'
                        document.getElementById('tableWithQuestions').style.display = 'none'
                        document.getElementById('questionLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].questions[indexAnswer]
                        while (document.getElementById('mediaFile').firstElementChild){
                            document.getElementById('mediaFile').firstElementChild.remove()
                        }
                        if (firebase.data().pickedGame.pickedPack.rounds[round].mediaFiles !== undefined){
                            if (firebase.data().pickedGame.pickedPack.rounds[round].mediaFiles[indexAnswer] !== ''){
                                firebase.data().getQnFile(round, indexAnswer)
                            }
                        }
                        document.getElementById('testTypeAnswer').style.display = 'none'
                        wrongAnswersAddWithRand()
                        document.getElementById('questionBlock').insertAdjacentHTML('beforeend', `<button id="onAnsweredBtn">Answered</button>`)
                        document.getElementById('onAnsweredBtn').addEventListener('click', onAnsweredBtn)
                        if (firebase.data().pickedGame.answerType == 'Text' && Array.from(document.getElementsByClassName('answersTest')).length < 1){
                        document.getElementById('answerInp').style.display = 'block'
                        } else {
                        document.getElementById('answerInp').style.display = 'none'
                        }
                        timerOnAnswer = setTimeout(onAnsweredBtn, firebase.data().pickedGame.timeOnGiveAnswer * 1000)
                        Array.from(document.getElementsByClassName('qustions'))[indexAnswer].removeEventListener('click', this.onQuestion)
                        if (Array.from(document.getElementsByClassName('qustions'))[indexAnswer].getElementsByClassName('questionMark')[0]){
                            Array.from(document.getElementsByClassName('qustions'))[indexAnswer].getElementsByClassName('questionMark')[0].remove()
                        }
                        } else {
                        }
                }

            },
            nextRound: function(){
                clearTimeout(timerOnPickQn)
                clearTimeout(timerOnAnswer)
                clearInterval(intervalTimer)
                clearInterval(intervalTimerAnswer)
                round = firebase.data().pickedGame.gameLine.round
                document.getElementById('showBlock').style.display = 'grid'
                while (document.getElementById('showBlock').firstElementChild){
                    document.getElementById('showBlock').firstElementChild.remove()
                }
                if (firebase.data().pickedGame.pickedPack.rounds[round].categories !== undefined){
                    for (let i = 0; i < firebase.data().pickedGame.pickedPack.rounds[round].categories.length; i++){
                        document.getElementById('showBlock').insertAdjacentHTML('beforeend', `<label>${firebase.data().pickedGame.pickedPack.rounds[round].categories[i]}<label>`)
                    }
                } else {
                    for (let i = 0; i < Array.from(document.getElementsByClassName('category')).length; i++){
                        document.getElementById('showBlock').insertAdjacentHTML('beforeend', `<label>Category ${i+1}<label>`)
                    }
                }
                setTimeout(() => {
                    document.getElementById('showBlock').style.display = 'none'
                    while (document.getElementById('tableWithQuestions').firstElementChild){
                        document.getElementById('tableWithQuestions').firstElementChild.remove()
                    }
                    this.showMain()
                    this.nextTurn()
                }, 3000)
            },
            announceWinner: function(){
                let winner
                for (let i = 0; i < firebase.data().pickedGame.players.length-1; i++){
                    if (firebase.data().pickedGame.players[i].points > firebase.data().pickedGame.players[i+1].points){
                        winner = firebase.data().pickedGame.players[i].name
                    } else {
                        winner = firebase.data().pickedGame.players[i+1].name
                    }
                }
                document.getElementById('announceWinnerBlock').style.display = 'grid'
                document.getElementsByTagName('form')[0].style.display = 'none'
                document.getElementById('winerIsPlayer').innerText = winner
            },
            onAnswered: function(){
                clearTimeout(timerOnPickQn)
                clearTimeout(timerOnAnswer)
                clearInterval(intervalTimer)
                clearInterval(intervalTimerAnswer)
                if (indexAnswer !== undefined && indexAnswer !== null){
                    if (firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers){
                        if (Array.isArray(firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer])){
                            if (firebase.data().pickedGame.gameLine.turn.id !== firebase.data().uid){
                                if (firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer].length > 0){
                                    let playerAnswer = Array.from(document.getElementsByClassName('answersTest')).find(element => element.value == firebase.data().pickedGame.gameLine.answer.answer)
                                    if (playerAnswer !== undefined){
                                        playerAnswer.parentElement.style.background = '#2185A6'
                                    }
                                } else {
                                    document.getElementById('answerLbl').innerText = firebase.data().pickedGame.gameLine.answer.answer
                                } 
                            }
                            if (firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer].length > 0){
                                let rightAnswer = Array.from(document.getElementsByClassName('answersTest')).find(element => element.value == firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer])
                                if (rightAnswer !== undefined){
                                rightAnswer.parentElement.style.background = '#76C5EF'
                                }
                            } else {
                                document.getElementById('rightAnswerLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]
                                if (document.getElementsByClassName('fileMediaElement')[0] !== undefined){
                                    if (document.getElementsByClassName('fileMediaElement')[0].tagName !== 'IMG'){
                                        document.getElementsByClassName('fileMediaElement')[0].firstElementChild.remove()
                                        document.getElementsByClassName('fileMediaElement')[0].remove()
                                    }
                                }
                            }    
                                if (firebase.data().pickedGame.host.id == firebase.data().uid && firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer].length > 0){
                                    setTimeout(() => {
                                        let right = firebase.data().pickedGame.gameLine.answer.answer === firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer] ? 'Right' : 'Wrong'
                                        firebase.data().hostVoited(right)
                                    }, 3000)
                                }
                        } else {
                                    document.getElementById('answerLbl').innerText = firebase.data().pickedGame.gameLine.answer.answer
                                    document.getElementById('rightAnswerLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]
                                    if (document.getElementsByClassName('fileMediaElement')[0] !== undefined){
                                        if (document.getElementsByClassName('fileMediaElement')[0].tagName !== 'IMG'){
                                            document.getElementsByClassName('fileMediaElement')[0].firstElementChild.remove()
                                            document.getElementsByClassName('fileMediaElement')[0].remove()
                                        }
                                    }
                        }
                    } else {
                        document.getElementById('answerLbl').innerText = firebase.data().pickedGame.gameLine.answer.answer
                        document.getElementById('rightAnswerLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]
                        if (document.getElementsByClassName('fileMediaElement')[0] !== undefined){
                            if (document.getElementsByClassName('fileMediaElement')[0].tagName !== 'IMG'){
                                document.getElementsByClassName('fileMediaElement')[0].firstElementChild.remove()
                                document.getElementsByClassName('fileMediaElement')[0].remove()
                            }
                        }
                    }
                    let isWrongAnswersArrZero
                    if (firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers){
                        if (Array.isArray(firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer])){
                            isWrongAnswersArrZero = firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer].length < 1
                        } else {
                            isWrongAnswersArrZero = true
                        }
                    } else {
                         isWrongAnswersArrZero = true
                    }
                    if ((firebase.data().pickedGame.isHost == "Host" && firebase.data().pickedGame.host.id == firebase.data().uid && isWrongAnswersArrZero) || 
                    (firebase.data().pickedGame.isHost == "NoHost" && firebase.data().pickedGame.gameLine.turn.id !== firebase.data().uid && isWrongAnswersArrZero)){
                        if (document.getElementsByClassName('markAnswerBtns').length < 1){
                            document.getElementById('questionBlock').insertAdjacentHTML('beforeend', `
                            <div id="chooseRightOrWrongAnswer">
                            <button class="markAnswerBtns" id="wrongAnswerBtn">Wrong</button>
                            <button class="markAnswerBtns" id="rightAnswerBtn">Right</button>
                            </div>
                            `)
                            Array.from(document.getElementsByClassName('markAnswerBtns')).forEach(element => element.addEventListener('click', onIsItRightAnswer))
                        }
                    }
            }
            },
        }
    }
}
</script>

<style>
#announceWinnerBlock{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, #76C5EF, #69afd4);
    color: black;
    font-size: weight;
    width: 100vw;
    height: 100vh;
}
#announceWinnerBlock *{
    place-self: center;
    font-size: 3em;
}
#playerChangePointsBlock{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(4px) brightness(60%);
    z-index: 10;
    display: none;
}
#playerChangePoints{
    height: 20vh;
    width: 40vw;
    position: absolute;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 20% 60% 20%;
    top: 50%;
    left: 50%;
    z-index: 11;
    transform: translate(-50%, -50%);
}
.questionMark{
    height: 50%;
    pointer-events: none;
}
#questionBlock{
    border: 4px solid #145367;
    border-radius: 10px;
    display: none;
    margin: 0;
    width: 96%;
    height: 100%;
    place-self: center;
    grid-template-columns: 100%;
    grid-template-rows: 10% 60% 8% 8% 8%;
}
#answerLbl{
    color: #2185A6
}
#rightAnswerLbl{
    color: #145367;
}
#chooseRightOrWrongAnswer{
    display: flex;
}
#wrongAnswerBtn{
    flex: 1;
    border: 2px solid #145367;
    border-radius: 5px;
    background: #2185A6;
}
#questionBlock > label {
    text-align: center;
    line-height: 50px;
}
#rightAnswerBtn{
    flex: 1;
    border: 2px solid #145367;
    border-radius: 5px;
    background: #76C5EF;
}
.player{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: calc(100% - 48px) 24px 24px;
    width: 12.5%;
    height: 90%;
}
.playersNick{
    word-break: break-all;
    place-self: center;
    color: #145367;
}
.playersPoints{
    word-break: break-all;
    place-self: center;
    color: white;
}
#answerInp{
    background: transparent;
    border: 4px solid #145367;
    border-radius: 10px;
}
#gameBlock{
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 100%;
    grid-template-rows: 12% 73% 15%;
}
#headerOfGame{
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: 50% 50%;
    grid-template-areas: "leaveBtn space codePause skipQn skipRound"
    "start start start start start";
}
#gameCode{
    grid-area: codePause;
    place-self: center;
}
#pauseGame{
    grid-area: codePause;
    background: none;
    border: none;
}
#questionLbl{
    font-size: 1.5em;
    overflow: hidden;
    color: #145367;
}
#answerLbl{
    font-size: 1.5em;
    overflow: hidden;
    z-index: 1;
}
form{
    z-index: 3;
    grid-template-columns: 50% 50%;
}
form > label{
    place-self: center;
    border: 2px solid #145367;
    background: #2185A6;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#rightAnswerLbl{
    font-size: 1.5em;
    overflow: hidden;
}
#skipQuestion{
    grid-area: skipQn;
    background: none;
    border: none;
    color: white;
    border: none;
    font-size: 24px;
    font-weight: bold;
    font-family: unset;
}
#skipRound{
    grid-area: skipRound;
    background: none;
    border: none;
    color: white;
    border: none;
    font-size: 24px;
    font-weight: bold;
    font-family: unset;
}
#testTypeAnswer > form > div{
    background: #2185A6;
    border-bottom: 1px solid #145367;
    height: 30%;
    font-size: 1.5em;
}
#testTypeAnswer > form > div > label{
    text-align: center;
}
#testTypeAnswer > form > div > input{
}
#startingGame{
    grid-area: start;
    width: 100vw;
    align-self: end;
    height: 50%;
    border: none;
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
    background: #E17BB3;
    color: #145367;
    border-radius: 25px;
    place-self: center;
}
#mediaFile{
    place-self: center;
    width: 100%;
    height: 100%;
}
#mediaFile *{
    max-width: 100%;
    max-height: 100%;
    place-self: center;
    place-items: center;
    place-content: center;
    margin-left: 50%;
    transform: translate(-50%, 0);
}
#onAnsweredBtn{
    position: absolute;
    width: 96vw;
    top: 90%;
    height: 10%;
    margin-left: -5px;
    border: none;
    border-radius: 10px;
    background: #145367;
}
#playersBlock{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
#roundChange{
    display: none;
}
#tableWithQuestions{
  margin: 0;
  width: 96%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 16.67%);
  grid-template-rows: repeat(8, 12.5%);
  place-self: center;
  border: 4px solid #145367;
    border-radius: 10px;
}
#tableWithQuestions > * {
  border: 1px solid #145367;
  width: 100%;
  height: 100%;
  background: transparent;
  font-size: 24px;
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
}
.answersTest{
    display: none;
}
#resumeGameBtn{
    border: none;
    background: transparent;
}
#game{
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 7% 76% 17%;
}
#timerForGame{
    font-size: 2em;
    place-self: center;
    grid-area: start;
}
#showBlock{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #2185A6;
    z-index: 9;
}
#showBlock *{
    place-self: center;
    font-size: 3em;
}
#pauseWindow{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(4px) brightness(60%);
    z-index: 9999;
}
#nowTurnPlayerName{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
#pauseWindow *{
    place-self: center;
    font-size: 3em;
}
#leaveBtn{
    width: 0;
    border: none;
    background: transparent;
}
#playerChangePoints > input{
    background: #2185A6;
    border: none;
    border-radius: 20px;
    font-size: 2em;
    text-align: center;
}
#playerChangePoints > button{
    background: #145367;
    border: none;
    border-radius: 20px;
    font-size: 2em;
}
.playerAvatars{
    max-width: 100%;
    max-height: 100%;
    place-self: center;
    border: 4px solid #145367;
}
@media screen and (max-device-width: 1024px) {
  #tableWithQuestions > * {
      font-size: 12px;
  }
}
@media screen and (min-device-width: 1024px) {
  #tableWithQuestions > * {
      font-size: 24px;
  }
}
</style>