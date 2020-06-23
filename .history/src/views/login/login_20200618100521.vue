<template>
 <div >
 <img src="../../assets/login3.jpg" class="img" alt="">
    <!-- 输入任意文本 -->

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
        tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
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
  .img {
    width: 100%;
    height: 300px;
  }
</style>  