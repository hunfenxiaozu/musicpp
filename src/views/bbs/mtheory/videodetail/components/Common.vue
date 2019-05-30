<template>
    <div class="common">
        <div class="title">
            留言 <span>{{this.commonList.length}}</span>
        </div>
        <div class="common-list">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <el-input
                            type="textarea"
                            autosize
                            placeholder="写下你的建议或意见..."
                            v-model="isay">
                    </el-input>
                    <div class="block">
                        <span class="demonstration">此处评分</span>
                        <el-rate
                                v-model="value2"
                        >
                        </el-rate>
                        <el-button type="primary" @click="sendCommon">留言</el-button>
                    </div>
                </div>
                <div v-for="item in commonList" :key="item.id" class="text item">
                    <div class="they-say">
                        <div class="users">
                            <div class="user-avatar">
                                <img :src="item.avatar" alt="">
                            </div>
                            <div class="username">{{item.username}}</div>
                        </div>
                        <div class="said-content">
                            <div class="text">“{{item.common}}”</div>
                            <div class="rate">
                                <el-rate
                                        disabled
                                        v-model="item.rates"
                                        >
                                </el-rate>
                            </div>
                        </div>
                    </div>
                    <el-divider direction="horizontal"></el-divider>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    import img1 from '../../../../../assets/personal/avatar/avatar01.jpg'
    export default {
        name: "Common",
        data () {
            return {
                isay: '',
                value2: 0,
                commonList: [
                    {
                        avatar: img1,
                        username: '周先生',
                        common: '我觉得很不错！',
                        rates: 3.0,
                        id: 1
                    },{
                        avatar: img1,
                        username: 'Raincoat_123',
                        common: '这节课够我学两年，老师上课好有趣！',
                        rates: 4.3,
                        id: 2
                    },{
                        avatar: img1,
                        username: '不愿意暴露姓名的李某某',
                        common: '磨刀不误砍柴工，基础都没学好就想飞？',
                        rates: 3.7,
                        id: 3
                    },
                ]
            }
        },
        methods: {
            sendCommon () {
                // console.log(this.isay + this.value2);
                if(this.isay === '')
                {
                    this.$message({
                        type: 'info',
                        message: '您还没有输入内容！'
                    });
                }else{
                    const newCommon = {
                        avatar: img1,
                        username: this.$store.getters.user.name,
                        common: this.isay,
                        rates: this.value2,
                        id: this.commonList.length + 1
                    }
                    this.commonList.push(newCommon)
                    // console.log(newCommon);
                    this.isay = '';
                    this.value2 = 0;
                }
            }
        }
    }
</script>

<style scoped>
    .common{
        width: 70%;
        margin: 0 auto;
        margin-top: 40px;
        margin-bottom: 100px;
    }
    .title{
        font-size: 24px;
        padding: 20px;
        color: #999;
    }
    .title span{
        font-size: 16px;
    }

    .common-list >>> .el-card__header{
    }
    .block{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;
        width: 100%;
    }

    .block span{
        flex: 3;
        text-align: right;
        margin-right: 10px;
    }

    .block button{
        text-align: right;
    }
    .demonstration{
        color: #999;
    }

    .users{
        display: flex;
        align-items: center;
    }
    
    .user-avatar{
        height: 50px;
        line-height: 50px;
        text-align: center;
        width: 50px;
        margin-right: 20px;
    }

    .user-avatar img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid #999;
    }

    .username{
        color: #555;
        font-size: 15px;
    }

    .said-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
        color: #999;
        padding-left: 60px;
    }
</style>