

<template>
<div id="createGame">
    <h1>Create Game</h1>
    <router-link :to="'/'">Back</router-link>
    <div id="pickPackBlock">
            <Packs 
            v-for="pack in packs"
            :author="pack.author"
            :name="pack.name"
            :rounds="pack.rounds"
            />
    </div>
    <div id="lobbyGame">
        <button @click="closePickPack()">Back</button>
        <div>
    <!-- <label>text / voice; code / opened; gameName; </label> -->
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
        <label>Game Name</label>
        <input id="inputNameGame" type="text">
    </div>
        </div>
        <div id="lobby">

        </div>
        <button id="startGame" @click="onStartGame()">Start Game</button>
    </div>
</div>
</template>

<style>
#inputNameGame{

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
</style>

<script>
import firebase from '../firebase.js'
import Packs from './Packs.vue'
export default {
    components: {
        Packs
    },
    data() {
        return {
            packs: firebase.data().packs,
            closePickPack: function(){
                document.getElementById('lobbyGame').style.display = 'none'
                document.getElementById('pickPackBlock').style.display = 'block'
                if (document.getElementById('lobbyGame').getElementsByClassName('pack')[0] !== undefined) {
                    document.getElementById('lobbyGame').getElementsByClassName('pack')[0].remove()
                } 
            },
            pickedPack: Packs.data().pickedPack,
            onStartGame: function(){
                let gameName = document.getElementById('inputNameGame').value
                let answerType = document.getElementById('answerType').checked ? 'Voice' : 'Text'
                let toJoin = document.getElementById('toJoin').checked ? 'Opened' : 'Invited' 
                let pickedPack = firebase.data().packs[document.getElementById('lobbyGame').getElementsByClassName('packName')[0].innerText]
                if (gameName == undefined && gameName == '' && gameName == null){
                    gameName = 'New Game'
                }
                firebase.data().createGame(gameName, answerType, toJoin, pickedPack)
            }
        }
    }
}
</script>
