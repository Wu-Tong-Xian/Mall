<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>收藏</div>
      <div></div>
    </div>
    <van-divider />
    <div v-if="collect.length ===0" class="t-center mg-t20">暂无收藏商品~~</div>
    <div v-else>
      <div v-for="(item,index) in collect" :key="item.id" class="p-r">
        <!-- 如果商品信息只有name -->
        <div v-if="item.name ">
          <van-card
            @click="godetails(item.id,item)"
            :price="item.present_price"
            :title="item.name"
            :thumb="item.image_path"
          />
          <div @click="del(item,index)" class="del">
            <van-icon name="close" />
          </div>
        </div>
        <!-- 如果商品信息有goodsname -->
        <div v-else-if="item.goodsName">
          <van-card
            @click="godetails(item.id,item)"
            :price="item.present_price"
            :title="item.goodsname"
            :thumb="item.image_path"
          />
          <div @click="del(item,index)" class="del">
            <van-icon name="close" />
          </div>
        </div>
        <div v-else>
          <van-card @click="godetails(item.id,item)" :price="item.present_price" />
          <div @click="del(index)" class="del">
            <van-icon name="close" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uniqWith from "lodash/uniqWith"; //引入  lodash/uniqWith
import isEqual from "lodash/uniqWith"; //引入  lodash/isEqual
import { Card } from "vant"; //卡片
import { Dialog } from "vant"; //弹出框
import { Toast } from "vant"; //请提示
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      collect: []
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    del(item,index) {
      console.log(111);
    //   Dialog.confirm({
    //     title: "删除",
    //     message: "确定要删除吗"
    //   })
    //     .then(() => {
          // 10. 取消收藏(post)  /cancelCollection   参数: id:商品的cid    方法// getCancelCollection
          // 取消收藏
          this.$api.getCancelCollection(item.id).then(res => {
            console.log(res);
            // 弹框提示
            // this.isCollection = 0;
            this.$toast.success(res.msg);
            // 重新查看商品是否被收藏
            this.getisCollection();
          
        })
        .catch(err => {
          console.log(err);
        });
          // // 获取通过模块化方法（写在utils）存起来的收藏商品
          //   this.collect = JSON.parse(localStorage.getItem("collect"));
          //   // 用数组的方法清除点击这一项
          //
          //   // 把上面做了操作的剩余收藏 转换为JSon字符串 并通过localStorage存起来 就实现了页面刷新
          //   localStorage.setItem("collect", JSON.stringify(this.collect));
          //
        // })
        // .catch(() => {
        //   Toast.fail("已取消删除");
        // });
    },
    godetails1(id, item) {
      this.$router.push({ name: "details", query: { id: id } });
      // 模块化方法 存储最近浏览(跳转到详情页就算)
      this.$utils.browse(item);
    }
  },
  mounted() {
    // 获取通过模块化方法（写在utils）存起来的收藏商品
    this.collect = JSON.parse(localStorage.getItem("collect"));
    this.collect = uniqWith(this.collect, isEqual);
    console.log(this.collect);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.del {
  position: absolute;
  left: 340px;
  top: 75px;
}
</style>