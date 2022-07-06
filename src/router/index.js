import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/layout'
  },
  {
    path: '/layout',
    component: () => import('../views/Layout'),
    redirect:'/layout/home',
    children:[
      {
        path:'home',
        component:()=>import('../views/Home'),
        meta:{    // meta 保存路由对象的额外信息
          title:'首页'
        }
      },
      {
        path:'search',
        component:()=>import('../views/Search'),
        meta:{
          title:'搜索'
        }
      },
    ]
  },
  {
    path:'/play',
    component:() => import('@/views/Play')
  }
]

const router = new VueRouter({
  routes
})

export default router
