import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, child, get, update, onDisconnect, onValue, serverTimestamp } from "firebase/database";
import router from './router/index.js'
import Game from './views/Game.vue'
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
const db = getDatabase();

let uid
let allUid = []
let userName
let gameID, allRooms = []
let gameRooms
let players
let pickedGame


// const presenceRef = ref(db, "disconnectmessage");
// Write a string when this client loses connection
// onDisconnect(presenceRef).set("I disconnected!");




//  === === === AUTH === === ===


//  === === === OTHER === === ===

let packs

    export default {
      components: {
        Game
      },
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
            createGame: function(name, answerType, toJoin, pickedPack){
              get(child(dbRef, `rooms/`)).then((snapshot) => {
                if (snapshot.exists()) {
                  allRooms = Object.keys(snapshot.val())
                } else {
                  return gameID = Math.floor(Math.random() * Math.pow(10, 12))
                }
              }).catch((error) => {
                console.error(error);
              });
              do {
                gameID = Math.floor(Math.random() * Math.pow(10, 12))
              } while (allRooms.findIndex(id => id == gameID) !== -1)
              pickedGame = {
                name: name,
                host: {
                  id: uid,
                  name: userName
                },
                answerType: answerType,
                toJoin: toJoin,
                pickedPack: pickedPack,
                ID: gameID,
                players: [
                  {id: uid, name: userName, inGame: true}
                ]
              }
              set(ref(database, `rooms/${gameID}`), pickedGame).then(() => {
                onValue(ref(db, `rooms/${gameID}`), (snapshot) => {
                  pickedGame = snapshot.val();
                  Game.data().showPlayers()
                  console.log(pickedGame)
                });
              }).then(() => {
                players = []; 
                players.push({id: uid, name: userName, inGame: true});
                router.push('/game')})
            },
            getGameRooms: function(){
              get(child(dbRef, `rooms/`)).then((snapshot) => {
                if (snapshot.exists()) {
                   gameRooms = snapshot.val()
                   console.log(gameRooms)
                }
              }).catch((error) => {
                console.error(error);
              });
            },
            joinGameRoom: function(roomID){
              get(child(dbRef, `rooms/${roomID}/`)).then((snapshot) => {
                if (snapshot.exists()) {
                  pickedGame = snapshot.val()
                  console.log(pickedGame)
                  players = []
                  players = snapshot.val().players
                   console.log(players)
                }
              }).catch((error) => {
                console.error(error);
              }).then(() => {
                let index = players.findIndex(element => element.id == uid)
                if (index == -1){
                  players.push({
                    id: uid, 
                    name: userName, 
                    inGame: true
                  })
                  console.log(players)
                  set(ref(database, `rooms/${roomID}/players`),
                    players
                  ).then(() => {
                    onValue(ref(db, `rooms/${roomID}`), (snapshot) => {
                      pickedGame = snapshot.val();
                      Game.data().showPlayers()
                      console.log(pickedGame)
                  });
                }).then(() => {router.push('/game')})
                } else {
                  onValue(ref(db, `rooms/${roomID}`), (snapshot) => {
                    pickedGame = snapshot.val();
                    Game.data().showPlayers()
                    console.log(pickedGame)
                  })
                    players[index].inGame = true
                    router.push('/game')
                }
              }).then(() => {
                let index = players.findIndex(element => element.id == uid)
                const myConnectionsRef = ref(db, `rooms/${roomID}/players/${index}/inGame`);
                const lastOnlineRef = ref(db, `users/${uid}/lastOnline`);
                const connectedRef = ref(db, '.info/connected');
                onValue(connectedRef, (snap) => {
                  if (snap.val() === true) {
                    // const con = push(myConnectionsRef);
                    onDisconnect(myConnectionsRef).remove();
                    set(myConnectionsRef, true);
                    onDisconnect(lastOnlineRef).set(serverTimestamp());
                  }
                });
              })
            },
            pickedGame: pickedGame,
            gameRooms: gameRooms,
            uid: uid,
            userName: userName,
            packs: packs
          }
        }
      }