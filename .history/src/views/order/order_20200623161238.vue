<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>我的订单</div>
      <div></div>
    </div>
    <van-divider />
    <div>
       
   </div>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
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
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>