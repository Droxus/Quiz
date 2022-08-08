<template>
            <div class="gamesOnPick" v-if="joinType=='Opened'" @click="onGameJoin($event)" v-bind:gameId="gameId">
                <label>{{gameName}}</label>
                <label>{{host}}</label>
                <label>{{players}}</label>
            </div>
</template>

<script>
import firebase from '../firebase'

export default {
    props: ['gameName', 'host', 'players', 'gameId', 'joinType'],
    data() {
        return {
            onGameJoin: function(event){
                firebase.data().joinGameRoom(event.currentTarget.getAttribute('gameId'))
            }
        }
    }
}
</script>

<style>

</style>

