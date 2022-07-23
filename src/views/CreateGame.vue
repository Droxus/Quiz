

<template>
<div id="createGame">
    <h1>Create Game</h1>
    <router-link :to="'/'">Back</router-link>
    <div id="pickPackBlock">
        <div class="packAtPickBlock" @click="onPickPack()">
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
        </div>
    </div>
    <div id="lobbyGame">
        <button @click="closePickPack()">Back</button>
        <div class="packAtPickBlock">
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
        </div>
        <div>
    <!-- <label>text / voice; code / opened; gameName; </label> -->
    <div>
        <label>Text</label>
        <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
        </label>
        <label>Voice</label>
    </div>
        <div>
        <label>Invited</label>
        <label class="switch">
        <input type="checkbox">
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
        <button id="startGame">Start Game</button>
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

<script setup>
    
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
function onPickPack(){
    document.getElementById('lobbyGame').style.display = 'block'
    document.getElementById('pickPackBlock').style.display = 'none'
}
function closePickPack(){
        document.getElementById('lobbyGame').style.display = 'none'
    document.getElementById('pickPackBlock').style.display = 'block'
}
</script>
