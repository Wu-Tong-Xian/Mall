<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>已完成</div>
      <div></div>
    </div>
    <van-divider />
    

  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      list: [] //盛放已完成购物的信息
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    // 27. 订单查询(get) /getMyOrder
    getMyOrder() {
      this.$api
        .getMyOrder()
        .then(res => {
          if (res.code === 200) {
            // 订单信息列表 里面还有一个数组 在这里循环然后赋值 上面在循环不好使用
            this.orderlist = res.list;
            this.orderlist.map(item =>{
              item.order_list.map(item1=>{
                item1.present_price =item1.present_price.toFixed(2)
              })
            })
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getMyOrder();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>

</style>