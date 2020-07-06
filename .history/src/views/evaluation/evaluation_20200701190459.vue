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
        <div class="t-center mg-t20" v-if="list.length ===0">
          <div>暂无可评价分享的商品,快去购物吧</div>
          <div @click="gohome" class="mg-t20">
            <img src="../../可能要用的图片/shop.png" alt />
          </div>
        </div>
        <div v-else>
          <div v-for="item in list" :key="item.id">
            <van-card :title="item.name" :thumb="item.image_path">
              <template #footer>
                <van-button size="mini">
                  <van-button
                    @click="toEvaluate(item)"
                    round
                    plain
                    icon="chat"
                    size="small"
                    type="danger"
                  >评价晒图</van-button>
                </van-button>
              </template>
            </van-card>
          </div>
        </div>
      </van-tab>
      <!--已评价-->
      <van-tab title="已评价">  
         <div class="fl">
         <!--用户头像-->
            <div>
            <!--用户名称-->
              <div></div>
              <!--用户评分-->
              <div></div>
            </div>
            <!--评论时间-->
            <div></div>
         </div>
         <!--评价内容-->
         <div>评价内容:</div>
      </van-tab>
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
      list: [], //未评价
      completed: [] //已评价
    };
  },
  methods: {
    // 28. 查询已评价(get) /alreadyEvaluated
    getalreadyEvaluated() {
      this.$api
        .getalreadyEvaluated()
        .then(res => {
          this.completed = res.data.list;
          console.log(this.completed);
        })
        .catch(err => {
          console.log(err);
        });
    },
    goback() {
      this.$router.go(-1);
    },
    // 29. 查询未评价(get) /tobeEvaluated
    gettobeEvaluated() {
      this.$api
        .gettobeEvaluated()
        .then(res => {
          this.list = res.data.list;
          // console.log(this.list);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 去评价
    toEvaluate(list) {
      this.$router.push({ name: "toEvaluate", query: { list } });
    },
    gohome() {
      this.$router.push("/");
    }
  },
  mounted() {
    this.gettobeEvaluated();
    this.getalreadyEvaluated();
    // 获取用户信息
    localStorage.setItem('userInfo')
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
.van-card {
  font-size: 16px;
  border-bottom: 1px solid rgb(207, 181, 181);
}
</style>