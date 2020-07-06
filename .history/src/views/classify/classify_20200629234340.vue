<template>
  <div>
    <!-- 分类页  从底部栏直接跳转过来的   从首页子组件点击跳转过来的分类-->
    <!-- //在首页发请求是 通过vuex把分类列表的数据存起来 还有子组件的分类把 index（循环出来的）出过来 -->
    <div>
      <!-- vant组件库的侧边导航 -->
      <!-- 左侧边栏 -->
      <van-sidebar v-model="activeKey" @change="onChange">
        <div v-for="(item) in categorys" :key="item.id">
          <van-sidebar-item :title="item.mallCategoryName"></van-sidebar-item>
        </div>
      </van-sidebar>
    </div>
    <!-- 头部的导航栏 -->
    <div>
      <van-tabs v-model="active" @click="onClick">
        <van-tab v-for="item in bxMallSubDtos" :key="item.id" :title="item.mallSubName"></van-tab>
      </van-tabs>
      
        <van-cell v-if="">        </van-cell >
        <van-cell />
      
    </div>
  </div>
</template>

<script>
import { Notify } from "vant"; //Sidebar 侧边导航
import { Tab, Tabs } from "vant"; //Tab 标签页
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      activeKey: 0,
      active: 0,
      catelist: [],
      bxMallSubDtos: []
    };
  },
  methods: {
    // 3. 分类查询(get)   /classification?mallSubId=${id}   参数:  id:默认分类的id
    getClassification() {
      // categorys(数组有5个对象):所有内容， activeKey:下标 index，bxMallSubDto:(数组有5个对象里面的数组)
      // 赋值  通过点击这一项的下标 获取 categorys(数组有5个对象) 里面的 bxMallSubDto 数组内容
      this.bxMallSubDtos = this.categorys[this.activeKey].bxMallSubDto;
      this.ids = this.bxMallSubDtos[this.activeKey].mallSubId;
      console.log(this.categorys);
      //  console.log( this.bxMallSubDtos);
      this.$api
        .getClassification(this.ids)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 侧边导航 自带的监听
    onChange(index) {
      this.active = 0;
      this.getcategory();
    },
    // tab 标签页自带方法
    onClick(name, title) {
      Toast(title);
    }
  },
  mounted() {
    // 获取点击首页分类选项传过来的下标index    query: {cateindex:index}
    if (this.$route.query.cateindex) {
      this.activeKey = this.$route.query.cateindex;
    }
    this.getClassification();
  },
  watch: {},
  computed: {
    //获取在首页存储的分类列表内容
    categorys() {
      return this.$store.state.category;
    }
  }
};
</script>

<style scoped lang='scss'>
</style>