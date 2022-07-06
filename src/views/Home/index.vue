<template>
  <div class="home">
    <!-- 歌单推荐 -->
    <p class="title">推荐歌单</p>
    <van-row type="flex" justify="space-around" gutter="6">
      <van-col span="8" v-for="item in songList" :key="item.id">
        <van-image width="100%" height="150px" :src="item.picUrl" />
        <p class="songTitle">{{ item.name }}</p>
      </van-col>
    </van-row>

    <!-- 最新音乐 -->
    <div class="cellItem">
      <p class="title newMusic">最新音乐</p>
      <song-item
        :name="item.name"
        :author="item.song.artists[0].name"
        :id="item.id"
        v-for="item in newMusic"
        :key="item.id"
      ></song-item>
    </div>
  </div>
</template>

<script>
import { recommendMusicAPI, newMusicAPI } from "@/api";
import SongItem from "@/components/SongItem.vue";
export default {
  components: { SongItem },
  data() {
    return {
      songList: [],
      newMusic: [],
    };
  },
  created() {
    this.getData();
    this.getNewMusic();
  },
  methods: {
    //网络请求
    // 首页推荐歌单接口
    async getData() {
      let res = await recommendMusicAPI({ limit: 6 });
      // console.log(res.data.result);
      this.songList = res.data.result;
    },
    // 首页推荐歌单接口
    async getNewMusic() {
      let res = await newMusicAPI({ limit: 20 });
      console.log(res.data.result);
      this.newMusic = res.data.result;
    },
  },
};
</script>

<style scoped>
.songTitle {
  font-size: 12px;
}
.title {
  background-color: rgb(244, 241, 241);
  margin-top: 0;
  padding: 5px;
  font-size: 12px;
}

.newMusic {
  margin-top: 20px;
}
.cellItem {
  margin-bottom: 50px;
}
</style>