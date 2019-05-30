<template>
    <div class="canvas">
        <div class="title">
            <h2>中国非物质文化遗产 | 传统音乐</h2>
            <h3>THE Story of intangible cultural heritage</h3>
        </div>
        <div class="int-picture">
        </div>
        <div class="int-detail">
            <h2><div>古琴的历史</div>关于古琴</h2>
            <div>
                <p>古琴，又称瑶琴、玉琴、七弦琴，是中国传统拨弦乐器，有三千年以上历史，属于八音中的丝。古琴音域宽广，音色深沉，余音悠远</p>
                <p>
                    据《史记》载，琴的出现不晚于尧舜时期。而考古发现则没有这么早，1978年在随州擂鼓墩曾侯乙墓出土的十弦琴,属战国早期的琴。
                    但在湖北枣阳郭家庙曹门湾墓区出土的一张春秋早期的琴，距今2700年左右。湖北省文物考古研究所所长方勤称，为目前所知最早，
                    将我国有实物佐证的琴史提前约300年
                    琴曲存世3360多首，琴谱130多部，琴歌300首。2003年11月7日，联合国教科文组织世界遗产委员会宣布，
                    中国古琴被选为世界文化遗产。2006年被列入中国非物质文化遗产名录
                </p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Canvas"
    }
</script>

<style scoped>
    .canvas{
        width: 70%;
        margin: 0 auto;
    }
    .title{
        text-align: center;
        /*color: #BEBEBE;*/
        color: #777;
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
    .int-picture{
        width: 100%;
        height: 28rem;
        background: url("../../../../assets/forum/guqin1.jpg");
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .click-link button{
        font-size: 24px;
        color: #dedede;
        background-color: rgba(255,255,255,.1);
        outline: none;
    }
    .click-link button:hover{
        color: #999;
    }
    .int-detail{
        display: flex;
        margin: 50px 0;
    }
    .int-detail h2{
        flex: 1;
        text-align: center;
        font-size: 2rem;
        font-weight: 100;
        margin: 0 10px;
    }
    .int-detail h2 div{
        text-align: left;
        font-size: 1.2rem;
        margin-bottom: 20px;
    }
    .int-detail div{
        flex: 4;
        font-size: 13px;
        line-height: 1.4;
        font-weight: 100;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>