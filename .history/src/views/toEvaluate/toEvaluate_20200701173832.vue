<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>评价晒图</div>
      <div></div>
    </div>
    <van-divider />

    <div class="fl j-around">
      <div>
        <img :src="list.image_path" alt />
      </div>
      <div>
        <div class="mg-b20">商品评分</div>
        <div class="mg-t20">
          <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" />
        </div>
      </div>
      <div></div>
    </div>
    <div>
    <textarea name="DIVCSS5" cols="46" placeholder="分享您的购买体验吧~~" rows="4"> 
        
    </textarea>
      <form>
        <input type="file" name="..." />
      </form>
    </div>
  </div>
</template>

<script>
import { Rate } from "vant"; //引入vant rate评分
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      list: {}, //接收从待评价跳转路由传过来的整个对象
      value: 5
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    // 17. 商品评价(post) /goodsOne/comment 参数: id: 商品cid rate: 分数 content: 内容
    // anonymous: 是否匿名 / _id: 商品的_id order_id: 商品的order_id image: []
    getcomment() {}
  },
  mounted() {
    //接收从待评价跳转路由传过来的整个对象
    this.list = this.$route.query.list;
    console.log(this.list);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
img {
  width: 85px;
}
</style>