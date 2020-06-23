<template>
 <div>
  about
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
    getlogin(){
       this.$api.login(id,num).then( res=>{
       console.log(res)
     }).catch( err =>{
       console.log(err);
     })
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

</style>