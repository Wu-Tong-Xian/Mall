import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./http/api"
// Vue.pprototype 的原型链上自己去一个名字 特殊一点
Vue.pprototype.$api =api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
