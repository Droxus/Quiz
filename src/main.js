import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from './firebase.js'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

Array.prototype.findLastIndex = function(callBack){
    let arr = this.slice()
    return arr.length - arr.reverse().findIndex(callBack)
}
document.getElementById('app').style.display = 'none'
firebase.data().authFirebase()
firebase.data().getPacksData()
firebase.data().getGameRooms()
firebase.data().getUserAvatar()

export default {
    data(){
        return {
        closeLoader: function(){
            document.getElementById('app').style.display = 'block'
            document.getElementById('loader').classList.add('closeLoader')
            document.getElementById('loader').addEventListener('animationend', function(){
                document.getElementById('loader').style.display = 'none'
            })
        },
        }
    }
}
