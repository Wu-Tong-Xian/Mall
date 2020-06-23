<template>
  <div class="quit-bg">
    <van-icon class="goback" @click="goback" name="arrow-left" />
    <div class="jy fz14">
      <div class="col3 mg-tb10 t-center">是哪里做的不够好,</div>
      <div class="col3 t-center">让你不满意要离开我了吗</div>
      <div class="col3 mg-tb10 t-center">请点击左下角给出建议,</div>
      <div class="col3 t-center">我们一定做出改变让您更加满意!</div>
    </div>

    <div class="quit">
      <van-button type="danger" @click="goquit">退出登录</van-button>
    </div>
    <div class="sj-box">
      <div class="col3"><van-icon class="o-icon" name="comment-o" />收集箱</div>
      <div class="col3 fz14">感谢您的反馈!</div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    // 13. 退出登录(post)  /loginOut
    goquit() {
      Dialog.confirm({
        title: "退出提示",
        message: "您确定要退出登录"
      })
        .then(res => {
          this.$api
            .getloginOut()
            .then(res => {
              Toast.fail("退出成功");
              localStorage.removeItem("nickname");
              this.$router.push("/login");
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          Toast.success("我就知道你不会离开我,欢迎您");
        });
    },
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.quit-bg {
  background: url("../../assets/login3.jpg");
  width: 100%;
  height: 700px;
}
.goback {
  color: rgb(17, 245, 245);
  font-size: 30px;
  margin: 20px 0 0 20px;
}
.quit {
  position: relative;
  top: 120px;
  left: 150px;
}
.jy {
  margin-top: 40px;
}
.sj-box {
  position: relative;
  top: 250px;
  left: 50px;
}
.o-icon {
  font-size:50px;
  color: rgb(101, 216, 25);
}
</style>