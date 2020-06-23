<template>
  <div class="home-bg">
    <div class="fl  mg-l20">
    <!--//城市定位-->
      <city></city>
      <!--//搜索-->
      <search></search>
    </div>
    <!--轮播图-->
    <slideshow :slides="slides"></slideshow>
    <!--//分类-->
    <category :category="category"></category>
     <!--//内部配送-->
    <div>
      <img :src="advertesPicture.PICTURE_ADDRESS" alt class="img" />
    </div>
   <!--//商品推荐-->
    <recommend :recommend="recommend"></recommend>
    <!--floor 123-->
    <floor :floor1='floor1' :floor2='floor2' :floor3='floor3'></floor>
  </div>
</template>

<script>
import city from "../components/city/city";
import search from "../components/search/search";
import slideshow from "../components/slideshow/slideshow";
import category from "../components/category/category";
import recommend from "../components/recommend/recommend";
import floor from "../components/floor/floor";
export default {
  name: "",
  props: {},
  components: {
    city,
    search,
    slideshow,
    category,
    recommend,
    floor,
  },
  data() {
    return {
      slides: [], //轮播图
      category: [], //分类商品
      advertesPicture: {},
      recommend: [], //商品推荐
      hotGoods: [], //热销商品
      floor1: [], //1
      floor2: [], //2
      floor3: [] //3
    };
  },
  methods: {
    //   1. 获取首页数据(get)
    // /recommend
    getRecommend() {
      this.$api
        .getRecommend()
        .then(res => {
          if (res.code === 200) {
            this.advertesPicture = res.data.advertesPicture;
            this.category = res.data.category;
            this.slides = res.data.slides;
            this.recommend = res.data.recommend;
            this.hotGoods = res.data.hotGoods;
            this.floor1 = res.data.floor1;
            this.floor2 = res.data.floor2;
            this.floor3 = res.data.floor3;
            console.log(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getRecommend();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

.home-bg {
  background: #ededed;
  width: 400px;
  height: 800px;
  width: 95%;
}
.img {
  width: 100%;
  height: 40px;
  padding-bottom: 10px;
}
</style>