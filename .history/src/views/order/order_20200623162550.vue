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
    <div>
      <van-tabs v-model="active">
        <van-tab title="全部">内容 1</van-tab>
        <van-tab title="待支付">内容 2</van-tab>
        <van-tab title="代发货">内容 3</van-tab>
        <van-tab title="待收货">内容 4</van-tab>
        <van-tab title="已完成">内容 4</van-tab>
      </van-tabs>
    </div>
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