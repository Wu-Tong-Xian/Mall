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
        name:'/home',
        component:home,
        meta:{
          title:'首页',
        },
      },
      
      {
        path: '/published',
        name: 'published',
        component: () => import(/* webpackChunkName: "about" */ '../views/published/published.vue'),
        meta:{
          title:'已发布',
        },
      },
      {
        path: '/census',
        name: 'census',
        component: () => import(/* webpackChunkName: "about" */ '../views/census/census.vue'),
        meta:{
          title:'统计',
        },
      },
      {
        path: '/Paging',
        name: 'Paging',
        component: () => import(/* webpackChunkName: "about" */ '../views/Paging/Paging'),
        meta:{
          title:'分页表格',
        },
      },     
      {
        path: '/publications',
        name: 'publications',
        component: () => import(/* webpackChunkName: "about" */ '../views/publications/publications.vue'),
        meta:{
          title:'发表文章',
        },
      },
      {
        path: '/tabs',
        name: 'tabs',
        component: () => import(/* webpackChunkName: "about" */ '../views/tabs/tabs.vue'),
        meta:{
          title:'标签页',
        },
      },
      {
        path: '/export',
        name: 'export',
        component: () => import(/* webpackChunkName: "about" */ '../views/export/export.vue'),
        meta:{
          title:'导出excel',
        },
      },
      {
        path: '/imageUpload',
        name: 'imageUpload',
        component: () => import(/* webpackChunkName: "about" */ '../views/imageUpload/imageUpload.vue'),
        meta:{
          title:'图片上传',
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
