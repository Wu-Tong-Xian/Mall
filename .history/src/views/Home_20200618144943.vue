<template>
  <div>
    <div class="fl">
      <div>成都</div>
      <div>
        <form action="/">
          <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
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