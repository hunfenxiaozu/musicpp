<template>
<div class="">
	<el-menu
      default-active="1-1"
      :default-openeds = "['1','2','3','4']"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#409EFF"
      text-color="#aee"
      active-text-color="#fff"
      avtive-background-color="#3792EF"
      >
      <el-submenu index="1">
        <template slot="title">
          <span>本日</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">原创</el-menu-item>
          <el-menu-item index="1-2">翻唱</el-menu-item>
          <el-menu-item index="1-3">独奏</el-menu-item>
          <el-menu-item index="1-4">翻弹</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>本周</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">原创</el-menu-item>
          <el-menu-item index="2-2">翻唱</el-menu-item>
          <el-menu-item index="2-3">独奏</el-menu-item>
          <el-menu-item index="2-4">翻弹</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>本月</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">原创</el-menu-item>
          <el-menu-item index="3-2">翻唱</el-menu-item>
          <el-menu-item index="3-3">独奏</el-menu-item>
          <el-menu-item index="3-4">翻弹</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span>年度</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">原创</el-menu-item>
          <el-menu-item index="4-2">翻唱</el-menu-item>
          <el-menu-item index="4-3">独奏</el-menu-item>
          <el-menu-item index="4-4">翻弹</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</div>

</template>

<script>
export default {
	 methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu-vertical-demo{
  	color: #fff;
  }
  .el-menu-item-group__title{
  	color: #fff;
  }
</style>
