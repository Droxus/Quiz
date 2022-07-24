import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get  } from "firebase/database";
const firebaseConfig = {
    databaseURL: "https://quiz-ef7f5-default-rtdb.europe-west1.firebasedatabase.app/",
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(getDatabase());
let packs
 function onPack(event){
  // if (event.target == ''){
    document.getElementById('packQuestionForm').style.display = 'block'
    document.getElementById('findPack').style.display = 'none'
    document.getElementById('packNameAtQuestionForm').textContent = `${this.getElementsByClassName('packName')[0].textContent}`
    console.log(document.getElementById('packQuestionForm'))
    for (let i = 0; i < packs[this.getElementsByClassName('packName')[0].textContent].rounds.length; i++){
      Array.from(document.getElementById('packQuestionForm').getElementsByTagName('main'))[0].insertAdjacentHTML('beforeend', `
        <h1>Round ${i+1}</h1>
      `)
      if (packs[this.getElementsByClassName('packName')[0].textContent].rounds[i].categories == undefined){
        packs[this.getElementsByClassName('packName')[0].textContent].rounds[i].categories = ["", "", "", "", "", "", ""]
      }
      for (let j = 0; j < packs[this.getElementsByClassName('packName')[0].textContent].rounds[i].categories.length; j++) {
        document.getElementById('packQuestionForm').getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', `
        <h2>${packs[this.getElementsByClassName('packName')[0].textContent].rounds[i].categories[j]}</h2>
      `)
      for (let k = (5 * j); k < (j+1) * (packs[this.getElementsByClassName('packName')[0].textContent].rounds[i].questions.length / 7) - 1; k++) {
        document.getElementById('packQuestionForm').getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', `
        <h3>${packs[this.getElementsByClassName('packName')[0].textContent].rounds[i].questions[k]}</h3>
      `)
      }
      }
    }
  // }
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
    export default {
        data(){
          return {
            setData: function(path, obj){
                console.log('start')
                set(ref(database, path), obj)
                .then(() => {console.log('fifnish')})
            },
            showPacks: async function(){
              get(child(dbRef, 'packs/')).then((snapshot) => {
                if (snapshot.exists()) {
                  packs = snapshot.val();
                  console.log(packs)
                  return snapshot.val();
                } else {
                  console.log("No data available");
                }
              }).then(() => {
                for (const pack in packs){
                  document.getElementById('packsBlock').insertAdjacentHTML('beforeend', `
                  <div class="pack">
                  <img class="packStar" src="/img/star.png" alt="star">
                  <label class="packName">${pack}</label>
                  <label class="packAuthor">${packs[pack].author}</label>
                  <div class="packCategoriesBlock">
                      <button class="prevRound" @click="prevRound($event)">&lt</button>
                      <div class="categoriesRoundBlock">
                          <label class="roundOfCategories">Round 1</label>
                      </div>
                      <button class="nextRound" @click="nextRound($event)">></button>
                  </div>
              </div>
                  `)
                  for (let i = 0; i < packs[pack].rounds.length; i++){
                    document.getElementsByClassName('categoriesRoundBlock')[document.getElementsByClassName('categoriesRoundBlock').length-1].insertAdjacentHTML('beforeend', `
                    <div class="packCategories"></div>
                    `)
                    if (packs[pack].rounds[i].categories !== undefined){
                      for (let j = 0; j < packs[pack].rounds[i].categories.length; j++){
                        document.getElementsByClassName('packCategories')[document.getElementsByClassName('packCategories').length-1].insertAdjacentHTML('beforeend', `
                        <label class="packCategoriesLbl">${packs[pack].rounds[i].categories[j]}</label>
                       `)
                      }
                    } else {
                      document.getElementsByClassName('packCategories')[document.getElementsByClassName('packCategories').length-1].insertAdjacentHTML('beforeend', `
                        <label class="noCategoriesLbl">No Categories</label>
                       `)
                    }
                  }

                }
                // document.getElementById('packsBlock').addEventListener('click', onPack)
                Array.from(document.getElementsByClassName('pack')).forEach(element => element.addEventListener('click', onPack))
                Array.from(document.getElementsByClassName('prevRound')).forEach(element => element.addEventListener('click', prevRound))
                Array.from(document.getElementsByClassName('nextRound')).forEach(element => element.addEventListener('click', nextRound))
              }).catch((error) => {
                console.error(error);
              });

            }
          }
        }
      }