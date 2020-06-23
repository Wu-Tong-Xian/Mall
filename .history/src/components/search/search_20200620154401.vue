<template>
  <div class="search">
    <van-search v-model="input" show-action placeholder="请输入搜索关键词">
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
  props: {},
  components: {},
  data() {
    return {
      input: ""
    };
  },
  methods: {
    // 2. 搜索(get)  /search   参数: value: 搜索关键词
    getSearch() {
      this.$api.getSearch(this.input).then(res =>{
        console.log(res);
      }).catch(err =>{
        console.log(err);
      })
    },
    // 点击返回 改变falg 并且通过子传父把改变后的falg传到首页 让if判断显示展示数据 搜索
    onSearch() {
      this.falg = -1;
      this.$emit("send", this.falg);
    }
  },
  mounted() {
    this.getSearch()
  },
  watch: {
    input(val){
      if(this.input.trim() !==''){
        this.getSearch()
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>