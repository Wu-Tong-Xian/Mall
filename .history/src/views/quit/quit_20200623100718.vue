<template>
  <div class="quit-bg">
    <van-button type="danger" @click='goquit'>危险按钮</van-button>
  </div>
</template>

<script>
import { Dialog } from 'vant';
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
      }) .then(res => {
          this.$api
        .getloginOut()
        .then(res => {
          if(cood ===1){
            
          }
          
        })
        .catch(err => {
          console.log(err);
        });
        })
        .catch(() => {
          console.log('我就知道你不会离开我');
        });

      
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.quit-bg {
  background:url('../../assets/login3.jpg');
  width: 100%;
  height:700px;
 
}
</style>