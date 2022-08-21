

<template>
<div id="joinGame">
    <header>
        <div>
            <router-link :to="'/'"><svg class="backBtn" width="70" height="127" viewBox="0 0 151 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964L127 2L26.3636 59.9058L127 125L16.3 65.6964Z" fill="#145367"/>
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964M16.3 65.6964L127 125L16.3 53.3964M16.3 65.6964L127 2L16.3 53.3964" stroke="#145367" stroke-width="3"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668L148.962 23.9644L84.5634 61.7001L149.587 103.033L78.1236 65.4737Z" fill="#145367"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668M78.1236 65.4737L149.587 103.033L78.0611 57.5668M78.1236 65.4737L148.962 23.9644L78.0611 57.5668" stroke="#145367" stroke-width="3"/>
                </svg></router-link>
                <label class="pageName">Join Game</label>
        </div>
            <div>
                <div>
                    <svg class="iconsfiltersJoinGame" @click="answerType=true" :class="{displayNone: answerType}" width="50" height="73" viewBox="0 0 50 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 36.2163C8 38.7181 8.42058 41.2397 9.8125 43.3184C11.8916 46.4234 15.8313 50.5775 22 50.5022C27.944 50.4303 31.8669 46.4877 34.0097 43.455C35.5314 41.3013 36 38.6446 36 36.0075V23.5023V21.0023V16.1813C36 13.4242 35.488 10.6381 33.8105 8.45012C31.6279 5.60349 27.7643 2.07082 22 2.00106C16.0037 1.92793 12.1134 5.66509 9.99111 8.59116C8.45631 10.7072 8 13.3462 8 15.9602V21.0023V23.5023V36.2163Z" fill="#145367"/>
                    <path d="M2 39.0011C2 39.0011 1.99999 58.0011 22 58.0011M22 58.0011C42 58.0011 42 39.0011 42 39.0011M22 58.0011V64.5022M22 64.5022H12M22 64.5022H32M22 50.5022C15.8313 50.5775 11.8916 46.4234 9.8125 43.3184C8.42058 41.2397 8 38.7181 8 36.2163V23.5023V21.0023V15.9602C8 13.3462 8.45631 10.7072 9.99111 8.59116C12.1134 5.66509 16.0037 1.92793 22 2.00106C27.7643 2.07082 31.6279 5.60349 33.8105 8.45012C35.488 10.6381 36 13.4242 36 16.1813V21.0023V23.5023V36.0075C36 38.6446 35.5314 41.3013 34.0097 43.455C31.8669 46.4877 27.944 50.4303 22 50.5022Z" stroke="#145367" stroke-width="4"/>
                    </svg>

                    <svg class="iconsfiltersJoinGame" @click="answerType=false" :class="{displayNone: !answerType}" :hidden="true" width="50" height="73" viewBox="0 0 50 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 36.2163C8 38.7181 8.42058 41.2397 9.8125 43.3184C11.8916 46.4234 15.8313 50.5775 22 50.5022C27.944 50.4303 31.8669 46.4877 34.0097 43.455C35.5314 41.3013 36 38.6446 36 36.0075V23.5023V21.0023V16.1813C36 13.4242 35.488 10.6381 33.8105 8.45012C31.6279 5.60349 27.7643 2.07082 22 2.00106C16.0037 1.92793 12.1134 5.66509 9.99111 8.59116C8.45631 10.7072 8 13.3462 8 15.9602V21.0023V23.5023V36.2163Z" fill="#145367"/>
                    <path d="M2 39.0011C2 39.0011 1.99999 58.0011 22 58.0011M22 58.0011C42 58.0011 42 39.0011 42 39.0011M22 58.0011V64.5022M22 64.5022H12M22 64.5022H32M22 50.5022C15.8313 50.5775 11.8916 46.4234 9.8125 43.3184C8.42058 41.2397 8 38.7181 8 36.2163V23.5023V21.0023V15.9602C8 13.3462 8.45631 10.7072 9.99111 8.59116C12.1134 5.66509 16.0037 1.92793 22 2.00106C27.7643 2.07082 31.6279 5.60349 33.8105 8.45012C35.488 10.6381 36 13.4242 36 16.1813V21.0023V23.5023V36.0075C36 38.6446 35.5314 41.3013 34.0097 43.455C31.8669 46.4877 27.944 50.4303 22 50.5022Z" stroke="#145367" stroke-width="4"/>
                    <path d="M40 4L4 63" stroke="#E17BB3" stroke-width="4"/>
                    </svg>
                </div>
                <div>
                    <svg class="iconsfiltersJoinGame" @click="isHost=true" :class="{displayNone: isHost}" width="92" height="59" viewBox="0 0 92 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75.0121 46C61.299 46 59.5539 33.5358 60.0802 24.1919C60.1153 23.5695 60.7149 23.1453 61.3179 23.3034L71.7164 26.0286C73.877 26.5948 76.1471 26.5948 78.3078 26.0286L88.6961 23.306C89.3025 23.1471 89.9044 23.5768 89.9352 24.203C90.3939 33.5456 88.7197 46 75.0121 46Z" stroke="#145367" stroke-width="4"/>
                    <ellipse cx="74.5" cy="11" rx="10.5" ry="11" fill="#145367"/>
                    <path d="M17.0121 46C3.29903 46 1.55388 33.5358 2.0802 24.1919C2.11526 23.5695 2.71488 23.1453 3.3179 23.3034L13.7164 26.0286C15.877 26.5948 18.1471 26.5948 20.3078 26.0286L30.6961 23.306C31.3025 23.1471 31.9044 23.5768 31.9352 24.203C32.3939 33.5456 30.7197 46 17.0121 46Z" stroke="#145367" stroke-width="4"/>
                    <ellipse cx="16.5" cy="11" rx="10.5" ry="11" fill="#145367"/>
                    <path d="M45.5149 57C28.4713 57 26.4174 41.5905 27.1145 30.1878C27.1524 29.5672 27.7495 29.1427 28.3514 29.2984L42.2591 32.8962C44.3945 33.4486 46.6353 33.4486 48.7707 32.8962L62.6682 29.3011C63.2735 29.1445 63.8729 29.5745 63.9063 30.1989C64.5172 41.6005 62.5529 57 45.5149 57Z" fill="transparent" stroke="#145367" stroke-width="4"/>
                    <ellipse cx="45" cy="14.5" rx="13" ry="13.5" fill="#145367"/>
                    </svg>

                    <svg class="iconsfiltersJoinGame" @click="isHost=false" :class="{displayNone: !isHost}" width="92" height="60" viewBox="0 0 92 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75.0121 47C61.299 47 59.5539 34.5358 60.0802 25.1919C60.1153 24.5695 60.7149 24.1453 61.3179 24.3034L71.7164 27.0286C73.877 27.5948 76.1471 27.5948 78.3078 27.0286L88.6961 24.306C89.3025 24.1471 89.9044 24.5768 89.9352 25.203C90.3939 34.5456 88.7197 47 75.0121 47Z" stroke="#145367" stroke-width="4"/>
                    <ellipse cx="74.5" cy="12" rx="10.5" ry="11" fill="#145367"/>
                    <path d="M17.0121 47C3.29903 47 1.55388 34.5358 2.0802 25.1919C2.11526 24.5695 2.71488 24.1453 3.3179 24.3034L13.7164 27.0286C15.877 27.5948 18.1471 27.5948 20.3078 27.0286L30.6961 24.306C31.3025 24.1471 31.9044 24.5768 31.9352 25.203C32.3939 34.5456 30.7197 47 17.0121 47Z" stroke="#145367" stroke-width="4"/>
                    <ellipse cx="16.5" cy="12" rx="10.5" ry="11" fill="#145367"/>
                    <path d="M45.5149 58C28.4713 58 26.4174 42.5905 27.1145 31.1878C27.1524 30.5672 27.7495 30.1427 28.3514 30.2984L42.2591 33.8962C44.3945 34.4486 46.6353 34.4486 48.7707 33.8962L62.6682 30.3011C63.2735 30.1445 63.8729 30.5745 63.9063 31.1989C64.5172 42.6005 62.5529 58 45.5149 58Z" fill="transparent" stroke="#145367" stroke-width="4"/>
                    <ellipse cx="45" cy="15.5" rx="13" ry="13.5" fill="#145367"/>
                    <path d="M55.7835 10.799C50.9284 11.0365 39.5276 11.0959 34.2173 10.799L34.04 2.80269C34.0226 2.01769 34.8752 1.51978 35.5503 1.92071L38.9894 3.96307C39.3041 4.15 39.6959 4.15 40.0106 3.96307L44.4894 1.30324C44.8041 1.11632 45.1959 1.11632 45.5106 1.30324L49.9894 3.96307C50.3041 4.15 50.6959 4.15 51.0106 3.96307L54.4498 1.92062C55.1249 1.5197 55.9775 2.01755 55.9602 2.80252L55.7835 10.799Z" fill="#EBFF6F"/>
                    <path d="M34.2173 10.799C39.5276 11.0959 50.9284 11.0365 55.7835 10.799M34.2173 10.799L34.04 2.80269C34.0226 2.01769 34.8752 1.51978 35.5503 1.92071L38.9894 3.96307C39.3041 4.15 39.6959 4.15 40.0106 3.96307L44.4894 1.30324C44.8041 1.11632 45.1959 1.11632 45.5106 1.30324L49.9894 3.96307C50.3041 4.15 50.6959 4.15 51.0106 3.96307L54.4498 1.92062C55.1249 1.5197 55.9775 2.01755 55.9602 2.80252L55.7835 10.799M34.2173 10.799H39.5M55.7835 10.799H50.5M50.5 10.799H45H39.5M50.5 10.799H39.5" stroke="#EBFF6E" stroke-width="2"/>
                    </svg>
                </div>
                <div id="searchFilterJoinGame">
                    <input type="text" placeholder="Game Name">
                    <input type="text" placeholder="Host">
                </div>
                <div id="codeToJoinBlock">
                    <input id="codeToJoinGameInp" type="number" pattern="[0-9]{4}" placeholder="Code" size="4">
                    <button @click="onJoinByCodeBtn()">Join</button>
                </div>
            </div>
    </header>
    <main>
        <div id="allGames">
            <GameRooms
            v-for="gameRoom in gameRooms"
            :gameName="gameRoom.name"
            :host="gameRoom.host.name"
            :players="gameRoom.players ? gameRoom.players.length : 0"
            :gameId="gameRoom.ID"
            :joinType="gameRoom.toJoin"
            :isHost="gameRoom.isHost == 'Host'"
            :answerType="gameRoom.answerType == 'Text'"
            />
        </div>
    </main>
