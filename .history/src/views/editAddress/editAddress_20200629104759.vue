<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>编辑地址</div>
      <div></div>
    </div>
    <van-divider />
    <!--主体内容开始-->
    <!-- vant组件的编辑地址-->
    <van-address-edit
      :address-info="list"
      :area-list="area"
      show-delete
      show-set-default
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import Vue from "vue";
import area from "../../可能要用的js文件/area";
Vue.prototype.area = area;
export default {
  data() {
    return {
      // 用户信息
      list: {}
    };
  },
  methods: {
    // 保存信息
    onSave(content) {
      // 如果传了id过来 就进行地址修改
      if (this.list._id !== undefined) {
        this.list = content;
        let obj = {
          name: this.list.name,
          tel: this.list.tel,
          isDefault: this.list.isDefault,
          province: this.list.province,
          city: this.list.city,
          county: this.list.county,
          addressDetail: this.list.addressDetail,
          areaCode: this.list.areaCode,
          id: this.list._id
        };
        this.$api
          .postAddress(obj)
          .then(res => {
            this.$toast.success("地址修改成功");
            // 如果设置了默认选中，就使其默认
            if (content.isDefault === true) {
              this.$api
                .setDefaultAddress(this.list._id)
                .then(res => {})
                .catch(err => {
                  console.log(err);
                });
            }
            this.$router.go(-1);
          })
          .catch(err => {
            console.log(err);
          });
      }
      // 如果没有参数 就进行地址添加
      else {
        this.list = content;
        this.$api
          .postAddress(this.list)
          .then(res => {
            this.$toast.success("地址添加成功");
            this.$router.go(-1);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    // 删除信息
    onDelete() {
      // 如果传了id过来 才能删除

      if (this.list._id !== "") {
        this.$api
          .deleteAddress(this.list._id)
          .then(res => {
            this.$toast("修改成功");
            this.$router.go(-1);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {
    if (this.$route.query.addinfo) {
      this.list = this.$route.query.addinfo;
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.bcakHome {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>