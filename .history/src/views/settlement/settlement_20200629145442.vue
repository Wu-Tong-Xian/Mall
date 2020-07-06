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
    <!-- 收货信息 如果有地址 显示收获地址-->
    <div v-if="addlist.id !== undefined">
       <van-cell  icon="location-o" >
        <div class="fl j-around flexbtw">
          <div>收货人{{addlist.name}}</div>
          <div>联系方式{{addlist.tel}}</div>
        </div>
        <div>
          <div>收货地址:{{addlist.address}}</div>
          
        </div>
      </van-cell> 
    </div>
    <!--如果没有地址 去添加收货地址-->
    <div v-else class="t-center t-u">
      <div @click="goshippingAddress">点击添加收货地址</div>
    </div>
    <div class="mg-tb10">
      <img src="../../可能要用的图片/caitiao.jpg" alt />
    </div>
    <!--商品信息-->

    <!--如果是直接购买 -->
    <div v-if="this.buyway ===1">
      <van-card
        :num="buynum"
        :price="goodsone.present_price"
        :title="goodsone.name"
        :thumb="goodsone.image_path"
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
import { SubmitBar } from "vant"; //提交订单栏
import { Toast } from "vant"; //请提示
import { Cell, CellGroup } from 'vant'; //单元格
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      DefaultAddress: {}, // 默认地址对象
      addlist: {}, // 默认地址修改后的地址对象
      goods: [], //购买对应的商品信息数组
      buynum: "", //直接购买的数量
      paylist: {}, // 购物车购买的商品信息 paylists  赋值给 paylist了
      goodsone: {} //直接购买商品的信息
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
    // 20. 查询默认收货地址(get) /getDefaultAddress
    getDefaultAddress() {
      this.$api
        .getDefaultAddress()
        .then(res => {
          console.log(res);
          //如果有默认地址 将设置的默认地址拿给默认自己定义的地址对象
          if (res.defaultAdd !== null) {
            this.DefaultAddress = res.defaultAdd;
            //默认地址修改后的地址对象 方便页面获取的显示
            this.addlist = {
              name: this.DefaultAddress.name,
              address: `${this.DefaultAddress.province}${this.DefaultAddress.city}${this.DefaultAddress.county}${this.DefaultAddress.addressDetail}`,
              id: this.DefaultAddress.id,
              tel: this.DefaultAddress.tel,
              isDefault: this.DefaultAddress.isDefault
            };
          }
        }).catch(err =>{
          console.log(err);
        })
    },

    goshippingAddress() {
      //没有地址的情况 跳转到收货地址
      this.$router.push("shippingAddress");
    },
    onSubmit() {
      //提交订单
      // 没有地址的情况提示没有地址
      if (1) {
        Toast("地址为空,不能购买,请填写收获地址");
      } else {
        //有地址的情况 发请求
      }
    }
  },
  mounted() {
    // 立即购买
    if (this.buyway === 1) {
      this.buynum = this.payone.count;
      this.goodsone = this.payone.list;
      this.goodsone.present_price = Number(this.goodsone.present_price).toFixed(
        2
      );
    }
    // 如果是购物车购买
    else if (this.buyway === 2) {
      this.buynum = this.paylists.count;
      this.paylist = this.paylists;
      this.goods = this.paylists.list;
      // console.log(this.addresslist);
    }
    
    //获得地址信息  如果
    if(this.addresslist.id ===undefined){
      this.getDefaultAddress() //调用获取用户信息的方法
    }else {
      this.addlist =this.addresslist
    }
  },
  watch: {},
  computed: {
    addresslist() {
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
    piceses() {
      if (this.buyway === 1) {
        //直接购买
        let sum = 0;
        sum += this.buynum * this.goodsone.present_price;
        return sum * 100;
      } else if (this.buyway === 2) {
        //购物车购买
        return this.paylists.totalPrice * 100;
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