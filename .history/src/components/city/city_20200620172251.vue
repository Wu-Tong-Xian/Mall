<template>
  <div class="city">
    <!-- 在首页组件做判断 如果加载了地址就显示当前地址 并且传参-->
    <div v-if="city" class="fz14 mg-l10 " @click="goChoosecity(city)">
      <van-icon name="location"  />
      {{city}}
    </div>
    <!-- 如果没有加载地址 就显示定位中 并且传参-->
    <div v-else class="fz14 col" @click="goChoosecity(city)">
      <van-loading size="24px">定位中</van-loading>
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
      city: ""
    };
  },
  methods: {
    // 跳转到城市列表页面 并且把定位城市传过去
    goChoosecity(val) {
      this.$store.state.usercity = val;
      this.$router.push({ name: "choosecity" });
    }
  },
  mounted() {
    // 如果热门城市为空
    if (this.usercity === "") {
      // 如果localStorage 存储有热门城市
      if (localStorage.getItem("usercity")) {
        // 把localStorage 存储的热门城市  赋值给 vuex存储的usercity  留到设置地址的时候用
        this.$store.state.usercity = localStorage.getItem("usercity");
        // 把localStorage存储的值给 当前地址
        this.city = localStorage.getItem("usercity");
        // 否则用高德地图API的方法 获取到当前地址
      } else {
        let _this = this;
        AMap.plugin("AMap.Geolocation", function() {
          var geolocation = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
            // 设置定位超时时间，默认：无穷大
            timeout: 10000,
            // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
            buttonOffset: new AMap.Pixel(10, 20),
            //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            zoomToAccuracy: true,
            //  定位按钮的排放位置,  RB表示右下
            buttonPosition: "RB"
          });
          geolocation.getCurrentPosition();
          AMap.event.addListener(geolocation, "complete", onComplete);
          AMap.event.addListener(geolocation, "error", onError);
          function onComplete(data) {
            // console.log(data);
            // data是具体的定位信息
            _this.city = data.addressComponent.city;
            _this.$store.state.usercity = _this.city;
            localStorage.setItem("usercity", _this.city);
          }
          function onError(data) {
            // 定位出错
          }
        });
      }
    } else {
      this.city = this.usercity;
    }
  },
  watch: {},
  computed: {
    usercity() {
      return this.$store.state.usercity;
    }
  }
};
</script>

<style scoped lang='scss'>
.city {
  width: 90px;
  height: 28px;
  padding-top: 10px;
  
}
</style>