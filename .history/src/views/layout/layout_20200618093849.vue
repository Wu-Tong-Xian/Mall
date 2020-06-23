<template>
  <div>
    <!-- vant 组件下拉刷新 所以内容都写在里面 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <router-view></router-view>
      
    </van-pull-refresh>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" @click='home'>商城</van-tabbar-item>
        <van-tabbar-item icon="search" dot @click='classify'>分类</van-tabbar-item>
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
    },
    // home 首页
    home(){
      this.$router.push('')
    },
    // 我的
    my(){
      this.$router.push('/my')
    },
    // 购物车页面
    shoppingCart(){
      this.$router.push('/shoppingCart')
    },
    // 跳转到分类页面
    classify(){
      this.$router.push('/classify')
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>