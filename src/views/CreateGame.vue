

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
<div id="gameSettings">
    <input id="inputNameGame" type="text" placeholder="Game Name">
    <div id="iconsSettingBlock">
            <div id="answerType">
                <svg @click="answerType=true" :class="{displayNone: answerType}" width="44" height="67" viewBox="0 0 44 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 36.2163C8 38.7181 8.42058 41.2397 9.8125 43.3184C11.8916 46.4234 15.8313 50.5775 22 50.5022C27.944 50.4303 31.8669 46.4877 34.0097 43.455C35.5314 41.3013 36 38.6446 36 36.0075V23.5023V21.0023V16.1813C36 13.4242 35.488 10.6381 33.8105 8.45012C31.6279 5.60349 27.7643 2.07082 22 2.00106C16.0037 1.92793 12.1134 5.66509 9.99111 8.59116C8.45631 10.7072 8 13.3462 8 15.9602V21.0023V23.5023V36.2163Z" fill="#145367"/>
                <path d="M2 39.0011C2 39.0011 1.99999 58.0011 22 58.0011M22 58.0011C42 58.0011 42 39.0011 42 39.0011M22 58.0011V64.5022M22 64.5022H12M22 64.5022H32M22 50.5022C15.8313 50.5775 11.8916 46.4234 9.8125 43.3184C8.42058 41.2397 8 38.7181 8 36.2163V23.5023V21.0023V15.9602C8 13.3462 8.45631 10.7072 9.99111 8.59116C12.1134 5.66509 16.0037 1.92793 22 2.00106C27.7643 2.07082 31.6279 5.60349 33.8105 8.45012C35.488 10.6381 36 13.4242 36 16.1813V21.0023V23.5023V36.0075C36 38.6446 35.5314 41.3013 34.0097 43.455C31.8669 46.4877 27.944 50.4303 22 50.5022Z" stroke="#145367" stroke-width="4"/>
                </svg>
    
                <svg @click="answerType=false" :class="{displayNone: !answerType}" :hidden="true" width="50" height="69" viewBox="0 0 50 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 38.2163C11 40.7181 11.4206 43.2397 12.8125 45.3184C14.8916 48.4234 18.8313 52.5775 25 52.5022C30.944 52.4303 34.8669 48.4877 37.0097 45.455C38.5314 43.3013 39 40.6446 39 38.0075V25.5023V23.0023V18.1813C39 15.4242 38.488 12.6381 36.8105 10.4501C34.6279 7.60349 30.7643 4.07082 25 4.00106C19.0037 3.92793 15.1134 7.66509 12.9911 10.5912C11.4563 12.7072 11 15.3462 11 17.9602V23.0023V25.5023V38.2163Z" fill="#145367"/>
                <path d="M5 41.0011C5 41.0011 4.99999 60.0011 25 60.0011M25 60.0011C45 60.0011 45 41.0011 45 41.0011M25 60.0011V66.5022M25 66.5022H15M25 66.5022H35M25 52.5022C18.8313 52.5775 14.8916 48.4234 12.8125 45.3184C11.4206 43.2397 11 40.7181 11 38.2163V25.5023V23.0023V17.9602C11 15.3462 11.4563 12.7072 12.9911 10.5912C15.1134 7.66509 19.0037 3.92793 25 4.00106C30.7643 4.07082 34.6279 7.60349 36.8105 10.4501C38.488 12.6381 39 15.4242 39 18.1813V23.0023V25.5023V38.0075C39 40.6446 38.5314 43.3013 37.0097 45.455C34.8669 48.4877 30.944 52.4303 25 52.5022Z" stroke="#145367" stroke-width="4"/>
                <path d="M48 2L2 67" stroke="#E17BB3" stroke-width="4"/>
                </svg>

            </div>
            <div id="toJoin">
                <svg @click="toJoin=true" :class="{displayNone: toJoin}" width="51" height="69" viewBox="0 0 51 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.625 27.0132H7.8125M13.625 27.0132H19.4375M13.625 27.0132H28.5M7.8125 27.0132H4C2.89543 27.0132 2 27.9086 2 29.0132V64.0132C2 65.1178 2.89543 66.0132 4 66.0132H46.5C47.6046 66.0132 48.5 65.1178 48.5 64.0132V29.0132C48.5 27.9086 47.6046 27.0132 46.5 27.0132H42.6875M7.8125 27.0132C7.8125 27.0132 6 2.01318 25.25 2.01318C44.5 2.01318 42.6875 27.0132 42.6875 27.0132M7.8125 27.0132H28.5M42.6875 27.0132H36.875H31.0625M42.6875 27.0132H31.0625M19.4375 27.0132H22.3438M19.4375 27.0132H28.5M31.0625 27.0132H28.5M22.3438 27.0132H25.25H28.5M22.3438 27.0132H28.5" stroke="#145367" stroke-width="4"/>
                <circle cx="25" cy="42.5132" r="4.5" fill="#145367"/>
                <path d="M24.0293 42.9363C24.2799 41.9232 25.7201 41.9232 25.9707 42.9363L28.5902 53.523C28.7463 54.1535 28.2691 54.7632 27.6195 54.7632H22.3805C21.7309 54.7632 21.2537 54.1536 21.4098 53.523L24.0293 42.9363Z" fill="#145367"/>
                </svg>
    
                <svg @click="toJoin=false" :class="{displayNone: !toJoin}" width="51" height="73" viewBox="0 0 51 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.625 31.0131H7.8125M13.625 31.0131H19.4375M13.625 31.0131H28.5M7.8125 31.0131H4C2.89543 31.0131 2 31.9085 2 33.0131V68.013C2 69.1176 2.89543 70.013 4 70.013H46.5C47.6046 70.013 48.5 69.1176 48.5 68.013V33.0131C48.5 31.9085 47.6046 31.0131 46.5 31.0131H42.6875H36.875H31.0625H28.5M7.8125 31.0131C7.8125 31.0131 -1.0625 14.9999 14.5 5.5C30.0625 -3.99991 42.6875 14 42.6875 14M7.8125 31.0131H28.5M19.4375 31.0131H22.3438M19.4375 31.0131H28.5M22.3438 31.0131H25.25H28.5M22.3438 31.0131H28.5" stroke="#145367" stroke-width="4"/>
                <circle cx="25.5" cy="46.5" r="4.5" fill="#145367"/>
                <path d="M24.5293 46.9231C24.7799 45.9101 26.2201 45.9101 26.4707 46.9231L29.0902 57.5098C29.2463 58.1404 28.7691 58.75 28.1195 58.75H22.8805C22.2309 58.75 21.7537 58.1404 21.9098 57.5098L24.5293 46.9231Z" fill="#145367"/>
                </svg>

            </div>
            <div id="isHost">
                <svg @click="isHost=true" :class="{displayNone: isHost}" width="92" height="62" viewBox="0 0 92 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M75.0121 49C61.299 49 59.5539 36.5358 60.0802 27.1919C60.1153 26.5695 60.7149 26.1453 61.3179 26.3034L71.7164 29.0286C73.877 29.5948 76.1471 29.5948 78.3078 29.0286L88.6961 26.306C89.3025 26.1471 89.9044 26.5768 89.9352 27.203C90.3939 36.5456 88.7197 49 75.0121 49Z" stroke="#145367" stroke-width="4"/>
                <ellipse cx="74.5" cy="14" rx="10.5" ry="11" fill="#145367"/>
                <path d="M17.0121 49C3.29903 49 1.55388 36.5358 2.0802 27.1919C2.11526 26.5695 2.71488 26.1453 3.3179 26.3034L13.7164 29.0286C15.877 29.5948 18.1471 29.5948 20.3078 29.0286L30.6961 26.306C31.3025 26.1471 31.9044 26.5768 31.9352 27.203C32.3939 36.5456 30.7197 49 17.0121 49Z" stroke="#145367" stroke-width="4"/>
                <ellipse cx="16.5" cy="14" rx="10.5" ry="11" fill="#145367"/>
                <path d="M45.5149 60C28.4713 60 26.4174 44.5905 27.1145 33.1878C27.1524 32.5672 27.7495 32.1427 28.3514 32.2984L42.2591 35.8962C44.3945 36.4486 46.6353 36.4486 48.7707 35.8962L62.6682 32.3011C63.2735 32.1445 63.8729 32.5745 63.9063 33.1989C64.5172 44.6005 62.5529 60 45.5149 60Z" fill="transparent" stroke="#145367" stroke-width="4"/>
                <ellipse cx="45" cy="17.5" rx="13" ry="13.5" fill="#145367"/>
                <path d="M55.7835 10.799C50.9284 11.0365 39.5276 11.0959 34.2173 10.799L34.04 2.80269C34.0226 2.01769 34.8752 1.51978 35.5503 1.92071L38.9894 3.96307C39.3041 4.15 39.6959 4.15 40.0106 3.96307L44.4894 1.30324C44.8041 1.11632 45.1959 1.11632 45.5106 1.30324L49.9894 3.96307C50.3041 4.15 50.6959 4.15 51.0106 3.96307L54.4498 1.92062C55.1249 1.5197 55.9775 2.01755 55.9602 2.80252L55.7835 10.799Z" fill="#EBFF6F"/>
                <path d="M34.2173 10.799C39.5276 11.0959 50.9284 11.0365 55.7835 10.799M34.2173 10.799L34.04 2.80269C34.0226 2.01769 34.8752 1.51978 35.5503 1.92071L38.9894 3.96307C39.3041 4.15 39.6959 4.15 40.0106 3.96307L44.4894 1.30324C44.8041 1.11632 45.1959 1.11632 45.5106 1.30324L49.9894 3.96307C50.3041 4.15 50.6959 4.15 51.0106 3.96307L54.4498 1.92062C55.1249 1.5197 55.9775 2.01755 55.9602 2.80252L55.7835 10.799M34.2173 10.799H39.5M55.7835 10.799H50.5M50.5 10.799H45H39.5M50.5 10.799H39.5" stroke="#EBFF6E" stroke-width="2"/>
                </svg>
                
                <svg @click="isHost=false" :class="{displayNone: !isHost}" width="92" height="59" viewBox="0 0 92 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M75.0121 46C61.299 46 59.5539 33.5358 60.0802 24.1919C60.1153 23.5695 60.7149 23.1453 61.3179 23.3034L71.7164 26.0286C73.877 26.5948 76.1471 26.5948 78.3078 26.0286L88.6961 23.306C89.3025 23.1471 89.9044 23.5768 89.9352 24.203C90.3939 33.5456 88.7197 46 75.0121 46Z" stroke="#145367" stroke-width="4"/>
                <ellipse cx="74.5" cy="11" rx="10.5" ry="11" fill="#145367"/>
                <path d="M17.0121 46C3.29903 46 1.55388 33.5358 2.0802 24.1919C2.11526 23.5695 2.71488 23.1453 3.3179 23.3034L13.7164 26.0286C15.877 26.5948 18.1471 26.5948 20.3078 26.0286L30.6961 23.306C31.3025 23.1471 31.9044 23.5768 31.9352 24.203C32.3939 33.5456 30.7197 46 17.0121 46Z" stroke="#145367" stroke-width="4"/>
                <ellipse cx="16.5" cy="11" rx="10.5" ry="11" fill="#145367"/>
                <path d="M45.5149 57C28.4713 57 26.4174 41.5905 27.1145 30.1878C27.1524 29.5672 27.7495 29.1427 28.3514 29.2984L42.2591 32.8962C44.3945 33.4486 46.6353 33.4486 48.7707 32.8962L62.6682 29.3011C63.2735 29.1445 63.8729 29.5745 63.9063 30.1989C64.5172 41.6005 62.5529 57 45.5149 57Z" fill="transparent" stroke="#145367" stroke-width="4"/>
                <ellipse cx="45" cy="14.5" rx="13" ry="13.5" fill="#145367"/>
                </svg>
            </div>
    </div>    
    <div id="wrongAnswerBlockSettings">
        <label id="wrongAnswerLbl">On wrong answer</label>
        <div id="tumblerOnwrongAnswerBlock">
            <label>Minus points</label>
            <label class="switch">
            <input type="checkbox" id="onWrongAnswer">
            <span class="slider round"></span>
            </label>
            <label>Nothing</label>
        </div>
    </div>
    <div id="timeSettingBlock">
        <div class="timesSettingBlock">
            <label>Time on pick question</label>
            <input id="timeOnPickQuestionInp" type="number" placeholder="10">
        </div>
        <div class="timesSettingBlock">
            <label>Time on give answer</label>
            <input id="timeOnGiveAnswerInp" type="number" placeholder="20">
        </div>
    </div>
        <button id="startGame" @click="onStartGame()">Create Game</button>
        </div>
    </div>
