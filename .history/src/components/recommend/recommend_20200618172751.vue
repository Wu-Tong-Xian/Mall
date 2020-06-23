<template>
  <div class="recommend-box">
    <div class="mg-l20 pd-t10">商品推荐</div>
    <div class=" fl j-between">
      <div v-for="(item,index) in recommend" :key="index" >
          <div>  <img :src="item.image" alt class="img" />  </div>
          <div class="t-none text">{{item.goodsName}}</div>
      </div>
    </div>
    <!-- 简单场景 -->
<Scroll
  ref="scroll"
  :autoUpdate="true"
  @pullingDown="loadRefresh"
  @pullingUp="loadMore">
    <!-- 滚动的内容 -->
</Scroll>

<!-- 复杂场景 -->
<Scroll
  ref="scroll"
  :updateData="[data]"
  :refreshData="[]"
  @pullingDown="loadRefresh"
  @pullingUp="loadMore">
    <!-- 滚动的内容 -->
</Scroll>
  </div>
</template>

<script>
import Scroll from 'vue-slim-better-scroll'
export default {
  name: "",
  props: {
    recommend: {
      type: Array,
      default: Array => []
    }
  },
  components: {
    Scroll,
  },
  data() {
    return {};
  },
  methods: {
    
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 125px;
}
.recommend-box {
  background: #FFFFFF;
}
.text {
  width: 120px;
  font-size: 14px;
  margin-left: 8px;
}
</style>