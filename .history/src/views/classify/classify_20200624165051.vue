<template>
  <div>
    <!-- 分类页  从底部栏直接跳转过来的   从首页子组件点击跳转过来的分类-->
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
       id:''
     }
   },
   methods: {
     // 3. 分类查询(get)   /classification?mallSubId=${id}   参数:  id:默认分类的id
     getClassification(id){
       this.$api.getClassification(id).then(res =>{
         console.log(res);
       }).catch(err =>{
         console.log(err);
       })
     } 
   },
   mounted() {
     this.getClassification()
    //  console.log(this.$route.query.index);
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
</style>