<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>评价区</div>
      <div></div>
    </div>
    <van-divider />
    <div>
      <img src="../../可能要用的图片/evaluate.jpg" class="img1" alt />
    </div>
    <!--// vant方法的tab标签页方法-->
    <van-tabs v-model="active" class="evaluate">
      <!--// 待评价-->
      <van-tab title="待评价">
        <div v-for="item in list" :key="item.id">
          <van-card :title="item.name" :thumb="item.image_path">
            <template #footer>
              <van-button size="mini">
                <van-button round plain icon="chat" size="small" type="danger">评价晒图</van-button>
              </van-button>
            </template>
          </van-card>
        </div>
      </van-tab>
      <!--已评价-->
      <van-tab title="已评价"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";
import { Card } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active: 0,
      list: []
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    // 29. 查询未评价(get) /tobeEvaluated
    gettobeEvaluated() {
      this.$api
        .gettobeEvaluated()
        .then(res => {
          this.list = res.data.list;
          console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    },
    goevaluate() {}
  },
  mounted() {
    this.gettobeEvaluated();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img1 {
  width: 100%;
  height: 150px;
}
.van-tabs {
  border-radius: 8px;
}
</style>