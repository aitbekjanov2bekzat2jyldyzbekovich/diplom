import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/Main.vue'),
      meta: { breadcrumb: 'Главная' },
    },
    {
      path: '/cours',
      name: 'cours',
      component: () => import('@/views/Cours.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Cours.vue'),
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

export default router
