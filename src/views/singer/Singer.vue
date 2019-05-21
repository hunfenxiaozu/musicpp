<template>
	<div class="main">
		<div class="layout">
		 	<div class="singerItem" v-for = "singer of singer">
		 		<el-card class="box-card">
		 			<div class="user">
		 				<img :src="singer.imgUrl" alt="">
		 				<div class="singerName">{{singer.name}}</div>
		 			</div>
		 			<div class="singerMessage">{{singer.message}}</div>
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
			imgUrl: img1,
			message: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
			},
			{name:'asdf',
			imgUrl: img4,
			message: ''
			},
			{name:'asdf',
			imgUrl: img2,
			message: ''
			},
			{name:'asdf',
			imgUrl: img3,
			message: ''
			},
			{name:'asdf',
			imgUrl: img1,
			message: ''
			},
			{name:'asdf',
			imgUrl: img3,
			message: ''
			},
			{name:'asdf',
			imgUrl: img4,
			message: ''
			}
			]
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
  .el-card__body{
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
  .el-card__body .message{
  	width: 80%;
  }
</style>
