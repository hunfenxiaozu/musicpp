<template>
    <div class="mtheory">
        <swiper></swiper>
        <video-list></video-list>
    </div>
</template>

<script>
    import Swiper from './components/Swiper'
    import videoList from './components/videoList'
    export default {
        name: "Mtheory",
        components: { Swiper, videoList }
    }
</script>

<style scoped>
    .mtheory{
        width: 70%;
        margin: 0 auto;
    }

</style>