<template>
 <div class="list">
 	<div class="title">
		<div class="tcolotb"></div>
 		<span>{{title}}</span>
 	</div>
 	<div class="listmaster">
 		<div class="listleft">
 			<div class="leftlist" v-for="listcontent in listcontent">
 				<card :listcontent = "listcontent" />
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
					listtitle : 'asdf'
				},
				{
					listtitle : 'asdf'
				},
				{
					listtitle : 'asdf'
				},
				{
					listtitle : 'asdf'
				},
				{
					listtitle : 'asdf'
				},
				{
					listtitle : 'asdf'
				}
			 ]
				
				
		}
	}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.title{
		display: flex;
	}
	.title span{
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
	}
	.listleft{
		display: flex;
		flex-flow:row wrap;
		justify-content: space-between;
		align-items: space-between;
		width: 64%;
	}
</style>
