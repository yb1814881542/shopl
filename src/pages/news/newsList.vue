<template>
<ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/newsInfo/'+item.id">
            <img class="mui-media-object mui-pull-left" :src="item.src">
            <div class="mui-media-body">
                <h1>{{ item.title }}</h1>
                <p class='mui-ellipsis'>
                    <span>发表时间：{{item.add_time}}</span>
                </p>
            </div>
        </router-link>
    </li>

</ul>
</template>

<script>
export default {
    data() {
        return {
            newsList: []
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        getNewsList() {
            this.$http.get("/api/news/newsList/data").then((res) => {
                if (res.data.code == 0) {
                    this.newsList = res.data.data
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style>
.mui-table-view li h1 {

    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.mui-table-view li .mui-ellipsis {
    font-size: 12px;
    color: #26a2ff;
    /* 实现左右布局 */
    display: flex;
    justify-content: space-between;

}
</style>