</div>
</template>

<style>
.iconsOnGamePick{
    background: white;
    width: 100%;
    height: 100%;
    display: grid;
    border: 5px solid #145367;
    border-top: 8px solid #145367;
    border-bottom: 8px solid #145367;
}
#joinGame{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 15% 85%;
    width: 100vw;
    height: 100vh;
}
header{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 33% 67%;
}
header *{
    color: #145367;
}
header > div:nth-child(1){
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 15% 85%;
}
header > div:nth-child(2){
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 15% 15% 40% 30%;
}
header > div:nth-child(2) > *{
    display: grid;
    place-self: center;
}
#allGames{
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 8vh;
    grid-gap: 2vh;
    overflow: scroll;
    scrollbar-width: none;
}
.gamesOnPick{
    display: grid;
    width: 100%;
    grid-template-rows: 100%;
    grid-template-columns: 15% 15% 40% 30%;
    border: none;
}
.gamesOnPick > *{
    align-self: center;
}
.playersNum{
    justify-self: center;
}
.gamesOnPick:nth-child(odd){
    background: #145367;
}
.gamesOnPick:nth-child(even){
    background: #2185A6;
}
.iconsfiltersJoinGame{
    max-width: 100%;
    max-height: 100%;
}
.gameNameAndHostBlock{
    display: grid;
}
.gameNameAndHostBlock > *{
    margin: 1%;
}
#searchFilterJoinGame > input{
    width: 80%;
    place-self: center;
    border: none;
    height: 80%;
    border: 5px solid #145367;
    border-radius: 20px;
    background: transparent;
}
#searchFilterJoinGame > input::placeholder{
    color: white;
    text-align: center;
}
#codeToJoinBlock{
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 100%;
}
#codeToJoinBlock > *{
    width: 100%;
    border: none;
    background: #145367;
    color: white;
}
#codeToJoinBlock > input::placeholder{
    color: white;
}
#codeToJoinBlock > input{
    background: transparent;
    border: 5px solid #145367;
}
</style>

<script>
import GameRooms from './GameRooms.vue'
import firebase from '../firebase'
export default {
    components: {
        GameRooms
    },
    data() {
        return {
            gameRooms: firebase.data().gameRooms,
            onJoinByCodeBtn: function(){
                firebase.data().joinByCode()
            },
            answerType: false,
            isHost: false
        }
    }
}
</script>
