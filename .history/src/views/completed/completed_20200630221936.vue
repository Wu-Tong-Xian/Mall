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
    <div v-for="(item) in list" :key="item.id" class="bg">
      <div class="box-bx">
        <div class="mg-l10 pd-t10">订单编号:{{item.order_id}}</div>
        <van-divider />
        <div v-for="(item1) in item.order_list" :key="item1.id" class="fl">
          <div class="fl">
            <div><img :src="item1.image_path" alt /> </div>
            <div>
              <div class="fl">
                <div class="name fl-wrap">{{item1.name}}</div>
                <div>{{item1.present_price}}</div>
                <div class="fl col1">x{{item1.count}}</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
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
            this.list = res.list;
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
.bg {
  padding: 15px;
  background: #e9ebec;
  margin: 0 auto;
  height: 300px;
}
.box-bx {
  background: #ffffff;
  width: 99%;
  height: 300px;
  border-radius: 15px;
}
img {
  width: 65px;
}
.name {
  width: 230px;
}
</style>