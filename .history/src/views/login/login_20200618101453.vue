<template>
  <div class="img">
    <div class="contente">
      <!-- 输入任意文本 -->
      <van-field v-model="text" placeholder="Username" />
      <!-- 输入密码 -->
      <van-field v-model="password" type="password" placeholder="Password" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" label="手机号码" placeholder="仅注册需要" />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="digit" type="text" label="短信验证码" placeholder="仅注册需要" />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field v-model="number" type="texte" label="验证码" />
      
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      tel: "",
      text: "",
      digit: "",
      number: "",
      password: ""
    };
  },
  methods: {
    // 25. 注册(post) /register 参数: nickname: 用户名 password:密码  verify:验证码
    getregister(nickname, password, verify) {
      this.$api
        .getregister(nickname, password, verify)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getregister;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  background:url('../../assets/login3.jpg') ;
  width: 100%;
  height: 500px;
}
</style>  