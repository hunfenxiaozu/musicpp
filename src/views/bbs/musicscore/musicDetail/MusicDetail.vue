<template>
    <div class="music-detail">
        <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/bbs' }">学音乐</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/music-score' }">乐谱分享</el-breadcrumb-item>
                <el-breadcrumb-item>乐谱详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="picture">
            <el-carousel direction="vertical" :autoplay="false" arrow="always" trigger="click">
                <el-carousel-item v-for="item in pictures" :key="item">
                    <img :src="item.pUrl" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    import wt1 from '../../../../assets/music-score/wuxian/不愛我就拉倒 - 周傑倫/1.jpg'
    import wt2 from '../../../../assets/music-score/wuxian/不愛我就拉倒 - 周傑倫/2.jpg'
    import wt3 from '../../../../assets/music-score/wuxian/不愛我就拉倒 - 周傑倫/3.jpg'
    import wt4 from '../../../../assets/music-score/wuxian/不愛我就拉倒 - 周傑倫/4.jpg'
    import wt5 from '../../../../assets/music-score/wuxian/不愛我就拉倒 - 周傑倫/5.jpg'
    export default {
        name: "MusicDetail",
        data () {
            return {
                pictures: [
                    {
                        pUrl: wt1
                    },{
                        pUrl: wt2
                    },{
                        pUrl: wt3
                    },{
                        pUrl: wt4
                    },{
                        pUrl: wt5
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .music-detail{
        width: 70%;
        margin: 0 auto;
    }
    .bread{
        margin: 25px 0;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .picture{
        margin: 0 auto;
        width: 50%;
        height: 700px;
        border: 1px solid rgba(0,0,0,.2);
    }

    .picture >>> .el-carousel{
        width: 100%;
        height: 100%;
    }
    .picture >>> .el-carousel__container{
        /*width: 100%;*/
        height: 100% !important;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .picture >>> .el-carousel__indicators{
    }
    .picture >>> .el-carousel__button{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #999;
    }
</style>