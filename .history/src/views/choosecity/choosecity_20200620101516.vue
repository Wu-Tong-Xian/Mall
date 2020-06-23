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
      <van-search v-model="serach" class="mg-r20" placeholder="请输入城市关键字" />
      <!-- 没有使用搜索功能 正常显示 -->
      <div v-if="serach.trim()===''">
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
    

    <van-index-bar  :index-list="cityNames">
      <div v-for="(item1,index1) in citylist" :key="index1">
        <van-index-anchor :index1="index1">{{index1}}</van-index-anchor>
        <van-cell
          highlight-color
          v-for="(item2) in item1"
          :key="item2.id"
          :title="item2.name"
          @click="gohome(item2.name)"
        />
      </div>
    </van-index-bar>
    </div>
    <div v-else-if="serachlen === 0">
      <van-cell>未查询到相关城市,请确认输入是否正确</van-cell>
    </div>
    <div v-else>
      <div v-for="(item) in serachcity" :key="item.id">
        <van-cell
          v-for="item1 in item"
          :key="item1.id"
          :title="item1.name"
          @click="gotohome(item1.name)"
        />
      </div>
    </div>
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
      serach: "",  //模糊搜索
      hotCities: [], //热门城市
      citylist: [], //城市列表
      // 城市排名分类依据 ABCD....
      cityNames: [],
      citys: "" ,//从home子组件传过来的当前城市名字
      // 搜索结果数组
      serachcity: [],
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
    serach(val) {
      // 输入不为空
      if (val.trim() !== "") {
        let arr = [];
        // 总城市列表循环
        this.cityNames.map(item => {
          // 将每个分类城市过滤 使得包含输入内容的城市信息交给 arr
          arr.push(
            this.citylist[item].filter(item1 => {
              // 将城市的内容拼接 方便检查是否包含val
              let str = `${JSON.stringify(item1.id)}${JSON.stringify(
                item1.name
              )}${JSON.stringify(item1.spell)}`;
              //返回结果
              return str.includes(val);
            })
          );
        });
        this.serachcity = arr;
        // 搜索结果全部城市总数
        this.serachlen = 0;
        arr.map(item => {
          this.serachlen += item.length;
        });
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