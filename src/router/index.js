import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/components/HelloWorld'),
      children: [
        {
          //关注
          path: '/follow',
          component: () => import('@/page/follow'),
        },
        {
          //推荐
          path: '/recommend',
          component: () => import('@/page/recommend'),
        },
        {
          //热榜
          path: '/hotList',
          component: () => import('@/page/hotList'),
        },
        {
          //视频
          path: '/video',
          component: () => import('@/page/video'),
        },
      ]
    }
  ]
})
