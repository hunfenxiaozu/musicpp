<template>
 <el-menu
		:default-active="activeIndex2"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		background-color="#409EFF"
		text-color="#fff"
		active-text-color="#fff">
		<el-menu-item class='elItem' index="/recommend">推荐</el-menu-item>
		<el-menu-item class='elItem' index="/rank">排行</el-menu-item>
		<el-menu-item class='elItem' index="/singer">歌手</el-menu-item>
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
        this.$router.push(key)
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
