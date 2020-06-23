import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usercity:'', //城市
    buyNow:{}, // 直接购买 立即购买 没有通过购物车 数量跟商品信息
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
