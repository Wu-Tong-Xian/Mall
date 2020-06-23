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
        <div @click="gohome(citys)">
          <van-button type="default" size="normal">{{citys}}</van-button>
        </div>
      </div>
      <div class="pd-tb10 bg1">热门城市</div>
      <div class="fl fl-wrap">
        <div class="mg-t10 bg fl" v-for="(item) in hotCities" :key="item.id">
          <van-button type="default" size="normal" @click="gohome(item.name)">{{item.name}}</van-button>
        </div>
      </div>
    </div>

    <van-index-bar :index-list="cityNames">
      <div v-for="(item1,index1) in citylist" :key="index1">
        <van-index-anchor :index1="index1">{{index1}}</van-index-anchor>
        <van-cell
          v-for="(item2) in item1"
          :key="item2.id"
          :title="item2.name"
          @click="gohome(item2.name)"
        />
      </div>
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
      hotCities: [], //热门城市
      citylist: [], //城市列表
      // 城市排名分类依据 ABCD....
      cityNames: [],
      citys: "" //从home子组件传过来的当前城市名字
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    // 点击返回主页 并且传回选择的城市名
    gohome(val) {
      this.$store.state.usercity = val;
      localStorage.setItem("usercity ", val);
      this.$router.push({ name: "/home" });
    }
  },
  mounted() {
    // 获取热门城市列表
    this.hotCities = city.data.hotCities;
    // 所有城市列表
    this.citylist = city.data.cities;
    // 接收主页子组件传过来的定位城市
    this.citys = this.usercity;
     // 获取城市排名依据 ABCD....
    for (let i in city.data.cities) {
      this.cityNames.push(i);
    }

    console.log(this.citylist);
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
  computed: {
    // vueX中暂存的当前城市名
    usercity() {
      return this.$store.state.usercity;
    }
  }
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