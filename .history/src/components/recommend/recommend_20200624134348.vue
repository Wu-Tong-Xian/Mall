<template>
  <div class="recommend-box">
    <div class="mg-l20 pd-t10">商品推荐</div>
    <div class="person-wrap" ref="personWrap">
      <ul class="person-list" ref="personTab">
        <!-- <router-link  :to="'/details'+item.goodsId" tag="li" -->
        <div v-for="(item,index) in recommend" :key="index" class="widt-h">
          
          <div>
            <img :src="item.image" alt class="img" @click="godetails(item.goodsId)" />
          </div>
          <div class="t-none text mg-t10">{{item.goodsName}}</div>
          <div class="fl m0">
            <div class="mg-l20 mallPrice">{{item.mallPrice}}</div>
            <div class="mg-l20 col1 fz14 price">{{item.price}}</div>
          </div>
          <div class="fl shopping-box">
            <div class="cart" @click="addToCart(item.goodsId)">
              <van-icon name="shopping-cart-o" />
            </div>
            <div class="ck" @click="godetails(item.goodsId)">查看详情</div>
          </div>
        </div>
        <!-- </router-link> -->
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";

// import RecommendList from "../Recommend/RecommendList"
export default {
  name: "",
  props: {
    recommend: {
      type: Array,
      default: Array => []
    }
  },
  components: {},
  data() {
    return {};
  },
  created() {
    this.$nextTick(() => {
      this.personScroll();
    });
  },
  methods: {
    personScroll() {
      var width = this.recommend.length * 310;
      this.$refs.personTab.style.width = width + "px";
    },
    // 跳转到详情页传id过去
    godetails(val) {
      this.$router.push({ name: "details", query: { id: val } });
    },
    // 12. 加入购物车(post)   /addShop   参数:  id:商品的id
    addToCart(id){
      this.$api.getaddShop(id).then(res =>{
        this.$toast.success(res.msg);
        this.getCard()
      }).catch(err =>{
        console.log(err);
      })
    },
    // 4. 查询获取购物车数据(get)  / /getCard
    getCard(){
      this.$api.getCard().then(res =>{
        console.log(res);
        if(res.shopList.length !==0){
          let count =0;
          res.shopList.map(item =>{
            count +=item.count
          })
          this.$stort.state
        }
      }).catch(err =>{
        console.log(err);
      })
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.widt-h {
  width: 33%;
}
.img {
  width: 125px;
}
.recommend-box {
  width: 100%;
  height: 240px;
  background: #ffffff;
}
.text {
  width: 110px;
  font-size: 14px;
  margin-left: 10px;
}
.mallPrice {
  color: rgb(224, 16, 16);
}
.price {
  text-decoration: line-through;
}
.shopping-box {
  width: 100px;
  height: 25px;
  background: red;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.van-icon {
  font-size: 26px;
}
.cart {
  color: aliceblue;
  background: rgb(192, 223, 18);
  border-radius: 5px;
}
.ck {
  background: red;
  color: rgb(223, 199, 199);
  line-height: 25px;
  font-size: 14px;
  margin-left: 5px;
}
.person-wrap {
  width: 100%;
  height: pr(600px);
  background: white;
  float: left;
  flex: 1;
  touch-action: auto;
  overflow: auto;
  > ul {
    display: flex;
    min-width: 101%;
    height: pr(600px);
    background: white;
    box-sizing: border-box;
    li {
      width: pr(900px);
      height: pr(600px);
      box-sizing: border-box;
      img {
        width: pr(800px);
        height: pr(400px);
        display: block;
      }
      p {
        width: pr(800px);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>