<template>
    <div class="personal">
        <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/recommend' }">听音乐</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/singer' }">歌手</el-breadcrumb-item>
                <el-breadcrumb-item>歌手主页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="black-card"></div>
        <p-canvas :intro="intro" :username="username"></p-canvas>
        <p-content ></p-content>
    </div>
</template>

<script>
    import PCanvas from './components/PCanvas'
    import PContent from './components/PContent'
    export default {
        name: "Personal",
        components: { PCanvas, PContent },
        data () {
            return {
                username: 'Raincoat_123',
                avatar: 'asdf',
                intro: '音乐之目的有二，一是以纯净之声愉悦人的器官，二是令人感动或激发人的热情。——舒曼'
            }
        }
        // ,
        // methods: {
        //     checkU(){
        //         if(localStorage.Token){
        //             const token = localStorage.Token;
        //             const decoded = jwt_decode(token);
        //             console.log(decoded);
        //             this.username = decoded.name;
        //             this.login = false;
        //         }
        //     }
        // }
        // ,
        // computed: {
        //     user() {
        //         if(this.$store.getters.user){
        //             return this.$store.getters.user;
        //         }
        //     }
        // }
    }
</script>

<style scoped>
    .bread{
        width: 70%;
        margin: 25px auto;
    }
    .bread >>> .el-breadcrumb__item span{
        color: #fff;
    }
    .personal{
        width: 100%;
        height: 100%;
        background: url("../../../assets/personal/canvas/canvas03.jpg");
        background-attachment:fixed;
        z-index:-10;
        zoom: 1;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center 0;
    }
    /*.black-card{*/
    /*    position: fixed;*/
    /*    width: 100%;*/
    /*    left: 0;*/
    /*    top: 0;*/
    /*    bottom: 0;*/
    /*    z-index: 1;*/
    /*    background-color: rgba(28,28,28,0.7);*/
    /*}*/
    .personal{
        padding-top: 20px;
    }
</style>