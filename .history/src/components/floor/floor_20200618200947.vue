<template>
  <div class="floor-box">
    <div class="fl ">
      <div>1F</div>
      <div>休闲食品</div>
    </div>
    <div class="floor">
      <div v-for="(item,index) in floor1" :key="index">
        <div class="img-box">
          <img :src="item.image" alt class="img1" />
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
}
.floor {
  
}
.img1 {
  width: 200px;
}
</style>