<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>收藏</div>
      <div></div>
    </div>
    <van-divider />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    // 24. 查询我的收藏(get) /collection/list
    getcollection() {
      this.$api.getcollection().then(res => {
        console.log(res);
      }).catch(err =>{
        console.log(err);
      })
    },
    // 11. 查询商品是否已收藏(post)  /isCollection   参数: id:商品的id
        getisCollection(){
          this.$api.getisCollection(this.myid).then(res =>{
            console.log(res);
          }).catch(err =>{
            console.log(err);
          })
        }
        
  },
  mounted() {
    this.getcollection();
    this.getisCollection()
    
  },
  watch: {},
  computed: {
    // 获取详情页传过来的id
    myid(){
      return  this.$store.state.myid
    }
  }
};
</script>

<style scoped lang='scss'>
</style>