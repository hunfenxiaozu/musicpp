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
		 				<div class="messageleft">
		 					<div class="message">
		 						个性签名：{{singer.message}}
		 					</div>
		 					<div class="fans">
		 						<div>粉丝数：{{singer.fans}}</div>
		 						<div>作品数：{{singer.works}}</div>
		 						<div></div>
		 						
		 					</div>
		 				
		 				</div>
		 				<div class="messageright">

							<div class="guanzhu">
								<div v-show="singer.follow">已关注</div>
								<div v-show="!singer.follow">未关注</div>
								<el-switch
										v-model="singer.follow"
										active-color="#13ce66"
								>
								</el-switch>
							</div>
			 				<router-link to="/SingerDetail">查看主页</router-link>

		 					<button @click="follow(singer.id)">
								<div v-if = "singer.isFollow">取消关注</div>
								<div v-if = "!singer.isFollow">关注</div>
			 				</button>
			 				<button to="/asdf">查看主页</button>
		 				</div>
		 				
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

			{name:'Raincoat_123',
			id: 1,
			imgUrl: img1,
			message: '音乐之目的有二，一是以纯净之声愉悦人的器官，二是令人感动或激发人的热情。——舒曼',
			fans: 1298,
			works: 25,
			isFollow: false
			},
			{name:'周先生',
			id: 2,
			imgUrl: img4,
			message: '个人喜欢迷幻风格的作品，特别是那种特别迷的音乐，让我着迷。',
			fans: 20,
			works: 20,
			isFollow: false
			},

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

			{name:'林先生',
			id: 3,
			imgUrl: img2,
			message: '子非鱼，焉知鱼之意？',
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

			{name:'ESH~',
			id: 4,
			imgUrl: img3,
			message: '子非吾，焉知吾不知鱼之意',
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

			{name:'Yooh~',
			id: 5,
			imgUrl: img1,
			message: 'What\'s kind of music can be greatest?',
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

			{name:'周伦伦',
			id: 6,
			imgUrl: img3,
			message: '哎呦！不错喔！',
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

			{name:'陈迅迅',
			id: 7,
			imgUrl: img4,
			message: '中意就听多滴，唔中意就听少滴',
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
  	height: 100%;
  	display: flex;
  	justify-content: space-around;
  }
  .singerMessage .messageleft{
  	display: flex;
  	flex-direction: column;
  	width: 80%;
  	height: 100%;
  	justify-content: space-around;
  }
  .singerMessage .messageleft .fans{
  	display: flex;
  	justify-content: space-between;
  }
  .singerMessage .messageright{
  	width: 20%;
  	display: flex;

	  justify-content: center;
	  align-items: center;
  	flex-direction: column;
  }
  .messageright button:hover{
  	background: #3899FE;
  }
	.fans{
		margin-top: 40px;
		color: #999;
		font-size: 14px;
	}
	.message{
		font-size: 14px;
		margin-top: 20px;
		margin-right: 40px;
	}
	.guanzhu{
		display: flex;
		justify-content: center;
		margin-bottom: 25px;
	}
	.guanzhu div{
		margin-right: 10px;
		color: #999
	}
	.messageright a{
		color: rgb(64, 158, 255);
		text-decoration: none;
	}
	.singerName{
		font-size: 14px;
		margin-top: 15px;
		color: #454545;
	}

/*  	flex-direction: column;
  }*/
  .messageright button{
  	background: #409EFF;
  	width: 50%;
  	padding: 5px;
  	color: #fff;
  	border: 1px solid #eee;
  	border-radius: 3px;
  	outline: none;
  }
  .messageright button:hover{
  	background: #3899FE;
  }
</style>
