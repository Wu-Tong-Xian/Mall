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
      <div class="box-fl">
        <div>
          <van-field
            v-model="verify"
            type="text"
            class="van-field-1"
            required
            label="验证码"
            placeholder="请输入验证码"
          />
        </div>
        <div @click="getverify1" class="verify1">
          <div v-html="verify1"></div>
        </div>
      </div>
      <div class="fl">
        <van-button type="primary" class="van-button-1" @click='login'>登录</van-button>
        <van-button type="danger" class="van-button-2" @click='register'>注册</van-button>
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
      verify: "", //输入绑定的验证码
      verify1: "" // 用于接收验证码
    };
  },
  methods: {
    // 25. 注册(post) /register 参数: nickname: 用户名 password:密码  verify:验证码
    register(){
      this.$api
        .getregister(this.nickname,this.password,this.verify)
        .then(res => {
          console.log(res);
          if(res.code ===200){
            this.$toast(res.msg)
            this.$router.push('/')
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    login(){

    },

    back() {
      this.$router.go(-1);
    },
    
    // 18. 获取登录注册默认验证码(get)
    // /verify
    getverify() {
      this.$api
        .getverify()
        .then(res => {
          this.verify1 = res;
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 点击验证码再次获取验证码
    getverify1() {
      this.getverify();
    }
  },
  mounted() {
    // 获取验证码
    this.getverify();
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
.box-fl {
  display: flex;
}
.verify1 {
  padding-top: 10px;;
}
</style>  