import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'
// vant  引入移动端vant
import Vant from 'vant';
import 'vant/lib/index.css';

// 全局引入utils
Vue.prototype.$utils =utils

Vue.use(Vant);
import api from "./http/api"


// Vue.prototype 的原型链上自己取的一个名字 特殊一点 以后发请求就不需要都引入
Vue.prototype.$api =api
// Vue.prototype.$dayjs =dayjs

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
