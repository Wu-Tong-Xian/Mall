<template>
  <div class="m0">
    <div v-for="(item,index) in slides" :key="index" class="m0">
      <div class="m0"><img :src="item.image" alt="" class="img m0"></div>
    </div>
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
}
</style>