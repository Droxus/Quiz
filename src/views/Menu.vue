<template>
<div id="menu">
    <h1>Menu</h1>
    <ul>
        <li><router-link :to="'/joinGame'">Join Game</router-link></li>
        <li><router-link :to="'/createGame'">Create Game</router-link></li>
        <li><router-link :to="'/findPack'">Find Pack</router-link></li>
        <li><router-link :to="'/createPack'">Create Pack</router-link></li>
        <div>
            <img id="userMenuIcon" width="48px" alt="icon" @click="changeIcon()">
            <input type="text" :value="userName" @change="onUserName($event)">
            <input id="chooseAvatarInp" type="file" @input="onChangeIcon($event)">
        </div>
    </ul>
</div>
</template>

<style scoped>
#chooseAvatarInp{
    display: none;
}
#userMenuIcon{
    width: 64px;
    border-radius: 50%;
}
</style>
<script>
import firebase from '../firebase.js'

    export default {
        data() {
            return {
                userName: firebase.data().userName,
                myIcon: firebase.data().myIcon,
                onUserName: function(event){
                    let newUserName = event.target.value
                    let currUserName = firebase.data().userName
                    if (newUserName.length > 3){
                        firebase.data().setUserName(newUserName)
                    } else {
                        event.target.value = currUserName
                    }
                },
                changeIcon: function(){
                    document.getElementById('chooseAvatarInp').click()
                },
                onChangeIcon: function(event){
                    if (event.target.files[0].type.slice(0, 5) == 'image'){
                    firebase.data().setUserAvatarL(event.target.files[0])
                    document.getElementById('userMenuIcon').src = window.URL.createObjectURL(event.target.files[0])
                    }
                },
            }
        },
        mounted(){
            document.getElementById('userMenuIcon').src = firebase.data().myIcon
        }
    }
</script>