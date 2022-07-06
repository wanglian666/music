// 统一导出接口供外部使用

// 按需导入
import {recommendMusic,newusic} from '@/api/Home'

import {hostSearch,searchResult} from '@/api/Search'

import {getSongById,getLyricById} from '@/api/Play'

export const recommendMusicAPI = recommendMusic;    // 首页推荐歌单的api
export const newMusicAPI = newusic;    // 首页最新音乐的api


// 热门搜索
export const hostSearchAPI = hostSearch;
export const searchResultAPI = searchResult;

export const getSongByIdAPI = getSongById;
export const getLyricByIdAPI = getLyricById;
