<template>
  <div class="fl category">
    <div v-for="(item,index) in category " :key="index">
        <div><img :src="item.image" alt  class="img"/></div>
        <div>{{item.mallCategoryName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    category: {
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
.category {
  width: 95%;
  margin: 0 auto;
}
.img {
  width: 50px;
}
</style>