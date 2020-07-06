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
    <div v-if="1" class="t-center t-u">
      <div>点击添加收货地址</div>
    </div>
    <div v-else>北京田径武汉路天安门观察</div>
    <div><img src="../../可能要用的图片/caitiao.jpg" style="'height:19px'" alt=""></div>
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