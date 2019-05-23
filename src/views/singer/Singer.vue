<template>
	<div class="main">
		<div class="layout">
		 	<div class="singerItem" v-for = "singer of singer">
		 		<el-card class="box-card">
		 			<div class="user">
		 				<img :src="singer.imgUrl" alt="">
		 				<div class="singerName">{{singer.name}}</div>
		 			</div>
		 			<div class="singerMessage">
		 				个性签名：{{singer.message}}
		 				粉丝数：{{singer.fans}}
		 				作品数：{{singer.works}}
		 				<button @click="follow(singer.id)">
							<div v-if = "singer.isFollow">取消关注</div>
							<div v-if = "!singer.isFollow">关注</div>
		 				</button>
		 			</div>
				</el-card>
		 		
		 	</div>
		 </div>
	</div>
 

</template>

<script>
	import img1 from '../../assets/personal/avatar/avatar01.jpg'
	import img2 from '../../assets/personal/canvas/canvas02.jpg'
	import img3 from '../../assets/personal/canvas/canvas03.jpg'
	import img4 from '../../assets/personal/canvas/canvas01.jpg'
export default {
	data(){
		return{
			singer:[
			{name:'asdf',
			id: 1,
			imgUrl: img1,
			message: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
			fans: 20,
			works: 20,
			isFollow: false
			},
			{name:'asdf',
			id: 2,
			imgUrl: img4,
			message: '',
			fans: 20,
			works: 20,
			isFollow: false
			},
			{name:'asdf',
			id: 3,
			imgUrl: img2,
			message: '',
			fans: 20,
			works: 20,
			isFollow: false
			},
			{name:'asdf',
			id: 4,
			imgUrl: img3,
			message: '',
			fans: 20,
			works: 20,
			isFollow: false
			},
			{name:'asdf',
			id: 5,
			imgUrl: img1,
			message: '',
			fans: 20,
			works: 20,
			isFollow: false
			},
			{name:'asdf',
			id: 6,
			imgUrl: img3,
			message: '',
			fans: 20,
			works: 20,
			isFollow: false
			},
			{name:'asdf',
			id: 7,
			imgUrl: img4,
			message: '',
			fans: 20,
			works: 20,
			isFollow: false
			}
			]
		}
	},
	methods:{
		follow : function (id) {
			this.singer[id-1].isFollow = !this.singer[id-1].isFollow;
			console.log(this.singer[id-1].isFollow);
		}
	}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
	display: flex;
	justify-content: center;
}
  .layout{
  	width: 60%;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  }
  .singerItem{
	width: 100%;
  }
  .singerItem img{
  	width: 100px;
  	height: 100px;
  	border-radius: 50%;
  }
  .main >>> .el-card__body{
  	display: flex;
  	justify-content: center;
  	align-items: center;
  }
  .el-card__body .user{
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	width: 20%;
  }
  .el-card__body .singerMessage{
  	width: 80%;
  }
</style>
