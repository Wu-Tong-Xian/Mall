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
        <van-tab title="全部"><div class="fz14 mgt mg-lr20">暂无此功能！开发人员正在不眠不休的研发</div></van-tab>
        <van-tab title="待支付"><div class="fz14 mgt mg-lr20">暂无此功能！开发人员正在不眠不休的研发</div></van-tab>
        <van-tab title="代发货"><div class="fz14 mgt mg-lr20">暂无此功能！开发人员正在不眠不休的研发</div></van-tab>
        <van-tab title="待收货"><div class="fz14 mgt mg-lr20">暂无此功能！开发人员正在不眠不休的研发</div></van-tab>
        <van-tab title="已完成"><div class="mgt">
        
        </div></van-tab>
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
      active:0
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
.mgt {
  margin-top: 30px;
}
</style>