<script setup>

</script>

<template>
<div class="createPacke">
    <!-- <h1>Create Pack</h1> -->
    <router-link :to="'/'">Back</router-link>
    <div class="tabelQuestionCreate">
        aaa
    </div>
</div>
</template>

<style scoped>
.tabelQuestionCreate{
    width: 90vw;
    height: 90vh;
    display: grid;
    grid-template-columns: repeat(9 1fr);
    grid-template-rows: repeat(8 1fr);
}
</style>