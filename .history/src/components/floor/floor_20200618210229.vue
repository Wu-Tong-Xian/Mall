<template>
  <div class="floor-box">
    <div class="mg-tb10">
      <div class="i-box">
        <i>1F</i> 休闲食品
      </div>
    </div>
    <div class="floor">
      <div v-for="(item,index) in floor1" :key="index" >
        <div  v-if="index<1">
          <img :src="item.image" alt class="img1" />
        </div>
        <div  v-if="index>=1">
          <img :src="item.image" alt class="img2" />
        </div>
      </div>
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
  margin-left: 10px;
  margin-top: 15px;
}
.floor {
  width: 99%;
  height: 400px;
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
  border-bottom:1px solid rgb(241, 216, 216);;
  border-left:1px solid rgb(241, 216, 216);;
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
}
</style>