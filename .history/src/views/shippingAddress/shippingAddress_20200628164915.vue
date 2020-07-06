<template>
 <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>地址列表</div>
      <div></div>
    </div>
    <van-divider />
    <div class="null">暂无收货地址~~</div>
    <div><van-address-list @add="onAdd"/></div>
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
     },
     onAdd() { //新增地址
      this.$router.push('editAddress')
    },
    onEdit(item, index) { //编辑地址
      Toast('编辑地址:' + index);
    },
  
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
.null {
  position: relative;
  top:100px;
  text-align: center;
}
  .New {
    position: relative;
    top: 550px;
  }
</style>