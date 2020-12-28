import Mock from 'mockjs'
//商品列表数据
var goodlist = function(req){
	var id = JSON.parse(req.body).params;
	var data;
	if(id==0){
		data =  {
			"code":0,
			"data":[
				{"id":0,"image":"static/images/good1.jpg","name":"小学生书包","price":120,"num":0,},
				{"id":1,"image":"static/images/good2.jpg","name":"中学生书包","price":120,"num":0,},
				{"id":2,"image":"","name":"书包","price":10,"num":0,},
				{"id":3,"image":"","name":"书包","price":20,"num":0,},
				{"id":4,"image":"","name":"书包","price":100,"num":0,},
				{"id":5,"image":"","name":"书包","price":170,"num":0,},
				{"id":7,"image":"","name":"书包","price":110,"num":0,},
				{"id":8,"image":"","name":"书包","price":180,"num":0,},
				{"id":9,"image":"","name":"书包","price":20,"num":0,},
				
				
			]
			
		}
	}else if(id==10){
		data =  {
			"code":0,
			"data":[
				{"id":10,"imag":"static/images/good1.jpg","name":"蓝色书包","price":120,"num":20,},
				{"id":11,"imag":"static/images/good2.jpg","name":"红色书包","price":120,"num":20,},
				
				
				
			]
			
		}
	}else{
		data =  {
			"code":0,
			"data":[]
			
		}
	}
	return data;
}
Mock.mock('/api/goods/list/data','post',goodlist)

//加入购物车
Mock.mock('/api/goods/shopcar/add','post', {
    "code": 0,
    "data": {
    	"tip":"添加成功"
    },
    "msg": "success"
})
//删除购物车
Mock.mock('/api/goods/shopcar/del','post', {
    "code": 0,
    "data": {
    	"tip":"删除成功"
    },
    "msg": "success"
})

//获取购物车数据
Mock.mock('/api/goods/shopcar/data','post', {
    "code": 0,
    "data": {
    	"tip":"获取成功"
    },
    "msg": "success"
})
