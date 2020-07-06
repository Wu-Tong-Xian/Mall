<template>
  <!-- 分类页  从底部栏直接跳转过来的   从首页子组件点击跳转过来的分类-->
  <!-- //在首页发请求是 通过vuex把分类列表的数据存起来 还有子组件的分类把 index（循环出来的）出过来 -->
  <div class="bg">
      <van-nav-bar title="分类"></van-nav-bar>
    <div>
      <div class="cate-body">
        <!-- 侧边 -->
        <div class="cate-sidebar">
          <van-sidebar v-model="activeKey" @change="onChange">
            <div v-for="item in categorys" :key="item.id">
              <van-sidebar-item :title="item.mallCategoryName"></van-sidebar-item>
            </div>
          </van-sidebar>
        </div>
        <div class="cate-main">
          <!-- 顶部 -->
          <van-tabs v-model="active" @click="getClassification">
            <van-tab v-for="item in bxMallSubDtos" :title="item.mallSubName" :key="item.id"></van-tab>
          </van-tabs>
         
            <!-- <div v-for="item in catelist" :key="item.id"> -->
            <van-cell v-if="catelist.length===0">该类商品暂无</van-cell>
            <van-cell v-else v-for="item in catelist" :key="item.id" @click="godetails(item.id)">
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
          
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant"; //Sidebar 侧边导航
import { Tab, Tabs } from "vant"; //Tab 标签页
export default {
  name: "details",
  props: {},
  components: {},
  data() {
    return {
      activeKey: 0, //vant方法自带
      active: 0, //vant方法自带
      catelist: [], //盛放 分类请求到的数组信息
      bxMallSubDtos: [] //盛放 分类请求到的数组信息 里面5个对象 里的数组信息
    };
  },
  methods: {
    // 3. 分类查询(get)   /classification?mallSubId=${id}   参数:  id:默认分类的id
    getClassification() {
      // categorys(数组有5个对象):所有内容， activeKey:下标 index，bxMallSubDto:(数组有5个对象里面的数组)
      // 赋值  通过点击这一项的下标 获取 categorys(数组有5个对象) 里面的 bxMallSubDto 数组内容
      this.bxMallSubDtos = this.categorys[this.activeKey].bxMallSubDto;
      let ids = this.bxMallSubDtos[this.activeKey].mallSubId;
      console.log(this.categorys);
      //  console.log( this.bxMallSubDtos);
      this.$api
        .getClassification(ids)
        .then(res => {
          console.log(res);
          this.catelist = res.dataList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 侧边导航 自带的监听
    onChange(index) {
      this.active = 0;
      getClassification();
    },
   
    // 路由跳转到详情页 传参为商品id
    godetails(id) {
      this.$router.push({name:"details",query: {id:id}
      });
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
.cate-body {
  display: flex;
}
.cate-sidebar {
  width: 85px;
}
.cate-main {
  width: 280px;
}
// 搜索结果 flex排列
.mysearch-list {
  display: flex;
  height: 80px;
}
// 搜索结果的图片大小设置
.search-img {
  width: 70px;
  margin: 0 10px;
}
.persent-price {
  color: red;
  margin: 8px;
}
.orl-price {
  color: gray;
  text-decoration: line-through;
  font-size: 12px;
}
.goods-price {
  position: absolute;
  bottom: 5px;
}
.goods-name {
  margin: 0 8px;
  line-height: 20px;
}
.core-containers {
  // height: 570px;
  .wrappers {
    height: 570px;
    overflow: hidden;
  }
}
</style>