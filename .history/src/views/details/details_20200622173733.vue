<template>
  <div>
    <div>
      <van-icon class="goback" @click="goback" name="arrow-left" />
    </div>
    <!-- 默认页面 小图 -->
    <div v-if="flag === true">
      <div class="mg-l20">
        <div class="mg-l20" @click="clickImg">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <img :src="goodsDetail.image_path" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img :src="goodsDetail.image_path" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img :src="goodsDetail.image_path" alt />
            </van-swipe-item>
          </van-swipe>
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
          <!-- 如果没有登录 -->
          <div v-if="nickname  ===''">
            <div class="fl" @click="collection">
              <div>点击收藏</div>
              <van-icon name="like-o" class="icon-lick" />
            </div>
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
    <!-- 图片详情页 大图 -->
    <div v-else class="bg">
      <div class="mg-l20" @click="clickImg">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img :src="goodsDetail.image" class="else-image" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="goodsDetail.image" class="else-image" alt />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="goodsDetail.image" class="else-image" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 商品相信，用户评论 -->
    <div>
      <van-tabs v-model="active">
        <van-tab title="商品详情">
          <div v-html="goodsDetail.detail"></div>

          <div class="mg-b20"></div>
        </van-tab>
        <van-tab title="用户评论">
          <div v-if="true" class="mg-tb20">暂无用户评论</div>
          <div v-else>各种用户评论</div>
          <div class="mg-tb20">111</div>
        </van-tab>
      </van-tabs>
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
      id: "", // 查看商品详情默认id
      goodsDetail: {}, // 接收商品详情的数据
      flag: true, //用做判断默认页面和 图片详情
      active: 0 //用做 标签页默认选中
    };
  },
  methods: {
    // 点击收藏
    collection() {},
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
      this.flag = !this.flag;
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
  width: 355px;
  height: 400px;
  margin-top: 40px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>