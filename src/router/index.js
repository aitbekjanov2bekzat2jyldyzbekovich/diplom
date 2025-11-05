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
      path: '/auth/:id',
      name: 'auth',
      component: () => import('../views/Auth.vue'),
      meta: { mainRout: 'auth' },
      beforeEnter: (to, from, next) => {
        const validIds = ['sign-in', 'sign-up']
        if (validIds.includes(to.params.id)) {
          next()
        } else {
          next({ name: 'NotFound' }) // перенаправляем на 404
        }
      },
    },
    {
      path: '/cours',
      name: 'cours',
      component: () => import('@/views/Cours.vue'),
      meta: { mainRout: 'cours' },
    },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
    {
      path: '/cours/:name',
      name: 'test',
      component: () => import('@/views/Test.vue'),
      meta: { mainRout: 'cours' },
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const el = document.querySelector(to.hash)
          if (el) {
            resolve({ el, behavior: 'smooth' })
          } else {
            resolve({ left: 0, top: 0 })
          }
        }, 200) // ждем рендер компонента
      })
    }
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
