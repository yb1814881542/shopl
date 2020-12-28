import Mock from 'mockjs'

//请求轮播图数据接口
Mock.mock('/api/home/swiper/data','get',{
	"code":0,
	"data":[
		{"id":1,"img":"static/images/1.jpg"},
	    {"id":2,"img":"static/images/2.jpg"},
	    {"id":3,"img":"static/images/3.jpg"},
	    {"id":4,"img":"static/images/4.jpg"}
	],
	"msg":"success"
})
Mock.mock('/api/document/test','get', {
    "code": 0,
    "data": {
        "user":"documenttest"
    },
    "msg": "success"
})

