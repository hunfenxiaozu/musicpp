<template>
    <div class="evaluation">
        <recom></recom>
        <recom-eva></recom-eva>
        <all-music></all-music>
        <router-view></router-view>
    </div>
</template>

<script>
    import Recom from "./components/Recom"
    import RecomEva from "./components/RecomEva"
    import AllMusic from "./components/AllMusic"
    export default {
        name: "Evaluation",
        components: { Recom, RecomEva, AllMusic }
    }
</script>

<style scoped>
.evaluation{
    width: 70%;
    margin: 0 auto;
}
</style>