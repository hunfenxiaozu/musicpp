<template>
<div class="recom-eva">
    <div class="title">最近评测</div>
    <div class="recom-img">
        <div class="re-left">
            <div class="re-left-top">
                <div class="item"></div>
                <div class="item"></div>
            </div>
            <div class="re-left-bottom"></div>
        </div>
        <div class="re-right">
            <div class="re-right-left">
                <div class="item"></div>
                <div class="item"></div>
            </div>
            <div class="re-right-right"></div>
        </div>
    </div>

</div>
</template>

<script>
    export default {
        name: "RecomEva"
    }
</script>

<style scoped>
.recom-eva{
    width: 100%;
    height: 450px;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
    .title{
        padding: 8px;
        color: #000;
        border-left: 10px solid rgb(64, 158, 255);
    }
    .recom-img{
        width: 100%;
        height: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
    }
    .re-left, .re-right, .re-left-top .item, .re-right-right, .re-right-left{
        width: 49%;
        height: 100%;
    }
    .re-left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .re-left-top{
        height: 49%;
        display: flex;
        justify-content: space-between;
    }
    .re-left-bottom{
        height: 49%;
        background: url("../../../../assets/pianoEVA.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .item{
        -webkit-transition: -webkit-transform 0.3s;
        -moz-transition: -moz-transform 0.3s;
        -o-transition: -o-transform 0.3s;
        transition: transform 0.3s;
        filter: blur(0);
        box-shadow: 0 0 0 0;
    }
    .re-left-top .item:first-child{
        background: url("../../../../assets/guitar.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .re-left-top .item:last-child{
        background: url("../../../../assets/萨克斯.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .re-right{
        display: flex;
        justify-content: space-between;
    }
    .re-right-left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .re-right-left .item{
        height: 49%;
    }
    .re-right-left .item:first-child{
        background: url("../../../../assets/口琴.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .re-right-left .item:last-child{
        background: url("../../../../assets/小提琴.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .re-right-right{
        background: url("../../../../assets/大提琴.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .re-left, .re-right, .re-left-top .item, .re-left-bottom, .re-right-left, .re-right-right, .re-right-left .item{
        border-radius: 3px;
    }
    .item:hover{
        animation: fangda 500ms;
        animation-fill-mode: forwards;
        -webkit-transform: scale(1.05);
        -moz-transform: scale(1.05);
        -ms-transform: scale(1.05);
        -o-transform: scale(1.05);
        transform: scale(1.05);
        /*box-shadow: 0px 0px 5px 3px rgba(0,0,0,.8);*/
    }
    /*@keyframes fangda {*/
    /*    0%{*/
    /*        filter: blur(0);*/
    /*    }*/
    /*    100%{*/
    /*        filter: blur(2px);*/
    /*    }*/
    /*}*/
</style>