

<template>
<div id="findPack">
    <header>
        <h1>Find Pack</h1>
        <router-link :to="'/'">Back</router-link>
    </header>
    <main>
        <div id="packsBlock">
            <!-- <div class="pack" @click="onPack()">
                <img class="packStar" src="/img/star.png" alt="star">
                <label class="packName">Pack Name</label>
                <label class="packAuthor">Author</label>
                <div class="packCategoriesBlock">
                    <button @click="prevRound($event)">&lt</button>
                    <div class="categoriesRoundBlock">
                        <label class="roundOfCategories">Round 1</label>
                        <div class="packCategories">
                                <label class="packCategoriesLbl">Anime</label>
                                <label class="packCategoriesLbl">Anime</label>
                                <label class="packCategoriesLbl">Anime</label>
                                <label class="packCategoriesLbl">Anime</label>
                                <label class="packCategoriesLbl">Anime</label>
                                <label class="packCategoriesLbl">Anime</label>
                                <label class="packCategoriesLbl">Anime</label>
                                <label class="packCategoriesLbl">Anime</label>
                        </div>
                            <div class="packCategories" style="display: none;">
                                <label class="packCategoriesLbl">Kekw</label>
                                <label class="packCategoriesLbl">Kekw</label>
                                <label class="packCategoriesLbl">Kekw</label>
                                <label class="packCategoriesLbl">Kekw</label>
                                <label class="packCategoriesLbl">Kekw</label>
                                <label class="packCategoriesLbl">Kekw</label>
                                <label class="packCategoriesLbl">Kekw</label>
                                <label class="packCategoriesLbl">Kekw</label>
                        </div>
                    </div>
                    <button @click="nextRound($event)">></button>
                </div>
            </div> -->
            <!-- <packForFind v-for="kek of firebase.data().kekw"/> -->
        </div>
    </main> 

</div>
    <div id="packQuestionForm">
        <button @click="closePackForm()">Back</button>
        <label>Round 1</label>
         <label>Anime</label>
         <ul>
            <li>Question?</li>
             <li>Question?</li>
              <li>Question?</li>
               <li>Question?</li>
                <li>Question?</li>
            
         </ul>

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
let packs = firebase.data().getData().then(() => {console.log(packs)})

function showPacks(){
    // for (const pack  )
}
function nextRound(event){
    event.stopImmediatePropagation()
    let index = Array.from(event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('packCategories')).findIndex(element => element.style.display !== 'none')
    if ((index+1) < Array.from(event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('packCategories')).length){
        event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('packCategories')[index].style.display = 'none'
        event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('packCategories')[index+1].style.display = 'flex'
        event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('roundOfCategories')[0].innerText = `Round ${index+2}`
    }
}
function prevRound(event){
    event.stopImmediatePropagation()
    let index = Array.from(event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('packCategories')).findIndex(element => element.style.display !== 'none')
    if (index > 0){
        event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('packCategories')[index].style.display = 'none'
        event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('packCategories')[index-1].style.display = 'flex'
        event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('roundOfCategories')[0].innerText = `Round ${index}`
    }
}
function onPack(){
    document.getElementById('packQuestionForm').style.display = 'block'
    document.getElementById('findPack').style.display = 'none'
}
function closePackForm(){
        document.getElementById('packQuestionForm').style.display = 'none'
    document.getElementById('findPack').style.display = 'block'
}
</script>