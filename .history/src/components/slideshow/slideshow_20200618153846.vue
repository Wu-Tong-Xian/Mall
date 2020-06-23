<template>
  <div>
    

      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in slides" :key="index">
          <img :src="item.image" alt class="img" />
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
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 95%;
  height: 200px;
  margin-left: 10px;
}
</style>