<template>
  <div>
    <!-- 如果没登陆 -->
    <div v-if="nickname  === null">
      <div class="t-center mg-t10">购物车</div>
      <van-divider />
      <div>
        <img src="../../可能要用的图片/order.gif" class="order-img" alt />
      </div>
      <div class="t-center fz14">登录后才能查看订单</div>
      <div class="t-center mg-t10">
        <van-button type="primary" size="small" @click="gologin">立即登录</van-button>
      </div>
    </div>
    <!-- 登录状态 -->
    <div v-else>
      <!--购物车没有商品, 提示 并且让其跳转到首页区购物-->
      <div v-if="shopingCount ===0">
        <div class="t-center mg-t10">购物车</div>
        <van-divider />
        <div class="shop">
          <img src="../../可能要用的图片/shop.png" alt />
        </div>
        <div>
          <van-button class="prompt" plain type="primary" size="small">您的购物车还是空空如也~~</van-button>
        </div>
        <div>
          <van-button @click="gohome" class="goshopping" type="info">去购物</van-button>
        </div>
      </div>
      <!-- 登录状态下  购物车有商品 -->
      <div v-else>
        <div class="t-center mg-t10">购物车</div>
        <div class="underline1"></div>
        <!-- vant下划线 -->
        <div class="fl j-between mg-lr10">
          <!--全选按钮-->
          <van-checkbox v-model="checked" @click="checkAll" checked-color="#E81123">全选</van-checkbox>
          <div class="fl">
            <div>合计：</div>
            <div class="col5">￥{{totalPrice}}</div> <!-- totalPrice总金额  通过计算属性自定义方法计算-->
          </div>
        </div>
      </div>
      <div class="fl j-between underline2">
        <div class="fz14 mg-t10"></div>
        <div class="fz14 style1">请确认订单</div>
      </div>

      <div class="fl j-between underline3">
        <div></div>
        <div>
          <van-button type="primary" size="small" @click="settlement">结算</van-button>
          <van-button type="primary" size="small" @click="del">删除</van-button>
        </div>
      </div>
      <div v-for="(item,index) in shopList" :key="index" class="fl j-center">
      
        <!-- vant 组件库单选框-->
        <div class="fl mg-r10 j-between">
          <!--多选框-->
          <van-checkbox v-model="item.check" @click="clickCheck(index)" checked-color="#E81123"></van-checkbox>{{item.check}}
          <!--商品图片-->
          <div class="border1">
            <img :src="item.image_path" alt />
          </div>
        </div>
        <div class="mg-l10">
          <!--商品名称-->
          <div class="mg-t10 t-none col5 fz14 shoppingName">{{item.name}}</div>
          <div class="fl mg-t20 fz18 j-between">
            <div class="col5">￥{{item.present_price}}</div>
            <!--vant 不进器-->
            <van-stepper v-model="item.count" min="1" max="50" />
          </div>
        </div>
        
      </div>
      <div style='margin-top:60px'></div> <!--给底部撑起来-->
    </div>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup } from "vant"; //引入多选框
import { Stepper } from "vant"; //引入vant 不进器
import { Toast } from 'vant'; //轻提示
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      nickname: "", //注册时的用户名
      checked: false, //全选按钮的状态

      shopList: [], //盛放  购物车数据
      value: 1 //不进器的默认值
    };
  },
  methods: {
    // 4. 查询获取购物车数据(get)  / /getCard
    getCard() {
      this.$api
        .getCard()
        .then(res => {
          console.log(res.shopList);
          if (res.code === 200) {
            this.shopList = res.shopList;
            console.log(this.shopList);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 结算 选中项  
    settlement(){
      // 由于限购50 多输入无效提示
      this.shopList.map(item =>{
        if(item.item.count >50){
           Toast.fail('该商品最多购买50件,多输入无效是否购买');
      }
      })
    },
    // 删除  选中项
    del(){

    },
    // 全选按钮
    checkAll() {
      // this.checked = !this.checked  //这里用了vant组件 自带取反，就不用了
      this.shopList.map(item =>{  //循环购物者数组
      item.check =this.checked   //通过全选按钮控制其他按钮的选中状态
      })
    },
    // 多选框
    clickCheck(index){ 
      // 这里也是 vant复选框的方法自带取反 ，点击每一样 就把点击项取法，所以不做了
      // this.shopList[index].check = !this.shopList[index].check
      this.checked =this.shopList.every(item =>{  //every 方法 必须return 所有条件都成立才返回true 有一个不出来返回false
        return item.check    //结合every方法 就是 所有商品都选中(true) 全选按钮才选中
      })
    },
    //  未登录状态下就区登录
    gologin() {
      this.$router.push("/login");
    },
    // 登录 购物车没商品  让他去首页购物
    gohome() {
      this.$router.push("/");
    }
  },
  mounted() {
    //  获取用户名 用作登录检测
    this.nickname = localStorage.getItem("nickname");
    this.getCard(); //购物车数据
  },
  watch: {},
  computed: {
    // 自定义方法 获取存入vuex当中的 加入购物车时存起来的商品
    shopingCount() {
      return this.$store.state.shopingCount;
    },
    //自定义方法 计算选中商品的总金额
    totalPrice(){
      let sum =0
        this.shopList.map(item =>{ //循环拿到每一项
        if(item.check ===true){  //如果 选中了当前项  把当前项数量价格计算出来 做*运算
           return (sum += item.present_price * item.count);
        }
      })
      return sum.toFixed(2);  //把计算出来的金额保留两位小数 返回给totalPrice方法
    }
  }
};
</script>

<style scoped lang='scss'>
/* 购物车有商品的样式 */
.underline1 {
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(219, 216, 216);
}
.underline2 {
  border-bottom: 1px solid rgb(219, 216, 216);
}
.underline3 {
  margin-top: 10px;
  border-bottom: 1px solid rgb(219, 216, 216);
}
.border1 {
  border: 1px solid rgb(233, 209, 209);
  margin-top: 5px;
}

.van-radio-group {
  margin-top: 40px;
  margin-right: 20px;
}
.border1 img {
  width: 80px;
}
.style1 {
  margin-right: 45px;
}
.shoppingName {
  width: 180px;
}
/* 未登录时的图片 */
.order-img {
  width: 380px;
}
/* 购物车没有商品的样式 */
.shop {
  margin: 0 auto;
  width: 130px;
  height: 130px;
  background: #ebebeb;
  border-radius: 50%;
  position: relative;
}
.shop img {
  width: 100px;
  position: absolute;
  top: 19px;
  left: 15px;
}
.prompt {
  margin: 50px 0 20px 100px;
}
.goshopping {
  margin: 0px 0 20px 150px;
}
</style>