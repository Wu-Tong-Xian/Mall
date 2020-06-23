<template>
  <div>
    <div class="fl mg20">
      <city></city>
      <search></search>
    </div>
  </div>
</template>

<script>
import city from '../components/city/city'
import search from '../components/search/search'
export default {
  name: "",
  props: {},
  components: {
    city,search,
  },
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
@import "../views/style/components";
@import "../views/style/el";
.qw {
  width: 100%;
  height: 100%;
  background: red;
  border: 1px solid red;
}
</style>