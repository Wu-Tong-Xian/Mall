<template>
  <div>
    <div class="fl hotGoods fl-wrap">
      <div v-for="(item,index) in hotGoods" :key="index">
        <div>
          <img :src="item.image" alt class="img" @click="godetails(item.goodsId,index)" />
        </div>
        <div class="title t-none" @click="godetails(item.goodsId,index)">{{item.name}}</div>
        <div class="fl mg-lr20">
          <div class="mg-l20 mallPrice">{{item.mallPrice}}</div>
          <div class="mg-l20 col1 fz14 price">{{item.price}}</div>
        </div>
      </div>
    </div>

    <div class="mg-tb20 dx">~~~我是有底线的！</div>
    <div class="mg-tb20"></div>
    <div class="mg-tb20"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    hotGoods: {
      type: Array,
      default: Array => []
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
     // 跳转到详情页传id过去
    godetails(val,index) {
      this.$router.push({ name: "details", query: { id: val } });
      this.$utils.browse(this.hotGoods[index])
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.hotGoods {
  width: 100%;
  margin: 0 auto;
}
.img {
  margin-left: 1px;
  width: 176px;
}
.title {
  margin-left: 15px;
  width: 150px;
  color: rgb(224, 16, 16);
}
.mallPrice {
  margin-left: 30px;
  color: rgb(224, 16, 16);
}
.price {
  margin-left: 30px;
  text-decoration: line-through;
}
.dx {
  margin-left: 100px;;
}
</style>