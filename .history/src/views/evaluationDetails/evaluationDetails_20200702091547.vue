<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>评价详情</div>
      <div></div>
    </div>
    <van-divider />
    <div v-for="item in completed" :key="item.id">
          <div class="fl j-between fz14">
            <div class="fl j-between">
              <!--用户头像-->
              <div>
                <img :src="userInfo.avatar" class="img2" alt />
              </div>
              <div>
                <!--用户名称-->
                <div class="mg-tb10">{{userInfo.nickname}}</div>
                <!--用户评分-->
                <div><van-rate v-model="item.rate" readonly allow-half void-icon="star" void-color="#eee" /></div>
              </div>
            </div>
            <!--评论时间-->
            <div class="time">{{item.comment_time}}</div>
          </div>
          <!--评价内容-->
          <div>评价内容:{{item.content}}</div>
        </div>
    
  </div>
</template>

<script>
import { Tab, Tabs } from "vant"; //标签页
import { Card } from "vant";  //商品卡片
import { Rate } from 'vant';  //评分
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      active: 0,
      list: [], //未评价
      completed: [] //已评价
      // userInfo:{},//盛放 个人信息
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
          console.log(this.userInfo); //
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
  },
  watch: {},
  computed: {
    // 接收个人信息
    userInfo() {
      return this.$store.state.userInfo;
    }

    // this.$store.state.userInfo = this.user  //把个人信息通过vue存起来
  }
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
.img2 {
  width: 55px;
  border: 1px solid rgb(219, 208, 208);
  border-radius: 50%;
  margin-left: 20px;
}
.time {
  line-height: 65px;
  margin-right: 20px;
}
</style>