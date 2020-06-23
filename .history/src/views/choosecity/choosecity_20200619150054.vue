<template>
  <div class>
    <div class="fl j-between mg-t20">
      <div @click="goback">
        <van-icon name="arrow-left" class="mg-l10" />
      </div>
      <div>城市列表</div>
      <div></div>
    </div>
    <div class="choosecity-box">
      <van-search v-model="input" placeholder="请输入城市关键字" />
      <div class="dq">当前城市</div>
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
      input: "",
      value: ""
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {},
  watch: {
    // 输入框模糊搜索功能

    input(val) {
      if (val.trim() !== "") {
        this.Article = this.arr.filter(item => {
          return JSON.stringify(item).includes(val);
        });
      } else {
        this.Article = this.arr;
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.choosecity-box {
  background: #F2F2F2;
}
.ipt {
  height: 24px;
}
.dq {
  padding: 15px 0 15px 15px;
}
</style>