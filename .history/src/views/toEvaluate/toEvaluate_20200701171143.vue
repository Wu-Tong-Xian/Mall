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
     }
   },
   mounted() {
     //接收从待评价跳转路由传过来的整个对象
     this.list =this.$toure.query.list
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