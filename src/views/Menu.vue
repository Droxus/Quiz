<script setup>

</script>

<template>
<div id="menu">
    <h1>Menu</h1>
    <ul>
        <li><router-link :to="'/joinGame'">Join Game</router-link></li>
        <li><router-link :to="'/createGame'">Create Game</router-link></li>
        <li><router-link :to="'/findPack'">Find Pack</router-link></li>
        <li><router-link :to="'/createPack'">Create Pack</router-link></li>
    </ul>
</div>
</template>

<style scoped>

</style>