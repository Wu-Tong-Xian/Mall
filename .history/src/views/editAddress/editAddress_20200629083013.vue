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
      :area-list="area"
      show-delete
      show-set-default
      show-search-result
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { Toast } from "vant"; //地址列表  编辑的vant方法
import area from "../../可能要用的js文件/area";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      area: area, //把所有的地址直接赋值给vant 的方法
      list: {}
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },

    onSave(content) {
      // 如果传了id过来 就进行地址修改   //content 是方法自带 content 全部表单内容
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
            history.back();
          })
          .catch(err => {
            console.log(err);
          });
      }
      // 如果没有参数 就进行地址添加
      else {
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
          .postAddress(this.list)
          .then(res => {
            this.$toast.success("地址添加成功");
            history.back();
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
    },

    onDelete() {
      //删除
      Toast("delete");
    }
  },
  mounted() {
    //获取到从商品地址页面出过来的第一项id
    if (this.$route.query.addinfo) {
      this.list = this.$route.query.addinfo;
      console.log(this.list._id);
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>