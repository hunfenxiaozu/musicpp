<template>
	<div class="swiper">
		<el-carousel :interval="3000" type="card" loop>
			<el-carousel-item :key="item.index">
				<img src="../../../assets/swiper/1.jpg" alt="">
			</el-carousel-item>
			<el-carousel-item :key="item.index">
				<img src="../../../assets/swiper/2.jpg" alt="">
			</el-carousel-item>
			<el-carousel-item :key="item.index">
				<img src="../../../assets/swiper/3.jpg" alt="">
			</el-carousel-item>
			<el-carousel-item :key="item.index">
				<img src="../../../assets/swiper/4.jpg" alt="">
			</el-carousel-item>
			<el-carousel-item :key="item.index">
				<img src="../../../assets/swiper/5.jpg" alt="">
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
  data(){
    return{
      item : [
		  {index:1,images: '../../../assets/swiper/1.jpg'},
		  {index:2,images: '../../../assets/swiper/2.jpg'},
		  {index:3,images: '../../../assets/swiper/3.jpg'},
		  {index:4,images: '../../../assets/swiper/4.jpg'},
		  {index:5,images: '../../../assets/swiper/5.jpg'}
	  ]
    }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.swiper >>> .el-carousel__container{
		height: 250px;
	}
  .el-carousel__item {
	  height: 250px;
  }

  .leftlist{
	  width: 100%;
  }
	img{
		width: 100%;
		height: 100%;
	}

</style>
