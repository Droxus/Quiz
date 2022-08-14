

<template>
<div id="createGame">
    <div id="createGameHeader">
        <div id="backAndPageNameCG">
            <button id="routerLinkCG" @click="onRouterLinkCG()">
            <svg class="backBtn" width="50" height="127" viewBox="0 0 151 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964L127 2L26.3636 59.9058L127 125L16.3 65.6964Z" fill="#145367"/>
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964M16.3 65.6964L127 125L16.3 53.3964M16.3 65.6964L127 2L16.3 53.3964" stroke="#145367" stroke-width="3"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668L148.962 23.9644L84.5634 61.7001L149.587 103.033L78.1236 65.4737Z" fill="#145367"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668M78.1236 65.4737L149.587 103.033L78.0611 57.5668M78.1236 65.4737L148.962 23.9644L78.0611 57.5668" stroke="#145367" stroke-width="3"/>
                </svg>
            </button>
            <button @click="onBackToPackPick()" id="backToPackPick">
                <svg class="backBtn" width="50" height="127" viewBox="0 0 151 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964L127 2L26.3636 59.9058L127 125L16.3 65.6964Z" fill="#145367"/>
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964M16.3 65.6964L127 125L16.3 53.3964M16.3 65.6964L127 2L16.3 53.3964" stroke="#145367" stroke-width="3"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668L148.962 23.9644L84.5634 61.7001L149.587 103.033L78.1236 65.4737Z" fill="#145367"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668M78.1236 65.4737L149.587 103.033L78.0611 57.5668M78.1236 65.4737L148.962 23.9644L78.0611 57.5668" stroke="#145367" stroke-width="3"/>
                </svg>
            </button>
            <label class="pageName">Create Game</label>
        </div>
    </div>
    <div id="pickPackBlock">
            <Packs 
            v-for="pack in packs"
            :author="pack.author"
            :name="pack.name"
            :rounds="pack.rounds"
            :roomID="pack.ID"
            />
    </div>
    <div id="lobbyGame">
        <div>
    <div>
        <label>Text</label>
        <label class="switch">
        <input type="checkbox" id="answerType">
        <span class="slider round"></span>
        </label>
        <label>Voice</label>
    </div>
        <div>
        <label>Invited</label>
        <label class="switch">
        <input type="checkbox" id="toJoin">
        <span class="slider round"></span>
        </label>
        <label>Opened</label>
    </div>
    <div>
        <label>Host</label>
        <label class="switch">
        <input type="checkbox" id="isHost">
        <span class="slider round"></span>
        </label>
        <label>No host</label>
    </div>
    <div>
        <label>On wrong answer</label>
        <label>Minus points</label>
        <label class="switch">
        <input type="checkbox" id="onWrongAnswer">
        <span class="slider round"></span>
        </label>
        <label>Nothing</label>
    </div>
    <div>
        <label>Game Name</label>
        <input id="inputNameGame" type="text">
    </div>
    <label>Time on pick question</label>
    <input id="timeOnPickQuestionInp" type="number" placeholder="10">
    <label>Time on give answer</label>
    <input id="timeOnGiveAnswerInp" type="number" placeholder="20">
        </div>
        <div id="lobby">

        </div>
        <button id="startGame" @click="onStartGame()">Start Game</button>
    </div>
</div>
</template>

<style>
#createGame{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 15% 85%;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    background: #76C5EF;
    background: radial-gradient(#8ac9eb, #2b84b3);
}
#createGameHeader{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 30% 70%;
}
#backAndPageNameCG{
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 20% 80%;
}
#inputNameGame{

}
#backToPackPick{
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    width: 5%;
}
#startGame{
    width: 100vw;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {display:none;}

/* The slider */

