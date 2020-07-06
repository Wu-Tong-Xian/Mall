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

    <div v-for="(item,index) in collect" :key="item.id" class="p-r">
    <!-- 如果商品信息只有name -->
      <div v-if="item.name === true">
        <van-card
          @click="godetails(item.id,item)"
          :price="item.present_price"
          :title="item.name"
          :thumb="item.image_path"
        />
        <div @click="del(index)" class="del">
          <van-icon name="close" />
        </div>
      </div>
      <!-- 如果商品信息有goodsname -->
      <div v-else-if="item.goodsName ===true">
        <van-card
          @click="godetails(item.id,item)"
          :price="item.present_price"
          :title="item.goodsname"
          :thumb="item.image_path"
        />
        <div @click="del(index)" class="del">
          <van-icon name="close" />
        </div>
      </div>
      <div v-else>
         <van-card
          @click="godetails(item.id,item)"
          :price="item.present_price"
        />
        <div @click="del(index)" class="del">
          <van-icon name="close" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Card } from "vant";
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
    del(index) {
      // 获取通过模块化方法（写在utils）存起来的收藏商品
      this.collect = JSON.parse(localStorage.getItem("collect"));
      // 用数组的方法清除点击这一项
      this.collect.splice(index, 1);
      // 把上面做了操作的剩余收藏 转换为JSon字符串 并通过localStorage存起来 就实现了页面刷新
      localStorage.setItem("collect", JSON.stringify(this.collect));
    },
    godetails(id, item) {
      this.$router.push({ name: "details", query: { id: id } });
      // 模块化方法 存储最近浏览(跳转到详情页就算)
      this.$utils.browse(item);
    }
  },
  mounted() {
    // 获取通过模块化方法（写在utils）存起来的收藏商品
    this.collect = JSON.parse(localStorage.getItem("collect"));
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