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
  11
    <van-cell-group>
      <!-- 输入任意文本 -->
      <van-field v-model="user.username" label="用户名" />
      <van-field v-model="user.nickname" label="昵称" />
      <van-field v-model="user.gender" label="性别" />
      
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="digit" type="digit" label="整数" />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field v-model="number" type="number" label="数字" />
    
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
      username: '',
      nickname:'',
      gender: '',

      number: '',
      // 上面是vant field自带的方法
      user:{},//盛放获取到的用户信息
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
      shis.user =res.userInfo
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