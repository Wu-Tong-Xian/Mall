<template>
  <div>
    <div>
      <van-icon class="goback" @click="goback" name="arrow-left" />
    </div>
    <div>
      <div>
        <img :src="goodsDetail.image_path" alt />
      </div>
      <div>￥{{goodsDetail.name}}</div>
      <div class="fl">
        <div>￥</div>
        <div>{{goodsDetail.present_price}}</div>
      </div>
      <van-divider />
      <div class="fl">
        <div>运费:0</div>
        <div>剩余:10000</div>
        <div class="fl">
          <div>点击收藏</div>
          <van-icon name="like-o" />
        </div>
      </div>
      <van-divider />
      <div class="fl">
        <div class="fl">
          <van-icon name="shop-collect-o" />
          <div>有赞的店</div>
        </div>
        <div>进入店铺</div>
      </div>
      <van-divider />
      <div>
        <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" dot />
  <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
  <van-goods-action-button type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      goodsDetail: ""
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
</style>