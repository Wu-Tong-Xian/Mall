<template>
  <div>
    <div class="t-center">会员中心</div>
    <div class="bg">
      <div class="fl j-between">
        <div></div>
        <div><van-icon class="setting-icon" name="setting" /></div>
      </div>
      <div>
        <div class="img-box"><img src="../../assets/人头像02.png" class="img-02" alt /></div>
      </div>
      <div>退出登录</div>
    </div>
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
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.bg {
  width: 100%;
  height: 200px;
  background: #e30c7b;
}
.setting-icon {
  margin: 0 auto;
  color: rgb(247, 240, 240);
  margin: 8px 8px 0 0;
}
.img-02 {
  width: 60px;
  margin: 10px 0 0 5px;
}
.img-box {
  border-radius: 50%;
  background: rgb(243, 245, 242);
  width: 75px;
  height: 75px;
}
</style>