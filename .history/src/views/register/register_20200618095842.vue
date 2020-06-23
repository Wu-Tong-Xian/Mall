<template>
 <div>
  注册
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
     // 25. 注册(post) /register 参数: nickname: 用户名 password:密码  verify:验证码
     getregister(nickname,password,verify){
       this.$api.getregister(nickname,password,verify).then(res =>{
         console.log(res);
       }).catch( err =>{
         console.log(err);
       })
     }
   },
   mounted() {
     this.getregister
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>