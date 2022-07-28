

<template>
<Loader />
  <RouterView/>
</template>

<style scoped>

</style>
<script>
import Loader from './views/Loader.vue'
import firebase from './firebase.js'
firebase.data().authFirebase()
firebase.data().getPacksData()
firebase.data().getGameRooms()
console.log(firebase.data().userName)


</script>