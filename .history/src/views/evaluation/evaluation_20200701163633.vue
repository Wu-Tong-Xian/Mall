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
    <!--// vant方法的tab标签页方法-->
    <van-tabs v-model="active" class="evaluate">
      <!--// 待评价-->
      <van-tab title="待评价"></van-tab>
      <!--已评价-->
      <van-tab title="已评价"></van-tab>
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
      active: 1
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    // 29. 查询未评价(get) /tobeEvaluated
  gettobeEvaluated(){
    this.$api.gettobeEvaluated().then(res =>{
      console.log(res);
    }).catch(err =>{
      console.log(err);
    })
  }
  },
  mounted() {
    this.gettobeEvaluated()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img1 {
  width: 100%;
  height: 150px;
}
.van-tabs {
  border-radius: 8px;
}
</style>