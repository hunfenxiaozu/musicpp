<template>
    <div class="quick-nav">
        <div class="title">快速导航</div>
        <span class="quick-item" v-for="item of navList">
            <label class="quick-label">{{item.navTitle}}</label>
            <div class="quick-nav-item" v-for="nav of item.navItems">
                <div><router-link to="/music-score">{{nav.title}}</router-link></div>
            </div>
        </span>
    </div>
</template>

<script>
    export default {
        name: "QuickNav",
        data () {
            return {
                navList: [
                    {
                        navTitle: '曲谱类型:',
                        navItems: [
                            {
                                title: '吉他谱',
                                id: '001'
                            },
                            {
                                title: '简谱',
                                id: '002'
                            },
                            {
                                title: '钢琴谱',
                                id: '003'
                            },
                            {
                                title: '五线谱',
                                id: '004'
                            },
                            {
                                title: '更多',
                                id: '005'
                            }
                        ]
                    },
                    {
                        navTitle: '热门歌手:',
                        navItems: [
                            {
                                title: '林俊杰',
                                id: '101'
                            },
                            {
                                title: '陈奕迅',
                                id: '102'
                            },
                            {
                                title: '周杰伦',
                                id: '103'
                            },
                            {
                                title: '齐秦',
                                id: '104'
                            },
                            {
                                title: '更多',
                                id: '105'
                            }
                        ]
                    },
                    {
                        navTitle: '最新曲谱:',
                        navItems: [
                            {
                                title: '不爱我就拉倒',
                                id: '201'
                            },
                            {
                                title: '匆匆那年',
                                id: '202'
                            },
                            {
                                title: '名侦探柯南主题曲',
                                id: '203'
                            },
                            {
                                title: '一个人的浪漫',
                                id: '204'
                            },
                            {
                                title: '不负时光',
                                id: '205'
                            },
                            {
                                title: '黑夜问白天',
                                id: '206'
                            },
                            {
                                title: '更多',
                                id: '207'
                            }
                        ]
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .title{
        color: #454545;
        font-size: 26px;
        margin-bottom: 10px;
        /*border-left: 10px solid rgb(64, 158, 255);*/
    }
    .quick-nav{
        margin-top: 30px;
        padding: 10px;
        border: 1px solid rgba(28,28,28,.2);
    }
    .quick-item{
        display: flex;
        height: 50px;
        line-height: 50px;
    }
    .quick-nav-item{
        display: flex;
        margin-left: 15px;
    }
    .quick-nav-item div{
        margin-right: 10px;
    }
    .quick-nav-item a{
        color: #454545;
        text-decoration: none;
    }
    .quick-nav-item a:last-child{
        color: rgba(100, 100, 100, .8);
    }
    .quick-nav-item a:hover{
        color: rgba(28, 28, 28, 1);
        text-decoration: underline;
    }
</style>