<template>

  <div class="recommend-box">
    <div class="mg-l20 pd-t10">商品推荐</div>
    <div class=" fl j-between">
      <div v-for="(item,index) in recommend" :key="index" >
          <div>  <img :src="item.image" alt class="img" />  </div>
          <div class="t-none text">{{item.goodsName}}</div>
      </div>
    </div>
<div class="person-wrap" ref="personWrap">
       <ul class="person-list" ref="personTab">
           <router-link :to="'/ConcentrationHome/Detail/'+item.id" tag="li" v-for="(item,index) in newsList" :key="index">
               <img :src="item.pic" alt="">
               <p>{{item.title}}</p>
               <p>{{item.descript}}</p>
           </router-link>
       </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import RecommendList from "../Recommend/RecommendList"
export default {
  name: "",
  props: {
    recommend: {
      type: Array,
      default: Array => []
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
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