<template>
  <div class>
    <div class="fl j-between mg-tb10 mg-l20">
      <div @click="goback">
        <van-icon name="arrow-left" />
      </div>
      <div>城市列表</div>
      <div></div>
    </div>
    <div>
      <van-search v-model="input" class="mg-r20" placeholder="请输入城市关键字" />
      <div class="pd-tb20 bg1">当前城市</div>
      <div class="mg-b10 mg-l10 bg">
        <van-button type="default" size="normal">成都</van-button>
      </div>
      <div class="pd-tb20 bg1">热门城市</div>

      <div class="mg-tb10 bg">
        <van-button type="default" size="normal">北京</van-button>
        <van-button type="default" size="normal">伤害</van-button>
        <van-button type="default" size="normal">杭州</van-button>
        <van-button type="default" size="normal">重庆</van-button>
        <van-button type="default" size="normal">成都</van-button>
        <van-button type="default" size="normal">厦门</van-button>
      </div>
    </div>
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
    </van-index-bar>
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
  background: #f2f2f2;
  padding: 15px 0 15px 20px;
}
.ipt {
  height: 24px;
}
.bg {
  background: #ffffff;
  padding-bottom: 13px;
}
.bg1 {
  background: #f7f8fa;
  padding-left: 20px;
}
.van-button {
  width: 110px;
  margin-left: 12px;
  margin-top: 13px;
}
</style>