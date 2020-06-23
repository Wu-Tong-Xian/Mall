  //是用来封装所有的请求 
  import service from "./index"  //http 下面叫index的 必须省略index.js
  // import { get } from "core-js/fn/dict"
  // import { get } from "core-js/fn/dict"

  // export default{} 里面所有的属性就是请求方法  
  export default {

  //   1. 获取首页数据(get)
  // /recommend
  getRecommend(){
    return service.get('recommend')
  },

  // 2. 搜索(post)
  // /search
  // 参数: value: 搜索关键词
  getSearch(value){
    return service.post('/search',{
      value
    })
  },

  // 3. 分类查询(get)
  // /classification?mallSubId=${id}
  // 参数:
  // id:默认分类的id
  getClassification(id){
    return service.get(`/classification?mallSubId=${id}`)
  },

  // 4. 查询获取购物车数据(get)
  // /getCard
  getCard(){
    return service.get('getCard')
  },

  // 5. 购物车加减商品(post)
  // /editCart
  // 参数:
  // count: 购物车数量
  // id: 商品id
  // mallPrice: 价格
  getEditCart(count,id,mallPrice){
    return service.post(`/editCart`,{
      count,
      id,
      mallPrice
    })
  },


  // 6. 购物车商品删除(post)
  // /deleteShop
  // 参数: 
  // id: 商品id(数组)
  getDeleteShop(id){
    return service.post(`deleteShop`,{
      id
    })
  },

  // 7. 购物车支付页面(post)
  // /order
  // 参数:
  // address:收货地址
  // tel:电话
  // orderId:所有商品的id(数组)
  // totalPrice:总价格
  // idDirect:用来判断是购物车结算还是直接购买(直接购买为true,购物车结算为false)
  // count:商品数量
  getOrder(address,tel,orderId,totalPrice,idDirect,count){
    return service.post(`/order`,{
      address,
      tel,
      orderId,
      totalPrice,
      idDirect,
      count
    })
  },

  // 8.单个商品详情(get)0
  // /goods/one?id=${id}
  // 参数:
  // id:商品的id
  getGoods(id){
    return service.get(`/goods/one?id=${id}`)
  },

  // 9. 收藏单个商品(post)
  // /collection
  // 参数: 
  // goods: 商品的详情信息
  collection({goods}){
    return service.post('/collection',{
      goods
    })
  },

  // 10. 取消收藏(post)
  // /cancelCollection
  // 参数:
  // id:商品的cid
  getCancelCollection(id){
    return service.post(`/cancelCollection`,{
      id
    })
  },

  // 11. 查询商品是否已收藏(post)
  // /isCollection
  // 参数:
  // id:商品的id
  getisCollection(id){
  return service.post(`isCollection`,{
    id
  })
  },

  // 12. 加入购物车(post)
  // /addShop
  // 参数:
  // id:商品的id
  getaddShop(id){
    return service.post(`addShop`,{
      id
    })
  },

  // 13. 退出登录(post)
  // /loginOut
  getloginOut(){
    return service.post(`/loginOut`,{
      
    })
  },

  // 14. 获取用户信息(post)
  // /queryUser
  getqueryUser(){
    return service.post(`queryUser`)
  },

  // 15. 修改保存用户信息(post)
  // /saveUser
  // 参数:
  // gender: 性别
  // year: 年
  // month: 月
  // day: 日
  // id: 用户id
  // nickname: 昵称
  getsaveUser(gender,year,month,day,id,nickname){
    return service.post('nickname',{
      gender,
      year,
      month,
      day,
      id,
      nickname
    })
  },

  // 16. 查询用户订单数量(get)
  // /myOrder/orderNum
  getorderNum(){
    return service.get(`/myOrder/orderNum`)
  },

  // 17. 商品评论(post)
  // /goodsOne/comment
  // 参数:
  // id: 商品cid
  // rate: 分数
  // content: 内容
  // anonymous: 是否匿名 
  // _id: 商品的_id
  // order_id: 商品的order_id
  // image: []
  getcomment(id,rate,content,anonymous,_id,order_id,image){
  return service.post(`/goodsOne/comment`,{
    id,
    rate,
    content,
    anonymous,
    _id,
    order_id,
    image
  })
  },

  // 18. 获取登录注册默认验证码(get)
  // /verify
  getverify(){
    return service.get(`/verify`)
  },

  // 19. 查询用户收货地址(get)
  // /getAddress
  getAddress(){
    return service.get(`getAddress`)
  },

  // 20. 查询默认收货地址(get)
  // /getDefaultAddress
  getDefaultAddress(){
    return service.get(`getDefaultAddress`)
  },

  // 21. 设置默认收货地址(post)
  // /setDefaultAddress
  // 参数:
  // id: 地址id
  setDefaultAddress(id){
    return service.post(`setDefaultAddress`,{
      id
    })
  },

  // 22. 增加收货地址(post)
  // /address
  // 参数:
  // name:用户名
  // tel:电话
  // address:(省+市+区+详情地址)
  // isDefault:是否默认
  // province:省
  // city:市
  // county:区
  // addressDetail:详情地址，
  // areaCode:地区代码
  // id:修改地址时候要传id
  getaddress(name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id){
    return service.post(`/address`,{
      name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id
    })
  },

  // 23. 删除地址(post)
  // /deleteAddress
  // 参数:
  // id:地址_id
  getdeleteAddress(id){
    return service.post(`deleteAddress`,{
      id
    })
  },

  // 24. 查询我的收藏(get)
  // /collection/list
  getcollection(){
    return service.get(`/collection/list`)
  },

  // 25. 注册(post)
  // /register
  // 参数:
  // nickname: 用户名
  // password:密码
  // verify:验证码
  getregister(nickname,password,verify){
    return service.post(`/register`,{
      nickname,
      password,
      verify
    })
  },

  // 26. 登录(post)
  // /login
  // 参数:
  // nickname: 用户名
  // password:密码
  // verify:验证码
  getlogin(nickname,password,verify){
    return service.post(`/login`,{
      nickname,
      password,
      verify
    })
  },

  // 27. 订单查询(get)
  // /getMyOrder
  getMyOrder(){
    return service.get(`getMyOrder`)
  },

  // 28. 查询已评价(get)
  // /alreadyEvaluated
  getalreadyEvaluated(){
    return service.get(`alreadyEvaluated`)
  },

  // 29. 查询未评价(get)
  // /tobeEvaluated
  gettobeEvaluated(){
    return service.get(`tobeEvaluated`)
  },

  // 30. 查询单条评论(post)
  // //evaluateOne
  // 参数: 
  // id:商品id
  // _id:数据库的那条id
  get(id,_id) {
    return service.post(`evaluateOne`,{
      id,
      _id
    })
  },


    //登录 请求示例  第一种协防
    // login(params){
    //   //所有的方法必须return
    //   return service.post('/user/login',params)
    // },

    // 实例 第二种方法  解构赋值的写法
    // login(username,password) {
    //   return service.post('./user/login',{
    //     // username:username,
    //     username,   //简写其实是上面那样的 所以实参也是username
    //     password
    //   })
    // },

    //示例 获取所有文章  平时用字符转 ，如果有参数就用模板字符串
    // allArticle(id){
    //   return service.get(`./article/allArticle?id=${id}`)
    // },
    //示例 获取所有文章 get请求两个参数的情况
    // allArticle(){
    //   return service.get(`./article/allArticle?id=${id}&num=${num}`)
    // }
    // 上面是get post 封装请求的示例 封装完之后在main.js 里引用这个文件
  //   import api from "./http/api"
  //   Vue.pprototype 的原型链上自己取一个名字 特殊一点
  //   Vue.pprototype.$api =api
  }