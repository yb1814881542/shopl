<template>
<div style="height:500px">
    <div style="height:200px">
        <swiper :imgList="imgList"></swiper>
    </div>.,
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/newsList">
                <img src="../assets/images/menu1.png" />
                <div class="mui-media-body">新闻资讯</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/newsInfo">
                <img src="../assets/images/menu2.png" />
                <div class="mui-media-body">图片分享</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/sort">
                <img src="../assets/images/menu3.png" />
                <div class="mui-media-body">商品购买</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/sort">
                <img src="../assets/images/menu4.png" />
                <div class="mui-media-body">留言反馈</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/sort">
                <img src="../assets/images/menu5.png" />
                <div class="mui-media-body">视频专区</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/sort">
                <img src="../assets/images/menu6.png" />
                <div class="mui-media-body">联系我们</div>
            </router-link>
        </li>

    </ul>
</div>
</template>

<script>
import swiper from '../components/swiper.vue'
export default {
    data() {
        return {
            imgList: []
        }
    },
    created() {
        this.getImgList();
    },
    methods: {
        getImgList() {
            this.$http.get('/api/home/swiper/data').then((result) => {
                if (result.data.code === 0) {
                    this.imgList = result.data.data
                }
            }).catch((error) => {
                console.log(error)
                this.$toast(error)
            })
        }
    },
    components: {
        swiper
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;

}

.mui-grid-view.mui-grid-9 img {
    width: 60px;
    height: 60px;
}

.mui-table-view-cell>a.title {
    display: inline;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
}

.mui-media-body {
    font-size: 14px;
}
</style>
