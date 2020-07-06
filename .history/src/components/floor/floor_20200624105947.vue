<template>
  <div class="floor-box">
    <!--1F-->
    <div class="mg-tb10 ">
      <div class="i-box pd-t10">
        <i>1F</i> 休闲食品
      </div>
    </div>
    <div class="floor">
      <div v-for="(item,index) in floor1" :key="index">
        <div v-if="index<1">
          <img :src="item.image" alt class="img1" />
        </div>
        <div v-if="index>=1">
          <img :src="item.image" alt class="img2" />
        </div>
      </div>
    </div>
    <!--2F-->
    <div class="mg-tb10">
      <div class="i-box">
        <i>2F</i> 休闲食品
      </div>
    </div>
    <div class="floor">
      <div v-for="(item,index) in floor2" :key="index">
        <div v-if="index<1">
          <img :src="item.image" alt class="img1" />
        </div>
        <div v-if="index>=1">
          <img :src="item.image" alt class="img2" />
        </div>
      </div>
    </div>
    <!--3F-->
    <div class="mg-tb10">
      <div class="i-box">
        <i>3F</i> 休闲食品
      </div>
    </div>
    <div class="floor">
      <div v-for="(item,index) in floor3" :key="index">
        <div v-if="index<1">
          <img :src="item.image" alt class="img1" />
        </div>
        <div v-if="index>=1">
          <img :src="item.image" alt class="img2" />
        </div>
      </div>
    </div>
    <!--热销商品-->
    <div class="mg-tb10">
      <div class="i-box">休闲食品</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor1: {
      type: Array,
      default: Array => []
    },
    floor2: {
      type: Array,
      default: Array => []
    },
    floor3: {
      type: Array,
      default: Array => []
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.floor-box {
  margin-left: 6px;
  margin-top: 15px;
}
.floor {
  width: 99%;
  height: 300px;
  margin: 0 auto;
}
.img1 {
  width: 170px;
  height: 200px;
  float: left;
}
.img2 {
  width: 170px;
  height: 100px;
  float: left;
  border-bottom: 1px solid rgb(241, 216, 216);
  border-left: 1px solid rgb(241, 216, 216);
}

i {
  width: 15px;
  height: 15px;
  background: red;
  border-radius: 50%;
  color: rgb(241, 216, 216);
}
.i-box {
  margin-left: 130px;
  color: red;
}
</style>