<template>
  <div class="recommend-box">
    <div class="mg-l20 pd-t10">商品推荐</div>
    <div class="fl j-between">
      <div v-for="(item,index) in recommend" :key="index">
        <div>
          <img :src="item.image" alt class="img" />
        </div>
        <div class="t-none text">{{item.goodsName}}</div>
      </div>
    </div>
    <header>vue-better-scroll demo</header>
    <main class="position-box">
      <!-- 需要一个创建一个父容器 组件高度默认等于父容器的高度 -->
      <vue-better-scroll
        class="wrapper"
        ref="scroll"
        :scrollbar="scrollbarObj"
        :pullDownRefresh="pullDownRefreshObj"
        :pullUpLoad="pullUpLoadObj"
        :startY="parseInt(startY)"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp"
      >
        <ul class="list-content">
          <li class="list-item" v-for="item in items">{{item}}</li>
        </ul>
      </vue-better-scroll>
    </main>
    <button class="go-top" @click="scrollTo">返回顶部</button>
  </div>
</template>

<script>
import BScroll from "better-scroll";
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
    const scroll = new BScroll(this.$refs.wrapper);
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
  background: #ffffff;
}
.text {
  width: 120px;
  font-size: 14px;
  margin-left: 8px;
}
</style>