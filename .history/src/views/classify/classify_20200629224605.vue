<template>
  <div>
    <!-- 分类页  从底部栏直接跳转过来的   从首页子组件点击跳转过来的分类-->
    <!-- //在首页发请求是 通过vuex把分类列表的数据存起来 还有子组件的分类把 index（循环出来的）出过来 -->
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
       id:'',
       activeKey:0,
       active:0,
       catelist:[],
       bxMallSubDtos: []
     }
   },
   methods: {
     // 3. 分类查询(get)   /classification?mallSubId=${id}   参数:  id:默认分类的id
     getClassification(){
      //  this.categorys:分类列表的所有数组内容 this.activeKey:下标 index  bxMallSubDto:数组内容
      // 把分类数组 点击这一项下标的bxMallSubDto找到
       this.bxMallSubDtos =this.categorys[this.activeKey].bxMallSubDto
       console.log(this.categorys);
       this.$api.getClassification().then(res =>{
         console.log(res);
       }).catch(err =>{
         console.log(err);
       })
     } 
   },
   mounted() {
    // 获取点击首页分类选项传过来的下标index    query: {cateindex:index} 
     if(this.$route.query.cateindex){
       this.activeKey =this.$route.query.cateindex
     }
     this.getClassification()
   },
   watch: {

   },
   computed: {
    //获取在首页存储的分类列表内容
     categorys(){
       return this.$store.state.category
     }
   }
 }
</script>

<style scoped lang='scss'>
</style>