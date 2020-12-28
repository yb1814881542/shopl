// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock'
import axios from 'axios'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


Vue.config.productionTip = false
Vue.use(MintUI)

axios.defaults.timeout = 3000
axios.defaults.baseURL = ""
Object.defineProperty(Vue.prototype,"$http",{value:axios})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
