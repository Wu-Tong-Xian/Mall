<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>收藏</div>
      <div></div>
    </div>
    <van-divider />
    <div>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </div>
  </div>
</template>

<script>
import { Card } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      collect:[],
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {
    // 获取通过模块化方法（写在utils）存起来的收藏商品
    this.collect=JSON.parse(localStorage.getItem("collect"))
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>