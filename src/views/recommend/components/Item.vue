<template>
 <div class="list">
 	<div class="alltitle">
 		<div class="title">
			<div class="tcolotb"></div>
	 		<span>{{title}}</span>
 		</div>
	 	<div class="hot">
			<div class="tcolotb"></div>
	 		<span>今日TOP5</span>
	 	</div>
 	</div>

 	<div class="listmaster">
 		<div class="listleft">
 			<div class="leftlist" v-for="listcontent in listcontent">
				<el-card class="box-card" shadow="hover">
					<div class="music-title">
						{{listcontent.musicTitle}}
					</div>
					<div class="music-author">
						<router-link :to="'/music/'+listcontent.id">{{listcontent.author}}</router-link>
					</div>
					<div class="btnCow">
						<el-button :icon="icon" circle @click="playing"></el-button>
						<audio :src = "listcontent.src" controls></audio>
						<el-button type="warning" icon="el-icon-star-off" circle size="small"></el-button>
					</div>
				</el-card>
 			</div>
 		</div>
 		<div class="listrecommend">
 			<collapse />
 		</div>
 	</div>

 </div>

</template>

<script>
	import collapse from './Collapse.vue'
	// import music1 from '../../../assets/musci/ARC_SYSTEM_WORKS-Birthday_Train.mp3'
export default {
	components: { collapse },
	props:['title'],
	data(){
		return{
			icon: 'el-icon-video-play',
			listcontent : [
				{
					id:1,
					play: 'false',
					musicTitle : '只因你太美',
					author: 'KunKun',
					src: music1
				},
				{
					id:2,
					play: 'false',
					musicTitle : '一时间',
					author: '韩红',
					src: ''
				},
				{
					id:3,
					play: 'false',
					musicTitle : '认真',
					author: '香香',
					src: ''
				},
				{
					id:4,
					play: 'false',
					musicTitle : 'New Silk Road',
					author: 'Maksim',
					src: ''
				},
				{
					id:5,
					play: 'false',
					musicTitle : '九十九岁',
					author: '寒寒',
					src: ''
				},
				{
					id:6,
					play: 'false',
					musicTitle : 'Favourite',
					author: 'Stephane Moraille',
					src: ''
				}
			 ]
		}
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
	.title,.hot,.alltitle{
		display: flex;
	}
	.title{
		flex:6.5;
	}
	.hot{
		flex:3.5;
	}
	.title span,.hot span{
		line-height: 28px;
	}
	.title .tcolotb{
		background: #409EFF;
		width: 12px;
		height: 28px;
		margin-right: 5px;
	}
	.list .listmaster{
		margin-top: 10px;
		display: flex;
	}
	.list .listrecommend{
		width: 36%;
		display: flex;
		justify-content: center;
	}
	.listleft{
		display: flex;
		flex-flow:row wrap;
		justify-content: space-between;
		align-items: space-between;
		width: 64%;
	}
	.leftlist{
		width: 100%;
		margin: 5px 0;
	}
	.list >>> .el-card__body{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.music-title{
		flex: 1;
	}
	.music-author{
		flex: 1;

	}
	.music-author a{
		color: #999;
		text-decoration: none;
	}
	.btnCow button{
		flex: 1;
		padding: 5px;
		font-size: 16px;
	}
</style>
