<template>
<div id="game">
<div id="roundChange">

</div>    
<div id="gameBlock">
<div id="headerOfGame">
        <label>{{pickedGame.name}}</label>
</div>
<div id="tableWithQuestions">
    <input disabled="disabled" value="Category">
        <div class="points">100</div>
        <div class="points">200</div>
        <div class="points">300</div>
        <div class="points">400</div>
        <div class="points">500</div>
        <div class="category"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div class="category"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div class="category"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div class="category"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div class="category"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div class="category"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div class="category"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
        <div @click="onclick($event)"></div>
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
export default {
    data() {
        return {
            pickedGame: firebase.data().pickedGame,
            players: firebase.data().pickedGame ? firebase.data().pickedGame.players : null,
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
                document.getElementById('headerOfGame').insertAdjacentHTML('beforeend', `
                <button id="leaveBtn">Leave</button>
                `)
                document.getElementById('leaveBtn').addEventListener('click', onLeaveBtn)
            },
        }
    }
}
</script>

<style>

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