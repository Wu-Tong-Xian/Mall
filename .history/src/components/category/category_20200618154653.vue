<template>
 <div>
    <div v-for="(item,index) in category " :key="index">
      {{item}}
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     category:{
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