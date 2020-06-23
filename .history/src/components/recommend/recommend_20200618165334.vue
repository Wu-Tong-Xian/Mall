<template>
  <div class="recommend-box">
    <div class="mg-l20">商品推荐</div>
    <div class=" fl j-between">
      <div v-for="(item,index) in recommend" :key="index" >
          <div>  <img :src="item.image" alt class="img" />  </div>
          <div class="t-none text">{{item.goodsName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
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
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 130px;
}
.recommend-box {
  background: #FFFFFF;
}
.text {
  width: 120px;
  font-size: 14px;
  margin-left: 10px;
}
</style>