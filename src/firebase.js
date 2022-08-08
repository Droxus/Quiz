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
let packID
let gameRooms
let players
let pickedGame
let turnPlayerIndex
let answerTurn
let localPacks
let round = 0
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
            setPackData: function(obj){
              if (obj.isGlobal){
                if (localPacks || packs){
                  do {
                    packID = Number(String(Math.pow(10, 4) * Math.random()).replace('.', 0).slice(0, 12))
                  } while (Object.keys(packs).findIndex(id => id == packID) !== -1 && Object.keys(localPacks).findIndex(id => id == packID) !== -1)
                } else {
                    packID = Number(String(Math.pow(10, 4) * Math.random()).replace('.', 0).slice(0, 12))
                }
                obj.ID = packID
                set(ref(database, `packs/${packID}`), obj)
              } else {
                localPacks = JSON.parse(localStorage.getItem('localPacks')) 
                    if (localPacks || packs){
                      do {
                        packID = Number(String(Math.pow(10, 4) * Math.random()).replace('.', 0).slice(0, 12))
                      } while (Object.keys(localPacks).findIndex(id => id == packID) !== -1 && Object.keys(packs).findIndex(id => id == packID) !== -1)
                    } else {
                        packID = Number(String(Math.pow(10, 4) * Math.random()).replace('.', 0).slice(0, 12))
                    }
                    obj.ID = packID
                    obj = {
                      [packID]: obj
                    }
                    localStorage.setItem('localPacks', JSON.stringify(obj))
              }
              let likedPacks = Array.isArray(JSON.parse(localStorage.getItem('likedPacks'))) ? JSON.parse(localStorage.getItem('likedPacks')) : []
              likedPacks.push(packID)
              localStorage.setItem('likedPacks', JSON.stringify(likedPacks))
            },
            getPacksData: async function(){
              get(child(dbRef, 'packs/')).then((snapshot) => {
                if (snapshot.exists()) {
                  packs = snapshot.val();
                  // packs.shift()
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
                  uid = Number(String(Math.pow(10, 4) * Math.random()).replace('.', 0).slice(0, 12))
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
            createGame: function(name, answerType, toJoin, pickedPack, isHost, onWrongAnswer, timeOnPickQuestion, timeOnGiveAnswer){
              if (localStorage.getItem('currentGame') !== undefined){
                if (this.gameRooms[localStorage.getItem('currentGame')] !== undefined){
                  if (this.gameRooms[localStorage.getItem('currentGame')].players !== undefined){
                    for (let i = 0; i < Object.entries(this.gameRooms[localStorage.getItem('currentGame')].players).length; i++){
                      if (Object.entries(this.gameRooms[localStorage.getItem('currentGame')].players)[i][1].id == uid){
                        Object.entries(this.gameRooms[localStorage.getItem('currentGame')].players)[i][1].inGame = false
                        set(ref(db, `rooms/${localStorage.getItem('currentGame')}/players/${i}`), {});
                      }
                    }
                  }
                }
              }
              get(child(dbRef, `rooms/`)).then((snapshot) => {
                if (snapshot.exists()) {
                  allRooms = Object.keys(snapshot.val())
                  allRooms.shift()
                } else {
                  return gameID = Number(String(Math.pow(10, 4) * Math.random()).replace('.', 0).slice(0, 4))
                }
              }).catch((error) => {
                console.error(error);
              });
              do {
                gameID = Number(String(Math.pow(10, 4) * Math.random()).replace('.', 0).slice(0, 4))
              } while (allRooms.findIndex(id => id == gameID) !== -1)
              pickedGame = {
                name: name,
                host: {
                  id: uid,
                  name: userName
                },
                answerType: answerType,
                toJoin: toJoin,
                isHost: isHost,
                onWrongAnswer: onWrongAnswer,
                pickedPack: pickedPack,
                ID: gameID,
                started: false,
                timeOnPickQuestion: timeOnPickQuestion,
                timeOnGiveAnswer: timeOnGiveAnswer,
                gameLine: {
                  turn: false,
                  pikedQuestion: false,
                  voiting: false,
                  answer: false,
                  finished: false,
                  wrongAnswer: false,
                  round: 0,
                },
                players: [
                  {id: uid, name: userName, inGame: true}
                ]
              }
              Game.data().pickedGame = pickedGame
              console.log(pickedGame)
              set(ref(database, `rooms/${gameID}`), pickedGame).then(() => {
                localStorage.setItem('currentGame', gameID);
                players = []; 
                players.push({id: uid, name: userName, inGame: true});
                router.push('/game').then(() => {
                  Game.data().startGame()
                })
                })
            },
            getGameRooms: function(){
              get(child(dbRef, `rooms/`)).then((snapshot) => {
                if (snapshot.exists()) {
                   gameRooms = snapshot.val()
                   delete gameRooms.test
                   console.log(gameRooms)
                }
                console.log(gameRooms)
                if (gameRooms !== undefined){
                  for (let i = 0; i < Object.entries(gameRooms).length; i++) {
                    let activePlayers = []
                    if (Object.entries(gameRooms)[i][1].players !== undefined){
                      for (let j = 0; j < Object.entries(gameRooms)[i][1].players.length; j++){
                        if (Object.entries(gameRooms)[i][1].players[j] !== null && Object.entries(gameRooms)[i][1].players[j] !== undefined){
                          if (Object.entries(gameRooms)[i][1].players[j].inGame == true){
                            activePlayers.push(Object.entries(gameRooms)[i][1].players[j])
                          }
                        }
                      }
                    }
                    if (activePlayers.length < 1){
                      console.log('DELETE')
                      set(ref(db, `rooms/${Object.entries(gameRooms)[i][0]}`), {});
                    }
                  }
                }
              }).catch((error) => {
                console.error(error);
              });
            },
            joinGameRoom: function(roomID){
              if (localStorage.getItem('currentGame') !== undefined && localStorage.getItem('currentGame') !== roomID){
                if (this.gameRooms[localStorage.getItem('currentGame')] !== undefined){
                  if (this.gameRooms[localStorage.getItem('currentGame')].players !== undefined){
                    for (let i = 0; i < Object.entries(this.gameRooms[localStorage.getItem('currentGame')].players).length; i++){
                      if (Object.entries(this.gameRooms[localStorage.getItem('currentGame')].players)[i][1].id == uid){
                        Object.entries(this.gameRooms[localStorage.getItem('currentGame')].players)[i][1].inGame = false
                        set(ref(db, `rooms/${localStorage.getItem('currentGame')}/players/${i}`), {});
                      }
                    }
                  }
                }
              }
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
                console.log(players)
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
                  router.push('/game').then(() => {
                    Game.data().startGame()
                  })})
                } else {
                  players[index].inGame = true
                  router.push('/game').then(() => {
                    Game.data().startGame()
                  })
                }
              }).then(() => {
                localStorage.setItem('currentGame', roomID);
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
            leaveGame: function(){
              console.log(Object.entries(pickedGame.players).length)
              for (let i = 0; i < Object.entries(pickedGame.players).length; i++){
                if (Object.entries(pickedGame.players)[i][1].id == uid){
                  set(ref(db, `rooms/${localStorage.getItem('currentGame')}/players/${i}/inGame`), false).then(() => {
                    localStorage.setItem('currentGame', undefined)
                    router.push('/joinGame')
                  })
                }
              }
            },
            getRandomPlayer: function(){
              let activePlayers = []
              for (let j = 0; j < pickedGame.players.length; j++){
                if (pickedGame.players[j] !== null && pickedGame.players[j] !== undefined){
                  if (pickedGame.players[j].inGame == true){
                    activePlayers.push(pickedGame.players[j])
                  }
                }
              }
              return activePlayers[Math.floor(Math.random() * activePlayers.length)].id
            },
            startGame: function(){
              turnPlayerIndex = 0
              set(ref(database, `rooms/${localStorage.getItem('currentGame')}/started`), true)
            },
            nextTurn: function(){
                turnPlayerIndex++
                if (turnPlayerIndex > pickedGame.players.length-1){
                  if (pickedGame.isHost == "Host"){
                    turnPlayerIndex = 1
                  } else {
                    turnPlayerIndex = 0
                  }
                }
                set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/turn`), pickedGame.players[turnPlayerIndex])
                set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/voiting`), false)
            },
            informPickedQuestion: function(index){
              console.log(index)
              set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/pikedQuestion`), index)
            },
            informWrongAnswer: function(randAnswer){
              set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/wrongAnswer`), randAnswer)
            },
            updatePlayerPoints: function(){
              console.log(pickedGame.players)
              let index = pickedGame.players.findIndex(element => element.id == pickedGame.gameLine.turn.id)
              console.log(uid)
              console.log(index)
              let pointsIndex = Math.abs(pickedGame.gameLine.pikedQuestion - Math.floor(pickedGame.gameLine.pikedQuestion / Array.from(document.getElementsByClassName('points')).length) * Array.from(document.getElementsByClassName('points')).length)
              let points = pickedGame.pickedPack.rounds[round].points[pointsIndex]
              if (!pickedGame.players[index].points){
                pickedGame.players[index].points = 0
              }
              console.log(pickedGame.players[index])
              let voitedTrue = Object.values(pickedGame.gameLine.voiting).filter(element => element == true)
              let voitedFalse = Object.values(pickedGame.gameLine.voiting).filter(element => element == false)
              let activePlayers = []
              for (let j = 0; j < pickedGame.players.length; j++){
                if (pickedGame.players[j] !== null && pickedGame.players[j] !== undefined){
                  if (pickedGame.players[j].inGame == true){
                    activePlayers.push(pickedGame.players[j])
                  }
                }
              }
              if (Math.ceil(activePlayers.length / 2) - 1 < voitedTrue.length){
               pickedGame.players[index].points += points
                Game.data().nextTurn()
              } else if (Math.ceil(activePlayers.length / 2) - 1 < voitedFalse.length){
                if (pickedGame.onWrongAnswer == 'MinusPoints'){
                  pickedGame.players[index].points -= points
                }
                Game.data().nextTurn()
              } else if ((activePlayers.length-1) == Object.values(pickedGame.gameLine.voiting).length){
                Game.data().nextTurn()
              }
              console.log(this.pickedGame.players)
              console.log(pickedGame.players)
              set(ref(database, `rooms/${localStorage.getItem('currentGame')}/players`), this.pickedGame.players)
            },
            informVoiting: function(right){
              right = ('Right' == right)
              set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/voiting/${uid}`), right)
            },
            hostVoited: function(right){
              right = ('Right' == right)
              let activePlayers = []
              for (let j = 0; j < pickedGame.players.length; j++){
                if (pickedGame.players[j] !== null && pickedGame.players[j] !== undefined){
                  if (pickedGame.players[j].inGame == true){
                    activePlayers.push(pickedGame.players[j])
                  }
                }
              }
              for (let i = 0; i < activePlayers.length; i++){
                set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/voiting/${activePlayers[i].id}`), right)
              }
            },
            nextRound: function(){
              if (round < pickedGame.pickedPack.rounds.length-1){
                round++
                set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/round/`), round)
                Game.data().nextRound()
              } else {
                set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/finished/`), true)
                Game.data().announceWinner()
              }
            },
            setGameDataListeners: function(){
              console.log(pickedGame.ID)
              onValue(ref(db, `rooms/${pickedGame.ID}/players`), (snapshot) => {
                console.log(snapshot.val())
                if (snapshot.val() !== null){
                  pickedGame.players = snapshot.val();
                  console.log(pickedGame)
                  Game.data().showPlayers()
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/gameLine/turn`), (snapshot) => {
                console.log(snapshot.val())
                if (snapshot.val() !== null){
                  pickedGame.gameLine.turn = snapshot.val();
                  console.log(pickedGame)
                  if (pickedGame.gameLine.turn){
                    console.log(pickedGame.gameLine.turn)
                    Game.data().onQuestionPick()
                  }
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/gameLine/pikedQuestion`), (snapshot) => {
                console.log(snapshot.val())
                if (snapshot.val() !== null){
                  pickedGame.gameLine.pikedQuestion = snapshot.val();
                  console.log(pickedGame)
                  if (pickedGame.gameLine.pikedQuestion){
                    console.log(pickedGame.gameLine.pikedQuestion)
                    Game.data().onGetQuestion()
                  } else if (pickedGame.gameLine.pikedQuestion === 0){
                    console.log(pickedGame.gameLine.pikedQuestion)
                    Game.data().onGetQuestion()
                  }
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/gameLine/voiting`), (snapshot) => {
                console.log(snapshot.val())
                if (snapshot.val() !== null){
                  pickedGame.gameLine.voiting = snapshot.val();
                  console.log(pickedGame)
                  if (pickedGame.gameLine.voiting){
                    this.updatePlayerPoints()
                    console.log(pickedGame.gameLine.voiting)
                  }
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/started`), (snapshot) => {
                console.log(snapshot.val())
                if (snapshot.val() !== null){
                  pickedGame.started = snapshot.val();
                  console.log(pickedGame)
                  if (pickedGame.started){
                    turnPlayerIndex = 0
                    Game.data().showGameInfo()
                  }
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/gameLine/answer/`), (snapshot) => {
                console.log(snapshot.val())
                if (snapshot.val() !== null){
                  pickedGame.gameLine.answer = snapshot.val();
                  Game.data().onAnswered()
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/gameLine/round/`), (snapshot) => {
                console.log(snapshot.val())
                if (snapshot.val() !== null && snapshot.val() !== pickedGame.gameLine.round){
                  pickedGame.gameLine.round = snapshot.val();
                  Game.data().nextRound()
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/gameLine/finished/`), (snapshot) => {
                console.log(snapshot.val())
                if (snapshot.val() !== null){
                  pickedGame.gameLine.finished = snapshot.val();
                  if (pickedGame.gameLine.finished){
                    Game.data().announceWinner()
                  }
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/gameLine/wrongAnswer`), (snapshot) => {
                if (snapshot.val() !== null){
                  pickedGame.gameLine.wrongAnswer = snapshot.val();
                  Game.data().wrongAnswersAdd(pickedGame.gameLine.wrongAnswer)
                }
              });
            },
            onAnswer: function(answer = 'No Answer', answerTurn){
              set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/answer/`), {
                answer: answer,
                turn: answerTurn
              })
            },
            pickedGame: pickedGame,
            gameRooms: gameRooms,
            uid: uid,
            userName: userName,
            packs: packs,
            round: round
          }
        }
      }