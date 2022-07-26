<template>
<div class="packCategories" v-bind:class="{displayNone: !firstElement}">
    <PackCategories 
    v-for="category in categories"
    :category="category"
    />
</div>
</template>

<script>
import PackCategories from './PackCategories.vue'
export default {
    components: {
        PackCategories
    },
    props: ['categories', 'firstElement']
}

</script>
<style>
.displayNone{
    display: none;
}
</style>