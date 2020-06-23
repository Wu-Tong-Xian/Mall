<template>
  <div>
    <div v-for="(item,index) in slides" :key="index">
      <div><img src="" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    slides: {
      type: [],
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
</style>