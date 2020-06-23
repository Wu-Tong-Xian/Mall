<template>
  <div class="recommend-box">
    <div class="mg-l20 pd-t10">商品推荐</div>
    <div class="person-wrap" ref="personWrap">
      <ul class="person-list" ref="personTab">
        <router-link
          :to="'/ConcentrationHome/Detail/'+item.id"
          tag="li"
          v-for="(item,index) in recommend" :key="index">
          <div>  <img :src="item.image" alt class="img" />   </div>
        <div class="t-none text">{{item.goodsName}}</div>
        </router-link>
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
  // created() {
  //   this.$nextTick(() => {
  //     this.personScroll();
  //   });
  // },
  methods: {
    // personScroll() {
    //   var width = this.recommend.length * 310;
    //   this.$refs.personTab.style.width = width + "px";
      
    // }
  },
  mounted() {},
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