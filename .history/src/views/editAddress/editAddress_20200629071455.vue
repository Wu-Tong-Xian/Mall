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
      if (this.list._id !== undefined) {
        this.list = content;
        this.$aip
          .postAddress({
            name: this.list.name,
            tel: this.list.tel,
            isDefault: this.list.isDefault,
            province: this.list.province,
            city: this.list.city,
            county: this.list.county,
            addressDetail: this.list.addressDetail,
            areaCode: this.list.areaCode,
            id: this.list._id
          })
          .tehn(ers => {
            Toast.success("地址修改成功");
            //如果这只了默认选中 ，就发设为默认选中的请求
            // 21. 设置默认收货地址(post) /setDefaultAddress 参数: id: 地址id
            // if(content.isDefault ===true){
            //   this.$api.setDefaultAddress(shis.list_id)
            // }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        //保存输入的信息
        // 增加收货地址(post) /address 参数: name:用户名 tel:电话 address:(省+市+区+详情地址) isDefault:是否默认
        // province:省 city:市 county:区 addressDetail:详情地址， areaCode:地区代码 id:修改地址时候要传id
        this.coutent = this.content;
        this.$api
          .postAddress({
            name: content.name,
            tel: content.tel,
            address: `${content.province}${content.city}${content.county}${content.addressDetail}`,
            isDefault: content.isDefault,
            province: content.province,
            city: content.city,
            county: content.county,
            addressDetail: content.addressDetail,
            areaCode: content.areaCode
          })
          .then(res => {
            if (res.code === 200) {
              Toast("新增地址成功");
              this.$router.go(-1);
            }
          })
          .catch(err => {
            console.log(err);
          });
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
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>