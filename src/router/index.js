import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Shopcar from '@/pages/Shopcart'
import Sort from '@/pages/Sort'
import Member from '@/pages/Member'
import NewList from '@/pages/news/newsList'
import NewsInfo from '@/pages/news/newsInfo'

Vue.use(Router)

var router = new Router({
    routes: [{
            path: '/',
            redirect: '/home',
            name: 'home',
            meta: { title: '首页' }
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: { title: '首页' }
        },
        {
            path: '/shopcar',
            name: 'shopcar',
            component: Shopcar,
            meta: { title: '购物车' }
        },
        {
            path: '/sort',
            name: 'sort',
            component: Sort,
            meta: { title: '分类' }
        },
        {
            path: '/member',
            name: 'member',
            component: Member,
            meta: { title: '我的' }
        },
        {
            path: '/newsList',
            name: 'NewsList',
            component: NewList,
            meta: { title: '新闻页' }
        },
        {
            path: '/newsInfo/:id',
            name: 'NewsInfo',
            component: NewsInfo,
            meta: { title: '详情新闻' }
        },


    ],
    linkActiveClass: "mui-active"

})
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();

})
export default router