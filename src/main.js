import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

Array.prototype.findLastIndex = function(callBack){
    let arr = this.slice()
    return arr.length - arr.reverse().findIndex(callBack)
}
