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
    return { // 这个配置可以开启滚动条，默认为 false。当设置为 true 或者是一个 Object 的时候，都会开启滚动条，默认是会 fade 的
        scrollbarObj: {
          fade: true
        },
        // 这个配置用于做下拉刷新功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新，可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
        pullDownRefreshObj: {
          threshold: 90,
          stop: 40
        },
        // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机
        pullUpLoadObj: {
          threshold: 0,
          txt: {
            more: '加载更多',
            noMore: '没有更多数据了'
          }
        },
        startY: 0, // 纵轴方向初始化位置
        scrollToX: 0,
        scrollToY: 0,
        scrollToTime: 700,
        items: []};
  },
  methods: {},
  mounted() {
    this.onPullingDown()
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