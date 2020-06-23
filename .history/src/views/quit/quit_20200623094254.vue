<template>
  <div>退出登录</div>
</template>

<script>
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
  title: '退出提示',
  message: '您确定要退出登录',
})
  .then((res) => {
    this.$api
        .getloginOut()
        .then(res => {
          console.log(res);

        })
        .catch(err => {
          console.log(err);
        });
    }
  })
  .catch(() => {
    // on cancel
  });

      
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>