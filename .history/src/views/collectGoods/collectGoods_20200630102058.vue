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
    return {};
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
    }
  },
  mounted() {
    this.getcollection()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>