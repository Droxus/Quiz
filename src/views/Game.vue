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
        <button id="resumeGameBtn" @click="onResumeGame()">Resume</button>
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
function onLeaveBtn(){
    console.log('aa')
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
                                    playerAnswer.parentElement.style.color = 'orange'
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
                            rightAnswer.parentElement.style.color = 'green'
                            console.log(rightAnswer)
                        } else {
                            document.getElementById('rightAnswerLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]
                        }            
                    } else {
                            document.getElementById('rightAnswerLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]
                    }     
                } else {
                    document.getElementById('rightAnswerLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]
                }
                if (firebase.data().pickedGame.gameLine.turn.id !== firebase.data().uid){
                    document.getElementById('answerLbl').innerText = firebase.data().pickedGame.gameLine.answer.answer
                }
                if ((firebase.data().pickedGame.isHost == "Host" && firebase.data().pickedGame.host.id == firebase.data().uid) || (firebase.data().pickedGame.isHost == "NoHost" && firebase.data().pickedGame.gameLine.turn.id !== firebase.data().uid)){
                    if (document.getElementsByClassName('markAnswerBtns').length < 1){
                        document.getElementById('questionBlock').insertAdjacentHTML('beforeend', `
                        <button class="markAnswerBtns" id="wrongAnswerBtn">Wrong</button>
                        <button class="markAnswerBtns" id="rightAnswerBtn">Right</button>
                        `)
                        Array.from(document.getElementsByClassName('markAnswerBtns')).forEach(element => element.addEventListener('click', onIsItRightAnswer))
                    }
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
                            while (document.getElementById('testTypeAnswer').getElementsByTagName('form')[0].firstElementChild){
                                document.getElementById('testTypeAnswer').getElementsByTagName('form')[0].firstElementChild.remove()
                            }
                            for (let i = 0; i < wrongAnswers.length; i++){
                                document.getElementById('testTypeAnswer').getElementsByTagName('form')[0].insertAdjacentHTML('beforeend', `
                                <div><input type="radio" class="answersTest" name="answers" value="${wrongAnswers[i]}">
                                <label>${wrongAnswers[i]}</label></div>`)
                            }
                            if (randAnswer > (Array.from(document.getElementsByClassName('answersTest')).length-1)){
                                Array.from(document.getElementsByClassName('answersTest'))[randAnswer-1].parentElement.insertAdjacentHTML('afterend', `
                                <div><input type="radio" class="answersTest" name="answers" value="${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}">
                                <label>${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}</label></div>`)
                            } else {
                                Array.from(document.getElementsByClassName('answersTest'))[randAnswer].parentElement.insertAdjacentHTML('beforebegin', `
                                <div><input type="radio" class="answersTest" name="answers" value="${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}">
                                <label>${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}</label></div>`)
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
                console.log(this.pickedGame)
                let activePlayers = this.players.filter(element => element.inGame == true)
                console.log(activePlayers)
                for (let i = 0; i < activePlayers.length; i++){
                    document.getElementById('playersBlock').insertAdjacentHTML('beforeend', `
                        <div class="player">
                        <img src="#" alt="Icon">
                        <label class="playersNick">${activePlayers[i].name}</label>
                        <label class="playersPoints">${activePlayers[i].points ? activePlayers[i].points : 0}</label>
                    </div>`)
                }
            },
            showHeader: function(){
                while (document.getElementById('headerOfGame').firstElementChild) {
                document.getElementById('headerOfGame').firstElementChild.remove()
                }
                if (this.pickedGame.host.id == firebase.data().uid){
                    document.getElementById('headerOfGame').insertAdjacentHTML('beforeend', `<button id="leaveBtn">Leave</button>`)    
                    if (!this.pickedGame.started){
                        document.getElementById('headerOfGame').insertAdjacentHTML('beforeend', `<button id="startGame">Start Game</button>`)
                        document.getElementById('startGame').addEventListener('click', onStartGame)
                        if(this.pickedGame.toJoin == 'Invited'){
                            document.getElementById('headerOfGame').insertAdjacentHTML('beforeend', `<label id="gameCode">${this.pickedGame.ID}</label>`)
                            document.getElementById('gameCode').addEventListener('click', (event) => {
                                navigator.clipboard.writeText(event.target.innerText)
                            })
                        }
                    } else {
                        document.getElementById('headerOfGame').insertAdjacentHTML('beforeend', `
                        <button id="pauseGame">Pause</button>
                        <button id="skipQuestion">Skip QN</button>
                        <button id="skipRound">Skip Round</button>`)
                        document.getElementById('pauseGame').addEventListener('click', this.onPauseGameBtn)
                        document.getElementById('skipQuestion').addEventListener('click', this.onSkipQuestionBtn)
                        document.getElementById('skipRound').addEventListener('click', this.onSkipRoundBtn)
                    }   
                } else {
                    document.getElementById('headerOfGame').insertAdjacentHTML('beforeend', `
                    <button id="leaveBtn">Leave</button>
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
                            document.getElementById('tableWithQuestions').insertAdjacentHTML('beforeend', `<div class="qustions"><img class="questionMark" src="/img/questionMark.png" alt="?"></div>`)
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
                                if (document.getElementById('startGame')){
                                    document.getElementById('startGame').remove()
                                    if (document.getElementById('gameCode')){
                                        document.getElementById('gameCode').remove()
                                    }
                                    document.getElementById('headerOfGame').insertAdjacentHTML('beforeend', `
                                    <button id="pauseGame">Pause</button>
                                    <button id="skipQuestion">Skip QN</button>
                                    <button id="skipRound">Skip Round</button>`)
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
                }
            },
            pauseGame: function(){
                if (firebase.data().pickedGame.gameLine.paused){
                    document.getElementById('pauseWindow').style.display = 'grid'
                    document.getElementById('resumeGameBtn').style.display = 'none'
                    console.log(timerOnPickQn, timerOnAnswer, intervalTimer, intervalTimerAnswer)
                    clearTimeout(timerOnPickQn)
                    clearTimeout(timerOnAnswer)
                    clearInterval(intervalTimer)
                    clearInterval(intervalTimerAnswer)
                    if (firebase.data().pickedGame.host.id == firebase.data().uid){
                        document.getElementById('resumeGameBtn').style.display = 'block'
                    }
                } else {
                    document.getElementById('pauseWindow').style.display = 'none'
                    let delay = document.getElementById('timerForGame').innerText
                    if (document.getElementById('tableWithQuestions').style.display !== 'none'){
                        timer = delay
                        intervalTimer = setInterval(() => {
                            timer--
                            document.getElementById('timerForGame').innerText = timer
                        }, 1000)
                        timerOnPickQn = setTimeout(() => {
                            console.log('Sheet')
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
                            while (document.getElementById('testTypeAnswer').getElementsByTagName('form')[0].firstElementChild){
                                document.getElementById('testTypeAnswer').getElementsByTagName('form')[0].firstElementChild.remove()
                            }
                            for (let i = 0; i < wrongAnswers.length; i++){
                                document.getElementById('testTypeAnswer').getElementsByTagName('form')[0].insertAdjacentHTML('beforeend', `
                                <div><input type="radio" class="answersTest" name="answers" value="${wrongAnswers[i]}">
                                <label>${wrongAnswers[i]}</label></div>`)
                            }
                            if (randAnswer > (Array.from(document.getElementsByClassName('answersTest')).length-1)){
                                Array.from(document.getElementsByClassName('answersTest'))[randAnswer-1].parentElement.insertAdjacentHTML('afterend', `
                                <div><input type="radio" class="answersTest" name="answers" value="${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}">
                                <label>${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}</label></div>`)
                            } else {
                                Array.from(document.getElementsByClassName('answersTest'))[randAnswer].parentElement.insertAdjacentHTML('beforebegin', `
                                <div><input type="radio" class="answersTest" name="answers" value="${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}">
                                <label>${firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]}</label></div>`)
                            }
                        }   
                    }
                }
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
                    console.log('Sheet')
                    this.pickRandomQuestion()
                    clearInterval(intervalTimer)
                }, firebase.data().pickedGame.timeOnPickQuestion * 1000)
            },
            onQuestion: function(event){
                if (firebase.data().uid == firebase.data().pickedGame.gameLine.turn.id && Array.from(event.currentTarget.getElementsByClassName('questionMark')).length > 0){
                if (document.getElementsByClassName('markAnswerBtns').length > 0){
                    Array.from(document.getElementsByClassName('markAnswerBtns')).forEach(element => element.remove())
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
                    console.log(indexAnswer)
                    firebase.data().informPickedQuestion(indexAnswer)
                    document.getElementById('questionBlock').style.display = 'grid'
                    document.getElementById('tableWithQuestions').style.display = 'none'
                    document.getElementById('questionLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].questions[indexAnswer]
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
                    if (document.getElementsByClassName('markAnswerBtns').length > 0){
                    Array.from(document.getElementsByClassName('markAnswerBtns')).forEach(element => element.remove())
                    }
                    document.getElementById('rightAnswerLbl').innerText = ''
                    document.getElementById('answerLbl').innerText = ''
                    indexAnswer = firebase.data().pickedGame.gameLine.pikedQuestion
                    document.getElementById('questionLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].questions[indexAnswer]
                    document.getElementById('testTypeAnswer').style.display = 'none'
                    while (document.getElementById('onAnsweredBtn')){
                        document.getElementById('onAnsweredBtn').remove()
                    }
                    document.getElementById('answerInp').style.display = 'none'
                    timerOnAnswer = setTimeout(onAnsweredBtn, firebase.data().pickedGame.timeOnGiveAnswer * 1000)
                    console.log(indexAnswer)
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
                console.log('Question')
                if (Array.from(document.getElementsByClassName('questionMark')).length > 0){
                    indexAnswer = Math.round(Math.random() * (Array.from(document.getElementsByClassName('questionMark')).length - 1))
                if (firebase.data().uid == firebase.data().pickedGame.gameLine.turn.id){
                    if (document.getElementsByClassName('markAnswerBtns').length > 0){
                        Array.from(document.getElementsByClassName('markAnswerBtns')).forEach(element => element.remove())
                    }
                    document.getElementById('answerLbl').innerText = ''
                    clearTimeout(timerOnPickQn)
                    clearTimeout(timerOnAnswer)
                    clearInterval(intervalTimer)
                    timer = firebase.data().pickedGame.timeOnGiveAnswer
                    console.log(timer)
                    intervalTimerAnswer = setInterval(() => {
                    timer--
                    document.getElementById('timerForGame').innerText = timer
                    }, 1000)
                        firebase.data().informPickedQuestion(indexAnswer)
                        console.log(indexAnswer)
                        document.getElementById('questionBlock').style.display = 'grid'
                        document.getElementById('tableWithQuestions').style.display = 'none'
                        console.log(firebase.data().pickedGame.pickedPack.rounds[round].questions)
                        console.log(firebase.data().pickedGame.pickedPack.rounds[round].questions[indexAnswer])
                        document.getElementById('questionLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].questions[indexAnswer]
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
                            console.log('Next Round')
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
                console.log('Winner is', winner)
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
                                        playerAnswer.parentElement.style.color = 'orange'
                                    }
                                } else {
                                    document.getElementById('answerLbl').innerText = firebase.data().pickedGame.gameLine.answer.answer
                                } 
                            }
                            if (firebase.data().pickedGame.pickedPack.rounds[round].wrongAnswers[indexAnswer].length > 0){
                                let rightAnswer = Array.from(document.getElementsByClassName('answersTest')).find(element => element.value == firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer])
                                if (rightAnswer !== undefined){
                                rightAnswer.parentElement.style.color = 'green'
                                }
                            } else {
                                document.getElementById('rightAnswerLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]
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
                        }
                    } else {
                        document.getElementById('answerLbl').innerText = firebase.data().pickedGame.gameLine.answer.answer
                        document.getElementById('rightAnswerLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].answers[indexAnswer]
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
                        console.log(isWrongAnswersArrZero)
                    if ((firebase.data().pickedGame.isHost == "Host" && firebase.data().pickedGame.host.id == firebase.data().uid && isWrongAnswersArrZero) || 
                    (firebase.data().pickedGame.isHost == "NoHost" && firebase.data().pickedGame.gameLine.turn.id !== firebase.data().uid && isWrongAnswersArrZero)){
                        if (document.getElementsByClassName('markAnswerBtns').length < 1){
                            document.getElementById('questionBlock').insertAdjacentHTML('beforeend', `
                            <button class="markAnswerBtns" id="wrongAnswerBtn">Wrong</button>
                            <button class="markAnswerBtns" id="rightAnswerBtn">Right</button>
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
.questionMark{
    height: 50%;
    pointer-events: none;
}
#questionBlock{
    display: none;
    margin: 0;
    width: 96%;
    height: 100%;
    place-self: center;
}
.player{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr, 24px, 24px;
    width: 12.5%;
    height: 50%;
}
.playersNick{
    word-break: break-all;
    place-self: center;
}
.playersPoints{
    word-break: break-all;
    place-self: center;
}
#gameBlock{
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 100%;
    grid-template-rows: 12% 73% 15%;
}
#headerOfGame{

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
}

#tableWithQuestions > * {
  border: 1px solid black;
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
}
#game{
    width: 100vw;
    height: 100vh;
}
#showBlock{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgb(20, 131, 146);
    z-index: 9;
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