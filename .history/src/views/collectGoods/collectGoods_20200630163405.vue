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
    <div v-for="(item,index) in collect" :key="item.id" class="p-r">
      <van-card
        @click="godetail(item.id)"
        :price="item.present_price"
        :title="item.name"
        :thumb="item.image_path"
      />
      <div @click="del(index)" class="del">x</div>
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
      collect: []
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    del(index) {
      this.collect=this.collect.splice(index,1)
    },
    godetail(id) {
      console.log(222);
    }
  },
  mounted() {
    // 获取通过模块化方法（写在utils）存起来的收藏商品
    this.collect = JSON.parse(localStorage.getItem("collect"));
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.del {
  position: absolute;
  left: 340px;
  top: 75px;
}
</style>