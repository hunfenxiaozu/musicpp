<template>
<div class="master">
	<carousel />
	<div class="item">
		<div v-for = "title in title">
		<item :title = "title"/>
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
			title:[ '华语','流行','摇滚','民谣','古典','acg' ]
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
.item div{
	width: 60%;
}

</style>
