<template>
 <div>
 <!-- 如果没登陆 -->
    <div v-if="nickname  === null">
       <div class='t-center mg-t10'>购物车</div>
       <van-divider />
       <div> <img src="../../可能要用的图片/order.gif" class="order-img" alt=""></div>
       <div class="t-center fz14">登录后才能查看订单</div>
       <div class="t-center mg-tb1"><van-button type="primary" size="small">小型按钮</van-button></div>
    </div>
    <!-- 登录状态 -->
    <div v-else></div>
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
       nickname:''
     }
   },
   methods: {

   },
   mounted() {
     this.nickname = localStorage.getItem('nickname')
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
  .order-img {
    width: 380px;
  }
</style>