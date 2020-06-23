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
  methods: { personScroll(){
            console.log(this.newsList.length)
            var width=this.newsList.length*310
            console.log(width)
            this.$refs.personTab.style.width = width + "px";
            // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
            this.$nextTick(() => {
                if (!this.scroll) {
                    this.scroll = new BScroll(this.$refs.personWrap, {
                        startX: 0,
                        click: true,
                        scrollX: true,
                        // 忽略竖直方向的滚动
                        scrollY: false,
                        eventPassthrough: "vertical"
                    });
                } else {
                    this.scroll.refresh();
                }
            });

        }},
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