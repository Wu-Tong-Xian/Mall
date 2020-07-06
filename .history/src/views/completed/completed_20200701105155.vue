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

    <!-- 如果没有订单信息 显示暂无订单数据 -->
    <div class="coming-soon" v-if="orderlist.length < 1">暂无订单数据</div>
    <!-- 如果有订单信息 显示订单信息 -->
    <div v-else>
      <div v-for="item in orderlist" :key="item.id" class="order-item">
        <!-- 订单的头 -->
        <van-cell class="order-cell">
          <div class="flexbtw">
            <div>订单编号:{{item.order_id}}</div>
            <div class="deal-close">交易完成</div>
          </div>
        </van-cell>
        <!-- 订单商品信息 -->
        <div v-for="item1 in item.order_list" :key="item1.id">
          <van-card
            :num="item1.count"
            :price="item1.present_price"
            :title="item1.name"
            :thumb="item1.image_path"
          />
        </div>
        <!-- 订单创建时间等尾部信息 -->
        <div class="order-info">
          <div>创建时间:{{item.add_time}}</div>
          <div>收货地址:{{item.address}}</div>
          <div>共{{item.order_list.length}}件商品 合计:￥{{item.mallPrice}}</div>
        </div>
      </div>
    </div>
    
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
              item.mallPrice = item.mallPrice.toFixed(2);
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