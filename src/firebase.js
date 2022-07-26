import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get  } from "firebase/database";
const firebaseConfig = {
    apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://quiz-ef7f5-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(getDatabase());

let uid
let allUid = []
let userName
//  === === === AUTH === === ===


//  === === === OTHER === === ===

let packs

    export default {
        data(){
          return {
            setData: function(path, obj){
                console.log('start')
                set(ref(database, path), obj)
                .then(() => {console.log('fifnish')})
            },
            getPacksData: async function(){
              get(child(dbRef, 'packs/')).then((snapshot) => {
                if (snapshot.exists()) {
                  packs = snapshot.val();
                  console.log(packs)
                  return snapshot.val();
                } else {
                  console.log("No data available");
                }
              })
            },
            // showPacks: async function(){
            //   get(child(dbRef, 'packs/')).then((snapshot) => {
            //     if (snapshot.exists()) {
            //       packs = snapshot.val();
            //       console.log(packs)
            //       return snapshot.val();
            //     } else {
            //       console.log("No data available");
            //     }
            //   }).then(() => {
            //     for (const pack in packs){
            //       document.getElementById('packsBlock').insertAdjacentHTML('beforeend', `
            //       <div class="pack">
            //       <img class="packStar" src="/img/star.png" alt="star">
            //       <label class="packName">${pack}</label>
            //       <label class="packAuthor">${packs[pack].author}</label>
            //       <div class="packCategoriesBlock">
            //           <button class="prevRound" @click="prevRound($event)">&lt</button>
            //           <div class="categoriesRoundBlock">
            //               <label class="roundOfCategories">Round 1</label>
            //           </div>
            //           <button class="nextRound" @click="nextRound($event)">></button>
            //       </div>
            //   </div>
            //       `)
            //       for (let i = 0; i < packs[pack].rounds.length; i++){
            //         document.getElementsByClassName('categoriesRoundBlock')[document.getElementsByClassName('categoriesRoundBlock').length-1].insertAdjacentHTML('beforeend', `
            //         <div class="packCategories"></div>
            //         `)
            //         if (packs[pack].rounds[i].categories !== undefined){
            //           for (let j = 0; j < packs[pack].rounds[i].categories.length; j++){
            //             document.getElementsByClassName('packCategories')[document.getElementsByClassName('packCategories').length-1].insertAdjacentHTML('beforeend', `
            //             <label class="packCategoriesLbl">${packs[pack].rounds[i].categories[j]}</label>
            //            `)
            //           }
            //         } else {
            //           document.getElementsByClassName('packCategories')[document.getElementsByClassName('packCategories').length-1].insertAdjacentHTML('beforeend', `
            //             <label class="noCategoriesLbl">No Categories</label>
            //            `)
            //         }
            //       }

            //     }
            //     // document.getElementById('packsBlock').addEventListener('click', onPack)
            //     Array.from(document.getElementsByClassName('pack')).forEach(element => element.addEventListener('click', onPack))
            //     Array.from(document.getElementsByClassName('prevRound')).forEach(element => element.addEventListener('click', prevRound))
            //     Array.from(document.getElementsByClassName('nextRound')).forEach(element => element.addEventListener('click', nextRound))
            //   }).catch((error) => {
            //     console.error(error);
            //   });

            // },
            authFirebase: async function(){ 
              // localStorage.removeItem('uid')
              if (localStorage.getItem('uid') === null){
                get(child(dbRef, `users/`)).then((snapshot) => {
                  if (snapshot.exists()) {
                    allUid = Object.keys(snapshot.val())
                  } else {
                    console.log("No data available");
                  }
                }).catch((error) => {
                  console.error(error);
                });
                do {
                  uid = Math.floor(Math.random() * Math.pow(10, 12))
                  userName = `User${uid.toString().substring(0,4)}`
                } while (allUid.findIndex(id => id == uid) !== -1)

               set(ref(database, `users/${uid}`), {
                name: userName
               }).then(() => {localStorage.setItem('uid', uid); localStorage.setItem('userName', userName)})
              } else {    
                uid = localStorage.getItem('uid')
                userName = localStorage.getItem('userName')
              }
            },
            setUserName: function(newUserName){
              userName = newUserName
              set(ref(database, `users/${uid}`), {
                name: userName
               }).then(() => {localStorage.setItem('userName', userName)})
            },
            uid: uid,
            userName: userName,
            packs: packs
          }
        }
      }