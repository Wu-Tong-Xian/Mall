import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usercity:'', //城市
    buyNow:{}, // 直接购买 立即购买 没有通过购物车 数量跟商品信息
    Buy : 1 , //自己定义一个 购买方式 1立即购买  2通过购物车购买
    shopingCount:'',   //加入购物车时存起来的商品数量
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
