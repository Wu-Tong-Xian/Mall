<template>
  <div class="fl category">
  <!-- 首页展示的分类数据 -->
    <div v-for="(item,index) in category " :key="index" @click="goclassify(item,index)">
        <div><img :src="item.image" alt  class="img mg-t10"/></div>
        <div class="mg-tb10">{{item.mallCategoryName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    category: {
      type: Array,
      default: Array => []
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    // 点击跳转到分类页面
    goclassify(item,index){
      this.$router.push({name:'classify',query:{cateindex: index }})
      // console.log(this.category);
    }
  },
  mounted() {
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.category {
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
  background: #FFFFFF;
}
.img {
  width: 50px;
  margin-left: 8px;
}
</style>