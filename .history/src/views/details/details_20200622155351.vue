<template>
  <div>
    <div>
      <van-icon class="goback" @click="goback" name="arrow-left" />
    </div>
    <div v-if="flag === true">
      <div class="mg-l20">
        <div class="mg-l20">
          <img :src="goodsDetail.image_path" alt @click="clickImg" />
        </div>
        <div class="mg-tb10">￥{{goodsDetail.name}}</div>
        <div class="fl price">
          <div>￥</div>
          <div class="present_price">{{goodsDetail.present_price}}</div>
        </div>
        <van-divider />
        <div class="fl j-around">
          <div>运费:0</div>
          <div>剩余:10000</div>
          <div class="fl">
            <div>点击收藏</div>
            <van-icon name="like-o" class="icon-lick" />
          </div>
        </div>
        <van-divider />
        <div class="fl j-around">
          <div class="fl">
            <van-icon name="shop-collect-o" class="icon-shop" />
            <div>有赞的店</div>
          </div>
          <div>进入店铺</div>
        </div>
        <van-divider />
      </div>
    </div>
    <div v-else>
        <div class="mg-l20">
          <img :src="goodsDetail.image" alt @click="clickImg" class="else-image"  />
        </div>
    </div>
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="0" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      goodsDetail: "",
      flag: true
    };
  },
  methods: {
    // 8.单个商品详情(get)  /goods/one?id=${id} 参数: id:商品的id
    getGoods(id) {
      this.$api
        .getGoods(this.id)
        .then(res => {
          this.goodsDetail = res.goods.goodsOne;
          console.log(this.goodsDetail);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 返回上一级
    goback() {
      this.$router.go(-1);
    },
    // 点击查看大图
    clickImg() {
      this.flag = !this.flag
    }
  },
  mounted() {
    // 必须最开始就获取到 id 然后再调用方法发请求 才有id
    this.id = this.$route.query.id;
    this.getGoods();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.goback {
  margin: 20px 0 20px 10px;
}
.price {
  color: red;
}
.present_price {
  margin-top: 2px;
}
.icon-lick {
  margin: 3px 0 0 5px;
}
.icon-shop {
  margin: 3px 2px 0 0;
}
.else-image {
  width: 370px;
  
}
</style>