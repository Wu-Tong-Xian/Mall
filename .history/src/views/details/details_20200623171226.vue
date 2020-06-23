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

          <div>
            <!--收藏 -->
            <!-- 如果没有登录 也就没有收藏 提示未登录 -->
            <div v-if="nickname  ===null">
              <div class="fl" @click="gologin">
                <div>收藏</div>
                <van-icon name="like-o" color="red" class="icon-lick" />
              </div>
            </div>
            <!-- 登录了，isCollection ===0 没有被收藏  就可以点击收藏 -->
            <div v-else-if="isCollection === 0">
              <div class="fl" @click="collect">
                <!--提示收藏成功 -->
                <div>收藏</div>
                <van-icon name="like-o" color="red" class="icon-lick" />
              </div>
            </div>
            <!-- 如果登录了 并且点击收藏 改变他的状态为红心 并且改为取消收藏 -->
            <div v-else>
              <div class="fl" @click="noCollect">
                <!--不收藏-->
                <div>取消收藏</div>
                <van-icon name="like" class="icon-lick1" />
              </div>
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
    <!-- 如果没登录 做底部栏的操作就让他去登录 -->
    <div v-if="nickname ===null" @click="gologin">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
    <!-- 登录之后可以做操作 -->
    <div v-else>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="0" />
        <van-goods-action-button @click="goShoppingCart" type="warning" text="加入购物车" />

        <van-cell  @click="showPopup">
          <van-goods-action-button @click="gobuyNow" type="danger" text="立即购买" />
        </van-cell>
        <van-popup v-model="show">111</van-popup>
      </van-goods-action>
    </div>
  </div>
</template>

<script>
// 都是引用的vant 组件
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
import { Dialog } from "vant";
import { Toast } from "vant";
import { Popup } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      show: false, // 弹出层默认为false 点击改为true
      nickname: "", //用户名 用于判断是否登录
      id: "", // 查看商品详情默认id
      goodsDetail: {}, // 接收商品详情的数据
      flag: true, //用做判断默认页面和 图片详情
      active: 0, //用做 标签页默认选中
      isCollection: "" // 用作商品是否呗收藏
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    // 立即购买
    gobuyNow() {},
    // 加入购物车
    goShoppingCart() {},
    // 未登录状态下的 收藏
    gologin() {
      Dialog.confirm({
        title: "登录提示",
        message: "您现在处于未登录状态,是否立即前往登录"
      })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(() => {});
    },

    // 8.单个商品详情(get)  /goods/one?id=${id} 参数: id:商品的id
    getGoods(id) {
      this.$api
        .getGoods(this.id)
        .then(res => {
          this.goodsDetail = res.goods.goodsOne;
          // console.log(this.goodsDetail);
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
    },

    // 11. 查询商品是否已收藏(post)  /isCollection   参数: id:商品的id  getisCollection
    getisCollection() {
      this.$api
        .getisCollection(this.id)
        .then(res => {
          // console.log(res);
          // 把是否被收藏赋值给 标识 用过判断
          this.isCollection = res.isCollection;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 9. 收藏单个商品(post)   /collection   参数:   / goods: 商品的详情信息
    collect() {
      if (this.nickname !== "") {
        // console.log(this.goodsDetail);
        this.$api
          .collection(this.goodsDetail)
          .then(res => {
            // 弹框提示
            this.$toast.success(res.msg);
            // 重新查看商品是否被收藏
            this.getisCollection();
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    // 10. 取消收藏(post)  /cancelCollection   参数: id:商品的cid    方法// getCancelCollection
    // 取消收藏
    noCollect() {
      this.$api
        .getCancelCollection(this.goodsDetail.id)
        .then(res => {
          if (res.code === 200) {
            console.log(res);
            // 弹框提示
            this.$toast.success(res.msg);
            // 重新查看商品是否被收藏
            this.getisCollection();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  mounted() {
    //商品id 必须最开始就获取到 id 然后再调用方法发请求 才有id
    this.id = this.$route.query.id;
    this.getGoods();
    // 获取保存起来的用户名 用作判断
    this.nickname = localStorage.getItem("nickname");
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
.icon-lick1 {
  margin: 3px 0 0 5px;
  background: rgb(240, 224, 224);
  color: rgb(245, 34, 7);
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
.van-cell {
  width: 150px;
}
</style>