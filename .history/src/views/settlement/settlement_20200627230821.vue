<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>订单结算</div>
      <div></div>
    </div>
    <van-divider />
    <!-- 收货信息 没有地址 前往添加地址-->
    <div v-if="1" class="t-center t-u">
      <div>点击添加收货地址</div>
    </div>
    <!--如果有没有地址 显示地址-->
    <div v-else>北京田径武汉路天安门观察</div>
    <div class="mg-tb10">
      <img src="../../可能要用的图片/caitiao.jpg"  alt />
    </div>
    <!--商品信息-->
    <div>
      <!--如果是直接购买 -->
      <div v-if="this.buyway ===1">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
      </div>
      <!--通过购物车购买 -->
      <div v-else v-for="(item) in goods" :key="item.id">
        <van-card
          :num="item.count"
          :price="item.mallPrice"
          :title="item.name"
          :thumb="item.image_path"
        />
      </div>
    </div>
    <div class="fl under ">
      <div>合计</div>
      <div class="col5 mg-lr10">￥0.00</div>
      <div><van-button round  type="danger">提交订单</van-button></div>
    </div>
  </div>
</template>

<script>
import { Card } from "vant"; //商品卡片
import { Dialog } from "vant"; //弹出框
import { Button } from 'vant'; //按钮
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      goods: [],
      buynum: "",
      paylist: {}
    };
  },
  methods: {
    goback() {
      Dialog.confirm({
        title: "确定取消购买该商品",
       
      })
        .then(() => {
          this.$router.go(-1);
        })
        .catch(() => {
         
        });
      
    }
  },
  mounted() {
    // 如果是购物车购买
    if (this.buyway === 2) {
      this.buynum = this.paylists.count;
      this.paylist = this.paylists;
      this.goods = this.paylists.list;
    }
  },
  watch: {},
  computed: {
    paylists() {
      // 购物车购买
      return this.$store.state.paylists;
    },
    payone() {
      // 直接购买
      return this.$store.state.payone;
    },
    buyway() {
      //获取购买方式
      return this.$store.state.buyway;
    }
  }
};
</script>

<style scoped lang='scss'>
  img{
    width: 100%;
  }
  .under {
    justify-content: flex-end;
    margin-right: 10px;
    line-height: 45px;
    position: relative;
  }
</style>