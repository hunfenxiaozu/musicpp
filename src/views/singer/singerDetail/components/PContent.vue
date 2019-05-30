<template>
    <div class="personal-content">
        <div class="pc-left">
            <router-view></router-view>
        </div>
        <div class="pc-right">
            <div class="p-menu">
                <el-menu
                        default-active="/hecontribute"
                        class="el-menu-vertical-demo"
                        @select="handleSelect"
                        background-color="#fff"
                        text-color="#999"
                        active-text-color="rgb(64, 158, 255)">
                    <el-menu-item index="/hecontribute">
                        <i class="el-icon-s-promotion"></i>
                        <span slot="title">Ta的投稿</span>
                    </el-menu-item>
                    <el-menu-item index="/hecollection">
                        <i class="el-icon-star-on"></i>
                        <span slot="title">Ta的收藏</span>
                    </el-menu-item>
                    <el-menu-item index="/hefollow">
                        <i class="el-icon-open"></i>
                        <span slot="title">Ta的关注</span>
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
                this.$router.push(key)
            }
        }
    }
</script>

<style scoped>
    .personal-content{
        width: 70%;
        margin: 0 auto;
        display: flex;
        height: 450px;
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