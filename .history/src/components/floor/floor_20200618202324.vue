<template>
  <div class="floor-box">
    <div >
      <div class="mg-tb10"><i>1F</i> 休闲食品</div>
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
 margin-top: 15px;
}

.img1 {
  width: 200px;
}
i {
  width: 15px;
  height: 15px;
  background: red;
  border-radius: 50%;
  color: rgb(241, 216, 216);
}
</style>