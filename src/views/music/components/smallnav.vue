<template>
 <el-menu
		:default-active="activeIndex2"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		background-color="#409EFF"
		text-color="#fff"
		active-text-color="#fff">
		<el-menu-item class='elItem' index="1"><router-link to="recommend">推荐</router-link></el-menu-item>
		<el-menu-item class='elItem' index="2"><router-link to="rank">排行</router-link></el-menu-item>
		<el-menu-item class='elItem' index="3">歌单</el-menu-item>
		<el-menu-item class='elItem' index="4">歌手</el-menu-item>
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
  .elItem a{
  	text-decoration: none;
  }
</style>
