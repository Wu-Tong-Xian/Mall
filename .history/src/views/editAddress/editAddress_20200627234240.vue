<template>
 <div>
  <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>编辑地址</div>
      <div></div>
    </div>
    <van-divider />
    <!--主体内容开始-->
    <div>

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