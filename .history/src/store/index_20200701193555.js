import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    category: [],// 首页存储的分类列表
    usercity:'', //城市
    buynum:{}, // 直接购买 立即购买 没有通过购物车 数量跟商品信息
    shopingCount:'',   //加入购物车时存起来的商品 重复数量
     paylists: {},// 购物车购买  //id  //价格 //数量 还有过滤出来购物车里选中的商品信息
     payone: {},  // 直接购买 存储的信息  数量 跟整个商品信息
     buyway: 1,   // 购买方式 1:立即购买 2:购物车购买
     addresslist: {},// 选择地址
     myid:'' , // 详情页 收藏时的 id  
     userInfo:{}, //个人信息
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
