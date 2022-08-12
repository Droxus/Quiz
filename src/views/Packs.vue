<script>
import PackRounds from './PackRounds.vue'
import firebase from '../firebase.js'
let pickedPack
export default {
        components: {
        PackRounds
    },
    props: ['author', 'name', 'rounds', 'roomID'],
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
                                    document.getElementById('packNameAtQuestionForm').textContent = `${event.currentTarget.getElementsByClassName('packName')[0].textContent}`
                                    for (let i = 0; i < firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds.length; i++){
                                    Array.from(document.getElementById('packQuestionForm').getElementsByTagName('main'))[0].insertAdjacentHTML('beforeend', `
                                        <h1>Round ${i+1}</h1>
                                    `)
                                    if (firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds[i].categories == undefined){
                                        firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds[i].categories = ["", "", "", "", "", "", ""]
                                    }
                                    for (let j = 0; j < firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds[i].categories.length; j++) {
                                        document.getElementById('packQuestionForm').getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', `
                                        <h2>${firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds[i].categories[j]}</h2>
                                    `)
                                    for (let k = (5 * j); k < (j+1) * (firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds[i].questions.length / 7) - 1; k++) {
                                        document.getElementById('packQuestionForm').getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', `
                                        <h3>${firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds[i].questions[k]}</h3>
                                        <button class="closeAnser">${firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds[i].answers[k]}</button>
                                    `)
                                    }
                                    }
                                    }
                        break;
                    case 'pickPackBlock':
                                document.getElementById('lobbyGame').style.display = 'block'
                                document.getElementById('pickPackBlock').style.display = 'none'
                                document.getElementById('lobbyGame').insertAdjacentElement('afterbegin', event.currentTarget)
                                if (firebase.data().packs){
                                    if (firebase.data().packs[event.currentTarget.getAttribute('roomid')]){
                                        pickedPack = firebase.data().packs[event.currentTarget.getAttribute('roomid')]
                                    }
                                }
                                if (JSON.parse(localStorage.getItem('localPacks'))){
                                    if (JSON.parse(localStorage.getItem('localPacks'))[event.currentTarget.getAttribute('roomid')]){
                                        pickedPack = JSON.parse(localStorage.getItem('localPacks'))[event.currentTarget.getAttribute('roomid')]
                                    }
                                }
                            break;      
                }

            },
            onStar: function(event){
                event.stopImmediatePropagation()
                if (!event.target.classList.contains('liked')){
                    let likedPacks = Array.isArray(JSON.parse(localStorage.getItem('likedPacks'))) ? JSON.parse(localStorage.getItem('likedPacks')) : []
                    likedPacks.push(event.target.parentElement.getAttribute('roomid'))
                    localStorage.setItem('likedPacks', JSON.stringify(likedPacks))
                    event.target.classList.add('liked')
                } else {
                    let likedPacks = Array.isArray(JSON.parse(localStorage.getItem('likedPacks'))) ? JSON.parse(localStorage.getItem('likedPacks')) : []
                    localStorage.setItem('likedPacks', JSON.stringify(likedPacks.filter(element => element !== event.target.parentElement.getAttribute('roomid'))))
                    event.target.classList.remove('liked')
                }
            },
            likedPack: localStorage.getItem('likedPacks') ? JSON.parse(localStorage.getItem('likedPacks')).find(element => element == this.roomID) ? true : false : null,
            pickedPack: pickedPack,
        }
    }
}
</script>

<template>
        <div class="pack" @click="onPack($event)" v-bind:roomID="roomID">
            <img class="packStar" src="/img/star.png" alt="star" @click="onStar($event)" :class="{liked: likedPack}">
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
.liked{
    background: gold;
}
</style>

