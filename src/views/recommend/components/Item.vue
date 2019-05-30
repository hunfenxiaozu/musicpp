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
<<<<<<< HEAD
 			<aplayer
=======
 			<aplayer autoplay
>>>>>>> 31de30ad7f1e48dc4a1104291e919fb2fe896050
		  :music="music[0]"
		  :list="music"
		/>
 		</div>
 		<div class="listrecommend">
 			<collapse />
 		</div>
 	</div>

 </div>

</template>

<script>
	import collapse from './Collapse.vue'
	import music1 from '../../../assets/music/ARC_SYSTEM_WORKS-Birthday_Train.mp3'
	import music2 from '../../../assets/music/ARC SYSTEM WORKS - The Lily of steel.mp3'
	import music3 from '../../../assets/music/Gabriela_Robin-Green_Bird.mp3'
	import music4 from '../../../assets/music/Rie_fu-Life_Is_Like_A_Boat.mp3'
	import music5 from '../../../assets/music/米津玄師-Lemon.mp3'
	import Aplayer from 'vue-aplayer'
export default {
	components: { collapse,Aplayer },
	props:['title'],
	data(){
		return{
			icon: 'el-icon-video-play',
			 music:[
				       {
				       	 title: 'birthday train',
						 artist: '石渡太辅',
						 src: music1,
						 pic: ''
				       },
				       {
				       	 title: 'The Lily of steel',
						 artist: '石渡太辅',
						 src: music2,
						 pic: ''
				       },
				       {
				       	 title: 'Green Bird',
						 artist: 'Gabriela Robin',
						 src: music3,
						 pic: ''
				       },
				       {
				       	 title: 'Life Is Like A Boat',
						 artist: 'Rie fu',
						 src: music4,
						 pic: ''
				       },
				       {
				       	 title: 'lemon',
						 artist: '米津玄師',
						 src: music5,
						 pic: ''
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
	.listleft .aplayer{
		width: 100%;
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
