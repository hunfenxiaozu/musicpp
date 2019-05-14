<template>
 <div class="rankbang">
 	<div class="center">
 		<h3>xxx</h3>
	 	<el-table
	      :data="tableData"
	      style="width: 100%">
	      <el-table-column
	        prop="name"
	        label="歌名"
	        width="299">
	      </el-table-column>
	      <el-table-column
	        prop="singer"
	        label="歌手"
	        width="459">
	      </el-table-column>
	      
	    </el-table>
 	</div>
 </div>

</template>

<script>
export default {
	data() {
      return {
       tableData: [{
            name: 'xxx',
            singer: '周先生'

          }, {
          	 name: 'xxxx',
            singer: 'Mr.zhou'
        },
         {
          	 name: 'xxxxx',
            singer: 'xxxxxxx'
          }]
      
      }
    }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .rankbang{
  	width: 100%;
  	display: flex;
  	justify-content: center;
  }
  .center{
  	width: 95%;
  }
</style>
