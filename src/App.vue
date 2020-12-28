<template>
  <div id="app">
  	<div class="container">
  	  <mt-header fixed :title="$route.meta.title">
  	  	<span  slot="left" v-show="showBack">
			    <mt-button icon="back" @click="goback">返回</mt-button>
			  </span>
  	  </mt-header>
    	<transition name="fade">
    		<router-view/>
    	</transition>
    	<tabbar></tabbar>
    </div>
  </div>
</template>

<script>
import tabbar from './components/tabbar.vue'
export default {
  name: 'App',
  data(){
  	return {
  		//showBack:false
  	}
  },
  methods:{
  	goback(){
  		this.$router.go(-1);
  	}
  },
  computed:{
  	showBack(){
  		return this.$route.path !== "/home"
  	}
  },
  components:{
  	tabbar
  }
}
</script>


<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}

.container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>

