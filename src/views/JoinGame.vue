

<template>
<div>
    <header>
        <h1>Join Game</h1>
        <router-link :to="'/'">Back</router-link>
        <input id="codeToJoinGameInp" type="number" min="0" max="4" maxlength="4" pattern="[0-9]{4}" placeholder="Code" size="4">
        <button @click="onJoinByCodeBtn()">Join</button>
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
            />
        </div>
    </main>
</div>
</template>

<style>
#allGames{
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 5vh;
}
.gamesOnPick{
    display: grid;
    width: 100%;
    grid-template-rows: 100%;
    grid-template-columns: 50% 30% 20%;
    border: 1px solid black;
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
                if (Object.keys(firebase.data().gameRooms).findIndex(element => element == document.getElementById('codeToJoinGameInp').value) !== -1){
                    firebase.data().joinGameRoom(document.getElementById('codeToJoinGameInp').value)
                }
            }
        }
    }
}
</script>
