<template>
 <el-menu
		:default-active="activeIndex2"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		background-color="#409EFF"
		text-color="#fff"
		active-text-color="#fff">
		<el-menu-item class='elItem' index="/evaluation">乐器评测</el-menu-item>
		<el-menu-item class='elItem' index="/mtheory">乐理讲解</el-menu-item>
		<el-submenu index="3">
		    <template slot="title">乐谱分享</template>
		    <el-menu-item class='elItem' index="/notation/stave">五线谱</el-menu-item>
		    <el-menu-item class='elItem' index="/notation/simple">简谱</el-menu-item>
		    <el-menu-item class='elItem' index="2-3">吉他谱</el-menu-item>
		    <el-submenu index="2-4">
		      <template slot="title">其他</template>
		      <el-menu-item class='elItem' index="2-4-1">口琴</el-menu-item>
		      <el-menu-item class='elItem' index="2-4-2">选项2</el-menu-item>
		      <el-menu-item class='elItem' index="2-4-3">选项3</el-menu-item>
		    </el-submenu>
		 </el-submenu>
		<el-menu-item class='elItem' index="4">畅所欲言</el-menu-item>
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
