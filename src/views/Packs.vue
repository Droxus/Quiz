<script>
import PackRounds from './PackRounds.vue'
import firebase from '../firebase.js'
let pickedPack
export default {
        components: {
        PackRounds
    },
    props: ['author', 'name', 'rounds'],
    data() {
        return {
           nextRound: function(event){
            event.stopImmediatePropagation()
            let index = Array.from(event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('packCategories')).findIndex(element => element.style.display !== 'none')
            if ((index+1) < Array.from(event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('packCategories')).length){
                event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('packCategories')[index].style.display = 'none'
                event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('packCategories')[index+1].style.display = 'flex'
                event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('roundOfCategories')[0].innerText = `Round ${index+2}`
            }
},
           prevRound: function(event){
            event.stopImmediatePropagation()
            let index = Array.from(event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('packCategories')).findIndex(element => element.style.display !== 'none')
            if (index > 0){
                event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('packCategories')[index].style.display = 'none'
                event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('packCategories')[index-1].style.display = 'flex'
                event.target.parentElement.getElementsByClassName('categoriesRoundBlock')[0].getElementsByClassName('roundOfCategories')[0].innerText = `Round ${index}`
            }
},
            onPack: function(event){
                switch (event.currentTarget.parentElement.id) {
                    case 'packsBlock':
                                    document.getElementById('packQuestionForm').style.display = 'block'
                                    document.getElementById('findPack').style.display = 'none'
                                    console.log(event.currentTarget)
                                    document.getElementById('packNameAtQuestionForm').textContent = `${event.currentTarget.getElementsByClassName('packName')[0].textContent}`
                                    console.log(firebase.data().packs)
                                    for (let i = 0; i < firebase.data().packs[event.currentTarget.getElementsByClassName('packName')[0].textContent].rounds.length; i++){
                                    Array.from(document.getElementById('packQuestionForm').getElementsByTagName('main'))[0].insertAdjacentHTML('beforeend', `
                                        <h1>Round ${i+1}</h1>
                                    `)
                                    if (firebase.data().packs[event.currentTarget.getElementsByClassName('packName')[0].textContent].rounds[i].categories == undefined){
                                        firebase.data().packs[event.currentTarget.getElementsByClassName('packName')[0].textContent].rounds[i].categories = ["", "", "", "", "", "", ""]
                                    }
                                    for (let j = 0; j < firebase.data().packs[event.currentTarget.getElementsByClassName('packName')[0].textContent].rounds[i].categories.length; j++) {
                                        document.getElementById('packQuestionForm').getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', `
                                        <h2>${firebase.data().packs[event.currentTarget.getElementsByClassName('packName')[0].textContent].rounds[i].categories[j]}</h2>
                                    `)
                                    for (let k = (5 * j); k < (j+1) * (firebase.data().packs[event.currentTarget.getElementsByClassName('packName')[0].textContent].rounds[i].questions.length / 7) - 1; k++) {
                                        document.getElementById('packQuestionForm').getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', `
                                        <h3>${firebase.data().packs[event.currentTarget.getElementsByClassName('packName')[0].textContent].rounds[i].questions[k]}</h3>
                                    `)
                                    }
                                    }
                                    }
                        break;
                    case 'pickPackBlock':
                                document.getElementById('lobbyGame').style.display = 'block'
                                document.getElementById('pickPackBlock').style.display = 'none'
                                document.getElementById('lobbyGame').insertAdjacentElement('afterbegin', event.currentTarget)
                                pickedPack = firebase.data().packs[event.currentTarget.getElementsByClassName('packName')[0].innerText]
                            break;      
                }

  },
  pickedPack: pickedPack,
        }
    }
}
</script>

<template>
        <div class="pack" @click="onPack($event)">
            <img class="packStar" src="/img/star.png" alt="star">
                <label class="packName">{{name}}</label>
                <label class="packAuthor">{{author}}</label>
                <div class="packCategoriesBlock">
                    <button @click="prevRound($event)" class="prevRound">&lt</button>
                    <div class="categoriesRoundBlock">
                        <label class="roundOfCategories">Round 1</label>
                        <PackRounds
                         v-for="round in rounds"
                         :categories="round.categories"
                         :firstElement="rounds[0] == round"
                        />
                    </div>
                    <button @click="nextRound($event)" class="nextRound">></button>
                </div>
        </div>
</template>
    
<style>
.pack{
    border: 1px solid black;
    width: 100vw;
    height: 12vh;
    display: grid;
    grid-template-columns: 15% 60% 25%;
    grid-template-rows: 30% 70%;
    grid-template-areas: "packStar packName packAuthor"
    "packStar packCategories packCategories";
}
</style>

