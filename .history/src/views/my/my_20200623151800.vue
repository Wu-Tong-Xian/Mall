<template>
<div>
<!-- 默认未登录状态 -->
  <div v-if="nickname === null">
    <div class="t-center">会员中心</div>
    <div class="bg">
      <div class="fl j-between">
        <div></div>
        <div><van-icon class="setting-icon" name="setting" /></div>
      </div>
      <div class="m0">
        <div class="img-box"><img src="../../assets/人头像02.png" class="img-02" alt /></div>
      </div>
      <div class="col3 t-center mg-t20" @click="gologin">立即登录</div>
    </div>
  </div>
  <!-- 登录状态 -->
  <div v-else>
    <div class="t-center">会员中心</div>
    <div class="bg">
      <div class="fl j-between">
        <div></div>
        <div><van-icon class="setting-icon" name="setting" /></div>
      </div>
      <div class="m0">
        <div class="img-box"><img src="../../assets/人头像02.png" class="img-02" alt /></div>
      </div>
      <div class="t-center mg-t20 col3">欢迎您:{{nickname}}</div>
      <div class="col3 t-center mg-t20" @click='goquit'>退出登录</div>
    </div>
    <div class="fl j-around">
      <div>
         <van-icon name="cash-on-deliver" class="icon" />
        <div>待付款</div>
      </div>
      <div>     
         <van-icon name="free-postage" class="icon" />
        <div>待发货</div>
      </div>
      <div>
        <van-icon name="logistics" class="icon" />
        <div>待收获</div>
      </div>
      <div @click=>
         <van-icon name="records" class="icon" />
        <div>评价区</div>
      </div>
      <div>
         <van-icon name="certificate" class="icon" />
        <div>已完成</div>
      </div>
    </div>
    <van-divider />
    <div>
      <div class=" fl j-between mg-l20 mg-r20">
          <div class="fl">
            <div><van-icon name="edit" class="icon-o" /></div>
            <div>全部订单</div>
          </div>
          <div>></div>
      </div>
      <van-divider />
      <div class=" fl j-between mg-l20 mg-r20">
          <div class="fl">
            <div><van-icon name="star-o" class="icon-o" /></div>
            <div>收藏商品</div>
          </div>
          <div>></div>
      </div>
      <van-divider />
      <div class=" fl j-between mg-l20 mg-r20">
          <div class="fl">
            <div><van-icon name="location-o" class="icon-o" /></div>
            <div>地址管理</div>
          </div>
          <div>></div>
      </div>
      <van-divider />
      <div class=" fl j-between mg-l20 mg-r20">
          <div class="fl">
            <div><van-icon name="eye-o" class="icon-o" /></div>
            <div>最近浏览</div>
          </div>
          <div>></div>
      </div>
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
      nickname:''
    };
  },
  methods: {
    // 未登录状态的去登录
    gologin(){
      this.$router.push('/login')
    },
    // 以登录状态的退出登录
    goquit(){
      this.$router.push('/quit')
    }
  },
  mounted() {
    this.nickname =localStorage.getItem('nickname')
    console.log(this.nickname);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.bg {
  width: 100%;
  height: 200px;
 
  background: #e30c7b;
}
.setting-icon {
  margin: 0 auto;
  color: rgb(247, 240, 240);
  margin: 8px 8px 0 0;
}
.img-02 {
  width: 60px;
  margin: 10px 0 0 5px;
}
.img-box {
  margin:  0 auto;
  border-radius: 50%;
  background: rgb(243, 245, 242);
  width: 75px;
  height: 75px;
}
.icon {
  font-size: 26px;
  margin-left: 10px;
  margin-top: 20px;
}
.icon-o {
  font-size: 20px;
  margin-right: 5px;
}
</style>