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
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
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
      area:area,
      
    };
  },
  methods: {
    goback(){
      this.$router.go(-1)
    },
    onSave() {  //保存按钮
      Toast("save");
    },
    onDelete() {  //删除
      Toast("delete");
    },
    
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>