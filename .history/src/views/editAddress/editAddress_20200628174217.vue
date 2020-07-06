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
    onSave(content) {
      // 是方法自带 content 全部表单内容
      this.list = content;
      //  增加收货地址(post)   getaddress()
      this.$api
        .getaddress(this.list)
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