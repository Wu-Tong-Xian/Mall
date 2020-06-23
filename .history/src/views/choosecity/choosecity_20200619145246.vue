<template>
  <div class>
    <div class="fl j-around mg-t20">
      <div @click="goback">
        <van-icon name="arrow-left" />
      </div>
      <div>城市列表</div>
      <div></div>
    </div>
    <div class="choosecity-box">
      <input type="text" v-model="input" placeholder="请输入城市关键字" class="ipt" />
      
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
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
}
.ipt {
  height: 24px;
}
</style>