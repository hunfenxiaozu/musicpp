<template>
    <div class="evaluation">
        <recom></recom>
        <router-view></router-view>
    </div>
</template>

<script>
    import Recom from "./components/Recom"
    export default {
        name: "Evaluation",
        components: { Recom }
    }
</script>

<style scoped>

</style>