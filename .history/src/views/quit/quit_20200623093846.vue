<template>
  <div>退出登录</div>
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
     // 13. 退出登录(post)  /loginOut
 
     goquit(){
    this.$api.getloginOut().then(res =>{
      console.log(err);
      
    }).catch(err =>{
      console.log(err);
    })
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
</style>