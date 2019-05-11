<template>
	<div class="master">
		<div class="layout">
			<div class="leftnav">
				<leftnav />
			</div>
			<div class="rank"></div>
		</div>
		
	</div>

</template>

<script>
	import leftnav from './components/Leftnav.vue'
export default {
	components: { leftnav }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout{
  	width: 60%;
  }
  .master{
  	display: flex;
  	justify-content: center;
  }
  .leftnav{
  	width: 30%;
  }
  .rank{
  	width: 70%;
  }
</style>
