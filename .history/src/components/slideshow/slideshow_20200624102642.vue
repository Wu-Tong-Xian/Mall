<template>
<!-- 轮播图 -->
  <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in slides" :key="index">
          <img :src="item.image" @click="godetails(item.goodsId)" alt class="img" />
        </van-swipe-item>
      </van-swipe>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    slides: {
      type: Array,
      default: Array => []
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    godetails(goodsId){
      this.$router.push({name:'details',query:{id:goodsId}})
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 95%;
  height: 160px;
  margin-left: 10px;
}
</style>