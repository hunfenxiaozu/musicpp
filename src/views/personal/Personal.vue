<template>
    <div class="personal">
        <div class="header">
            <p-canvas></p-canvas>
            <personal-mess></personal-mess>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import PCanvas from './components/PCanvas'
    import PersonalMess from './components/PersonalMess'
    export default {
        name: "Personal",
        components: { PCanvas, PersonalMess }
    }
</script>

<style scoped>
    .personal{
        background: url("../../assets/personal/canvas/canvas03.jpg");
        position:fixed;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
        min-width: 1000px;
        z-index:-10;
        zoom: 1;
        background-color: #fff;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center 0;
    }
</style>