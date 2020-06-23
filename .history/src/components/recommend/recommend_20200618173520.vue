<template>
  <div>

  <div ref='mailDetailBox' class="recommend-box mailDetailBox ">
    <div class="mg-l20 pd-t10">商品推荐</div>
    <div class=" fl j-between">
      <div v-for="(item,index) in recommend" :key="index" >
          <div>  <img :src="item.image" alt class="img" />  </div>
          <div class="t-none text">{{item.goodsName}}</div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "",
  props: {
    recommend: {
      type: Array,
      default: Array => []
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$nextTick(() => {
            let cliW = this.$refs.mailDetailBox.clientWidth;//需要获取当前屏幕的宽度，这样可以让我们没有超出内容部分的在横向滚动时不会滚动
            this.$refs.mailDetailBox.style.width = cliW + 'px'
            this.scroll = new Bscroll(this.$refs.mailDetailBox, {
                click: true,
                eventPassthrough: 'horizontal'//这是代表的横向滚动
            });
       })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 125px;
}
.recommend-box {
  background: #FFFFFF;
}
.text {
  width: 120px;
  font-size: 14px;
  margin-left: 8px;
}
.mailDetailBox{
    position: absolute;
    left:0;
    right:0;
    top:0.52rem;
    bottom:0.56rem;
    overflow: hidden;
   overflow-x: scroll;
 
}
.mailDetailMsg{
    padding:0.1rem 0.14rem;
    font-size:0.153rem;
    line-height: 1.2;
    overflow-x: scroll

</style>