<template>
 <div>
    <div  v-for="(item,index) in recommend" :key="index">
      <div><img :src="item.image" alt=""></div>
      <div>{{item.goodsName}}</div>
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     recommend:{
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

</style>