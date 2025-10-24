import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/Main.vue'),
      meta: { mainRout: 'main' },
    },
    {
      path: '/cours',
      name: 'cours',
      component: () => import('@/views/Cours.vue'),
      meta: { mainRout: 'cours' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Cours.vue'),
      meta: { mainRout: 'login' },
    },
    {
      path: '/cours/:name',
      name: 'test',
      component: () => import('@/views/Test.vue'),
      meta: { mainRout: 'cours' },
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})
router.afterEach((to) => {
  if (to.path === '/' && to.hash === '#about-app') {
    to.meta.mainRout = 'aboutApp'
  } else if (to.path === '/') {
    to.meta.mainRout = 'main'
  }
})

export default router
