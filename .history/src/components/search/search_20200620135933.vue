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
    flag:{
      type:Number,
      default:'',
    }
  },
  components: {},
  data() {
    return {
      value: "",
       
    };
  },
  methods: {
    onSearch() {
      this.flag =1
      this.$emit("send", this.flag);
    },
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

</style>