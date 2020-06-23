<template>
  <div>
    <div class="fl hotGoods fl-wrap">
      <div v-for="(item,index) in hotGoods" :key="index">
        <div>
          <img :src="item.image" alt class="img" />
        </div>
        <div class="title t-none">{{item.name}}</div>
        <div class="fl mg-lr20">
          <div class="mg-l20 mallPrice">{{item.mallPrice}}</div>
          <div class="mg-l20 col1 fz14 price">{{item.price}}</div>
        </div>
      </div>
    </div>

    <div class="mg-tb20">~~~我是有底线的！</div>
    <div class="mg-tb20">~~~我是有底线的！</div>
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
  methods: {},
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
</style>