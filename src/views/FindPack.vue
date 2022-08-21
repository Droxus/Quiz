

<template>
<div id="findPack">
    <div id="findPackHeader">
        <div id="backAndPageName">
            <router-link :to="'/'">
            <svg class="backBtn" width="71" height="127" viewBox="0 0 151 127" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3 65.6964L4 59.1071L16.3 53.3964L127 2L26.3636 59.9058L127 125L16.3 65.6964Z" fill="#145367"/>
            <path d="M16.3 65.6964L4 59.1071L16.3 53.3964M16.3 65.6964L127 125L16.3 53.3964M16.3 65.6964L127 2L16.3 53.3964" stroke="#145367" stroke-width="3"/>
            <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668L148.962 23.9644L84.5634 61.7001L149.587 103.033L78.1236 65.4737Z" fill="#145367"/>
            <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668M78.1236 65.4737L149.587 103.033L78.0611 57.5668M78.1236 65.4737L148.962 23.9644L78.0611 57.5668" stroke="#145367" stroke-width="3"/>
            </svg>
            </router-link>
            <label class="pageName">Find Pack</label>
        </div>
        <div>

        </div>
    </div>
        <div id="packsBlock">
            <Packs 
            v-for="pack in packs"
            :author="pack.author"
            :name="pack.name"
            :rounds="pack.rounds"
            :roomID="pack.ID"
            />
        </div>

</div>
    <div id="packQuestionForm">
        <header>
            <button id="backBtnFp" @click="closePackForm()"><svg class="backBtn" width="71" height="127" viewBox="0 0 151 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964L127 2L26.3636 59.9058L127 125L16.3 65.6964Z" fill="#145367"/>
                <path d="M16.3 65.6964L4 59.1071L16.3 53.3964M16.3 65.6964L127 125L16.3 53.3964M16.3 65.6964L127 2L16.3 53.3964" stroke="#145367" stroke-width="3"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668L148.962 23.9644L84.5634 61.7001L149.587 103.033L78.1236 65.4737Z" fill="#145367"/>
                <path d="M78.1236 65.4737L70.1832 61.3004L78.0611 57.5668M78.1236 65.4737L149.587 103.033L78.0611 57.5668M78.1236 65.4737L148.962 23.9644L78.0611 57.5668" stroke="#145367" stroke-width="3"/>
                </svg></button>
            <label class="pageName" id="packNameAtQuestionForm"></label>
        </header>
        <main>

        </main>

    </div>
</template>
<style>
#findPack{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 15% 85%;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
}
#findPack::-webkit-scrollbar{
    width: 0px;
    display: none;
}
#findPackHeader{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 30% 70%;
}
#backAndPageName{
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 20% 80%;
    position: sticky;
    top: 0;
}
#packsBlock{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 12vh;
    grid-gap: 2vh;
}
#packQuestionForm{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    scrollbar-width: none;
}
#packQuestionForm::-webkit-scrollbar{
    width: 0;
    display: none;
}
#backBtnFp{
    background: transparent;
    border: none;
    width: 0;
    height: 4.5vh;
    padding: 0;
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
            packs: Object.assign(Object.keys(firebase.data().packs).filter(element => localStorage.getItem('likedPacks') ? JSON.parse(localStorage.getItem('likedPacks')).includes(element) : false).reduce((obj, key) => {obj[key] = firebase.data().packs[key]; return obj}, {}), firebase.data().packs),
            closePackForm: function(){
                document.getElementById('packQuestionForm').style.display = 'none'
                while (document.getElementById('packQuestionForm').getElementsByTagName('main')[0].firstElementChild){
                    document.getElementById('packQuestionForm').getElementsByTagName('main')[0].firstElementChild.remove()
                }
                document.getElementById('findPack').style.display = 'grid'
            },
        }
    }
}

</script>