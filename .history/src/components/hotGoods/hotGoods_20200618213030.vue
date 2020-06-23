<template>
 <div>
    <div v-for="(item,index) in hotGoods" :key="index">
      <div><img :src="item.image" alt=""></div>
      <div>{{item.name}}</div>
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     hotGoods:{
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