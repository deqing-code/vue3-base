import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
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
      component: () => import('@/pages/detail/detail.vue'),
      meta: { decodeParams: true }
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
router.beforeEach((to, from, next) => {
  // 检查路由参数中是否有需要解码的参数

  // if (to.matched.some((record) => record.meta.decodeParams)) {
  // 使用decodeURIComponent对参数进行解码
  const hash = location.hash
  const href = location.href
  if (hash.includes('_iswebviewpush')) {
    const toPath = to.fullPath
    console.log(toPath)
    alert(toPath)
    history.go(-1)
    return
  } else {
    next() // 必须调用next()来resolve这个钩子
  }

  // const params = Object.fromEntries(
  //   Object.entries(to.params).map(([key, value]) => [key, decodeURIComponent(value)])
  // )

  // 将解码后的参数赋值回to对象
  // Object.assign(to.params, params.stringify())
  // }
  // next()
})

export default router
