<template>
  <div class="search">
    <div>
      <van-search v-model="inputs" show-action placeholder="请输入搜索关键词">
        {{inputs}}
        <template #action>
          <div @click="onSearch">返回</div>
        </template>
      </van-search>
    </div>
    <div v-if="searchlist.length < 1">
      <van-cell>非常抱歉，该商品不存在，请重新输入关键词</van-cell>
    </div>
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
      inputs: "", //输入框搜索的值
      searchlist: [] //搜索列表
    };
  },
  methods: {
    // 2. 搜索(post)  /search   参数: value: 搜索关键词
    getSearch() {
      this.$api
        .getSearch(this.inputs)
        .then(res => {
          // 获取搜索列表
          this.searchlist = res.data.list;
          console.log(this.searchlist);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 点击返回 改变falg 并且通过子传父把改变后的falg传到首页 让if判断显示展示数据 搜索
    onSearch() {
      this.falg = -1;
      this.$emit("send", this.falg);
    }
  },
  mounted() {},
  watch: {
    inputs(val) {
      console.log(val);
      if (this.inputs.trim() !== "") {
        this.getSearch();
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>