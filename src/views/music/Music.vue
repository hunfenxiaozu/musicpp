<template>
	<el-menu
		:default-active="activeIndex2"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		background-color="#409EFF"
		text-color="#fff"
		active-text-color="#fff">
		<el-menu-item index="1">推荐</el-menu-item>
		<el-menu-item index="2">排行</el-menu-item>
		<el-menu-item index="3">歌单</el-menu-item>
		<el-menu-item index="4">歌手</el-menu-item>
	</el-menu>

 
</template>

<script>
export default {
	 data() {
      return {
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu--horizontal{
    display: flex;
    justify-content: center;

  }
</style>