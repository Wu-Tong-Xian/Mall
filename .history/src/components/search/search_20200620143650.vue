<template>
  <div class="search">
    <van-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词">
      <template #action>
        <div @click="onSearch"></div>
      </template>
    </van-search>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {
    flag:{
      type:Number,
      default:'',
    }
  },
  components: {},
  data() {
    return {
      value: "",
       flag =-1
    };
  },
  methods: {
    
      // 点击输入框或者搜索 改变flag 并且通过子传父把改变后的flag传到首页
     onCancel() {
      this.flag = -1;
      this.$emit("send", this.nu1);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

</style>