//是用来封装所有的请求 
import service from "./index"  //http 下面叫index的 必须省略index.js

// export default{} 里面所有的属性就是请求方法  
export default {





  //登录 请求示例  第一种协防
  // login(params){
  //   //所有的方法必须return
  //   return service.post('/user/login',params)
  // },

  // 实例 第二种方法  解构赋值的写法
  login({username,password}) {
    return service.post('./user/login',{
      // username:username,
      username,   //简写其实是上面那样的 所以实参也是username
      password
    })
  },

  //示例 获取所有文章  平时用字符转 ，如果有参数就用模板字符串
  allArticle(id){
    return service.get(`./article/allArticle?id=${id}`)
  },
  //示例 获取所有文章 get请求两个参数的情况
  allArticle(){
    return service.get(`./article/allArticle?id=${id}&num=${num}`)
  }
  // 上面是get post 封装请求的示例 封装完之后在main.js 里引用这个文件
//   import api from "./http/api"
//   Vue.pprototype 的原型链上自己取一个名字 特殊一点
//   Vue.pprototype.$api =api
}