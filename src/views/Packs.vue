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
                                        <label class="roundsLbl">Round ${i+1}</label>
                                    `)
                                    if (firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds[i].categories == undefined){
                                        firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds[i].categories = ["", "", "", "", "", "", ""]
                                    }
                                    for (let j = 0; j < firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds[i].categories.length; j++) {
                                        document.getElementById('packQuestionForm').getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', `
                                        <label class="categoriesLbl">${firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds[i].categories[j]}</label>
                                    `)
                                    for (let k = (5 * j); k < (j+1) * (firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds[i].questions.length / 7) - 1; k++) {
                                        document.getElementById('packQuestionForm').getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', `
                                        <label class="qnLbl">${firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds[i].questions[k]}</label>
                                        <button class="closeAnswer">${firebase.data().packs[event.currentTarget.getAttribute('roomid')].rounds[i].answers[k]}</button>
                                    `)
                                    }
                                    }
                                    }
                                    Array.from(document.getElementsByClassName('closeAnswer')).forEach(element => element.addEventListener('click', this.onCloseAnswer))
                        break;
                    case 'pickPackBlock':
                                document.getElementById('backToPackPick').style.display = 'block'
                                document.getElementById('routerLinkCG').style.display = 'none'
                                document.getElementById('lobbyGame').style.display = 'block'
                                document.getElementById('pickPackBlock').style.display = 'none'
                                document.getElementById('createGameHeader').style["grid-template-rows"] = '100%'
                                document.getElementById('createGame').style["grid-template-rows"] = '4.9% 95.1%'
                                let pickedPackElement = event.currentTarget
                                let pickedPackElementClone = pickedPackElement.cloneNode(true);
                                document.getElementById('lobbyGame').insertAdjacentElement('afterbegin',pickedPackElementClone)
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
                    case 'lobbyGame':
                        document.getElementById('lobbyGame').style.display = 'none'
                        document.getElementById('pickPackBlock').style.display = 'block'
                        if (document.getElementById('lobbyGame').getElementsByClassName('pack')[0] !== undefined) {
                            document.getElementById('lobbyGame').getElementsByClassName('pack')[0].remove()
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
            onCloseAnswer: function(event){
                if (event.currentTarget.style.color !== 'white'){
                    event.currentTarget.style.color = 'white'
                } else {
                    event.currentTarget.style.color = 'transparent'
                }
            },
            star: this.likedPack ? 'liked' : 'notLiked',
            likedPack: localStorage.getItem('likedPacks') ? JSON.parse(localStorage.getItem('likedPacks')).find(element => element == this.roomID) ? true : false : null,
            pickedPack: pickedPack,
        }
    }
}
</script>

<template>
        <div class="pack" @click="onPack($event)" v-bind:roomID="roomID">
            <div class="packStar" @click="onStar($event)" :class="{'liked': likedPack}"></div>
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
#lala{
    clip-path: polygon(100% 100%, 100% 100%, 100% 100%)
}
.pack{
    width: 100vw;
    height: 12vh;
    display: grid;
    grid-template-columns: 15% 60% 25%;
    grid-template-rows: 30% 70%;
    grid-template-areas: "packStar packName packAuthor"
    "packStar packCategories packCategories";
    border: none;
}
.pack:nth-child(odd){
    background: #145367;
}
.pack:nth-child(even){
    background: #2185A6;
}
.packStar{
    background: url(/img/star.png)
}
.liked{
    background: url(/img/starActive.png);
}
.packStar{
    grid-area: packStar;
    align-self: center;
    justify-self: start;
    width: 61px;
    height: 55px;
    margin-left: 10%;
}
.packCategories{
    scrollbar-width: none;
}
.nextRound{
    background: none;
    color: white;
    border: none;
    font-size: 24px;
    font-weight: bold;
    font-family: unset;
}
.prevRound{
    background: none;
    color: white;
    border: none;
    font-size: 24px;
    font-weight: bold;
    font-family: unset;
}
#packQuestionForm > main{
    display: grid;
}
.roundsLbl{
    place-self: center;
    font-size: 3em;
    margin-top: 3%;
}
.categoriesLbl{
    place-self: center;
    font-size: 2em;
    margin-top: 2%;
}
.qnLbl{
    margin-top: 1%;
    margin-left: 5%;
    font-size: 1.5em;
}
.closeAnswer{
    border: none;
    background: #2185A6;
    width: max-content;
    margin-top: 1%;
    margin-left: 5%;
    font-size: 1em;
    color: transparent;
    border-radius: 10px;
    transition: .5s;
}
</style>

