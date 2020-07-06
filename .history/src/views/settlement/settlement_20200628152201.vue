<template>
  <div >
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
      <div @click="goshippingAddress">点击添加收货地址</div>
    </div>
    <!--如果有没有地址 显示地址-->
    <div v-else>北京田径武汉路天安门观察</div>
    <div class="mg-tb10">
      <img src="../../可能要用的图片/caitiao.jpg" alt />
    </div>
    <!--商品信息-->

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
    <!--提交订单-->
    <div class="fl under">
       <van-submit-bar :price="piceses" button-text="提交订单" @submit="onSubmit" />
    </div>
  </div>
</template>

<script>
import { Card } from "vant"; //商品卡片
import { Dialog } from "vant"; //弹出框
import { Button } from "vant"; //按钮
import { SubmitBar } from 'vant';//提交订单栏
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      goods: [],//购买对应的商品信息数组
      buynum: "", //直接购买的数量
      paylist: {} , // 购物车购买的商品信息 paylists  赋值给 paylist了
      goodsone:{} //直接购买商品的信息
    };
  },
  methods: {
    goback() {
      Dialog.confirm({
        title: "确定取消购买该商品"
      })
        .then(() => {
          this.$router.go(-1);
        })
        .catch(() => {});
    },
    goshippingAddress() {
      //没有地址的情况 跳转到收货地址
      this.$router.push("shippingAddress");
    },
    onSubmit() { 
      //提交订单
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
   addresslist(){
      //选择地址
      return this.$store.state.addresslist;
   },
    buyway() {
      //获取购买方式
      return this.$store.state.buyway;
    },
     paylists() {
      // 购物车购买
      return this.$store.state.paylists;
    },
    
    payone() {
      // 直接购买存储的信息 数量 跟整个商品信息
      return this.$store.state.payone;
    },
    //计算商品的价格
    piceses(){  
      if(this.buyway ===1){ //直接购买
        let sum =0;
        sum +=this.buynum * this.goodsone.present_price;
        return sum*100;
      }else
       if(this.buyway ===2){ //购物车购买
        return this.paylists.totalPrice *100
      }
    }
  }
};
</script>

<style scoped lang='scss'>
img {
  width: 100%;
}
.heade {
  position: relative;
}
.under {
  justify-content: flex-end;
  margin-right: 10px;
  line-height: 45px;
  position: absolute;
  left: 150px;
  top: 600px;
}
</style>