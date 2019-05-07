<template>
  <div id="index">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
export default {
  name: 'index',
  components: { navbar }
}
</script>

<style scoped>
#index{
	
}
</style>
