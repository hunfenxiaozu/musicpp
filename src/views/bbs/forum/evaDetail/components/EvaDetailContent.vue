<template>
    <div class="eva-detail-content">
        <div class="article">
            <img src="../../../../../assets/forum/2.jpg" alt="">
            <div class="title">
                <h1>中国非物质文化遗产|传统音乐</h1>
                <span>2019-05-06 15:41:27 3点赞 11收藏 1评论</span>
            </div>
            <p>内蒙古呼麦</p>
            <p>呼麦（图瓦语：Хөөмей；蒙古语：Хөөмий，意为“咽喉”），又称喉音唱法、双声唱法、多声唱法或浩林潮尔，是阿尔泰山周围地区诸多民族的的一种歌唱方式，并非蒙古族所独有。</p>
            <p>呼麦是阿尔泰山原住民族创造的一种神奇的歌唱艺术，早在12世纪蒙古形成民族之前就已在广袤的地域上流传：一个歌手纯粹用自己的发声器官，在同一时间里唱出两个声部。呼麦声部关系的基本结构为一个持续低音和它上面流动的旋律相结合。又可以分为"泛音呼麦"、"震音呼麦"、"复合呼麦"等。在中国各民族民歌中,它是独一无二的。</p>
            <p>侗族大歌</p>
            <p>《侗族大歌》，起源于春秋战国时期，至今已有2500多年的历史，是在中国侗族地区一种多声部、无指挥、无伴奏、自然合声的民间合唱形式。1986年，在法国巴黎金秋艺术节上，贵州以黎平县、从江县为代表的侗族大歌一经亮相，技惊四座，被认为是"清泉般闪光的音乐，掠过古梦边缘的旋律"，参赛团队成员有领导，翼州(贵州民间艺术团团长)、杨林(侗族大歌团长)，其中，吴玉莲(侗族大歌领唱·黎平三龙人)、吴培三(黎平)、杨水仙(从江)、吴培换(黎平)、吴水英(黎平)、陆俊莲(黎平)、吴义兰(黎平)、石明仙(从江)、陆德英(从江)九位歌手。</p>
            <p>2009年，侗族大歌被列入世界人类非物质文化遗产代表作名录。2016年6月，由著名音乐人百慕三石担任制作人的的全球首张实地录制侗族大歌主题专辑《天赋侗听》正式问世。 2017年7月，《天赋侗听》荣获首届CMA唱工委音乐盛典"最佳民间/民族专辑"。</p>
            <p>那坡壮族民歌</p>
            <p>那坡壮族也称"黑衣壮"，它是壮族中具有奇特色彩的一个族群，自称"敏"、"仲"、"嗷"，现约有5.18万人，因着装全黑而得名，主要居住在位于中越边境的广西那坡县。那坡壮族民歌是他们历代传唱的民歌。在历史长河中，黑衣壮至今仍保存着古朴完整、多姿多彩的民间歌谣，并被誉为"广西民族音乐富矿"和壮族民歌的"活化石"。</p>
            <p>黑衣壮族人不仅能歌，还很善舞。在那坡县的一些黑衣壮聚居的村屯，从3岁小孩到古稀老人都能够伴着古乐，翩翩跳起迎宾舞、黑枪舞、婚礼舞、末将舞等等古代壮族的舞蹈，场面蔚为壮观。黑衣壮以黑为美的服饰、原汁原味的动听山歌甚至发展到二声部重唱，曲调柔美悠长。</p>
            <p>唢呐艺术</p>
            <p>唢呐艺术是一种中国民间传统文化表现形式。2006年河南省沁阳市甘肃省庆阳市申请非物质文化遗产。其基本乐器唢呐，俗称"喇叭"，是一种在我国各地广泛流传的民间乐器，根据不同分类标准可以分不同的种类，发音高亢、嘹亮，过去多在民间的吹歌会、秧歌会、鼓乐班和地方曲艺、戏曲的伴奏中应用。经过不断发展，丰富了演奏技巧，提高了表现力，已成为一件具有特色的独奏乐器，并用于民族乐队合奏或戏曲、歌舞伴奏。</p>
            <div class="end-article">—THE END—</div>
            <el-row>
                <el-button :type="sh" icon="iconfont icon-shoucang" circle @click="shoucang"></el-button>
                <el-button :type="di" icon="iconfont icon-iconfontzhizuobiaozhun023148" circle @click="dianzan"></el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
    import '../../../../../assets/css/iconfont.css'
    export default {
        name: "EvaDetailContent",
        data () {
            return {
                sh: 'default',
                di: 'default'
            }
        },
        methods:{
            shoucang () {
                if(this.sh === 'default')
                    this.sh = 'warning'
                else
                    this.sh = 'default'
            },
            dianzan () {
                if(this.di === 'default')
                    this.di = 'danger'
                else
                    this.di = 'default'
            }
        }
    }
</script>

<style scoped>
    .title{
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .title span{
        font-size: 14px;
        color: #999;
    }
    .article{
        width: 70%;
        margin: 0 auto;
        margin-top: 50px;
    }
    .article p{
        color: #333;
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 20px;
        word-break: break-all;
        word-wrap: break-word;
    }
    .end-article{
        width: 100%;
        text-align: center;
        margin: 100px 0;
        word-break: break-all;
        word-wrap: break-word;
        color: #999;
        font-weight: 800;
        font-size: 16px;
        line-height: 28px;
    }
</style>