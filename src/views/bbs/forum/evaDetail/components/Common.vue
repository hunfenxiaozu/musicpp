<template>
    <div class="common">
        <div class="title">
            评论 <span>{{this.commonList.length}}</span>
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
                        <span></span>
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
<!--                            <div class="rate">-->
<!--                                <el-rate-->
<!--                                        disabled-->
<!--                                        v-model="item.rates"-->
<!--                                        >-->
<!--                                </el-rate>-->
<!--                            </div>-->
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
    import '../../../../../assets/css/iconfont.css'
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
                        common: '传统音乐，绵延几千年包含诸多审美品格，它是一定音乐思想特殊本质的集中体现，是音乐思想意识的结晶。',
                        rates: 4.3,
                        id: 2
                    },{
                        avatar: img1,
                        username: '不愿意暴露姓名的李某某',
                        common: '中国传统音乐有着很久远的历史，本身也富含深厚的魅力，学习中国传统音乐可以陶冶情操、愉悦身心，但随着现代音乐的发展，中国传统音乐在人们心中的比重逐渐淡去，作为一个中国人，我们不应该忘记自己传承已久的音乐，而应该去继承、发扬它们。',
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
    .said-content .rate{
        flex: 1;
    }
    .text{
        flex: 4;
        margin-right: 20px;
    }
</style>