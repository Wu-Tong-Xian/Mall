<template>
  <div>
    <!-- 头部 -->
    <div class="fl j-around mg-t10">
      <div>
        <van-icon name="arrow-left" @click="goback" />
      </div>
      <div>最近浏览</div>
      <div></div>
    </div>
    <van-divider />
    <div v-if="browse.length ===0" class="t-center mg-t20">暂无浏览历史商品~~</div>
    <div v-else>
      <div v-for="(item,index) in browse" :key="index" class="p-r">
        <van-card
          @click="godetails(item)"
          :price="item.mallPrice "
          :title="item.goodsName"
          :thumb="item.image"
        />
        <div @click="del(item)" class="del">
          <van-icon name="close" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import  uniqWith  from 'lodash/uniqWith';
import  uniqWith  from 'lodash/isEqual';
import  lodash from 'lodash';
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      browse: [],
      nickname:'',
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    del(index) {
       Dialog.confirm({
  title: '删除提示',
  message: '确定要删除',
})
  .then(() => {
     // 获取通过模块化方法（写在utils）存起来的收藏商品
      this.browse = JSON.parse(localStorage.getItem("browse"));
      // 用数组的方法清除点击这一项
      this.browse.splice(index, 1);
      // 把上面做了操作的剩余收藏 转换为JSon字符串 并通过localStorage存起来 就实现了页面刷新
      localStorage.setItem("browse", JSON.stringify(this.browse));
      Toast.success('删除成功');
  })
  .catch(() => {
    Toast.success('已取消删除');
  });
      
    },
    godetails(item) {
      // 有的商品只有goodsId 有的是id
      if(item.goodsId){
        this.$router.push({name:'details',query:{id:item.goodsId}})
         // 模块化方法 存储最近浏览(跳转到详情页就算)
      this.$utils.browse(item)
      }else {
        this.$router.push({name:'details',query:{id:item.id}})
         // 模块化方法 存储最近浏览(跳转到详情页就算)
      this.$utils.browse(item)
      }
    }
  },
  mounted() {
    
    // 获取通过模块化方法（写在utils）存起来的收藏商品
    this.browse = JSON.parse(localStorage.getItem("browse"));
    _.unionWith(objects, others, _.isEqual);
    console.log(this.browse);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.del {
  position: absolute;
  left: 340px;
  top: 75px;
}
</style>