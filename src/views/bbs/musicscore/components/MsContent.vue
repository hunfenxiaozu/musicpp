<template>
    <div class="ms-content">
        <div class="left">
            <div class="ms-item" v-for="music of musicBlock1">
                <div class="titles">
                    <div class="title">{{music.title}}</div>
                    <div class="more"><router-link to="/music-score">more</router-link></div>
                </div>
                <div class="music"></div>
                    <el-card v-for="item of music.musics">
                        <div class="item">
                            <span>
                                <router-link class="item-title" to="/music-detail">{{item.musicName}}</router-link>
                                <div class="item-author">{{item.author}}</div>
                            </span>
                        </div>
                    </el-card>
            </div>
        </div>
        <div class="right">
            <div class="ms-item" v-for="music of musicBlock2">
                <div class="titles">
                    <div class="title">{{music.title}}</div>
                    <div class="more"><router-link to="/music-score">more</router-link></div>
                </div>
                <div class="music"></div>
                <el-card v-for="item of music.musics">
                    <div class="item">
                            <span>
                                <router-link class="item-title" to="/music-detail">{{item.musicName}}</router-link>
                                <div class="item-author">{{item.author}}</div>
                            </span>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MsContent",
        data () {
            return {
                tabPosition: 'top',
                musicBlock1: [
                    {
                        title: '吉他谱',
                        musics: [
                            {
                                musicName: '无题',
                                author: '陈亮'
                            },{
                                musicName: '菊次郎的冬天',
                                author: '久让石'
                            },{
                                musicName: 'you and me',
                                author: '松井祐貴'
                            },{
                                musicName: 'Monologue',
                                author: '井草聖二'
                            },{
                                musicName: 'always with me',
                                author: '周某某'
                            }
                        ]
                    },{
                        title: '简谱',
                        musics: [
                            {
                                musicName: '不负时光',
                                author: 'Raincoat_123'
                            },{
                                musicName: '一百万个可能',
                                author: '佚名'
                            },{
                                musicName: '长生歌',
                                author: '佚名'
                            },{
                                musicName: '湖',
                                author: 'Muti'
                            },{
                                musicName: 'Three Of Us',
                                author: 'Slinz'
                            }
                        ]
                    }
                ], musicBlock2: [
                    {
                        title: '钢琴谱',
                        musics: [
                            {
                                musicName: '匆匆那年',
                                author: '林先生'
                            },{
                                musicName: '名探偵コナン',
                                author: '周先生'
                            },{
                                musicName: '一个人的浪漫',
                                author: '王某某'
                            },{
                                musicName: 'いのちの名前',
                                author: '広橋真紀子'
                            },{
                                musicName: 'This Is Me',
                                author: 'Keala Settle'
                            }
                        ]
                    },{
                        title: '五线谱',
                        musics: [
                            {
                                musicName: 'Together-大偵探皮卡丘',
                                author: '皮卡丘'
                            },{
                                musicName: '不愛我就拉倒',
                                author: '周傑倫'
                            },{
                                musicName: '黑夜問白天',
                                author: '林俊傑'
                            },{
                                musicName: 'WaNt U 2',
                                author: '棉花糖'
                            },{
                                musicName: 'always with me',
                                author: '周某某'
                            }
                        ]
                    }
                ],
            }
        }
    }
</script>

<style scoped>
    .ms-content{
        width: 100%;
        height: 600px;
        display: flex;
        margin-top: 20px;
        margin-bottom: 100px;
    }
    .titles{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    .title{
        padding: 9px;
        border-left: 10px solid rgb(64, 158, 255);
    }
    .more a{
        color: #999;
        text-decoration: none;
        margin-right: 10px;
    }
    .left,.right{
        padding: 10px;
        flex: 1;
        height: 100%;
    }
    .left{
        border-right: 1px solid rgba(0,0,0,.2);
    }
    .ms-item{
        width: 100%;
        height: 50%;
    }
    .left .ms-item:first-child,
    .right .ms-item:first-child{
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(0,0,0,.2);
    }
    .el-card{
        margin-bottom: 5px;
    }
    .item span{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .ms-content >>> .el-card__body{
        padding: 10px;
    }
    a{
        color: #454545;
        text-decoration: none;
    }
    a:hover{
        color: rgb(64, 158, 255);
    }
</style>