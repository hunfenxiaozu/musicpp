<template>
 <div class="collapse">
 	<el-collapse v-model="activeName" accordion>
      <el-collapse-item :name= "item.id" v-for="item of todyRanks">
          <template slot="title">
              <div class="num">{{item.id}}</div>
              <div class="title">{{item.title}}</div>
              <div class="author"><router-link :to="'/music/'+item.id">{{item.author}}</router-link></div>
          </template>
          <el-row class="play">
              <el-button type="primary" :icon="icon" circle size="small" @click="playing"></el-button>
              <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          </el-row>
      </el-collapse-item>
</el-collapse>
 </div>

</template>

<script>
export default {
	data() {
      return {
        activeName: '1',
          icon: 'el-icon-video-play',
          todyRanks: [
              {
                  id: 1,
                  title: 'here you say',
                  author: 'gene'
              },
              {
                  id: 2,
                  title: 'We Are One',
                  author: '郁可唯'
              },
              {
                  id: 3,
                  title: '关于爱',
                  author: '李琦'
              },
              {
                  id: 4,
                  title: '逝.爱 (韩文版)',
                  author: '贝贝'
              },
              {
                  id: 5,
                  title: '柳暗花明',
                  author: '胡冰卿'
              },
          ]
      };
    },
    methods: {
        playing () {
            if(this.icon === 'el-icon-video-play')
                this.icon = 'el-icon-video-pause'
            else
                this.icon = 'el-icon-video-play'
        }
    }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .collapse{
  	width: 90%;
  }
  .play{
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
    .play button{
        padding: 5px;
        font-size: 26px;
    }
    .collapse >>> .el-collapse-item__content{
        padding: 10px 0;
    }

    .num{
        font-size: 16px;
        margin-right: 10px;
    }

    .title{
        color: #555;
        font-size: 16px;
        margin-right: 10px;
    }
    .author a{
        color: #999;
        text-decoration: none;
    }

</style>
