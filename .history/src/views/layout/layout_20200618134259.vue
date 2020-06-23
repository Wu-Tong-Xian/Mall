<template>
  <div>
    <!-- vant 组件下拉刷新 所以内容都写在里面 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <router-view></router-view>
      
    </van-pull-refresh>
    <van-tabbar route v-model="active">
      <van-tabbar-item icon="home-o" to="/">商城</van-tabbar-item>
      <van-tabbar-item icon="search" to="/classify" dot >分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/shoppingCart" badge="0">购物车</van-tabbar-item>
      <van-tabbar-item  icon="friends-o" to="/my" dot  >我的</van-tabbar-item>
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
      active: 3,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    // home 首页
    home(){
      this.$router.push('/')
    },
    // 跳转到分类页面
    classify(){
      this.$router.push('/classify')
    },
    
    // 我的
    my(){
      this.$router.push('/my')
    },
    
    
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>