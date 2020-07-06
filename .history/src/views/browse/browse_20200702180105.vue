<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>最近浏览</div>
      <div></div>
    </div>
    <van-divider />
    <div v-if="browse.length ===0"></div>
    <div v-else>
      <div v-for="(item,index) in browse" :key="item.id" class="p-r">
        <van-card
          @click="godetails(item.id,item)"
          :price="item.mallPrice"
          :title="item.goodsName"
          :thumb="item.image"
        />
        <div @click="del(index)" class="del">
          <van-icon name="close" />
        </div>
      </div>
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
      browse: []
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {
    // 获取通过模块化方法（写在utils）存起来的收藏商品
    this.browse = JSON.parse(localStorage.getItem("browse"));
    console.log(this.browse);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>