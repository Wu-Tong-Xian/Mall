<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>已完成</div>
      <div></div>
    </div>
    <van-divider />
    // <van-tab title="全部" name="a">
      <!-- 如果没有订单信息 显示暂无订单数据 -->
      <div class="coming-soon" v-if="orderlist.length < 1">暂无订单数据</div>
      <!-- 如果有订单信息 显示订单信息 -->
      
    // </van-tab>
  </div>
</template>

<script>
import { Cell, CellGroup } from "vant";
import { Card } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      orderlist: [] //盛放 订单列表已完成购物的信息
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    // 27. 订单查询(get) /getMyOrder
    getMyOrder() {
      this.$api
        .getMyOrder()
        .then(res => {
          if (res.code === 200) {
            // 订单信息列表 里面还有一个数组 在这里循环然后赋值 上面在循环不好使用
            this.orderlist = res.list;
            this.orderlist.map(item => {
              item.order_list.map(item1 => {
                item1.present_price = item1.present_price.toFixed(2);
              });
            });
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getMyOrder();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>