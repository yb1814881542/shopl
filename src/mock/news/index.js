import Mock from 'mockjs'

//请求新闻列表数据接口
Mock.mock('/api/news/newsList/data','get',{
	"code":0,
	"data":[
		{
			"src": "static/images/news1.jpg",
			"id": "1",
			"title": "有翡",
			"add_time":"2019-02-03"
		},
		{
			"src": "static/images/news2.jpg",
			"id": "2",
			"title": "爱丽丝",
			"add_time":"2019-02-03"
		},
		{
			"src": "static/images/news3.jpg",
			"id": "3",
			"title": "年龄差婚姻",
			"add_time":"2019-02-03"
		},
		{
			"src": "static/images/news1.jpg",
			"id": "4",
			"title": "有翡",
			"add_time":"2019-02-03"
		},
		{
			"src": "static/images/news2.jpg",
			"id": "5",
			"title": "爱丽丝",
			"add_time":"2019-02-03"
		},
		{
			"src": "static/images/news3.jpg",
			"id": "6",
			"title": "年龄差婚姻",
			"add_time":"2019-02-03"
		},
		{
			"src": "static/images/news1.jpg",
			"id": "7",
			"title": "有翡",
			"add_time":"2019-02-03"
		},
		{
			"src": "static/images/news2.jpg",
			"id": "8",
			"title": "爱丽丝",
			"add_time":"2019-02-03"
		},
		{
			"src": "static/images/news3.jpg",
			"id": "9",
			"title": "年龄差婚姻",
			"add_time":"2019-02-03"
		}
	],
	"msg":"success"
})
//新闻详情数据
var newsinfo = function(req){
	var id = JSON.parse(req.body).params;
	var data;
	if(id==1){
		data =  {
			"code":0,
			"data":{
				"title": "有翡",
				"add_time":"2019-02-03",
				"info":"多年前江湖祸乱，一代大侠南刀李徽奉旨为匪，从此便有了四十八寨。后李徽病逝，江湖名门也相继落败。李徽的女儿李瑾容接任大当家，与周以棠成婚。周家有女初成长，周翡（赵丽颖 饰）所生的朝代却是一个江湖没落的时候，前辈们的光辉与意气风发在南刀李徽逝去后逐渐都销声匿迹了。周翡十三岁那年离家出走，差点命丧洗墨江，被端王谢允（王一博 饰）救下，冥冥之中结下良缘。三年后，两位头角峥嵘的少年再次在霍家堡相遇，引出了多年前隐匿江湖的各类宗师高手。同时遭到曹贼手下北斗七位高手的追杀，令两位少年陷入了一场暗潮汹。"
			}
			
		}
	}else if(id==2){
		data =  {
			"code":0,
			"data":{
				"title": "爱丽丝",
				"add_time":"2019-02-03",
				"info":"我是详细信息"

			}
			
		}
	}else{
		data =  {
			"code":0,
			"data":{
				"title": "年龄差婚姻",
				"add_time":"2019-02-03",
				"info":"我是详细信息"
			}
			
		}
	}
	return data;
}
Mock.mock('/api/news/newInfo/data','post',newsinfo)
