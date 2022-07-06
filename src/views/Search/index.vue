<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      class="search"
      @input="inputFn"
    />

    <!--显示隐藏 v-if="searchResult.length == 0" -->
    <div class="hot_wrap" v-if="searchResult.length == 0">
      <p class="hotTitle">热门搜索</p>
      <div class="hot_wrap_item">
        <span
          class="hotItem"
          @click="getHot(item.first)"
          v-for="(item, index) in hotSearhList"
          :key="index"
          >{{ item.first }}</span
        >
      </div>
      </div>

      <div class="hot_wrap" v-else>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <p class="hotTitle">最佳匹配</p>
          <song-item
            v-for="item in searchResult"
            :key="item.id"
            :name="item.name"
            :id="item.id"
            author="item.ar[0].name"
          ></song-item>
        </van-list>
      </div>
    </div>
</template>

<script>
import { hostSearchAPI, searchResultAPI } from "@/api";
import SongItem from "@/components/SongItem.vue";
export default {
  components: { SongItem },
  data() {
    return {
      hotSearhList: [],
      value: "p",
      searchResult: [],
      loading: false,
      finished: false,
      page: 1,
    };
  },
  created() {
    this.getHotSearch();
  },
  methods: {
    // 触底加载  分页
    async onLoad() {
      this.page++;
      console.log(this.page);
      let res = await this.getListFn();
      console.log(res);
      this.searchResult = [...this.searchResult, ...res.data.result.songs];
      this.loading = false;
    },
    async getListFn() {
      let res = await searchResultAPI({
        keywords: this.value,
        limit: 10,
        offset: (this.page - 1) * 10, //  偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
      });
      return res;
    },

    async getHotSearch() {
      let res = await hostSearchAPI();
      // console.log(res.data.result.hots);
      this.hotSearhList = res.data.result.hots;
    },

    // 最佳匹配
    async getHot(first) {
      this.value = first;
      let res = await this.getListFn();
      this.searchResult = res.data.result.songs;
    },

    // 输入框搜索
    async inputFn() {
      if (this.value.length === 0) {
        this.searchResult = [];
        return;
      }
      let res = await this.getListFn();
      if (res.data.result.songs === undefined) {
        this.searchResult = [];
        return;
      }
      // console.log(res.data.result.songs);
      this.searchResult = res.data.result.songs;
    },
  },
};
</script>

<style scoped>
.search {
  padding: 0 10px;
}
.hot_wrap {
  padding: 10px;
  color: rgb(143, 167, 198);
  margin-bottom: 20px;
}
.hotTitle {
  font-size: 14px;
}
.hotItem {
  height: 20px;
  display: inline-block;
  line-height: 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
}
</style>