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
    <div v-for="(item) in collect" :key="item.id" class="p-r">
      <van-card
        :price="item.present_price"
        :title="item.name"
        :thumb="item.image_path"
      />
      <div @click="del" class="del">x</div>
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
    },
    del(){

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
  .del {
    position: absolute;
    left: 350px;
    top: 28px;
  }
</style>