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

    <div v-if="addresslist.length < 1">
      <div class="null">暂无收货地址~~</div>
      <van-address-list @add="onAdd" />
    </div>
    <!--// 如果有获取到地址-->
    <div v-else>
      <!--这里需要根据vant方法里面获取id  把获取到数据 push到 list 数组 才有显示   -->
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @click-item="choose"
      />
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
      addresslist: [], //获取的地址列表
      chosenAddressId: "", //vant方法自带 list数组里面的id  也是查询地址里面的id  这里是—id
      list: [], //vant方法自带 也就是渲染的数组，需要把 id:  name:   tel:  address:   isDefault:
      nickname: "" // 获取登录是的用户名
    };
  },
  methods: {
    goback() {
      //返回上一级
      this.$router.go(-1);
    },
    //新增地址
    onAdd() {
      this.$router.push("editAddress");
    },
    //编辑地址
    onEdit(item, index) {
      let addinfos = this.addresslist.filter(item1 => {
        // 通过filter过滤出 获取的地址列表跟vant自带方法里一样的每一项id相同的id
        return item1._id === item.id;
      });
      // 跳转路由并且把上面过滤出来的（信息）第一项一起传到编辑地址页面
      this.$router.push({
        name: "editAddress",
        query: { addinfo: addinfos[0] }
      });
    },
    // 19. 查询用户收货地址(get) /getAddress
    getAddress() {
      this.$api
        .getAddress()
        .then(res => {
          this.addresslist = res.address;
          this.addresslist.map(item => {
            if (item.isDefault === true) {
              this.chosenAddressId = item._id;
            }
            //根据vant方法 把姓名 电话  地址 是否默认放进去
            let obj = {
              //放进去的位置根据对应位置
              name: item.name,
              address: `${item.province}${item.city}${item.county}${item.addressDetail}`,
              id: item._id,
              tel: item.tel,
              isDefault: item.isDefault
            };
            this.list.onshift(obj);
          });

          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 选择地址
    choose(item) {
      this.chosenAddressId = item.id;
      this.$store.state.addresslist = item;
    }
  },
  mounted() {
    this.getAddress();
    if (localStorage.getItem("nickname")) {
      this.nickname = localStorage.getItem("nickname");
    }
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