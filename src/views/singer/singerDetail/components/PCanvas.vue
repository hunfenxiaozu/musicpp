<template>
    <div class="comment-mes">
        <div class="introduce">
            <div class="intro-content">
                <div class="username">你好！我是 {{username}}</div>
                <div class="intro">{{intro}}</div>
            </div>
        </div>
        <div class="avatar">
            <div class="img">
                <img src="../../../../assets/personal/avatar/avatar01.jpg" alt="">
            </div>
            <div class="img-intro">
                <div class="item">粉丝<div class="item-num">1234</div></div>
                <div class="item">收藏<div class="item-num">22</div></div>
                <div class="item">关注<div class="item-num">22</div></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PCanvas",
        props: [ 'intro', 'username' ]
    }
</script>

<style scoped>
    .comment-mes{
        width: 70%;
        height: 250px;
        margin: 10px auto;
        padding-top: 10px;
        padding-bottom: 10px;
        /*background-color: #fff;*/
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .introduce{
        flex: 3;
        height: 100%;
        background-color: rgba(28,28,28,.7);
        color: #fff;
        font-size: 24px;
    }
    .intro-content{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /*align-items: center;*/
        margin-left: 30px;
    }
    .username{
        margin-bottom: 10px;
        font-size: 36px;
    }
    .intro{
        color: #dedede;
        font-size: 20px;
        font-weight: 300;
    }
    .avatar{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .avatar .img{
        height: 150px;
        width: 150px;
    }
    .avatar img{
        height: 150px;
        width: 150px;
        margin: 0 auto;
        box-shadow: 1px 2px 2px 1px rgba(0,0,0,.8);
    }
    .img-intro{
        width: 100%;
        margin-top: 20px;
        color: #fff;
        display: flex;
        justify-content: space-around;
    }
    .img-intro .item,
    .img-intro .item-num{
        /*color: #999;*/
        font-size: 16px;
        text-align: center;
    }
    .img-intro .item-num{
        margin-top: 10px;
        font-size: 24px;
        font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    }
</style>