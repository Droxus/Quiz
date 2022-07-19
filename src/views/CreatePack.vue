

<template>
<div id="createPacke">
    <!-- <h1>Create Pack</h1> -->
    <router-link :to="'/'">Back</router-link>
    <div class="tabelQuestionCreate">
        <input class="category" disabled="disabled" value="Category">
        <input class="points" value="100" type="number">
        <input class="points" value="200" type="number">
        <input class="points" value="300" type="number">
        <input class="points" value="400" type="number">
        <input class="points" value="500" type="number">
        <input class="category">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input class="category">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input class="category">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input class="category">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input class="category">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input class="category">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input class="category">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
        <input @click="onclick()" type="button">
    </div>
    <div id="makeQuestion">

    </div>
    <div id="bgBlur" @click="onCloseQuestion()">

    </div>
</div>
</template>

<style scoped>
.category{
    /* background: red !important; */
    
}
.points{
    
}
.invisible{
    display: none;
}
#bgBlur{
    z-index: 0;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(4px) brightness(0.7);
}
#createPacke{
    width: 100vw;
    height: 100vh;
}
.tabelQuestionCreate{
    margin: 5vh 2vw;
    width: 96vw;
    height: 76vh;
    display: grid;
    grid-template-columns: repeat(6, 16vw);
    grid-template-rows: repeat(8, 9.5vh);
}

.tabelQuestionCreate > * {
    border: 1px solid black;
    width: 100%;
    height: 100%;
    background: transparent;
    font-size: 24px;
    text-align: center;
    color: rgb(70, 70, 70);
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}
#makeQuestion{
    z-index: 2;
    display: none;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid blue;
    position: absolute;
    min-width: 40vw;
    min-height: 60vh;
}
@media screen and (max-device-width: 1024px) {
    .tabelQuestionCreate > * {
        font-size: 12px;
    }
    #makeQuestion{
        min-width: 60vw;
    }
}
@media screen and (min-device-width: 1024px) {
    .tabelQuestionCreate > * {
        font-size: 24px;
    }
        #makeQuestion{
        min-width: 40vw;
    }
}
</style>
<script setup>
function onclick(){
    document.getElementById('makeQuestion').style.display = 'block'
    document.getElementById('bgBlur').style.display = 'block'
}
function onCloseQuestion(){
    document.getElementById('makeQuestion').style.display = 'none'
    document.getElementById('bgBlur').style.display = 'none'
}
</script>