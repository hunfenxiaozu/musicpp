<template>
 <div class="list">
 	<div class="alltitle">
 		<div class="title">
			<div class="tcolotb"></div>
	 		<span>{{title}}</span>
 		</div>
	 	<div class="hot">
			<div class="tcolotb"></div>
	 		<span>今日排行</span>
	 	</div>
 	</div>
 	
 	<div class="listmaster">
 		<div class="listleft">
 			<div class="leftlist" v-for="listcontent in listcontent">
 				<router-link :to="'/music/id='+listcontent.id">
					<card :listcontent = "listcontent" />
				</router-link>
 				
 			</div>
 		</div>
 		<div class="listrecommend">
 			<collapse />
 		</div>
 	</div>
 	
 </div>

</template>

<script>
	import card from './Card.vue'
	import collapse from './Collapse.vue'
export default {
	components: { card,collapse },
	props:['title'],
	data(){
		return{
			listcontent : [ 
				{
					id:1,
					listtitle : 'asdf'
				},
				{
					id:2,
					listtitle : 'asdf'
				},
				{
					id:3,
					listtitle : 'asdf'
				},
				{
					id:4,
					listtitle : 'asdf'
				},
				{
					id:5,
					listtitle : 'asdf'
				},
				{
					id:6,
					listtitle : 'asdf'
				}
			 ]
				
				
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
</style>
