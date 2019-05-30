<template>
    <div class="eva-detail">
        <div class="bread">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/bbs' }">学音乐</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/forum' }">精选专题</el-breadcrumb-item>
                <el-breadcrumb-item>"非遗"专题</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <eva-detail-content></eva-detail-content>
        <common></common>
        <div class="to-top" id="go-top" v-show="isShow">
            <a href="javascript:scroll(0,0)"><el-button icon="el-icon-arrow-up">返回顶部</el-button></a>
        </div>
    </div>
</template>

<script>
    import EvaDetailContent from './components/EvaDetailContent'
    import Common from './components/Common'
    export default {
        name: "EvaDetail",
        components: { EvaDetailContent, Common },
        data () {
          return {
              isShow: false
          }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll, true);
        },
        methods: {
            handleScroll () {
                let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                // 设备/屏幕高度
                let scrollObj = document.getElementById('go-top'); // 滚动区域
                let scrollTop = scrollObj.scrollTop; // div 到头部的距离
                let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
                //滚动条到底部的条件
                if(scrollTop+clientHeight > scrollHeight){
                    // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
                    this.isShow = true
                }
            }
        },
        destroyed: function () {
            window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
        }
    }
</script>

<style scoped>
    .bread{
        margin: 25px 0;
    }
    .eva-detail{
        width: 70%;
        margin: 0 auto;
        position: relative;
    }
    .to-top{
        position: fixed;
        bottom: 80px;
        right: 100px;
    }
</style>