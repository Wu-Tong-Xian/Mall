// http 专门用来发送请求  
// 如果下面的文件叫index  可以不用引导index.js 只用到http
// 分装axios
import axios from 'axios'
//创建axios的实例    const service =axios.create(创造的意思) 是一个对象
const service =axios.create({
  // 请求的基础路径 如果配置了基础路径 在实际发请求的时候可以省略
  baseURL:'/api',
  // 超时时间配置 毫秒为单位：timeout
  timeout:10000   //如果发送请求超过10S就会请求失败
})
//相应拦截   固定写法 
service.interceptors.response.use(res =>{
  return res.data
})