<template>
  <div class="recommend-box">
    <div class="mg-l20 pd-t10">商品推荐</div>
    <div class=" fl j-between">
      <div v-for="(item,index) in recommend" :key="index" >
          <div>  <img :src="item.image" alt class="img" />  </div>
          <div class="t-none text">{{item.goodsName}}</div>
      </div>
    </div>
  
  <div class="list fl position wrapper" ref="wrapper">
    <div class="fl">
      <div class="listItem">
        <div class="title">您的位置</div>
        <ul class="whiteBg">
          <li>杭州</li>
        </ul>
      </div>
      <div class="listItem">
        <div class="title">A</div>
        <ul class="whiteBg">
          <li>澳门</li>
          <li>阿坝州</li>
          <li>阿克苏地区</li>
          <li>阿拉尔</li>
          <li>阿拉善盟</li>
          <li>阿里</li>
          <li>阿勒泰</li>
          <li>安康</li>
          <li>安庆</li>
          <li>鞍山</li>
          <li>安顺</li>
          <li>安阳</li>
        </ul>
      </div>
      <div class="listItem">
        <div class="title">A</div>
        <ul class="whiteBg">
          <li>澳门</li>
          <li>阿坝州</li>
          <li>阿克苏地区</li>
          <li>阿拉尔</li>
          <li>阿拉善盟</li>
          <li>阿里</li>
          <li>阿勒泰</li>
          <li>安康</li>
          <li>安庆</li>
          <li>鞍山</li>
          <li>安顺</li>
          <li>安阳</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
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
  methods: {},
  mounted() {
    const scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 125px;
}
.recommend-box {
  background: #FFFFFF;
}
.text {
  width: 120px;
  font-size: 14px;
  margin-left: 8px;
}

</style>