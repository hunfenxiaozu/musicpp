<template>

    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item class="elitem" index="1"><router-link to="/recommend">logo</router-link></el-menu-item>
        <el-menu-item class="elitem" index="2"><router-link to="/recommend">找想听的音乐</router-link></el-menu-item>
        <el-menu-item class="elitem" index="3"><router-link to="/bbs">说音乐相关的话题</router-link></el-menu-item>
        <el-menu-item >
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-menu-item>
        <el-menu-item class="elitem" index="4"><router-link to="/login">登录</router-link></el-menu-item>
        <el-menu-item class="elitem" index="5"><router-link to="/logon">注册</router-link></el-menu-item>
    </el-menu>


    


</template>

<script>
export default {
  data() {
      return {
        activeIndex: '1',
        input3: '',
        select: ''
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
  .nav,.el-menu--horizontal{
    /*width: 100%;
    height: 50px;
    background: #eee;*/
    display: flex;
    justify-content: center;
    /*line-height: 50px;*/
  }
  .elitem a{
     text-decoration: none;
  }
</style>
