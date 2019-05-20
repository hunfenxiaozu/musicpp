<template>
    <div class="navbar">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item class="elitem" index="/"><img src="../../../assets/m-logo.png" alt=""></el-menu-item>
            <el-menu-item class="elitem" index="/recommend">找想听的音乐</el-menu-item>
            <el-menu-item class="elitem" index="/bbs">说音乐相关的话题</el-menu-item>
            <el-menu-item >
                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-menu-item>
            <el-menu-item class="elitem" index="/login" v-show="!user.name">登录</el-menu-item>
            <el-menu-item class="elitem" index="/logon" v-show="!user.name">注册</el-menu-item>
            <el-menu-item class="elitem" index="/personal" v-if="user.name">{{user.name}}</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import jwt_decode from 'jwt-decode'
export default {
  data() {
      return {
        activeIndex: '1',
        input3: '',
        select: '',
          avatar: '',
          username: '',
        login: true
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$router.push(key)
      },
        checkU(){
            if(localStorage.Token){
                const token = localStorage.Token;
                const decoded = jwt_decode(token);
                // console.log(decoded);
                this.username = decoded.name;
                this.login = false;
            }
        }
    },
    mounted() {
    },
    computed: {
      user() {
          if(this.$store.getters.user){
              return this.$store.getters.user;
          }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav,.el-menu--horizontal{
    display: flex;
    justify-content: center;
  }

  img{
      width: 225px;
  }
</style>
