<template>
 <div>
 <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>订单结算</div>
      <div></div>
    </div>
    <van-divider />
    <!-- 收货信息 没有地址 前往添加地址-->
    <div v-if="1" class="t-center t-u">
      <div>点击添加收货地址</div>
    </div>
    <!--如果有没有地址 显示地址-->
    <div v-else>北京田径武汉路天安门观察</div>
    <div class="mg-tb10"><img src="../../可能要用的图片/caitiao.jpg" style="height:8px" alt=""></div>
      <!--商品信息-->
    <div>
       <!--如果是直接购买 -->
       <div></div>
       <!--通过购物车购买 -->
       <div></div>
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

     }
   },
   methods: {
     goback(){
       this.$router.go(-1)
     }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>