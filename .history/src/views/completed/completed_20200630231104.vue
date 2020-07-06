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
        <div v-for="(item1) in item.order_list" :key="item1.id">
          <div class="fl">
            <div class="box-border">
              <img :src="item1.image_path" alt />
            </div>
            <div class="p-r">
              <div class="fl">
                <div class="name fl-wrap">{{item1.name}}</div>
                <div>￥{{item1.present_price}}</div>
              </div>
              <div class="fl p-a col1">x{{item1.count}}</div>
            </div>
          </div>
          <van-divider />
          <div class='fl goright mg-r10'>
            <div></div>
            <div>
              <div class="mg-1">创建时间:{{item.add_time}}</div>
              <div>收货地址:{{item.address}}</div>
              <div class="fl mg-2">
                <div class>共{{item1.count}}件商品</div>
                <div class="mg-l10 fl">
                  <div>合计：</div>
                  <div class="line-h">{{item1.present_price*item1.count}}</div>
                </div>
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
  padding: 15px 10px 10px 10px;
  background: #e9ebec;
  margin: 0 auto;
  height: 240px;
}
.box-bx {
  background: #ffffff;
  width: 99%;
  height: 240px;
  border-radius: 15px;
}
.box-border {
  border: 1px solid rgb(223, 212, 212);
  border-radius: 5px;
  margin-left: 15px;
  margin-right: 15px;
}
img {
  width: 65px;
}
.name {
  width: 200px;
}
.p-a {
  position: absolute;
  left: 220px;
  top: 25px;
}
.goright {
  justify-content: flex-end;
}
.line-h {
  line-height: 25px;
}
.mg-1 {
  margin-left: 42px;
}
.mg-2 {
  margin-left: 92px;
}
</style>