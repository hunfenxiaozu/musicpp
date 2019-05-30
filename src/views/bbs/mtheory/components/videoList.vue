<template>
    <div class="video-list">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部教学" name="first">
                <el-row v-for="(page, index) of pages" :key="index" >
                    <el-col :span="4" v-for="(item, innerindex) of page" :key="item.id" :offset="innerindex > 0 ? 2 : 1">
                        <el-card shadow="hover" class="my-card">
                            <div class="blackcc" v-show="item.blacks" @mouseleave="hideBlack(item.id)">
                                <div class="play">
                                    <router-link to="/video-detail">
                                        <i class="el-icon-video-play"></i>
                                    </router-link>
                                </div>
                                <div class="video-title">
                                    {{item.title}}
                                </div>
                            </div>
                            <img :src="item.imgUrl" alt="" @mouseenter="showBlack(item.id)">
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="基础乐理" name="second">
                <el-row v-for="(page, index) of pages" :key="index" >
                    <el-col :span="4" v-for="(item, innerindex) of page" :key="item.id" :offset="innerindex > 0 ? 2 : 1">
                        <el-card shadow="hover" class="my-card">
                            <div class="blackcc" v-show="item.blacks" @mouseleave="hideBlack(item.id)">
                                <div class="play">
                                    <i class="el-icon-video-play"></i>
                                </div>
                                <div class="video-title">
                                    {{item.title}}
                                </div>
                            </div>
                            <img :src="item.imgUrl" alt="" @mouseenter="showBlack(item.id)">
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="进阶乐理" name="frist">
                <el-row v-for="(page, index) of pages" :key="index" >
                    <el-col :span="4" v-for="(item, innerindex) of page" :key="item.id" :offset="innerindex > 0 ? 2 : 1">
                        <el-card shadow="hover" class="my-card">
                            <div class="blackcc" v-show="item.blacks" @mouseleave="hideBlack(item.id)">
                                <div class="play">
                                    <i class="el-icon-video-play"></i>
                                </div>
                                <div class="video-title">
                                    {{item.title}}
                                </div>
                            </div>
                            <img :src="item.imgUrl" alt="" @mouseenter="showBlack(item.id)">
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="作曲教学" name="forth">
                <el-row v-for="(page, index) of pages" :key="index" >
                    <el-col :span="4" v-for="(item, innerindex) of page" :key="item.id" :offset="innerindex > 0 ? 2 : 1">
                        <el-card shadow="hover" class="my-card">
                            <div class="blackcc" v-show="item.blacks" @mouseleave="hideBlack(item.id)">
                                <div class="play">
                                    <i class="el-icon-video-play"></i>
                                </div>
                                <div class="video-title">
                                    {{item.title}}
                                </div>
                            </div>
                            <img :src="item.imgUrl" alt="" @mouseenter="showBlack(item.id)">
                        </el-card>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>

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
    import img10 from '../../../../assets/mtheory/mt10.jpg'
    import img11 from '../../../../assets/mtheory/mt11.jpg'
    import img12 from '../../../../assets/mtheory/mt12.jpg'
    import img13 from '../../../../assets/mtheory/mt13.jpg'
    import img14 from '../../../../assets/mtheory/mt14.jpg'
    import img15 from '../../../../assets/mtheory/mt15.jpg'
    import img16 from '../../../../assets/mtheory/mt16.jpg'
    import img17 from '../../../../assets/mtheory/mt17.jpg'
    import img18 from '../../../../assets/mtheory/mt18.jpg'
    import img19 from '../../../../assets/mtheory/mt19.jpg'
    export default {
        name: "videoList",
        data() {
            return {
                activeName: 'first',
                firstList: [
                    {
                        title: '认识钢琴键盘, 告别小白阶段',
                        imgUrl: img1,
                        id: 1,
                        blacks: false
                    },
                    {
                        title: '动次大次是怎么回事',
                        imgUrl: img2,
                        id: 2,
                        blacks: false
                    },
                    {
                        title: 'C 大调是什么意思？',
                        imgUrl: img3,
                        id: 3,
                        blacks: false
                    },
                    {
                        title: '和弦是什么',
                        imgUrl: img4,
                        id: 4,
                        blacks: false
                    },
                    {
                        title: '课时7调式中各音级的名称',
                        imgUrl: img5,
                        id: 5,
                        blacks: false
                    },
                    {
                        title: '关系大小调',
                        imgUrl: img6,
                        id: 6,
                        blacks: false
                    },
                    {
                        title: '细思恐极——这个音程到底是几度?',
                        imgUrl: img7,
                        id: 7,
                        blacks: false
                    },
                    {
                        title: '进阶乐理一',
                        imgUrl: img8,
                        id: 8,
                        blacks: false
                    },
                    {
                        title: '进阶乐理二',
                        imgUrl: img9,
                        id: 9,
                        blacks: false
                    },
                    {
                        title: '编曲教学（一）',
                        imgUrl: img10,
                        id: 10,
                        blacks: false
                    },
                    {
                        title: '编曲教学（二）',
                        imgUrl: img11,
                        id: 11,
                        blacks: false
                    },
                    {
                        title: '进阶乐理三',
                        imgUrl: img12,
                        id: 12,
                        blacks: false
                    },
                    {
                        title: '进阶乐理四',
                        imgUrl: img13,
                        id: 13,
                        blacks: false
                    },
                    {
                        title: '进阶乐理五',
                        imgUrl: img14,
                        id: 14,
                        blacks: false
                    },
                    {
                        title: '进阶乐理六',
                        imgUrl: img15,
                        id: 15,
                        blacks: false
                    },
                    {
                        title: '基础乐理一',
                        imgUrl: img16,
                        id: 16,
                        blacks: false
                    },
                    {
                        title: '基础乐理二',
                        imgUrl: img17,
                        id: 17,
                        blacks: false
                    },
                    {
                        title: '基础乐理三',
                        imgUrl: img18,
                        id: 18,
                        blacks: false
                    },
                    {
                        title: '基础乐理四',
                        imgUrl: img19,
                        id: 19,
                        blacks: false
                    }
                ],
                secondList: [
                    {
                        title: '认识钢琴键盘, 告别小白阶段',
                        imgUrl: img1,
                        id: 1,
                        blacks: false
                    },
                    {
                        title: '动次大次是怎么回事',
                        imgUrl: img2,
                        id: 2,
                        blacks: false
                    },
                    {
                        title: 'C 大调是什么意思？',
                        imgUrl: img3,
                        id: 3,
                        blacks: false
                    },
                    {
                        title: '和弦是什么',
                        imgUrl: img4,
                        id: 4,
                        blacks: false
                    },
                    {
                        title: '课时7调式中各音级的名称',
                        imgUrl: img5,
                        id: 5,
                        blacks: false
                    },
                    {
                        title: '关系大小调',
                        imgUrl: img6,
                        id: 6,
                        blacks: false
                    },
                    {
                        title: '细思恐极——这个音程到底是几度?',
                        imgUrl: img7,
                        id: 7,
                        blacks: false
                    },
                    {
                        title: '认识钢琴键盘, 告别小白阶段',
                        imgUrl: img16,
                        id: 8,
                        blacks: false
                    },
                    {
                        title: '动次大次是怎么回事',
                        imgUrl: img17,
                        id: 9,
                        blacks: false
                    },
                    {
                        title: 'C 大调是什么意思？',
                        imgUrl: img18,
                        id: 10,
                        blacks: false
                    },
                    {
                        title: 'C 大调是什么意思？',
                        imgUrl: img19,
                        id: 11,
                        blacks: false
                    }
                ],
                fristList: [
                    {
                        title: '认识钢琴键盘, 告别小白阶段',
                        imgUrl: img8,
                        id: 1,
                        blacks: false
                    },
                    {
                        title: '动次大次是怎么回事',
                        imgUrl: img9,
                        id: 2,
                        blacks: false
                    },
                    {
                        title: 'C 大调是什么意思？',
                        imgUrl: img12,
                        id: 3,
                        blacks: false
                    },
                    {
                        title: 'C 大调是什么意思？',
                        imgUrl: img13,
                        id: 4,
                        blacks: false
                    },
                    {
                        title: 'C 大调是什么意思？',
                        imgUrl: img14,
                        id: 5,
                        blacks: false
                    },
                    {
                        title: 'C 大调是什么意思？',
                        imgUrl: img15,
                        id: 6,
                        blacks: false
                    }
                ],
                forthList: [
                    {
                        title: '认识钢琴键盘, 告别小白阶段',
                        imgUrl: img10,
                        id: 1,
                        blacks: false
                    },
                    {
                        title: '动次大次是怎么回事',
                        imgUrl: img11,
                        id: 2,
                        blacks: false
                    }
                ]
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            showBlack(id) {
                const activeName = this.activeName;
                switch(activeName)
                {
                    case 'first':
                        this.firstList[id-1].blacks = true
                        break;
                    case 'second':
                        this.secondList[id-1].blacks = true
                        break;
                    case 'frist':
                        this.fristList[id-1].blacks = true
                        break;
                    case 'forth':
                        this.forthList[id-1].blacks = true
                        break;
                }
            },
            hideBlack(id) {
                const activeName = this.activeName;
                switch(activeName)
                {
                    case 'first':
                        this.firstList[id-1].blacks = false
                        break;
                    case 'second':
                        this.secondList[id-1].blacks = false
                        break;
                    case 'frist':
                        this.fristList[id-1].blacks = false
                        break;
                    case 'forth':
                        this.forthList[id-1].blacks = false
                        break;
                }
            }
        },
        computed: {
            pages () {
                const pages = [];
                const activeName = this.activeName;
                switch(activeName)
                {
                    case 'first':
                        this.firstList.forEach((item, index) => {
                            const page = Math.floor(index / 4);
                            if (!pages[page]) {
                                pages[page] = []
                            }
                            pages[page].push(item)
                        });
                        break;
                    case 'second':
                        this.secondList.forEach((item, index) => {
                            const page = Math.floor(index / 4);
                            if (!pages[page]) {
                                pages[page] = []
                            }
                            pages[page].push(item)
                        });
                        break;
                    case 'frist':
                        this.fristList.forEach((item, index) => {
                            const page = Math.floor(index / 4);
                            if (!pages[page]) {
                                pages[page] = []
                            }
                            pages[page].push(item)
                        });
                        break;
                    case 'forth':
                        this.forthList.forEach((item, index) => {
                            const page = Math.floor(index / 4);
                            if (!pages[page]) {
                                pages[page] = []
                            }
                            pages[page].push(item)
                        });
                        break;
                }
                return pages
            }
        }
    }
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }
    .video-list{
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .video-list >>> .el-tabs__active-bar{
        display: none;
    }
    .video-list >>> .is-active{
        border-radius: 40%;
    }
    .video-list >>> .el-tabs__item{
        text-align: center;
        width: 100px;
        padding: 0;
    }
    .video-list >>> .el-tabs__nav-wrap::after{
        display: none;
    }

    .video-list >>> .el-card{
        padding: 0;
        width: 240px;
        height: 180px;
    }

    .video-list >>> .el-card__body{
        padding: 0;
        width: 240px;
        height: 180px;
    }

    .el-row{
        margin-bottom: 20px;
    }

    .el-col:first-child{
        margin: 0;
    }

    .my-card{
        position: relative;
    }
    .my-card img{
        width: 100%;
        height: 100%;
    }

    .blackcc{
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(28,28,28,.7);
    }
    .play{
        flex: 3;
        color: #ccc;
        font-size: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .play a{
        color: #ccc;
    }
    .video-title{
        flex: 1;
        color: #ccc;
        font-size: 15px;
    }


</style>