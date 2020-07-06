<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>评价晒图</div>
      <div></div>
    </div>
    <van-divider />

    <div class="fl j-around">
      <div>
        <img :src="list.image_path" alt />
      </div>
      <div>
        <div class="mg-b20">商品评分</div>
        <div class="mg-t20">
        <!--五角星评分-->
          <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" />
        </div>
      </div>
      <div></div>
    </div>
    <div>
    <!--文本域输入框-->
      <textarea name="DIVCSS5" cols="45" placeholder="分享您的购买体验吧~~" rows="10"> </textarea>
    </div>
    <van-checkbox v-model="checked" class="mg-l10 mg-tb10" checked-color="#07c160">匿名评价</van-checkbox>
    <van-button type="primary" class="mg-r10 mg-l10 mg-t20" block>发表评论</van-button>
  </div>
</template>

<script>
import { Rate } from "vant"; //引入vant rate评分
import { Uploader } from 'vant'; //文件上传
import { Checkbox, CheckboxGroup } from 'vant'; //复选框
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      list: {}, //接收从待评价跳转路由传过来的整个对象
      value: 5,
      checked: false,
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    goback() {
      this.$router.go(-1);
    },
    // 17. 商品评价(post) /goodsOne/comment 参数: id: 商品cid rate: 分数 content: 内容
    // anonymous: 是否匿名 / _id: 商品的_id order_id: 商品的order_id image: []
    getcomment() {}
  },
  mounted() {
    //接收从待评价跳转路由传过来的整个对象
    this.list = this.$route.query.list;
    console.log(this.list);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
img {
  width: 85px;
}
.van-uploader {
  position: relative;
  top:-85px
}
</style>