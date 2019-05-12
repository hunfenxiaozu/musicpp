<template>
    <div class="recom">
        <div class="brand">
            <router-link to="/"><img src="../../../../assets/brand/yamaha.png" alt=""></router-link>
            <router-link to="/"><img src="../../../../assets/brand/Roland.png" alt=""></router-link>
            <router-link to="/"><img src="../../../../assets/brand/squiet.png" alt=""></router-link>
            <router-link to="/"><img src="../../../../assets/brand/tycoon.png" alt=""></router-link>
            <router-link to="/"><img src="../../../../assets/brand/海伦.png" alt=""></router-link>
            <router-link to="/"><img src="../../../../assets/brand/星海.png" alt=""></router-link>
        </div>
        <div class="canvas">
            <div class="little-tip">
                <div>
                    <router-link to="/shenmegui">
                        【雅马哈YAMAHA】新的声音，源自灵感
                        继承雅马哈殿堂级音乐会三角钢琴CFX的技术
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Recom"
    }
</script>

<style scoped>
    .canvas{
        width: 100%;
        height: 350px;
        margin: 10px auto;
        position: relative;
        background: url("../../../../assets/piano.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
    }
    .little-tip{
        width: 100%;
        height: 70px;
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        background-color: rgba(0,0,0,.45);
    }
    .little-tip div{
        color: #fff;
        width: 100%;
        text-align: center;
    }
    .brand{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 15px auto;
    }
    .brand img{
        width: 150px;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
</style>