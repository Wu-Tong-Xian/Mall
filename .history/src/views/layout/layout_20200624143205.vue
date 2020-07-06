<template>
  <div>
    <!-- vant 组件下拉刷新 所以内容都写在里面 -->
    <div>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <router-view></router-view>
      </van-pull-refresh>
    </div>
    <div>
      <van-tabbar route fixed v-model="active">
        <van-tabbar-item icon="home-o" to="/">商城</van-tabbar-item>
        <van-tabbar-item icon="search" to="/classify" dot>分类</van-tabbar-item>
        <van-tabbar-item v-if="shopingCount ===0" icon="shopping-cart-o" to="/shoppingCart" badge="shopingCount">购物车</van-tabbar-item>
        <van-tabbar-item v-else icon="shopping-cart-o" to="/shoppingCart" :badge="shopingCount">购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/my" dot>我的</van-tabbar-item>
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
      active: 0
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
    }
  },
  mounted() {
    
  },
  watch: {},
  computed: {
    shopingCount(){
      return this.$store.state.shopingCount
    }
  }
};
</script>

<style scoped lang='scss'>
</style>