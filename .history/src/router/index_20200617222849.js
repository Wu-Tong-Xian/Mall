import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import layout from '../views/layout/layout'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children:[
      {
        path:'/',
        name:'/home',  //公共页面
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
        path: '/details',
        name: 'details',
        component: () => import(/* webpackChunkName: "about" */ '../views/details/details'),
        meta:{
          title:'详情页',
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
      {
        path: '/quit',
        name: 'quit',
        component: () => import(/* webpackChunkName: "about" */ '../views/quit/quit.vue'),
        meta:{
          title:'退出系统',
        },
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import(/* webpackChunkName: "about" */ '../views/edit/edit.vue'),
        meta:{
          title:'文章编辑',
        },
      },
      {
        path: '/check',
        name: 'check',
        component: () => import(/* webpackChunkName: "about" */ '../views/check/check'),
        meta:{
          title:'查看',
        },
      },
    ]
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
    path: '*',
    component: () => import(/* webpackChunkName: "about" */ '../../err/err')
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
