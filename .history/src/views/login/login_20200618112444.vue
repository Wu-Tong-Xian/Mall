<template>
  <div class="img">
    <div>
      <van-icon name="arrow-left" @click="back" />
    </div>
    <div class="contente">
      <van-field label="登录/注册" />
      <!-- 输入任意文本 -->
      <van-field v-model="nickname" required placeholder="username" />
      <!-- 输入密码 -->
      <van-field v-model="password" required type="password" placeholder="password" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field type="tel" label="手机号码" placeholder="仅注册需要" />

      <van-field center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <div class="fl">
        <van-field
          v-model="verify"
          type="text"
          class="van-field-1"
          required
          label="验证码"
          placeholder="请输入验证码"
        />
        <div v-html="11"></div>
      </div>
      <div class="fl">
        <van-button type="primary" class="van-button-1">登录</van-button>
        <van-button type="danger" class="van-button-2">注册</van-button>
      </div>
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
      nickname: "",
      password: "",
      verify: ""
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
    },
    back() {
      this.$router.go(-1);
    },
    // 18. 获取登录注册默认验证码(get)
// /verify
getverify(){
  return service.get(`/verify`)
},
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
  background: url("../../assets/login3.jpg");
  width: 100%;
  height: 600px;
}
.contente {
  margin: 0 auto;
  width: 92%;
  position: relative;
  top: 60px;
}
.van-icon {
  color: red;
  font-size: 26px;
  position: relative;
  left: 20px;
  top: 20px;
}
.van-field {
  padding-top: 30px;
}
// 登录
.van-button-1 {
  margin-top: 20px;
  width: 90px;
}
//注册
.van-button-2 {
  margin-top: 20px;
  width: 90px;
  margin-left: 30px;
}
//验证码
//.van-field-1 {
// width: 300px;
//}
</style>  