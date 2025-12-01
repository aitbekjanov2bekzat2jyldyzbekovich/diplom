import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/appStore'
import { getAuth } from 'firebase/auth'
import { auth } from '@/firebase/firebase'

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
      beforeEnter: async (to, from, next) => {
        const validIds = ['sign-in', 'sign-up']

        if (!validIds.includes(to.params.id)) {
          return next({ name: 'NotFound' })
        }
        const user = await new Promise((resolve) => {
          const unsubscribe = auth.onAuthStateChanged((u) => {
            unsubscribe()
            resolve(u)
          })
        })

        if (user && user.emailVerified) {
          return next('/')
        }
        next()
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
      meta: { mainRout: 'cours', requiresAuth: true, requiresVerifiedEmail: true },
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
        }, 200)
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
router.beforeEach(async (to, from, next) => {
  const appStore = useAppStore()
  const auth = getAuth()
  const user = auth.currentUser

  if (to.meta.requiresAuth) {
    if (!user) {
      appStore.message(
        'Пожалуйста, выполните авторизацию, чтобы продолжить использование сервиса.',
        'yellow',
      )
      return next({ path: '/auth/sign-in' })
    }

    try {
      await user.reload()
    } catch (error) {
      appStore.validate(error)
      return next({ path: '/auth/sign-in' })
    }

    if (to.meta.requiresVerifiedEmail && !user.emailVerified) {
      appStore.message('Пожалуйста, подтвердите ваш email.', 'yellow')
      return next({ path: '/auth/sign-in' })
    }
  }

  next()
})

export default router
