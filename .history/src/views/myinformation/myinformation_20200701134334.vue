<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>个人资料</div>
      <div></div>
    </div>
    <van-divider />
    <van-cell-group>
      <!-- 输入任意文本 -->
      <van-field v-model="text" label="文本" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" label="手机号" />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="digit" type="digit" label="整数" />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field v-model="number" type="number" label="数字" />
      <!-- 输入密码 -->
      <van-field v-model="password" type="password" label="密码" />
    </van-cell-group>
  </div>
</template>

<script>
import { Field } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value:'',
      tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    // 14. 获取用户信息(post) /queryUser
  getqueryUser(){
    this.$api.getqueryUser().then(res =>{
      console.log(res);
    }).catch(err =>{
      console.log(err);
    })
  }
  },
  mounted() {
    this.getqueryUser()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>