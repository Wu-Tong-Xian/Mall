<template>
  <div>
    <div v-for="(item,index) in slides" :key="index">
      <div><img :src="item.image" alt="" class="img "></div>
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
  mg-l10
}
</style>