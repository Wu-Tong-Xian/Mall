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
      <div></div>
      <div>
        <div class="t-center mg-t10">购物车</div>
        <van-divider />
        <!-- vant下划线 -->
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  },
  mounted() {
    //  获取用户名 用作登录检测
    this.nickname = localStorage.getItem("nickname");
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.order-img {
  width: 380px;
}
</style>