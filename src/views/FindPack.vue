

<template>
<div id="findPack">
    <header>
        <h1>Find Pack</h1>
        <router-link :to="'/'">Back</router-link>
    </header>
    <main>
        <div id="packsBlock">
          
            <!-- <packForFind v-for="kek of firebase.data().kekw"/> -->
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
.pack{
    border: 1px solid black;
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 15% 60% 25%;
    grid-template-rows: 30% 70%;
    grid-template-areas: "packStar packName packAuthor"
    "packStar packCategories packCategories";
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
<script setup>
import firebase from '../firebase.js'
firebase.data().showPacks()


function closePackForm(){
    document.getElementById('packQuestionForm').style.display = 'none'
    while (document.getElementById('packQuestionForm').getElementsByTagName('main')[0].firstElementChild){
        document.getElementById('packQuestionForm').getElementsByTagName('main')[0].firstElementChild.remove()
    }
    document.getElementById('findPack').style.display = 'block'
}
</script>