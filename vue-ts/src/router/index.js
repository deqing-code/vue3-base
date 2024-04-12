import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/hthome'
    },
    {
      path: '/home',
      component: () => import('@/pages/home/home.vue')
    },
    {
      path: '/hthome',
      component: () => import('@/pages/home/hthome.vue')
    },
    {
      path: '/detail',
      component: () => import('@/pages/detail/detail.vue')
    }
    // {
    //     path: "/favor",
    //     component: () => import("@/views/favor/favor.vue")
    // },
    // {
    //     path: "/order",
    //     component: () => import("@/views/order/order.vue")
    // },
    // {
    //     path: "/message",
    //     component: () => import("@/views/message/message.vue")
    // },
    // {
    //     path: "/search",
    //     component: () => import("@/views/search/search.vue"),
    //     meta: {
    //       hideTabBar: true
    //     }
    //   },
    //   {
    //     path: "/detail/:id",
    //     component: () => import("@/views/detail/detail.vue")
    //   }
  ]
})

export default router
