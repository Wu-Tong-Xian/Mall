//是用来封装所有的请求 
import service from "./index/index.js"  //也可以省略index.js

// export default{} 里面所有的属性就是请求方法
export default {
  login(params){
    //所有的方法必须return
    return service.post(url:'')
  }
}