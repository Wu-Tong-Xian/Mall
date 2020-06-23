<template>

 <div class="p-re">
   <div><img src="../../assets/404.jpeg" alt="" class="errImg w-1000 "></div>
   <div class="p-abo">
     <div @click='gohome'>返回主页</div>
     <div @click='goback'>返回上一级</div>
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
     gohome(){
       this.$router.push('/')
     },
     goback(){
       this.$router.back()
      // this.$router.go(-1);
     }
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
  .errImg {
    width: 100%;
    height: 350px;
    margin-top: 50px;
  }
  .p-re {
    position: relative;
  }
  .p-abo {
    position: absolute;
    left: 130px;
    top: 350px;
    color: rgb(123, 231, 34);
  }
</style>