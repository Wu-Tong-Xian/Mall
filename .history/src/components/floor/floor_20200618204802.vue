<template>
  <div class="floor-box">
    <div class="mg-tb10">
      <div class="i-box">
        <i>1F</i> 休闲食品
      </div>
    </div>
    <div class="floor">
      <div v-for="(item,index) in floor1" :key="index">
        <div class="floor-float fl">
          <div class="img-box1" v-if="index<1">
            <img :src="item.image" alt class="img1" />
          </div>
          <div class="img-box2" v-if="index<3 && index>=1">
            <img :src="item.image" alt class="img2" />
          </div>
         <!-- <div class="img-box3" v-if="index>=2">
            <img :src="item.image" alt class="img2" />
          </div> -->
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

.img1 {
  width: 160px;
  height: 250px;
  float: left;
}
.img2 {
  width: 160px;
  height: 123px;
  float: right;
}
.floor-float {
 width: 98%;
 height: 400px;
}
.img-box2{
  
  left: 20px;
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