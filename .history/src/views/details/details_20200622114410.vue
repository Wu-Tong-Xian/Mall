<template>
  <div>详情页</div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    // 8.单个商品详情(get)  /goods/one?id=${id} 参数: id:商品的id
    getGoods() {
      this.$api.getGoods(id).then(res =>{
        console.log(res);
      }).catch(err =>{
        console.log(err);
      })
    }
  },
  mounted() {
    console.log(this.$route.query.id);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>