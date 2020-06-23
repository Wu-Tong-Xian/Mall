//是用来封装所有的请求 
import service from "./index/index.js"  //也可以省略index.js

// export default{} 里面所有的属性就是请求方法  
export default {
  //登录  第一种协防
  // login(params){
  //   //所有的方法必须return
  //   return service.post('/user/login',params)
  // },

  // 第二种方法  解构赋值的写法
  
  //获取所有文章
  allArticle(){
    return service.get('./article/allArticle')
  }
  // 上面是get post 封装请求的示例
}