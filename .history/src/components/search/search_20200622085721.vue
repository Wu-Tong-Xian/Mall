<template>
  <div class="box1">
    <!--头部一直显示-->
    <div class="box2">
      <van-search v-model="inputs" show-action placeholder="请输入搜索关键词">
        {{inputs}}
        <template #action>
          <div @click="onSearch">返回</div>
        </template>
      </van-search>
    </div>
    <!-- inputs没有输入 显示搜索记录 -->
    <div v-if="inputs === ''">
      <div>
        <div class="flexbtw search-His">
          <div>搜索历史</div>
          <div v-if="SearchHistory.length >= 1" @click="delHistory">删除历史</div>
        </div>
        <van-cell v-if="SearchHistory.length < 1">暂无历史记录</van-cell>
        <div v-else class="history">
          <div v-for="item in SearchHistory" :key="item.id" >{{item}}</div>
        </div>
        
      </div>
    </div>
    <!-- 如果搜索出来没有商品 提示没有商品 -->
    <div v-else-if="searchlist.length < 1">
      <van-cell>非常抱歉，该商品不存在，请重新输入关键词</van-cell>
    </div>
    <!-- 如果搜索出了商品  -->
    <div v-else>
      <!-- 循环显示商品信息 -->
      <van-cell v-for="item in searchlist" :key="item.id" @click="gotos(item.id)">
        <div class="mysearch-list">
          <div>
            <img :src="item.image" class="search-img" />
          </div>
          <div>
            <div v-html="item.name" class="goods-name"></div>
            <div class="goods-price">
              <span class="persent-price">￥{{item.present_price}}</span>
              <span class="orl-price">{{item.orl_price}}</span>
            </div>
          </div>
        </div>
      </van-cell>
    </div>

    <div class="dv"></div>
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
      searchlist: [], //搜索列表
      searchHistory: [] //搜索历史
    };
  },
  methods: {
    // 获取搜索历史 并跳转到详情
    getHistory(val) {
      // 要进入if就要结果为true  every 只有所有条件都成立才是true
      if (
        // 搜索历史每一项 跟输入框的内容都不相等（也就是没有这个搜索记录）
        this.searchHistory.every(item => {
          item !== this.inputs;
        }) ||
        //或者 搜索历史没有任何记录
        this.searchHistory.length < 1
      ) {
        // 把刚输入的 放在搜索历史里
        this.searchHistory.push(this.inputs);
        console.log(this.searchHistory);
      }
      // 通过 localStorage.setItem 长久的存下来
      localStorage.setItem("searchHistory", this.searchHistory);
      this.$router.push({ name: "details", query: { ids: val } });
    },
    // 2. 搜索(post)  /search   参数: value: 搜索关键词
    getSearch() {
      this.$api
        .getSearch(this.inputs)
        .then(res => {
          // 获取搜索列表
          this.searchlist = res.data.list;
          // this.searchlist.map(
          //     item => (item.name = this.$utils.keyWord(item.name, this.inputs))
          //   );
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
.searchlist {
  width: 240px;
  height: 65px;
  border-bottom: 1px solid rgb(207, 184, 184);
  margin-top: 15px;
}
.searchlist img {
  width: 50px;
  height: 50px;
}
.text {
  width: 180px;
  font-size: 14px;
  margin-left: 10px;
  margin-bottom: 10px;
}
.mallPrice {
  font-weight: 700;
  color: rgb(224, 16, 16);
}
/* 把底部撑起来 */
.dv {
  margin-bottom: 60px;
}
</style>