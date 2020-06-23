<template>
  <div>
    <div><van-icon class="goback" @click="goback" name="arrow-left" /></div>
    <div>
      <div><img :src="goodsDetail.image_path" alt=""></div>
      <div>￥{{goodsDetail.name}}</div>
      <div> <s>￥</s> {{goodsDetail.present_price}}</div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id:'',
      goodsDetail:''
    };
  },
  methods: {
    // 8.单个商品详情(get)  /goods/one?id=${id} 参数: id:商品的id
    getGoods(id) {
      this.$api.getGoods(this.id).then(res =>{
          this.goodsDetail =res.goods.goodsOne
          console.log(this.goodsDetail);
        
      }).catch(err =>{
        console.log(err);
      })
    },
    // 返回上一级
    goback() {
      this.$router.go(-1)
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
.goback {
  margin: 20px 0 20px 10px;
}
</style>