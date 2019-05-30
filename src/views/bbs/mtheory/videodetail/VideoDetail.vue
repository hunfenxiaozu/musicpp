<template>
    <div class="vd">
        <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/bbs' }">学音乐</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/mtheory' }">乐理讲解</el-breadcrumb-item>
                <el-breadcrumb-item>视频详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="video-detail">
            <div class="videolist">
                <div class="vlabel">视频列表</div>
                <el-card class="box-card" shadow="hover" v-for="item of videoList">
                    <div class="vleft">
                        <img :src="item.imgs" alt="">
                    </div>
                    <div class="vright">
                        {{item.title}}
                    </div>
                </el-card>
            </div>
            <div class="video-content">
                <video-player  class="video-player vjs-custom-skin"
                               ref="videoPlayer"
                               :playsinline="true"
                               :options="playerOptions"
                ></video-player>
                <div class="video-btn">
                    <el-rate
                            v-model="value"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                    </el-rate>
                    <el-row>
<!--                        <el-button type="primary" icon="el-icon-edit" circle></el-button>-->
                        <el-button type="primary" icon="el-icon-share" circle></el-button>
                        <el-button type="danger" icon="el-icon-plus" circle></el-button>
                        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                    </el-row>
                </div>
            </div>
        </div>
        <common></common>
    </div>

</template>

<script>
    import img1 from '../../../../assets/mtheory/mt1.jpg'
    import img2 from '../../../../assets/mtheory/mt2.jpg'
    import img3 from '../../../../assets/mtheory/mt3.jpg'
    import img4 from '../../../../assets/mtheory/mt4.jpg'
    import img5 from '../../../../assets/mtheory/mt5.jpg'
    import img6 from '../../../../assets/mtheory/mt6.jpg'
    import img7 from '../../../../assets/mtheory/mt7.jpg'
    import img8 from '../../../../assets/mtheory/mt8.jpg'
    import img9 from '../../../../assets/mtheory/mt9.jpg'
    import video1 from "../../../../assets/video/test.mp4"
    import poster1 from "../../../../assets/video/1.jpg"
    import Common from "./components/Common"
    export default {
        name: "video-detail",
        components: { Common },
        data () {
            return {
                value: null,
                value: 3.7,
                videoList: [
                    {
                        imgs: img1,
                        title: '基础教学（一）'
                    },
                    {
                        imgs: img2,
                        title: '基础教学（二）'
                    },
                    {
                        imgs: img3,
                        title: '基础教学（三）'
                    },
                    {
                        imgs: img4,
                        title: '基础教学（四）'
                    },
                    {
                        imgs: img5,
                        title: '基础教学（五）'
                    },
                    {
                        imgs: img6,
                        title: '基础教学（六）'
                    }
                ],
                playerOptions : {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "",
                        src: video1 //url地址
                    }],
                    poster: poster1, //你的封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  //全屏按钮
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .video-detail{
        display: flex;
        width: 70%;
        height: 510px;
        margin: 0 auto;
        border: 1px solid rgba(0,0,0,.2);
        box-shadow: 1px 2px 2px rgba(0,0,0,.4);
    }
    .video-content{
        flex: 3;
        margin: 0 auto;
    }
    .video-js .vjs-big-play-button{
        background-color: #fff;
    }
    .video-detail >>> .vjs-big-play-button{
        width: 2em !important;
        height: 3em !important;
        border-radius: 50%;
        background-color: rgba(200,200,200,0.45) !important;
        outline: none !important;
    }

    .video-detail >>> .vjs-play-control,
    .video-detail >>> .vjs-playback-rate,
    .video-detail >>> .vjs-fullscreen-control
    {
        outline: none !important;
    }
    .videolist{
        width: 100%;
        flex: 1;
        border-right: 1px solid rgba(0,0,0,.2);
    }
    .el-card{
        width: 100%;
        margin-bottom: 5px;
    }
    .video-detail >>> .el-card__body{
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
    }
    .vleft{
        flex: 1;
        height: 100%;
    }
    .vright{
        flex: 2;
        margin-left: 15px;
    }
    .el-card img{
        width: 100%;
        height: 100%;
    }
    .vlabel{
        margin: 10px;
        color: #999;
    }
    .bread{
        width: 70%;
        margin: 25px auto;
    }
    .vd{
        height: 600px;
    }
    .video-btn{
        margin-top: 10px;
        margin-right: 20px;
        text-align: right;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .video-btn .el-rate{
        flex: 3;
    }
    .video-btn .el-row{
        flex: 1;
    }
</style>