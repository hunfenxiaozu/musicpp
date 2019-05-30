<template>
 <el-menu
		:default-active="activeIndex2"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		background-color="#409EFF"
		text-color="#fff"
		active-text-color="#fff">
	 	<el-menu-item class='elItem' index="/forum">精选专题</el-menu-item>
		<el-menu-item class='elItem' index="/evaluation">乐器评测</el-menu-item>
		<el-menu-item class='elItem' index="/mtheory">乐理讲解</el-menu-item>
		<el-menu-item class='elItem' index="/music-score">乐谱分享</el-menu-item>
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
