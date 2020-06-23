<template>
  <div>
    <div class="t-center">会员中心</div>
    <div class="bg">
      <div class="fl j-between">
        <div>11</div>
        <div><van-icon class="setting-icon" name="setting" /></div>
      </div>
      <div>
        <img src="../../assets/人头像02.png" alt />
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
}
</style>