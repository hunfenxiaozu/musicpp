<template>
	<el-carousel :interval="4000" type="card" height="500px;">
    	<el-carousel-item v-for="item in item" :key="item.index">
      		<h3 class="medium">{{ item.title }}</h3>
    	</el-carousel-item>
    </el-carousel>

</template>

<script>
export default {
  data(){
    return{
      item : [ {index:1,title:'aaa'},
      {index:2,title:'bbb'},
      {index:3,title:'aaa'},
      {index:4,title:'bbb'},
      {index:5,title:'aaa'},
      {index:6,title:'bbb'} ] 
    }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item h3 {
    color: #fff;
    text-shadow: 1px 1px 1px #333;
    font-size: 32px;

    line-height: 300px;
    text-align: center;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
