<template>
    <div class="p-canvas">
        <div class="black-mark">
            <div class="comment-mes">
                <div class="avatar">
                    <img src="../../../assets/personal/avatar/avatar01.jpg" alt="">
                </div>
                <div class="introduce">
                    <p>Hey! I'am Raincoat_123.</p>
                    <p>Welcome to my HomePage!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PCanvas"
    }
</script>

<style scoped>
    .p-canvas{
        width: 100%;
        margin: 0 auto;
    }
    .black-mark{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #372d38;
        opacity: 0.8;
        z-index: 3;
    }
    .p-canvas img{
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        /*background-color: rgba(0,0,0,.5);*/
    }
    .comment-mes{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .introduce{
        color: #fff;
        font-size: 24px;
    }
    .avatar{
        height: 110px;
        width: 110px;
        box-shadow: 1px 2px 2px 1px rgba(0,0,0,.8);
        margin-right: 25px;
    }
    .avatar img{
        height: 110px;
        width: 110px;
    }
</style>