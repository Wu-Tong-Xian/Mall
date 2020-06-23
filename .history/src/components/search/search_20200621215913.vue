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
    <div v-if="inputs === ''" class="mg-l20 mg-t20">
      <!-- 如果没有历史记录提示 -->
      <div v-if="searchHistory.length <1">暂无历史记录</div>
      <!--  如果有历史记录 显示历史记录 -->
      <div v-else>
        <div class="fl">
          <div>历史记录</div>
          <div>删除历史记录</div>
        </div>
      </div>
    </div>
    <div v-else>
      <!-- 如果没有搜索出来东西给提示 -->
      <div v-if="searchlist.length < 1">
        <div class="mg-t20 fz14 mg-r20">非常抱歉，该商品不存在，请重新输入您想搜索的商品!</div>
      </div>
      <!-- 如果搜索出来商品 -->
      <div v-else>
      <!--通过循环拿到每一项商品信息  并且绑定方法  获取到搜索的商品(这里点击进入详情才做搜索历史)  -->
        <div v-for="(item,) in searchlist" :key="item.id" @click="getHistory(item.id)">
          <div class="searchlist fl">
            <div>
              <img :src="item.image_path" alt />
            </div>
            <div>
              <div class="t-none text mg-t10" v-html="item.name"></div>
              <div class="fl m0">
                <div class="mg-l20 mallPrice">{{item.present_price}}</div>
                <div class="mg-l20 col1 fz14 price t-l">{{item.orl_price}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    // 获取搜索历史 
    getHistory(val){
      
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