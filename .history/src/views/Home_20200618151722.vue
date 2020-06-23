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
      slideshow:[], //轮播图
      category:[],//分类商品
    };
  },
  methods: {
    //   1. 获取首页数据(get)
    // /recommend
    getRecommend() {
      this.$api.getRecommend().then(res =>{
        if(res.code ===200){
          this.slideshow =res.data.category
          this.category =res.data.category
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