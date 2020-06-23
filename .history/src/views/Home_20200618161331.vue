<template>
  <div class="home-bg">
    <div class="fl mg-t20 mg-l20">
      <city></city>
      <search></search>
    </div>
    <slideshow :slides='slides'></slideshow>
    <category :category='category'></category>
    <div><img :src="advertesPicture.PICTURE_ADDRESS" alt="" class="img"></div>
  </div>
</template>

<script>
import city from "../components/city/city";
import search from "../components/search/search";
import slideshow from "../components/slideshow/slideshow";
import category from "../components/category/category";
export default {
  name: "",
  props: {},
  components: {
    city,
    search,
    slideshow,
    category
  },
  data() {
    return {
      slides:[], //轮播图
      category:[],//分类商品
      recommend:[], //商品推荐
      hotGoods:[], //热销商品
      floor1:[], //1
      floor2:[], //2
      floor3:[], //3
    };
  },
  methods: {
    //   1. 获取首页数据(get)
    // /recommend
    getRecommend() {
      this.$api.getRecommend().then(res =>{
        if(res.code ===200){
          this.advertesPicture= res.data.advertesPicture
          this.category =res.data.category
          this.slides =res.data.slides
          this.recommend =res.data.recommend
          this.hotGoods =res.data.hotGoods
          this.floor1 =res.data.floor1
          this.floor2 =res.data.floor2
          this.floor3 =res.data.floor3
          console.log(res);
        }
      }).catch(err =>{
        console.log(err);
      })
    }
  },
  mounted() {
    this.getRecommend()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../views/style/components";
@import "../views/style/el";
  .home-bg {
    background: #EDEDED;
  }
  .img {
    width: 95%;
  }
</style>