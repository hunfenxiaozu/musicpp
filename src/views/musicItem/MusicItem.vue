<template>
 <div class="layout">
 	<div class="master">
		<master />
 	</div>
 	<div class="comment">
 		<comment />
 	</div>
 	<!-- aaa{{ $route.params.id }} -->
 </div>

</template>

<script>
	import master from './components/Master.vue'
	import comment from './components/Comment.vue'
export default {
	components: { master,comment }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.layout{
		display: flex;
		flex-direction: column;
		align-items: center;

	}
	.master,.comment{
		width: 60%;
		height: 700px;
		background: rgba(0,0,0,0.01);
	}
</style>
