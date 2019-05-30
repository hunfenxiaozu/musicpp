<template>
    <div class="swiper">
        <div class="block">
            <el-carousel height="300px" arrow="never">
                <el-carousel-item v-for="item in imgs">
                    <div class="title"><router-link to="/mtheory">{{item.title}}</router-link></div>
                    <img :src="item.imgUrl" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    import img1 from '../../../../assets/mtheory/swiper/1.jpg'
    import img2 from '../../../../assets/mtheory/swiper/2.jpg'
    import img3 from '../../../../assets/mtheory/swiper/3.jpg'
    export default {
        name: "Swiper",
        data() {
            return {
                imgs: [
                    {
                        title: '[夏季音乐班]7、8月暑期音乐培训班正式开招！',
                        imgUrl: img1
                    },
                    {
                        title: '[高级教学]周老师教你如何培养自己的乐感！',
                        imgUrl: img2
                    },
                    {
                        title: '[课后分享]你把音乐当成了什么？知己？伴侣？',
                        imgUrl: img3
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .swiper >>> .el-carousel__button{
        height: 10px;
        width: 10px;
        border-radius: 50%;
    }

    .block .el-carousel__container{
        position: relative;
    }

    .title{
        width: 100%;
        height: 50px;
        font-size: 28px;
        line-height: 50px;
        background-color: rgba(28,28,28,.5);
        position: absolute;
        bottom: 30px;
        text-align: center;
    }
    .title a{
        color: #FFF;
        text-decoration: none;
    }

    img{
        width: 100%;
        height: 100%;
    }

</style>