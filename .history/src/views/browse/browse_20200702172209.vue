<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>最近浏览</div>
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
      browse:{},
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {
    // 获取通过模块化方法（写在utils）存起来的收藏商品
    this.browse = JSON.parse(localStorage.getItem("browse"));
    console.log(this.browse);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>