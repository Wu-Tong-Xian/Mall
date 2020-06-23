<template>
  <div>
    <div class="fl mg20">
      <city></city>
      <search></search>
    </div>
    <slideshow></slideshow>
  </div>
</template>

<script>
import city from "../components/city/city";
import search from "../components/search/search";
import slideshow from "../components/slideshow/slideshow";
export default {
  name: "",
  props: {},
  components: {
    city,
    search,
    slideshow
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
          this.slideshow =res.data.category
          this.slides =res.data.slides
          this.recommend =res.data.recommend
          this.hotGoods =res.data.hotGoods
          this.hotGoods =res.data.hotGoods
          this.hotGoods =res.data.hotGoods
          this.hotGoods =res.data.hotGoods
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
.qw {
  width: 100%;
  height: 100%;
  background: red;
  border: 1px solid red;
}
</style>