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
    //  getClassification(id){
    //    this.$api.getClassification(id).then(res =>{
    //      console.log(res);
    //    }).catch(err =>{
    //      console.log(err);
    //    })
    //  } 
   },
   mounted() {
    //  this.getClassification()
    获取
     if(this.$route.query.cateindex){
       this.activeKey =this.$route.query.cateindex
     }
   },
   watch: {

   },
   computed: {
    //获取在首页存储的分类列表内容
     category(){
       return this.$store.state.category
     }
   }
 }
</script>

<style scoped lang='scss'>
</style>