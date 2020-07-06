<template>
 <div>
  <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>评价晒图</div>
      <div></div>
    </div>
    <van-divider />
    <div v-for="item in list " :key="item.id">
      <div>
        <div><img :src="item.image_path" alt=""></div>
      </div>
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       list:{}, //接收从待评价跳转路由传过来的整个对象
     }
   },
   methods: {
     goback(){
       this.$router.go(-1)
     },
     // 17. 商品评价(post) /goodsOne/comment 参数: id: 商品cid rate: 分数 content: 内容 
  // anonymous: 是否匿名 / _id: 商品的_id order_id: 商品的order_id image: []
  getcomment(){

  }
   },
   mounted() {
     //接收从待评价跳转路由传过来的整个对象
     this.list =this.$route.query.list
     console.log(this.list);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>