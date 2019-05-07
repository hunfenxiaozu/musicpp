<template>
  <div class="nav navbar">
    <div class="navmain">
      <div class="logo" @click="backhome">logo</div>
      <router-link to="/music">听</router-link>
      <router-link to="/bbs">shuo</router-link>
    </div>
    <div class="navright">
      <router-link to="/login">登录</router-link>
      <router-link to="/logon">注册</router-link>
      
    </div>
  </div>

</template>

<script>
export default {
  name: 'navbar',
  data(){
    return {}
    },
    methods: {
      backhome(){
        this.router.push("/");
      }

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav{
    width: 100%;
    height: 50px;
    background: #eee;
    display: flex;
    justify-content: center;
    line-height: 50px;
  }
  .nav .navmain,.nav .navright{
    display: flex;
  }
</style>
