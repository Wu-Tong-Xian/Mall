<template>
  <div class="recommend-box">
    <div class="mg-l20 pd-t10">商品推荐</div>
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
  width: 125px;
}
.recommend-box {
  background: #FFFFFF;
}
.text {
  width: 120px;
  font-size: 14px;
  margin-left: 8px;
}
.mailDetailBox{
    position: absolute;
    left:0;
    right:0;
    top:0.52rem;
    bottom:0.56rem;
    overflow: hidden;
   overflow-x: scroll;
 
}
.mailDetailMsg{
    padding:0.1rem 0.14rem;
    font-size:0.153rem;
    line-height: 1.2;
    overflow-x: scroll

</style>