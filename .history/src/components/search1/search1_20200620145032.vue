<template>
  <div class="search">
    <van-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词" @focus="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {
   
  },
  components: {},
  data() {
    return {
      value: "",
       
    };
  },
  methods: {
    onSearch() {
      // 点击输入框或者搜索 改变falg并且通过子传父把改变后的falg传到首页
      this.falg = 1
    },
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

</style>