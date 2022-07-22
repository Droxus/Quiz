<script setup>

</script>

<template>
<div>
    <header>
        <h1>Join Game</h1>
        <router-link :to="'/'">Back</router-link>
    </header>
    <main>
        <div id="allGames">
            <div class="gamesOnPick">
                <label>Game Name</label>
                <label>Creator</label>
                <label>1</label>
            </div>
        </div>
    </main>
</div>
</template>

<style>
#allGames{
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 5vh;
}
.gamesOnPick{
    display: grid;
    width: 100%;
    grid-template-rows: 100%;
    grid-template-columns: 50% 30% 20%;
    border: 1px solid black;
}
</style>