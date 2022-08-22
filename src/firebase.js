import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, child, get, update, onDisconnect, onValue, serverTimestamp, remove } from "firebase/database";
import { getStorage, ref as sRef, uploadBytes, getDownloadURL, getMetadata } from "firebase/storage";
import router from './router/index.js'
import Game from './views/Game.vue'
import Main from './main.js'
const firebaseConfig = {
    apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://quiz-ef7f5-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
  storageBucket: 'gs://quiz-ef7f5.appspot.com'
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(getDatabase());
const db = getDatabase();
const storage = getStorage(app);
const storageRef = sRef(storage, 'some-child');

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
let packs
let myIcon
let firebaseLoaded = 0

    export default {
      components: {
        Game
      },
        data(){
          return {
            firebaseLoaded: function(){
              firebaseLoaded++
              if (firebaseLoaded > 3){
                Main.data().closeLoader()
              }
            },
            setPackData: function(obj){
              if (obj.isGlobal){
                if (localPacks || packs){
                  do {
                    packID = Number(String(Math.pow(10, 4) * Math.random()).replace('.', 0).slice(0, 12))
                  } while (Object.keys(Object.assign(packs, localPacks)).findIndex(id => id == packID) !== -1)
                } else {
                    packID = Number(String(Math.pow(10, 4) * Math.random()).replace('.', 0).slice(0, 12))
                }
                obj.ID = packID
                set(ref(database, `packs/${packID}`), obj)
              } else {
                localPacks = localStorage.getItem('localPacks') ? JSON.parse(localStorage.getItem('localPacks')) : null
                    if (localPacks || packs){
                      do {
                        packID = Number(String(Math.pow(10, 4) * Math.random()).replace('.', 0).slice(0, 12))
                      } while (Object.keys(Object.assign(packs, localPacks)).findIndex(id => id == packID) !== -1)
                    } else {
                        packID = Number(String(Math.pow(10, 4) * Math.random()).replace('.', 0).slice(0, 12))
                    }
                    obj.ID = packID
                    let objLocal = {
                      [packID]: obj
                    }
                    localStorage.setItem('localPacks', JSON.stringify(Object.assign(objLocal, localPacks)))
                  }
                  if (obj.rounds){
                    for (let curRound = 0; curRound < obj.rounds.length; curRound++){
                      let files = Array.from(obj.rounds[curRound].mediaFiles).filter(element => element !== '')
                      if (files.length > 0){
                        for (let i = 0; i < Array.from(obj.rounds[curRound].mediaFiles).length; i++){
                          if (Array.from(obj.rounds[curRound].mediaFiles)[i].type !== undefined){
                            uploadBytes(sRef(storage, `packs/${packID}/${curRound}/${i}`), Array.from(obj.rounds[curRound].mediaFiles)[i]).then((snapshot) => {
                            })
                          }
                        }
                      }
                    }
                }
              let likedPacks = Array.isArray(JSON.parse(localStorage.getItem('likedPacks'))) ? JSON.parse(localStorage.getItem('likedPacks')) : []
              likedPacks.push(packID)
              localStorage.setItem('likedPacks', JSON.stringify(likedPacks))
            },
            getQnFile: function(round, qnIndex){
              getDownloadURL(sRef(storage, `packs/${pickedGame.pickedPack.ID}/${round}/${qnIndex}`)).then((url) => {
                getMetadata(sRef(storage, `packs/${pickedGame.pickedPack.ID}/${round}/${qnIndex}`))
                .then((metadata) => {
                  switch (metadata.contentType.slice(0, 5)) {
                    case 'image':
                      document.getElementById('mediaFile').insertAdjacentHTML('beforeend', `<img draggable="false" src="${url}" alt="file" class="fileMediaElement" importance="high" loading="eager">`)
                      break;
                    case 'video':
                      document.getElementById('mediaFile').insertAdjacentHTML('beforeend', `<video class="fileMediaElement" autoplay autobuffer preload="auto"><source src="${url}"></video>`)
                      break;
                    case 'audio':
                      document.getElementById('mediaFile').insertAdjacentHTML('beforeend', `<audio class="fileMediaElement" autoplay><source src="${url}"></audio>`)
                      break;
                  }
                })
              })
            },
            getPacksData: async function(){
              get(child(dbRef, 'packs/')).then((snapshot) => {
                if (snapshot.exists()) {
                  packs = snapshot.val();
                  this.firebaseLoaded();
                  return snapshot.val();
                } else {
                  this.firebaseLoaded();
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
                  }
                  do {
                    uid = Number(String(Math.pow(10, 4) * Math.random()).replace('.', 0).slice(0, 12))
                    userName = `User${uid.toString().substring(0,4)}`
                  } while (allUid.findIndex(id => id == uid) !== -1)
  
                 set(ref(database, `users/${uid}`), {
                  name: userName
                 }).then(() => {localStorage.setItem('uid', uid); localStorage.setItem('userName', userName); this.firebaseLoaded()})
                }).catch((error) => {
                  console.error(error);
                });
              } else {    
                uid = localStorage.getItem('uid')
                userName = localStorage.getItem('userName')
                this.firebaseLoaded();
              }
            },
            getUserAvatar: function(){
              getDownloadURL(sRef(storage, `avatars/${uid}`)).then((url) => {
                  getMetadata(sRef(storage, `avatars/${uid}`))
                  .then((metadata) => {
                    if (metadata.contentType.slice(0, 5) == 'image'){
                      if (document.getElementById('userMenuIcon')){
                        if (document.getElementById('userMenuIcon')){
                          document.getElementById('userMenuIcon').src = url
                        }
                        myIcon = url
                      }
                    }
                    this.firebaseLoaded();
                  })
              }).catch((error) => {
                switch (error.code) {
                  case 'storage/object-not-found':
                    myIcon = './img/defaultIcon.png'
                    break
                    
                  }; this.firebaseLoaded()})
            },
            setUserAvatarL: function(file){
              uploadBytes(sRef(storage, `avatars/${uid}`), file).then((snapshot) => {
              })
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
                  paused: false,
                  round: 0,
                },
                players: [
                  {id: uid, name: userName, inGame: true}
                ]
              }
              Game.data().pickedGame = pickedGame
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
                }
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
                      set(ref(db, `rooms/${Object.entries(gameRooms)[i][0]}`), {});
                    }
                  }
                }
                this.firebaseLoaded();
              }).catch((error) => {
                this.firebaseLoaded();
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
                  players = []
                  players = snapshot.val().players
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
                if (uid == pickedGame.host.id){
                  set(ref(db, `rooms/${roomID}/gameLine/paused`), false).then(() => {
                   
                  })
                }
              })
            },
            joinByCode: function(){
              get(child(dbRef, `rooms/`)).then((snapshot) => {
                if (snapshot.exists()) {
                  gameRooms = snapshot.val()
                }
              }).then(() => {
                if (Object.keys(gameRooms).findIndex(element => element == document.getElementById('codeToJoinGameInp').value) !== -1){
                  this.joinGameRoom(document.getElementById('codeToJoinGameInp').value)
                }
              })
            },
            leaveGame: function(){
              let activePlayers = pickedGame.players.filter(element => element.inGame == true)
                if (pickedGame.gameLine.finished === true && activePlayers.length < 2){
                  set(ref(db, `rooms/${localStorage.getItem('currentGame')}`), null).then(() => {
                    if (uid == pickedGame.host.id){
                        document.location.reload()
                    } else {
                      document.location.reload()
                    }
                    localStorage.setItem('currentGame', undefined)
                  })
                } else {
                  if (uid == pickedGame.host.id){
                    set(ref(db, `rooms/${localStorage.getItem('currentGame')}/gameLine/paused`), true).then(() => {
                      document.location.reload()
                    })
                  } else {
                    document.location.reload()
                  }
                  localStorage.setItem('currentGame', undefined)
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
              set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/pikedQuestion`), index)
            },
            informWrongAnswer: function(randAnswer){
              set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/wrongAnswer`), randAnswer)
            },
            updatePlayerPoints: function(){
              let index = pickedGame.players.findIndex(element => element.id == pickedGame.gameLine.turn.id)
              let pointsIndex = Math.abs(pickedGame.gameLine.pikedQuestion - Math.floor(pickedGame.gameLine.pikedQuestion / Array.from(document.getElementsByClassName('points')).length) * Array.from(document.getElementsByClassName('points')).length)
              let points = pickedGame.pickedPack.rounds[round].points[pointsIndex]
              if (!pickedGame.players[index].points){
                pickedGame.players[index].points = 0
              }
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
            updatePointsByHost: function(currPlayer, points){
              let activePlayers = pickedGame.players.filter(element => element.inGame == true)
              let index = pickedGame.players.findIndex(element => element == activePlayers[currPlayer])
              set(ref(database, `rooms/${localStorage.getItem('currentGame')}/players/${index}/points`), points)
            },
            nextRound: function(){
              if (round < pickedGame.pickedPack.rounds.length-1){
                round++
                set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/pikedQuestion`), false)
                set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/round/`), round)
                Game.data().nextRound()
              } else {
                set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/finished/`), true)
                Game.data().announceWinner()
              }
            },
            pauseGame: function(){
              set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/paused/`), true)
            },
            resumeGame: function(){
              set(ref(database, `rooms/${localStorage.getItem('currentGame')}/gameLine/paused/`), false)
            },
            setGameDataListeners: function(){
              onValue(ref(db, `rooms/${pickedGame.ID}/players`), (snapshot) => {
                
                if (snapshot.val() !== null){
                  let activePlayers = pickedGame.players.filter(element => element.inGame == true)
                  let fbActivePlayers = snapshot.val().filter(element => element.inGame == true)
                  if (activePlayers.length == fbActivePlayers.length && activePlayers.length !== 1){
                    pickedGame.players = snapshot.val();
                    Game.data().updatePlayerPoints()
                  } else {
                    pickedGame.players = snapshot.val();
                    let inactivePlayers = pickedGame.players.filter(element => element.inGame == false || element.inGame == undefined || element.inGame == null)
                    if (inactivePlayers.findIndex(element => element.id == pickedGame.gameLine.turn.id) !== -1){
                      this.nextTurn()
                    }
                    let activePlayers = pickedGame.players.filter(element => element.inGame == true)
                    for (let i = 0; i < activePlayers.length; i++){
                      getDownloadURL(sRef(storage, `avatars/${activePlayers[i].id}`))
                      .then((url) => {
                        document.getElementsByClassName('playerAvatars')[i].src = url
                      }).catch((error) => {
                        switch (error.code) {
                          case 'storage/object-not-found':
                            document.getElementsByClassName('playerAvatars')[i].src = './img/defaultIcon.png'
                            break
                          }})
                      Game.data().showPlayers()
                    }
                  }
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/gameLine/turn`), (snapshot) => {
                if (snapshot.val() !== null){
                  pickedGame.gameLine.turn = snapshot.val();
                  document.getElementById('questionBlock').style.display = 'none'
                  document.getElementById('tableWithQuestions').style.display = 'grid'
                  if (pickedGame.gameLine.turn){
                    Game.data().onQuestionPick()
                  }
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/gameLine/pikedQuestion`), (snapshot) => {
                if (snapshot.val() !== null){
                  pickedGame.gameLine.pikedQuestion = snapshot.val();
                  if (pickedGame.gameLine.pikedQuestion){
                    Game.data().onGetQuestion()
                  } else if (pickedGame.gameLine.pikedQuestion === 0){
                    Game.data().onGetQuestion()
                  }
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/gameLine/voiting`), (snapshot) => {
                if (snapshot.val() !== null){
                  pickedGame.gameLine.voiting = snapshot.val();
                  if (pickedGame.gameLine.voiting){
                    this.updatePlayerPoints()
                  }
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/started`), (snapshot) => {
                if (snapshot.val() !== null){
                  pickedGame.started = snapshot.val();
                  if (pickedGame.started){
                    turnPlayerIndex = 0
                    Game.data().showGameInfo()
                  }
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/gameLine/answer/`), (snapshot) => {
                if (snapshot.val() !== null){
                  pickedGame.gameLine.answer = snapshot.val();
                  Game.data().onAnswered()
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/gameLine/round/`), (snapshot) => {
                if (snapshot.val() !== null && snapshot.val() !== pickedGame.gameLine.round){
                  pickedGame.gameLine.round = snapshot.val();
                  Game.data().nextRound()
                }
              });
              onValue(ref(db, `rooms/${pickedGame.ID}/gameLine/finished/`), (snapshot) => {
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
              onValue(ref(db, `rooms/${pickedGame.ID}/gameLine/paused`), (snapshot) => {
                if (snapshot.val() !== null){
                  pickedGame.gameLine.paused = snapshot.val();
                  Game.data().pauseGame()
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
            round: round, 
            myIcon: myIcon
          }
        }
      }