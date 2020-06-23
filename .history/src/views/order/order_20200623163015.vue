<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>我的订单</div>
      <div></div>
    </div>
    <van-divider />
    
      <van-tabs v-model="active" >
        <van-tab title="全部"><div class="fz14 mg-tb20 mg-lr20">暂无此功能！开发人员正在不眠不休的研发</div></van-tab>
        <van-tab title="待支付">暂无此功能！开发人员正在不眠不休的研发</van-tab>
        <van-tab title="代发货">暂无此功能！开发人员正在不眠不休的研发</van-tab>
        <van-tab title="待收货">暂无此功能！开发人员正在不眠不休的研发</van-tab>
        <van-tab title="已完成">内容 4</van-tab>
      </van-tabs>
    
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active:4
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>