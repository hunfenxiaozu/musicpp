<template>
  <div class="nav navbar">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1"><router-link to="/">logo</router-link></el-menu-item>
  <el-submenu index="2">
    <template slot="title">找想听的音乐</template>
    </el-submenu>
  </el-submenu>
  <el-submenu index="3">
    <template slot="title">说音乐相关的话题</template>
    </el-submenu>
  <el-menu-item index="4"><router-link to="/login">登录</router-link></el-menu-item>
  <el-menu-item index="5"><router-link to="/logon">注册</router-link></el-menu-item>
</el-menu>


    
  </div>

</template>

<script>
export default {
  data() {
      return {
        activeIndex: '1',
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
  .nav{
    /*width: 100%;
    height: 50px;
    background: #eee;*/
    display: flex;
    justify-content: center;
    /*line-height: 50px;*/
  }
  .nav .navmain,.nav .navright{
    display: flex;
  }
</style>
