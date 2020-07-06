<template>
<!-- 轮播图 -->
  <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in slides" :key="index">
          <img :src="item.image" @click="godetails(item.goodsId,index)" alt class="img" />
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
    return {
      nickname:''
    };
  },
  methods: {
    godetails(val,index){
      this.$router.push({name:'details',query:{id:val}})
      if(this.nickname !== null){
        this.$utils.browse(this.slides[index])
      }
    },
  },
  mounted() {
    this.nickname = localStorage.getItem('nickname')
  },
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