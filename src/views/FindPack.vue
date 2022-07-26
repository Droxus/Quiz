

<template>
<div id="findPack">
    <header>
        <h1>Find Pack</h1>
        <router-link :to="'/'">Back</router-link>
    </header>
    <main>
        <div id="packsBlock">
            <Packs 
            v-for="pack in packs"
            :author="pack.author"
            :name="pack.name"
            :rounds="pack.rounds"
            />
        </div>
    </main> 

</div>
    <div id="packQuestionForm">
        <header>
            <button @click="closePackForm()">Back</button>
            <label id="packNameAtQuestionForm"></label>
        </header>
        <main>

        </main>

    </div>
</template>
<style>
body{
    overflow-x: hidden;
}
#packsBlock{
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 12vh;
}
#packQuestionForm{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
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
            closePackForm: function(){
                document.getElementById('packQuestionForm').style.display = 'none'
                while (document.getElementById('packQuestionForm').getElementsByTagName('main')[0].firstElementChild){
                    document.getElementById('packQuestionForm').getElementsByTagName('main')[0].firstElementChild.remove()
                }
                document.getElementById('findPack').style.display = 'block'
            }
        }
    }
}

</script>