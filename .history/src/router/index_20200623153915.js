import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import layout from '../views/layout/layout'

Vue.use(VueRouter)

  const routes = [
    // 重定向一个home页面
    {
      path:'/home',
      redirect:'/'
    },
  {
    path: '/',
    name: 'layout', //公共页面
    component: layout,
    children:[
      {
        path:'/',
        name:'/home',  
        component:home,
        meta:{
          title:'首页',
        },
      },
      
      {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: () => import(/* webpackChunkName: "about" */ '../views/shoppingCart/shoppingCart.vue'),
        meta:{
          title:'购物车',
        },
      },
      {
        path: '/my',
        name: 'my',
        component: () => import(/* webpackChunkName: "about" */ '../views/my/my.vue'),
        meta:{
          title:'我的',
        },
      },
          
    
      {
        path: '/settlement',
        name: 'settlement',
        component: () => import(/* webpackChunkName: "about" */ '../views/settlement/settlement.vue'),
        meta:{
          title:'结算页',
        },
      },
      {
        path: '/buyNow',
        name: 'buyNow',
        component: () => import(/* webpackChunkName: "about" */ '../views/buyNow/buyNow.vue'),
        meta:{
          title:'立即购买',
        },
      },
      {
        path: '/classify',
        name: 'classify',
        component: () => import(/* webpackChunkName: "about" */ '../views/classify/classify.vue'),
        meta:{
          title:'分类',
        },
      },
    ]
  },
  {
    path: '/completed',
    name: 'completed',
    component: () => import(/* webpackChunkName: "about" */ '../views/completed/completed'),
    meta:{
      title:'已完成',
    },
  }, 
  {
    path: '/details',
    name: 'details',
    component: () => import(/* webpackChunkName: "about" */ '../views/details/details'),
    meta:{
      title:'详情页',
    },
  }, 
  // 登录 注册 我的页面所有 跟地址 没有公共头部和底部 所以页在外面
  {
    path: '/quit',
    name: 'quit',
    component: () => import(/* webpackChunkName: "about" */ '../views/quit/quit.vue'),
    meta:{
      title:'退出登录',
    },
  },

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login'),
    meta:{
      title:'登录页',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register/register'),
    meta:{
      title:'注册页',
    },
  },
  {
    path: '/shippingAddress',
    name: 'shippingAddress',
    component: () => import(/* webpackChunkName: "about" */ '../views/shippingAddress/shippingAddress'),
    meta:{
      title:'收货地址',
    },
  },
  {
    path: '/editAddress',
    name: 'editAddress',
    component: () => import(/* webpackChunkName: "about" */ '../views/editAddress/editAddress'),
    meta:{
      title:'编辑地址',
    },
  },
  {
    path: '/evaluation',
    name: 'evaluation',
    component: () => import(/* webpackChunkName: "about" */ '../views/evaluation/evaluation'),
    meta:{
      title:'评价',
    },
  },
  {
    path: '/toEvaluate',
    name: 'toEvaluate',
    component: () => import(/* webpackChunkName: "about" */ '../views/toEvaluate/toEvaluate'),
    meta:{
      title:'待评价',
    },
  },
  {
    path: '/seeEvaluation',
    name: 'seeEvaluation',
    component: () => import(/* webpackChunkName: "about" */ '../views/seeEvaluation/seeEvaluation'),
    meta:{
      title:'查看评价',
    },
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "about" */ '../views/order/order'),
    meta:{
      title:'全部订单',
    },
  },
  {
    path: '/collectGoods',
    name: 'collectGoods',
    component: () => import(/* webpackChunkName: "about" */ '../views/collectGoods/collectGoods'),
    meta:{
      title:'收藏',
    },
  },
  {
    path: '/browse',
    name: 'browse',
    component: () => import(/* webpackChunkName: "about" */ '../views/browse/browse'),
    meta:{
      title:'最近浏览',
    },
  },
  {
    path: '/choosecity',
    name: 'choosecity',
    component: () => import(/* webpackChunkName: "about" */ '../views/choosecity/choosecity'),
    meta:{
      title:'选择城市',
    },
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "about" */ '../views/err/err')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



//  设置 白名单： 登陆 注册  找回密码/
// let whitePath = [ '/login','/register','/findPwd']
// // let whitePath = [ '/login']

// router.beforeEach((to,from,next) =>{
//   // 通过路由源信息（meta（写在路由后 在上面））给浏览器绑定名字
//   document.title =to.meta.title
//   // let username =JSON.parse(localStorage.getItem('username'))
//   let username =localStorage.getItem('username')
//   // 如果用户跳转的就是登录页面就让他直接去
//   // 设置了白名单 这里就可以修改为
//   if(whitePath.includes(to.path)) {
//   // if(to.path === '/login') {
//     next()
//   }else {
//     // 如果有user就让他调转其他页面 否则就调转到本页面
//     username ? next() : next('/login')
//     }
// })

export default router
