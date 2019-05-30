<template>
 <div class="rankbang">
 	<div class="center">
	    <aplayer
		  :music="music[0]"
		  :list="music"
		/>
 	</div>
 	
 </div>

</template>

<script>
	import music1 from '../../../assets/music/ARC_SYSTEM_WORKS-Birthday_Train.mp3'
	import music2 from '../../../assets/music/ARC SYSTEM WORKS - The Lily of steel.mp3'
	import music3 from '../../../assets/music/Gabriela_Robin-Green_Bird.mp3'
	import music4 from '../../../assets/music/Rie_fu-Life_Is_Like_A_Boat.mp3'
	import music5 from '../../../assets/music/米津玄師-Lemon.mp3'
	import Aplayer from 'vue-aplayer'
export default {
	components: {
        Aplayer
    },
	data() {
      return {
       music:[
       {
       	 title: 'birthday train',
		 artist: '石渡太辅',
		 src: music1,
		 pic: ''
       },
       {
       	 title: 'The Lily of steel',
		 artist: '石渡太辅',
		 src: music2,
		 pic: ''
       },
       {
       	 title: 'Green Bird',
		 artist: 'Gabriela Robin',
		 src: music3,
		 pic: ''
       },
       {
       	 title: 'Life Is Like A Boat',
		 artist: 'Rie fu',
		 src: music4,
		 pic: ''
       },
       {
       	 title: 'lemon',
		 artist: '米津玄師',
		 src: music5,
		 pic: ''
       }
       ]
      
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
