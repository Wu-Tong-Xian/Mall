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
    goclassify(item,index){
      this.$router.push({name:'classify',query:{index}})
      console.log(index);
      console.log(this.category);
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
  width: 68px;
}
</style>