<template>
 <div class="wid">
    <div v-for="(item,index) in floor1" :key="index">
      <div class="img-box"><img :src="item.image" alt="" class="img1"></div>
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     floor1:{
       type:Array,
       default:Array =>[]
     },
     floor2:{
       type:Array,
       default:Array =>[]
     },
     floor3:{
       type:Array,
       default:Array =>[]
     }
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

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
   .img1 {
     width: 300px;
     height: 300px;
   }
   .img-box {
     width: 300px;
     height: 300px;
   }
</style>