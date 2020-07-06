//模块化  导入    导出   export defoult  只能导出一次 export  可以到处多次
  //在main.js中引入 ：
// import utils from './utils'
// Vue.prototype.$utils =utils
// 在这里引用vue   ：import Vue from 'vue'  还有需要的组件


import Vue from 'vue'
import { Dialog } from 'vant'
export default {
  // 检测登录状态
  checkLogin(next) {
    Vue.prototype.$checkLogin = (next) => {
      if (!localStorage.user) {
        Dialog.confirm({
          title: '系统检测到您现在没有登陆',
          message: '是否立即前往登录/注册页面',
        })
        return false
      } else {
        next()
      }
    }
  },
  // 最近浏览模块化
  addViews(item) {  
    // 判断本地有没有最近浏览的数组
    if(!localStorage.views){
      let arr = []
      arr.push(item)
      localStorage.setItem('views',JSON.stringify(arr))
    }else{
      let arr = JSON.parse(localStorage.views)
      arr.push(item)
      localStorage.setItem('views',JSON.stringify(arr))
    }
},

/**
 * 搜索关键词高亮显示
 * @param String str 要替换的所有内容
 * @param String value 搜索框里面的内容
 * @return Function 替换后的内容
 */
keyWord(){
  let keyWord = (str, value) => {
    let replaceReg = new RegExp(value, 'g');
    let replaceString = `<span style='color:red'>${value}</span>`
    str = str.replace(replaceReg, replaceString);
    return str
  }
}




}
// export function checkLogin() {

// }

// export function addViews() {}