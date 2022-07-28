<template>
            <div class="gamesOnPick" @click="onGameJoin($event)" v-bind:gameId="gameId">
                <label>{{gameName}}</label>
                <label>{{host}}</label>
                <label>{{players}}</label>
            </div>
</template>

<script>
import firebase from '../firebase'

export default {
    props: ['gameName', 'host', 'players', 'gameId'],
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

