<template>
  <div class>
    <div class="fl j-between mg-tb10 mg-l20">
      <div @click="goback">
        <van-icon name="arrow-left" />
      </div>
      <div>城市列表</div>
      <div></div>
    </div>
    <div>
      <van-search v-model="input" class="mg-r20" placeholder="请输入城市关键字" />
      <div class="pd-tb20 bg1">当前城市</div>
      <div class="mg-b10 mg-l10 bg">
        <div v-if="city">
          <van-button type="default" size="normal">{{city}}</van-button>
        </div>
        <div v-else>
          <van-button type="default" size="normal">
            <van-loading size="24px">定位中...</van-loading>
          </van-button>
        </div>
      </div>
      <div class="pd-tb10 bg1">热门城市</div>
      <div class="fl fl-wrap">
        <div class="mg-t10 bg fl" v-for="(item,index) in hotCities" :key="index">
          <van-button type="default" size="normal" @click='gohome(item.name)'>{{item.name}}</van-button>
        </div>
      </div>
    </div>

    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script>
import city from "../../可能要用的js文件/city";
import { createLogicalAnd } from "../../../../不常用但必要的程序/HBuilderX/plugins/typescript/lib/typescript";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      input: "",
      hotcity: [], //热门城市
      cities: [], //城市列表
      city: "" //从home子组件传过来的当前城市名字
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    // 点击返回主页 并且传回选择的城市名
    gohome(val){
      this.$store.state.hotcity = val;
      localStorage.setItem("hotcity", val);
      this.$router.push({ name: "/home" });
    }
  },
  mounted() {
    // 获取热门城市列表
    this.hotCities = city.data.hotCities;
    // 所有城市列表
    this.cities = city.data.cities;
    // 接收主页子组件传过来的城市名
    this.city = this.$route.query.city;

    // console.log(this.cities);
    // console.log(this.hotCities);
  },
  watch: {
    // 输入框模糊搜索功能
    input(val) {
      if (val.trim() !== "") {
        this.Article = this.arr.filter(item => {
          return JSON.stringify(item).includes(val);
        });
      } else {
        this.Article = this.arr;
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.choosecity-box {
  background: #f2f2f2;
  padding: 15px 0 15px 20px;
}
.ipt {
  height: 24px;
}
.bg {
  background: #ffffff;
  padding-bottom: 13px;
}
.bg1 {
  background: #f7f8fa;
  padding-left: 20px;
}
.van-button {
  width: 110px;
  margin-left: 12px;
  margin-top: 13px;
}
</style>