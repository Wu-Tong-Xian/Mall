<template>
  <div class="choosecity" >
     <div class="fl j-around mg-t20">
        <div @click='goback'><van-icon name="arrow-left" /></div>
        <div>城市列表</div>
        <div></div>
        
     </div>
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
    goback(){
      this.$router.go(-1)
    }
  },
  mounted() {
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

</style>