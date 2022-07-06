import request from '@/utils/request'

// 热搜列表
export const hostSearch = () => request({
    url:'/search/hot'
})

// 搜索结果列表
export const searchResult = params => request({
    url:'/cloudsearch',
    params
})