<template>
 <div>
    <div  v-for="(item,index) in recommend" :key="index">
      
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