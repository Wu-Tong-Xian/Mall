<template>
  <div>
    <!-- vant 组件下拉刷新 所以内容都写在里面 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <router-view></router-view>
      
    </van-pull-refresh>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" @click='home'>商城</van-tabbar-item>
        <van-tabbar-item icon="search" dot @click='home'>分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" badge="0" @click='shoppingCart'>购物车</van-tabbar-item>
        <van-tabbar-item  icon="friends-o" dot @click='my' >我的</van-tabbar-item>
      </van-tabbar>
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
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>