<template>
  <div class="search">
    <van-search v-model="value" show-action  placeholder="请输入搜索关键词">
      <template #action>
        <div @click="onSearch">返回</div>
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
    
      // 点击返回 改变falg 并且通过子传父把改变后的falg传到首页 让if判断显示展示数据 搜索
     onSearch() {
      this.falg =-1
      this.$emit('send',this.falg)
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

</style>