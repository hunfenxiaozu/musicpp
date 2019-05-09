<template>
	<div id="music">
		<smallnav />
		<router-view></router-view>
	</div>
	
 
</template>

<script>
	import smallnav from './components/smallnav.vue'
export default {
	name: 'music',
    components:{ smallnav }  
    
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>