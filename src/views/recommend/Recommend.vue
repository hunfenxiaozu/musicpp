<template>
<div class="master">
	<carousel />
	<div class="item">
		<div v-for = "title in title" :id = "title.id" class="title">
		<item :title = "title.title"/>
	</div>
	</div>
	
</div>

</template>

<script>
	import carousel from './components/Carousel.vue'
	import item from './components/Item.vue'
export default {
	components: { carousel,item },
	data(){
		return{
			title:[ {
						id : "original",
						title :'原创'
					},
					{
						id : "coverUp",
						title :'翻唱'
					},
					{
						id : "solo",
						title :'独奏'
					}
				]
		}
	}
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.master{
	/*height: 1000px;*/
}
.item{
	display: flex;
	flex-direction: column;
	align-items: center; 
}
.item .title{
	width: 60%;
	margin-bottom: 20px;
}

</style>
