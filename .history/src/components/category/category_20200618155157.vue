<template>
 <div>
    <div v-for="(item,index) in category " :key="index">
      <div> <img :src="image" alt=""></div>
      <div> {{item.mallCategoryName}}</div>
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