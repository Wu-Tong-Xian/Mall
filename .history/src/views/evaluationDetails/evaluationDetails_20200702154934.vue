<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>评价详情</div>
      <div></div>
    </div>
    <van-divider />

    <div class="fl j-between fz14">
      <div class="fl j-between">
        <!--用户头像-->
        <div>
          <img :src="userInfo.avatar" class="img2" alt />
        </div>
        <div class="mg-l10">
          <!--用户名称-->
          <div class="mg-tb10">{{nickname}}</div>
          <!--用户评分-->
          <div>
            <van-rate
              v-model="list.rate"
              readonly
              allow-half
              void-icon="star"
              void-color="#eee"
            />
          </div>
        </div>
      </div>
      <!--评论时间-->
      <div class="time">{{list.comment_time}}</div>
    </div>
    <!--评价内容-->
    <div class="mg-l20">评价内容:{{list.content}}</div>
    <van-divider />
    <div class="fl j-between">
      <div><img :src="goods.image_path" class="img3" alt=""></div>
      <div class="mg-t10 goods-name fl-wrap">{{goods.name}}</div>
      <div @click="goShoppingCart(goods.id)" class="cart-o"><van-icon  size="30" name="cart-o" /></div>
    </div>
    <van-button type="primary" @click="goback" block>返回</van-button>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant"; //标签页
import { Card } from "vant"; //商品卡片
import { Rate } from "vant"; //评分
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      nickname:'',
      active: 0,
      list: [], //单个已评价的详情
      goods: {} //已评价list对象的 goods数组里面的对象
      // userInfo:{},//盛放 个人信息
    };
  },
  methods: {
    
    goback() {
      this.$router.go(-1);
    },
    
    gohome() {
      this.$router.push("/");
    },
    
    // 12. 加入购物车(post)   /addShop   参数:  id:商品的id
    goShoppingCart(id) {
      this.$api
        .getaddShop(id)
        .then(res => {
          if (res.code === 200) {
            this.$toast.success(res.msg);
            // 4. 查询获取购物车数据(post)  / /getCard
            this.$api
              .getCard()
              .then(res => {
                // res.shopList 就是购物车的数组
                // if (res.shopList.length !== 0) {
                //如果购物车有东西
                // let count = 0;
                // res.shopList.map(item => {
                //   count += item.count;
                // });
                this.$store.state.shopingCount = res.shopList.length;
                // }
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted() {
    // 接收评价中心传递过来的 点击这一项的整个对象
    this.list =JSON.parse(localStorage.getItem('list'))
    this.nickname =this.list.goods[0].avatar
    // console.log(JSON.parse(localStorage.getItem('list')));
  },
  watch: {},
  computed: {
    // 接收个人信息
    userInfo() {
      return this.$store.state.userInfo;
    }
    // this.$store.state.userInfo = this.user  //把个人信息通过vue存起来
  }
};
</script>

<style scoped lang='scss'>
.img1 {
  width: 100%;
  height: 150px;
}
.van-tabs {
  border-radius: 8px;
}
.van-card {
  font-size: 16px;
  border-bottom: 1px solid rgb(207, 181, 181);
}
.img2 {
  width: 55px;
  border: 1px solid rgb(219, 208, 208);
  border-radius: 50%;
  margin-left: 20px;
}
.time {
  line-height: 65px;
  margin-right: 20px;
}
.img3 {
  width: 55px;
  border-radius: 50%;
  margin-left: 20px;
}
.goods-name {
  margin-top: 6px;
  width: 190px;
}
.van-icon {
  margin: 4px 0 0 3px;
  color: rgb(206, 96, 96);
}
.cart-o{
  background: #FFE6E2;
  width: 35px;
  height: 35px;
  border-radius: 38px;
  margin-right: 20px;
}
.van-button {
  margin-top: 280px;
}
</style>