</div>
</template>

<style>
#iconsSettingBlock{
    display: flex;
}
.slider{
    border: 5px solid #145367;
    background: transparent;
    width: 70px;
    height: 42px;
}
.slider::before{
    background: #2185A6;
}
input:checked + .slider {
    background: #E17BB3F3;
}
.timesSettingBlock{
    display: grid;
}
.timesSettingBlock > *{
    place-self: center;
}
.timesSettingBlock > input{
    border: 5px solid #145367;
    border-radius: 20px;
    background: transparent;
    text-align: center;
    font-size: 1.5em;
}
#inputNameGame{
    border: 5px solid #145367;
    border-radius: 20px;
    background: transparent;
    text-align: center;
    font-size: 1.5em;
}
#tumblerOnwrongAnswerBlock{
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 30% 40% 30%;
}
#tumblerOnwrongAnswerBlock > *{
    place-self: center;
}
#wrongAnswerBlockSettings{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 40% 60%;
}
#inputNameGame::placeholder{
    font-family: 'Jua', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: white;
    font-size: 1em;
    line-height: 40px;
}
#wrongAnswerLbl{
    text-align: center;
    font-size: 1.2em;
}
#gameSettings{
    display: grid;
    grid-template-columns: 100%;
    height: calc(100% - 12vh);
    grid-template-rows: repeat(5, 20%);
}
#gameSettings > *{
    place-self: center;
}
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
    grid-template-rows: 33% 67%;
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
    align-self: end;
    height: 50%;
    border: none;
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
    background: #E17BB3;
    color: #145367;
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
    grid-template-columns: 100%;
    height: 100%;
    grid-template-rows: 12vh calc(100% - 4.9% - 12vh);
}
#routerLinkCG{
    border: none;
    background: none;
    width: 0;
}
.displayNone{
    display: none;
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
                let answerType = this.answerType ? 'Voice' : 'Text'
                let toJoin = this.toJoin ? 'Opened' : 'Invited' 
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
                let isHost = this.isHost ? 'NoHost' : 'Host' 
                let onWrongAnswer = document.getElementById('onWrongAnswer').checked ? 'Nothing' : 'MinusPoints'
                let timeOnPickQuestion = document.getElementById('timeOnPickQuestionInp').value !== '' ? Math.max(Math.min(Math.abs(Number(document.getElementById('timeOnPickQuestionInp').value)), 60), 5) : 10
                let timeOnGiveAnswer = document.getElementById('timeOnGiveAnswerInp').value !== '' ? Math.max(Math.min(Math.abs(Number(document.getElementById('timeOnGiveAnswerInp').value)), 60), 5) : 20
                if (gameName == undefined && gameName == '' && gameName == null){
                    gameName = 'New Game'
                }
                firebase.data().createGame(gameName, answerType, toJoin, pickedPack, isHost, onWrongAnswer, timeOnPickQuestion, timeOnGiveAnswer)
            },
            onBackToPackPick: function(){
                document.getElementById('createGameHeader').style["grid-template-rows"] = '33% 67%'
                document.getElementById('createGame').style["grid-template-rows"] = '15% 85%'
                document.getElementById('backToPackPick').style.display = 'none'
                document.getElementById('routerLinkCG').style.display = 'block'
                this.closePickPack()
            },
            onRouterLinkCG: function(){
                router.push('/')
            },
            answerType: false,
            toJoin: false,
            isHost: false
        }
    },
}
</script>
