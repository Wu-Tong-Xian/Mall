<template>
  <div class>
    <div class="fl j-between mg-tb10 mg-l20">
      <div @click="goback">
        <van-icon name="arrow-left" />
      </div>
      <div>城市列表</div>
      <div></div>
    </div>
    <div class="">
      <van-search v-model="input" class="mg-r20" placeholder="请输入城市关键字" />
      <div class="mg-t20 bg1">当前城市</div>
      <div class="mg-t10 mg-r20 bg"><van-button type="default" size="small">成都</van-button></div>
      <div class="mg-t20 bg1">热门城市</div>
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
  padding: 15px 0 15px 20px;
}
.ipt {
  height: 24px;
}
.bg {
  background: #FFFFFF;
}
.bg1 {
  background: #F7F8FA;
}
</style>