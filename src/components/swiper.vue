<template>
	<mt-swipe :auto="4000">
	  <mt-swipe-item v-for="item in imgList" :key="item.is">
	  	<img :src="item.img"/>
	  </mt-swipe-item>
	  
	</mt-swipe>
</template>

<script>
	export default{
		props:["imgList"]
	}
</script>

<style>
</style>