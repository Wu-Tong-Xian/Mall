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
    <div v-for="(item) in list" :key="item.id" class="bg">
      <div class="box-bx">
        <div>订单编号:{{item.order_id}}</div>
        <div class="fl">
          <div><img :src="item[0]" alt=""></div>
          <div></div>
          <div></div>
        </div>
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
  padding: 20px ;
  background: #E9EBEC;
  margin: 0 auto;
  height: 500px;
}
.box-bx {
  background: #FFFFFF;
  width:99% ;
  height: 300px;
  border-radius: 8px;
}
</style>