<template>
  <div class="list">
    <div class="item" v-for="item in carList" :key="item.id">
      <div class="item-l">
        <img class="item-img" :src="item.image">
      </div>
      <div class="item-r">
        <div class="item-title">
          {{item.name}}
          <small>{{item.num}}</small>
        </div>
        <div class="item-price">{{item.price|curreny}}</div>
        <div class="item-opt">
          <button @click="del(item)">删除</button>
        </div>
      </div>
    </div>
    <div class="item-total">商品总价：{{total|curreny}}</div>
    <div class="item-empty" v-if="carList.length==0">购物车中暂无商品</div>
  </div>
    
</template>

<script>

export default {
	  data () {
	    return {
	      
	    }
  	},
  	methods:{
  		del(item){
  			this.$store.dispatch("shopcart/del",item)
  		}
  	},
  	computed:{
  		carList(){
  			return this.$store.state.shopcart.cars;
  		},
  		total(){
  			return this.$store.getters["shopcart/total"];
  		}
  		
  	},
  	created(){
  		
  	},
  	filters: {
	    curreny(value){
	    	return "￥"+value;
	    }
	  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
	.item {
  border-bottom: 1px dashed #ccc;
  padding: 10px;
}
.item::after {
  content: "";
  display: block;
  clear: both;
}
.item-l {
  float: left;
  font-size: 0;
}
.item-r {
  float: left;
  padding-left: 20px;
}
.item-img {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
.item-title {
  font-size: 14px;
  margin-top: 10px;
}
.item-title > small {
  color: #888;
  font-size: 12px;
}
.item-price {
  margin-top: 10px;
  color: #f00;
  font-size: 15px;
}
.item-opt {
  margin-top: 10px;
}
.item-opt button {
  border: 0;
  background: coral;
  color: #fff;
  padding: 4px 5px;
}
.item-total {
  margin: 10px;
  font-size: 15px;
}
.item-empty {
  text-align: center;
  margin-top: 20px;
  font-size: 15px;
}

</style>
