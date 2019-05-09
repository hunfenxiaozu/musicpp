<template>
 <el-menu
		:default-active="activeIndex2"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		background-color="#409EFF"
		text-color="#fff"
		active-text-color="#fff">
		<el-menu-item index="1">乐器评测</el-menu-item>
		<el-menu-item index="2">乐理讲解</el-menu-item>
		<el-submenu index="3">
		    <template slot="title">乐谱分享</template>
		    <el-menu-item index="2-1">五线谱</el-menu-item>
		    <el-menu-item index="2-2">简谱</el-menu-item>
		    <el-menu-item index="2-3">吉他谱</el-menu-item>
		    <el-submenu index="2-4">
		      <template slot="title">其他</template>
		      <el-menu-item index="2-4-1">口琴</el-menu-item>
		      <el-menu-item index="2-4-2">选项2</el-menu-item>
		      <el-menu-item index="2-4-3">选项3</el-menu-item>
		    </el-submenu>
		 </el-submenu>
		<el-menu-item index="4">畅所欲言</el-menu-item>
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
