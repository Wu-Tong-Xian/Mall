<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>已完成</div>
      <div></div>
    </div>
    <van-divider />
    <div class="bg">
      <div class="box-bx">

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
       list:[], //盛放已完成购物的信息
     }
   },
   methods: {
     goback(){
       this.$router.go(-1)
     },
     // 27. 订单查询(get) /getMyOrder
      getMyOrder(){
        this.$api.getMyOrder().then(res =>{
          if(res.code === 200){
            this.list =res.list
          }
          console.log(res);
        }).catch(err =>{
          console.log(err);
        })
      }
   },
   mounted() {
     this.getMyOrder()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.bg{
  background: #F2F2F2;
}
.box-bx {
  background: #FFFFFF;
}
</style>