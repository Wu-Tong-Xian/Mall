<template>
 <div>
 <!-- 如果没登陆 -->
    <div v-if="nickname  === null">
       <div class='t-center'>购物车</div>
       <van-divider />
       <div> <img src="" alt=""></div>
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

</style>