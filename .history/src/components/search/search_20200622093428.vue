
    <div class="box2">
      <van-search v-model="inputs" show-action placeholder="请输入搜索关键词">
        {{inputs}}
        <template #action>
          <div @click="onSearch">返回</div>
        </template>
      </van-search>
    </div>
    