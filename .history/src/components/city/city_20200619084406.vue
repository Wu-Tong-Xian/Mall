<template>
 <div class="city">
  <div v-if='1'>
     
  </div>
  <div v-else>
    <div class="fl">
      <div><van-icon name="arrow-left" /></div>
      <div>城市列表</div>
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
  .city {
    width: 60px;
    height: 30px;
    padding-top: 10px;
  }
</style>