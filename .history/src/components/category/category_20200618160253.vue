<template>
 <div class="fl">
    <div v-for="(item,index) in category " :key="index" class="fl">
      <div> <img :src="item.image" alt=""></div>
      <div class="fl"> {{item.mallCategoryName}}</div>
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