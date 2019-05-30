<template>
    <div class="personal-content">
        <div class="pc-left">
            <router-view></router-view>
        </div>
        <div class="pc-right">
            <div class="p-menu">
                <el-menu
                        default-active="/mycontribute"
                        class="el-menu-vertical-demo"
                        @select="handleSelect"
                        background-color="#fff"
                        text-color="#999"
                        active-text-color="rgb(64, 158, 255)">
                    <el-menu-item index="/mycontribute">
                        <i class="el-icon-s-promotion"></i>
                        <span slot="title">投稿作品</span>
                    </el-menu-item>
                    <el-menu-item index="/mycollection">
                        <i class="el-icon-star-on"></i>
                        <span slot="title">我的收藏</span>
                    </el-menu-item>
                    <el-menu-item index="/myfollow">
                        <i class="el-icon-open"></i>
                        <span slot="title">我的关注</span>
                    </el-menu-item>
                    <el-menu-item index="/myinformation">
                        <i class="el-icon-edit-outline"></i>
                        <span slot="title">个人信息</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <i class="el-icon-switch-button"></i>
                        <span slot="title">退出登录</span>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PContent",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key, keyPath) {
                if(key === "5") {
                    localStorage.removeItem('Token');
                    this.$store.dispatch('clearCurrentState');
                    this.$router.push('/')
                }else{
                    this.$router.push(key)
                }
            }
        }
    }
</script>

<style scoped>
    .personal-content{
        width: 70%;
        margin: 0 auto;
        display: flex;
        margin-bottom: 100px;
    }
    .pc-left{
        flex: 3;
        background-color: #fff;
    }
    .pc-right{
        flex: 1;
        border-left: 1px solid #dedede;
        background-color: #fff;
    }
    .personal-content >>> .el-menu-vertical-demo{
        border: 0;
    }
</style>