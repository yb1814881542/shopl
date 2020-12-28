<template>
<div class="newsinfo-container">
    <!-- 大标题 -->
    <h1 class="title">{{newsInfo.title}}</h1>
    <!-- 子标题 -->
    <p class="newsinfo-nav">
        <span>发表时间：{{newsInfo.add_time}}</span>

    </p>
    <hr>
    <!-- 内容区域 -->
    <div class="content">
        {{newsInfo.info}}
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            newsInfo: []
        }
    },
    created() {
        var id = this.$route.params.id
        this.getNewInfo(id)
    },
    methods: {
        getNewInfo(id) {

            this.$http.post("/api/news/newInfo/data", {
                params: id
            }).then((res) => {
                if (res.data.code == 0) {
                    this.newsInfo = res.data.data
                }
            }).catch((err) => {
                console.log(err)
            })

        }

    }
}
</script>

<style>
.newsinfo-container {
    padding: 0 5px;

    .title {
        font-size: 16px;
        text-align: center;
        margin: 10px 0;
        color: orangered;
    }

    .newsinfo-nav {
        display: flex;
        justify-content: space-between;
        color: #26a2ff;
    }

    .content {
        img {
            width: 100%;
        }
    }
}
</style>
