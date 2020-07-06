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
    <div class="mg-left">github</div>
    <van-divider />
    <div class="fl j-between mg-lr">
      <div class="mg-t20">头像</div>
      <div class="fl j-between">
        <div><img src="../../assets/jpg.png" alt=""></div>
        
      </div>
    </div>
    <van-cell-group>
      <!-- 输入任意文本 -->
      <van-field v-model="user.username" label="用户名" />
      <van-field v-model="user.nickname" label="昵称" />
      <van-field v-model="user.gender" label="性别" />
      
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="user.email"  label="邮箱"  placeholder="请输入邮箱地址" />
      <van-field v-model="time" label="出生年月" />
    </van-cell-group>
    <div class="mobile">
      <div><van-button square type="primary"  @click="getsaveUser" block>保存</van-button></div>
    <div><van-button plain type="primary" class="cancel" @click="cancel" block>取消</van-button></div>
    </div>
  </div>
</template>

<script>
import { Field, Toast } from "vant";  //vant field 方法
import { Form } from 'vant'; //vant 表单方法
import { Button } from 'vant';
import { Toast } from 'vant';
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      username: '',
      nickname:'',
      gender: '',
      email:'',
      time: '',
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
      this.user =res.userInfo
      this.time =`${this.user.year}年${this.user.month}月${this.user.day}日`
      // console.log(object);
    }).catch(err =>{
      console.log(err);
    })
  },
  // 15. 修改保存用户信息(post) //saveUser 参数: gender:性别 year:年 month:月 day:日 id:用户id nickname:昵称
  getsaveUser(){
    this.$api.getsaveUser({
        gender: this.user.gender,
        year: this.user.year,
        month: this.user.month,
        day: this.user.day,
        id: this.user._id,
        nickname: this.user.nickname,
    }).then(res =>{
      console.log(res);
      Toast(res.msg);
    }).catch(err =>{
      console.log(err);
    })
  },
  
  // 取消
  cancel(){

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
.mg-left {
  margin-left: 15px;
}
 img {
   width: 65px;
   height: 65px;
   border-radius: 50%;
   margin-right: 15px;
 }
 .mg-lr {
   margin-left: 15px;
   margin-right: 15px;
 }
 .cente {
   line-height: 65px;
 }
 .mobile {
   margin-top:50px ;
   margin-right: 15px;
   margin-left: 15px;
 }
 .cancel {
   margin-top: 10px;
 }
</style>