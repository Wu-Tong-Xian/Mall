<template>
  <div class="quit-bg">
    <van-icon class="goback" @click="goback" name="arrow-left" />
    <div class='col3 t-center'>是哪里做的不够好, </div>
    <div class='col3 t-center'>让你不满意要离开我了吗 </div>
    <div class='col3 t-center'>请点击左下角给出建议 </div>
    <div class='col3 t-center'>我们一定做出改变让您更加满意 </div>
    <div class="col3 jy">建议收集箱</div>
    <div class="quit"><van-button type="danger" @click="goquit">危险按钮</van-button></div>
  </div>
</template>

<script>
import { Dialog } from "vant";
import { Toast } from 'vant';
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
                localStorage.removeItem('nickname')
                this.$router.push('/login')
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch((err) => {
          Toast.success("我就知道你不会离开我,欢迎您");
        });
    },
    goback() {
      this.$router.go(-1);
    },
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
  color: aqua;
 font-size: 30px;
 margin:20px 0 0 20px ;
}
.quit {
  position: relative;
  top:200px;
  left: 150px;
}
jy {

}
</style>