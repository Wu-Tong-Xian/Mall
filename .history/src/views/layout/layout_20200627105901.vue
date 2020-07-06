<template>
  <div>
    <!-- vant 组件下拉刷新 所以内容都写在里面 -->
    <div>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <router-view></router-view>
      </van-pull-refresh>
    </div>
    <div v-if="nickname ===null">
      <van-tabbar route fixed>
        <van-tabbar-item icon="home-o" to="/">商城</van-tabbar-item>
        <van-tabbar-item icon="search" to="/classify">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" @click="shoppingcart" to="/shoppingCart">购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/my">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <div v-else>
      <van-tabbar route fixed v-model="active">
        <van-tabbar-item icon="home-o" to="/">商城</van-tabbar-item>
        <van-tabbar-item icon="search" to="/classify" >分类</van-tabbar-item>
        <van-tabbar-item
          v-if="shopingCount ===0"
          icon="shopping-cart-o"
          to="/shoppingCart"
          badge="shopingCount"
        >购物车</van-tabbar-item>
        <van-tabbar-item v-else icon="shopping-cart-o" to="/shoppingCart" :badge="shopingCount">购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/my" >我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      isLoading: false,
      active: 0,
      nickname: ""
    };
  },
  methods: {
    // vant组件刷新的方法
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    shoppingcart(){
      this.shopingCount()
    }
  },
  mounted() {
    this.nickname = localStorage.getItem("nickname");
  },
  watch: {},
  computed: {
    // 自定义方法名  获取存储在vuex的shopingCount 购物车数量  数据
    shopingCount() {
      return this.$store.state.shopingCount;
      console.log(this.$store.state.shopingCount);
    }
  }
};
</script>

<style scoped lang='scss'>
</style>