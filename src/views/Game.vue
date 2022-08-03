<template>
<div id="game">
<div id="showBlock">
    <label id="mainLbl"></label>
    <label id="subMainLbl"></label>
</div>    
<div id="gameBlock">
<div id="headerOfGame">
        <label>{{pickedGame.name}}</label> 
</div>
<div id="tableWithQuestions">

</div>
<div id="questionBlock">
    <label id="questionLbl"></label>
    <label id="answerLbl"></label>
    <label id="rightAnswerLbl"></label>
    <button id="wrongAnswerBtn" @click="onIsItRightAnswer($event)">Wrong</button>
    <button id="rightAnswerBtn" @click="onIsItRightAnswer($event)">Right</button>
</div>
<div id="playersBlock">
    
</div>
</div>
</div>
</template>

<script>
import firebase from  '../firebase.js'

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
function onQuestion(event){
    document.getElementById('wrongAnswerBtn').style.display = 'none'
    document.getElementById('rightAnswerBtn').style.display = 'none'
    document.getElementById('answerLbl').innerText = ''
    let round = 0
    if (firebase.data().uid == firebase.data().pickedGame.gameLine.turn.id){
        let index = Array.from(document.getElementsByClassName('qustions')).indexOf(event.currentTarget)
        firebase.data().informPickedQuestion(index)
        console.log(index)
        document.getElementById('questionBlock').style.display = 'grid'
        document.getElementById('tableWithQuestions').style.display = 'none'
        console.log(firebase.data().pickedGame.pickedPack.rounds[round].questions)
        console.log(firebase.data().pickedGame.pickedPack.rounds[round].questions[index-1])
        document.getElementById('questionLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].questions[index-1]
        setTimeout(() => {
        document.getElementById('answerLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].answers[index-1]
        }, 5000)
        Array.from(document.getElementsByClassName('qustions'))[index].removeEventListener('click', onQuestion)
        Array.from(document.getElementsByClassName('qustions'))[index].getElementsByClassName('questionMark')[0].remove()
    }
}
let timer
let intervalTimer
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
                while (document.getElementById('playersBlock').firstElementChild) {
                    document.getElementById('playersBlock').firstElementChild.remove()
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
                let round = 0
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
                    Array.from(document.getElementsByClassName('qustions')).forEach(element => element.addEventListener('click', onQuestion))
                }
            },
            showGameInfo: function(){
                document.getElementById('showBlock').style.display = 'grid'
                    document.getElementById('mainLbl').innerText = firebase.data().pickedGame.name
                    document.getElementById('subMainLbl').innerText = firebase.data().pickedGame.host.name
                    setTimeout(() => {
                        document.getElementById('mainLbl').innerText = firebase.data().pickedGame.pickedPack.name
                    document.getElementById('subMainLbl').innerText = firebase.data().pickedGame.pickedPack.author
                }, 2000)
                setTimeout(() => {
                        document.getElementById('showBlock').style.display = 'none'
                        if (document.getElementById('startGame')){
                            document.getElementById('startGame').remove()
                        }
                this.nextTurn()  
                }, 4000)
            },
            onQuestionPick: function(){
                document.getElementById('nowTurnPlayerName').innerText = firebase.data().pickedGame.gameLine.turn.name
                // if (intervalTimer){
                //     clearInterval(intervalTimer)
                // }
                timer = 8
                document.getElementById('timerForGame').innerText = timer
                intervalTimer = setInterval(() => {
                    timer--
                    document.getElementById('timerForGame').innerText = timer
                }, 1000)
                setTimeout(() => {
                    console.log('Sheet')
                    this.pickRandomQuestion
                    clearInterval(intervalTimer)
                }, 8000)
            },
            onGetQuestion: function(){
                if (firebase.data().uid !== firebase.data().pickedGame.gameLine.turn.id){
                let round = 0
                    console.log('gagaga')
                    document.getElementById('questionBlock').style.display = 'grid'
                    document.getElementById('tableWithQuestions').style.display = 'none'
                    document.getElementById('wrongAnswerBtn').style.display = 'none'
                    document.getElementById('rightAnswerBtn').style.display = 'none'
                    document.getElementById('answerLbl').innerText = ''
                    let index = firebase.data().pickedGame.gameLine.pikedQuestion
                    document.getElementById('questionLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].questions[index-1]
                    setTimeout(() => {
                        document.getElementById('answerLbl').innerText = firebase.data().pickedGame.pickedPack.rounds[round].answers[index-1]
                        if ((firebase.data().pickedGame.isHost == "Host" && firebase.data().pickedGame.host.id == firebase.data().uid) || (firebase.data().pickedGame.isHost == "NoHost")){
                            document.getElementById('wrongAnswerBtn').style.display = 'block'
                            document.getElementById('rightAnswerBtn').style.display = 'block'
                        }
                    }, 8000)
                    console.log(index)
                    Array.from(document.getElementsByClassName('qustions'))[index].removeEventListener('click', onQuestion)
                    Array.from(document.getElementsByClassName('qustions'))[index].getElementsByClassName('questionMark')[0].remove()
                }
            },
            nextTurn: function(){
                document.getElementById('questionBlock').style.display = 'none'
                document.getElementById('tableWithQuestions').style.display = 'grid'
                firebase.data().nextTurn()
            },
            pickRandomQuestion: function(){
                console.log('Question')
            },
            onIsItRightAnswer: function(event){
                if (firebase.data().pickedGame.isHost == "NoHost"){
                    firebase.data().informVoiting(event.currentTarget.innerText)
                } else {
                    firebase.data().hostVoited(event.currentTarget.innerText)
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
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
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