<template>
    <div class="others">
        <div class="container">
            <div class="title">
                <h2>精选音乐专栏</h2>
                <h3>More music topics</h3>
            </div>
            <div class="other-top">
                <div class="item">
                    <el-card>
                        <div class="img">
                            <router-link to="/forum-detail"><img src="../../../../assets/forum/minzu.jpg" alt=""></router-link>
                        </div>
                        <div class="intro">
                            <div class="ti">中国"非遗"音乐艺术专题</div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae
                            consectetur consequuntur corporis cupiditate ea, earum enim est molestiae officia
                            placeat quae quas quasi quod ratione totam, veritatis voluptate voluptatem!
                        </div>
                    </el-card>
                </div>
                <div class="item">
                    <el-card>
                        <div class="img">
                            <router-link to="/forum-detail"><img src="../../../../assets/forum/k-pom.jpg" alt=""></router-link>
                        </div>
                        <div class="intro">
                            <div class="ti">BeatBox专题</div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae
                            consectetur consequuntur corporis cupiditate ea, earum enim est molestiae officia
                            placeat quae quas quasi quod ratione totam, veritatis voluptate voluptatem!
                        </div>
                    </el-card>
                </div>
            </div>
            <div class="other-bottom">
                <div class="item">
                    <el-card>
                        <div class="img">
                            <router-link to="/forum-detail"><img src="../../../../assets/forum/jietou.jpeg" alt=""></router-link>
                        </div>
                        <div class="intro">
                            <div class="ti">街头音乐专题</div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae
                            consectetur consequuntur corporis cupiditate ea, earum enim est molestiae officia
                            placeat quae quas quasi quod ratione totam, veritatis voluptate voluptatem!
                        </div>
                    </el-card>
                </div>
                <div class="item">
                    <el-card>
                        <div class="img">
                            <router-link to=""><img src="../../../../assets/forum/dizi.jpg" alt=""></router-link>
                        </div>
                        <div class="intro">
                            <div class="ti">更多</div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae
                            consectetur consequuntur corporis cupiditate ea, earum enim est molestiae officia
                            placeat quae quas quasi quod ratione totam, veritatis voluptate voluptatem!
                        </div>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Others"
    }
</script>

<style scoped>
    .title{
        text-align: center;
        color: #ffffff;
        padding-top: 40px;
        margin-bottom: 40px;
    }
    .title h2{
        font-size: 2rem;
        font-weight: 200;
    }
    .title h3{
        text-transform: uppercase;
        font-weight: 200;
        font-size: 1.5rem;
    }
    .others{
        width: 100%;
        /*background-color: #F8B156;*/
        background-color: rgb(64, 158, 255);
    }
    .container{
        width: 70%;
        margin: 0 auto;
    }
    .other-top{
        margin-bottom: 60px;
    }
    .other-bottom{
        padding-bottom: 80px;
    }
    .other-top,
    .other-bottom{
        display: flex;
        justify-content: space-between;
    }
    .img img{
        width: 100%;
        height: 100%;
    }
    .img{
        width: 100%;
        height: 300px;
        margin-bottom:20px;
    }
    .item{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 47%;
    }
    .intro{
        font-size: 15px;
        line-height: 1.3;
        font-weight: 300;
    }
    .ti{
        font-weight: 500;
        font-size: 24px;
        margin: 20px 0;
    }

</style>