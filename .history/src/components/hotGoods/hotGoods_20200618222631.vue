<template>
  <div>
    <div v-for="(item,index) in hotGoods" :key="index">
      <div class="img-box fl">
        <div class="fl"><img :src="item.image" alt class="img " /></div>
      </div>
      <div class="title t-none">{{item.name}}</div>
      <div class="fl m0">
        <div class="mg-l20 mallPrice">{{item.mallPrice}}</div>
        <div class="mg-l20 col1 fz14 price">{{item.price}}</div>
      </div>
    </div>
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
.img-box {
  display: flex;
}
.img {
  width:150px ;
}
.title {
  width: 45%;
  color: rgb(224, 16, 16);
}
.mallPrice {
  color: rgb(224, 16, 16);
}
.price {
  text-decoration: line-through;
}
</style>