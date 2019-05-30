<template>
    <div class="music-score">
        <quick-nav></quick-nav>
        <ms-content></ms-content>
    </div>
</template>

<script>
    import QuickNav from './components/QuickNav'
    import MsContent from './components/MsContent'
    export default {
        name: "Simple",
        components: { QuickNav, MsContent }
    }
</script>

<style scoped>
    .music-score{
        width: 70%;
        margin: 0 auto;
    }
</style>