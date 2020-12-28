import axios from 'axios'
var state = {
	cars:[]
}
var mutations={
	add(state,item){
		var v = state.cars.find(v=>v.id===item.id)
		if(v){
			v.num++;
		}else{
			item.num = 1;
			state.cars.push(item);
		}
	},
	del(state,id){
		state.cars.forEach((item,index,arr)=>{
			if(item.id === id ){
				arr.splice(index,1);
			}
		})
	}
}
var actions = {
	//添加商品到购物车
	add(state,item){
		axios.post("/api/goods/shopcar/add",{params:item.id})
		.then((res)=>{
			console.log(res.data.data)
      console.log(res)
		}).catch((err)=>{
		  console.log(err)
    })
		state.commit("add",item);

	},
	del(state,item){
		axios.post("/api/goods/shopcar/del",{params:item.id})
		.then((res)=>{
			console.log(res.data.data);
		}).catch((err)=>{
      console.log(err)
    })
		state.commit("del",item.id);
	}
}
var getters={
	total(state){
		return state.cars.reduce((total,item)=>{
			return total+item.price*item.num
		},0)
	},
	totalnum(state){
		return state.cars.reduce((total,item)=>{
			return total+item.num
		},0)
	}
}
export default{
	namespaced: true,
	state,
	mutations,
	actions,
	getters

}
