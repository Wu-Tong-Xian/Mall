<template>
  <div>详情页</div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id:'',
    };
  },
  methods: {
    // 8.单个商品详情(get)  /goods/one?id=${id} 参数: id:商品的id
    getGoods() {
      this.$api.getGoods(this.id).then(res =>{
        console.log(res);
      }).catch(err =>{
        console.log(err);
      })
    }
  },
  mounted() {
    this.getGoods()
    this.id =this.$route.query.id
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>