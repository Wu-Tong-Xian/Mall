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
        <van-divider />
        <!-- vant下划线 -->
        <div class="fl j-between mg-lr10">
          <div><van-checkbox v-model="checked" checked-color="#red">复选框</van-checkbox> 全选</div>
          <div>
            <div>合计：￥0.00</div>
            <div>请确认订单</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup } from 'vant';
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      nickname: ""
    };
  },
  methods: {
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
.order-img {
  width: 380px;
}
/* 购物车没有商品的提示 */
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