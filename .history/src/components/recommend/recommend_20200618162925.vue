<template>
  <div>
    <div>商品推荐</div>
    <div class="fl">
      <div v-for="(item,index) in recommend" :key="index" class="fl">
        <div>          <img :src="item.image" alt class="img" />        </div>
        <div>{{item.goodsName}}</div>
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
  width: 120px;
}
</style>