/* s */
#pickPackBlock{
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 12vh;
    grid-gap: 2vh;
}
.packAtPickBlock{
    border: 1px solid black;
    width: 100vw;
    height: 12vh;
    display: grid;
    grid-template-columns: 15% 60% 25%;
    grid-template-rows: 30% 70%;
    grid-template-areas: "packStar packName packAuthor"
    "packStar packCategories packCategories";
}
#lobbyGame{
    display: none;
}
#routerLinkCG{
    border: none;
    background: none;
    width: 0;
}
</style>

<script>
import firebase from '../firebase.js'
import router from '../router';
import Packs from './Packs.vue'
export default {
    components: {
        Packs
    },
    data() {
        return {
            loaclObj: localStorage.getItem('localPacks') ? JSON.parse(localStorage.getItem('localPacks')) : {},
            packs: Object.assign(localStorage.getItem('localPacks') ? JSON.parse(localStorage.getItem('localPacks')) : {}, firebase.data().packs ? Object.keys(firebase.data().packs)
            .filter(element => localStorage.getItem('localPacks') ? Array.from(JSON.parse(localStorage.getItem('localPacks'))).includes(element) : false).reduce((obj, key) => {obj[key] = firebase.data().packs[key]; return obj}, {}) : {}, 
            firebase.data().packs ? firebase.data().packs: {}),
            closePickPack: function(){
                document.getElementById('lobbyGame').style.display = 'none'
                document.getElementById('pickPackBlock').style.display = 'grid'
                if (document.getElementById('lobbyGame').getElementsByClassName('pack')[0] !== undefined) {
                    document.getElementById('lobbyGame').getElementsByClassName('pack')[0].remove()
                } 
            },
            pickedPack: Packs.data().pickedPack,
            onStartGame: function(){
                let gameName = document.getElementById('inputNameGame').value
                let answerType = document.getElementById('answerType').checked ? 'Voice' : 'Text'
                let toJoin = document.getElementById('toJoin').checked ? 'Opened' : 'Invited' 
                let pickedPack
                if (firebase.data().packs){
                    if (firebase.data().packs[document.getElementById('lobbyGame').getElementsByClassName('pack')[0].getAttribute('roomid')]){
                        pickedPack = firebase.data().packs[document.getElementById('lobbyGame').getElementsByClassName('pack')[0].getAttribute('roomid')]
                    }
                }
                if (JSON.parse(localStorage.getItem('localPacks'))){
                    if (JSON.parse(localStorage.getItem('localPacks'))[document.getElementById('lobbyGame').getElementsByClassName('pack')[0].getAttribute('roomid')]){
                        pickedPack = JSON.parse(localStorage.getItem('localPacks'))[document.getElementById('lobbyGame').getElementsByClassName('pack')[0].getAttribute('roomid')]
                    }
                }
                let isHost = document.getElementById('isHost').checked ? 'NoHost' : 'Host' 
                let onWrongAnswer = document.getElementById('onWrongAnswer').checked ? 'Nothing' : 'MinusPoints'
                let timeOnPickQuestion = document.getElementById('timeOnPickQuestionInp').value !== '' ? Math.max(Math.min(Math.abs(Number(document.getElementById('timeOnPickQuestionInp').value)), 60), 5) : 10
                let timeOnGiveAnswer = document.getElementById('timeOnGiveAnswerInp').value !== '' ? Math.max(Math.min(Math.abs(Number(document.getElementById('timeOnGiveAnswerInp').value)), 60), 5) : 20
                if (gameName == undefined && gameName == '' && gameName == null){
                    gameName = 'New Game'
                }
                firebase.data().createGame(gameName, answerType, toJoin, pickedPack, isHost, onWrongAnswer, timeOnPickQuestion, timeOnGiveAnswer)
            },
            onBackToPackPick: function(){
                document.getElementById('backToPackPick').style.display = 'none'
                document.getElementById('routerLinkCG').style.display = 'block'
                this.closePickPack()
            },
            onRouterLinkCG: function(){
                router.push('/')
            }
        }
    },
}
</script>
