<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>评价区</div>
      <div></div>
    </div>
    <van-divider />
    <div>
      <img src="../../可能要用的图片/evaluate.jpg" class="img1" alt />
    </div>
    <van-tabs v-model="active" class="evaluate">
      <van-tab title="待评价">待评价</van-tab>
      <van-tab title="已评价">已评价</van-tab>
     
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active:1
    };
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
.img1 {
  width: 100%;
  height: 180px;
}
.van-tabs {
   background: ;
}
</style>