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
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
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
    //保存
    onSave(content) {      // 是方法自带 content 全部表单内容
      // 增加收货地址(post) /address 参数: name:用户名 tel:电话 address:(省+市+区+详情地址) isDefault:是否默认
      // province:省 city:市 county:区 addressDetail:详情地址， areaCode:地区代码 id:修改地址时候要传id
      this.coutent =this.content
      this.$api
        .getaddress({
          name:content.name,
          tel:content.tel,
          address:`${content.province}${content.city}${content.county}${content.addressDetail}`,
          isDefault:content.isDefault,
          province:content.province,
          city:content.city,
          county:content.county,
          addressDetail:content.addressDetail,
          areaCode:content.areaCode,
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },

    onDelete() {
      //删除
      Toast("delete");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>