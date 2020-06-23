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
    getGoods(id) {
      this.$api.getGoods(this.id).then(res =>{
        console.log(res.data);
      }).catch(err =>{
        console.log(err);
      })
    }
  },
  mounted() {
    // 必须最开始就获取到 id 然后再调用方法发请求 才有id
    this.id =this.$route.query.id
    this.getGoods()
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>