<template>
    <div class="all-music">
        <div class="eva-center">
            <div class="title1">评测中心</div>
            <el-tabs :tab-position="tabPosition" style="height: 200px;">
                <el-tab-pane v-for="pane of allpane" :label="pane.ab">
                    <div class="item" v-for="item of pane.contents">
                    <span>
                        <router-link class="item-title" to="/">{{item.title}}</router-link>
                        <router-link class="item-author" to="/">{{item.author}}</router-link>
                        <span class="time">{{item.time}}</span>
                    </span>
                        <el-divider></el-divider>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="brand">
            <div class="title2">乐器大厂</div>
            <div class="all-brand">
                <div class="brand-item">
                    <router-link to="/"><img src="../../../../assets/brand/yamaha.png" alt=""></router-link>
                    <div class="brand-name">雅马哈(YAMAHA)</div>
                </div>
                <div class="brand-item">
                    <router-link to="/"><img src="../../../../assets/brand/Roland.png" alt=""></router-link>
                    <div class="brand-name">Roland</div>
                </div>
                <div class="brand-item">
                    <router-link to="/"><img src="../../../../assets/brand/squiet.png" alt=""></router-link>
                    <div class="brand-name">Squiet</div>
                </div>
                <div class="brand-item">
                    <router-link to="/"><img src="../../../../assets/brand/tycoon.png" alt=""></router-link>
                    <div class="brand-name">Tycoon</div>
                </div>
                <div class="brand-item">
                    <router-link to="/"><img src="../../../../assets/brand/海伦.png" alt=""></router-link>
                    <div class="brand-name">海伦钢琴</div>
                </div>
                <div class="brand-item">
                    <router-link to="/"><img src="../../../../assets/brand/星海.png" alt=""></router-link>
                    <div class="brand-name">星海</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AllMusic",
        data() {
            return {
                tabPosition: 'top',
                allpane: [
                    {
                        ab: '钢琴',
                        contents: [
                            {
                                title: '金斯波格钢琴KG122技术评测（木料篇）',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            },
                            {
                                title: '金斯波格钢琴KG122技术评测（配置篇）',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            },
                            {
                                title: '金斯波格钢琴KG122技术测评（设计篇）',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            },
                            {
                                title: '金斯波格钢琴KG122技术评测（价格篇）',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            },{
                                title: '门德尔松EP-05A3-125-K钢琴测评报告',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            },{
                                title: '珠江钢琴P系列和T系列的区别',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            },{
                                title: '“调音之王”专业版钢琴调律软件评测报告',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            },{
                                title: '哈曼尼钢琴HG122L测评',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            },{
                                title: 'PEARL RIVER珠江钢琴评测',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            }
                        ]
                    },
                    {
                        ab: '吉他',
                        contents: [
                            {
                                title: 'EMG拾音器音色介绍与描述（含部分图）',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            },
                            {
                                title: '预览Digitech GNX3000 音色参数（官网）',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            },
                            {
                                title: '预览Scuru s1 迷你电吉他充电蓝牙小音箱自带失真',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            },
                            {
                                title: 'CL 最新 过载 echo延迟 动态压缩 高增益失真金属 di箱体模拟',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            },
                            {
                                title: '国产DW EPI STD电吉他简单试用测评',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            },
                            {
                                title: 'Taylor 210E 电箱木吉他评测',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            }
                        ]
                    },
                    {
                        ab: '大提琴',
                        contents: [
                            {
                                title: '不同价格大提琴之间对比',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            }
                        ]
                    },
                    {
                        ab: '小提琴',
                        contents: [
                            {
                                title: '著名小提琴演奏家郑锦龙品鉴名琴Rotondo',
                                time: '2019-5-12',
                                hot: 12345,
                                author: '周先生'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .all-music{
        display: flex;
        justify-content: center;
    }
    .title1, .title2{
        padding: 8px;
        color: #000;
        margin-bottom: 10px;
        border-left: 10px solid rgb(64, 158, 255);
    }
    .el-divider--horizontal{
        margin: 15px 0;
    }
    a{
        color: #454545;
        text-decoration: none;
    }
    a:hover{
        color: rgb(64, 158, 255);
        /*text-decoration: underline;*/
    }
    .all-music{
        width: 100%;
        height: 800px;
    }
    .eva-center{
        width: 69%;
    }
    .brand{
        width: 31%;
    }
    .all-brand{
        width: 100%;
        margin-top: 50px;
        margin-left: 20px;
    }
    .brand-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .all-brand img{
        width: 80%;
        border: 1px solid #999;
    }
    .all-brand .brand-name{
        width: 100%;
    }
    .item span{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .item span .item-title{
        flex: 6;
        margin-left: 15px;
    }
    .item span .item-author{
        color: #999;
    }
    .item span
    .item span .time{
        flex: 2;
    }
    .time{
        font-size: 14px;
        color: #999;
        margin: 0 10px;
    }
</style>