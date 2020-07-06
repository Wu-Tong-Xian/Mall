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
            <div class="col5">￥0.00</div>
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
          <van-button type="primary" size="small">清楚全部</van-button>
          <van-button type="primary" size="small">结算</van-button>
        </div>
      </div>
      <div v-for="(item) in shopList" :key="item.id" class="fl j-center">
        <!-- vant 组件库单选框-->
        <div class="fl">
          <!--多选框-->
          <van-checkbox v-model="item.check" checked-color="#E81123"></van-checkbox>
          <!--vant 商品卡片方法-->
          
            <div><van-card
            item.countnum=""
            :price="item.mallPrice"
            desc="描述信息"
            :title="item.name"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          />
          <van-stepper v-model="value" integer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup } from "vant"; //引入多选框
import { Stepper } from "vant"; //引入vant 不进器
import { Switch } from "vant"; //引入
import { Card } from "vant"; //引入vant 商品卡片
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      nickname: "", //注册时的用户名
      checked: false, //全选按钮的状态

      shopList: "", //盛放  购物车数据
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
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 全选按钮
    checkAll() {
      // this.checked = !this.checked
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
    shopingCount() {
      return this.$store.state.shopingCount;
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