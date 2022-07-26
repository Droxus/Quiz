<template>
<div id="menu">
    <h1>Menu</h1>
    <ul>
        <li><router-link :to="'/joinGame'">Join Game</router-link></li>
        <li><router-link :to="'/createGame'">Create Game</router-link></li>
        <li><router-link :to="'/findPack'">Find Pack</router-link></li>
        <li><router-link :to="'/createPack'">Create Pack</router-link></li>
        <input type="text" :value="userName" @change="onUserName($event)">
    </ul>
</div>
</template>

<style scoped>

</style>
<script>
import firebase from '../firebase.js'

    export default {
        data() {
            return {
                userName: firebase.data().userName,
                onUserName: function(event){
                    let newUserName = event.target.value
                    let currUserName = firebase.data().userName
                    if (newUserName.length > 3){
                        firebase.data().setUserName(newUserName)
                    } else {
                        event.target.value = currUserName
                    }
                }
            }
        }
    }
</script>