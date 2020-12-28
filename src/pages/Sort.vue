<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodList" :key="item.id">
      <div>
        <img :src="item.image"/>
        <h1 class="title">{{item.name}}</h1>
        <p class="info">
          <span class="price">{{item.price|curreny}}</span>
       
        </p>
        <div style="margin-top:10px">
        	<span class="btn" style="background: red;">立即购买</span>
        	<span class="btn" style="background: dodgerblue;" @click="add(item)">加购物车</span>
        </div>
      </div>
    </div>
    <mt-button class="more"  size="large" @click="getmore"></mt-button>
  </div>
    
</template>

<script>

export default {
	 data(){
	 	return {
	 		id:0,
	 		goodList:[],
	 		
	 	}
	 },
	 methods:{
	 	//添加商品到购物车
	 	add(item){
	 		this.$store.dispatch("shopcart/add",item);
	 	},
	 	//获取商品列表
	 	getGoodData(id){
	 		this.$http.post("/api/goods/list/data",{params:id}).then((res)=>{
	 			if(res.data.code===0){
	 				this.goodList = res.data.data;
	 				this.id = res.data.data.length;
	 			}
	 		}).catch((err)=>{
	 			console.log(err)
	 		})
	 	},
	 	//获取更多数据
	 	getmore(){
	 		this.getGoodData(this.id)
	 	},
	 },
	 created(){
	 		this.getGoodData(this.id);
	 },
	 filters:{
	 	curreny(value){
	 		return  "￥" +value
	 	}
	 },
	 components:{
	 	 
	 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
	.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
}
.goods-list .goods-item {
  width: calc(calc(50%) - 10px);
  margin: 10px 10px 0 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
}
.goods-list .goods-item img {
  width: 100%;
}
.goods-list .goods-item .btn{
		color: #fff;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    border-radius: 5px;
}
.goods-list .goods-item .title {
  font-size: 14px;
  color: #333;
  margin: 10px 0;
}
.goods-list .goods-item .info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
}
.goods-list .goods-item .info .price {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.goods-list .goods-item .info .sell {
  font-size: 13px;
}
.goods-list .more {
  margin: 15px 0;
  font-size: 14px;
}



</style>
