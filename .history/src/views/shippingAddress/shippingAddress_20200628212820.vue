<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>地址列表</div>
      <div></div>
    </div>
    <van-divider />
    <div class="null">暂无收货地址~~</div>
    <div>
      <van-address-list
        v-model="address"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
    <div>
      <van-address-list @add="onAdd" />
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
      addresslist:[], //获取的地址列表
    };
  },
  methods: {
    goback() {
      //返回上一级
      this.$router.go(-1);
    },
    onAdd() {
      //新增地址
      this.$router.push("editAddress");
    },
    // onEdit(item, index) { //编辑地址
    //   Toast('编辑地址:' + index);
    // },
    // 19. 查询用户收货地址(get) /getAddress
    getAddress() {
      this.$api
        .getAddress()
        .then(res => {
          if(res.code ===200){
            this.addresslist =res.address
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getAddress();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.null {
  position: relative;
  top: 100px;
  text-align: center;
}
.New {
  position: relative;
  top: 550px;
}
</style>