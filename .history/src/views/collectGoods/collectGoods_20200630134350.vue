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
    
        
  },
  mounted() {
   
  },
  watch: {},
  computed: {
    
    myid(){
      return  this.$store.state.myid
    }
  }
};
</script>

<style scoped lang='scss'>
</style>