import axios from '@/utils/request'


import request from '@/utils/request'

// 推荐歌单接口
export const recommendMusic= params => request({
    // 默认GET请求 可以不写
    url:'/personalized',
    params
})

// 最新音乐接口
export const newusic= params => request({
    url:'/personalized/newsong',
    params
})



/* function recommendMusic (params){
    return axios({
        url:'',
        params
    })
} */