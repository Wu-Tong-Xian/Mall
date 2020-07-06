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
        <van-tab title="已完成">
        
        <div class="mgt">
        
        </div></van-tab>
      </van-tabs>
    
  </div>
</template>

<script>
import { Cell, CellGroup } from "vant";  //vant 单元格
import { Card } from "vant"; //vant卡片
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active:0,
      orderlist: [] //盛放 订单列表已完成购物的信息
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
// 暂无订单 内容居中
.coming-soon {
  width: 80%;
  margin: 10px auto;
  text-align: center;
  color: grey;
}
// 每一个订单
.order-item {
  width: 90%;
  background: #fafafa;
  margin: 10px auto;
  border-radius: 20px;
}
// 订单编号行
.order-cell {
  background: #f3f1f1;
  border-radius: 20px 20px 0 0;
}
// 订单创建时间等下方信息 向右对齐
.order-info {
  padding: 5px 10px 10px;
  text-align: right;
  font-size: 14px;
  color: rgb(70, 70, 70);
  line-height: 24px;
  border-top: 1px solid rgb(224, 223, 223);
}
// 交易完成 字体颜色突出
.deal-close {
  color: rgb(250, 144, 94);
}
</style>