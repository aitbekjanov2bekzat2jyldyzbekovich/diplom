import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/appStore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
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

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
    {
      path: '/cours/all',
      name: 'recommendation',
      component: () => import('@/views/Recommendation.vue'),
      meta: { mainRout: 'cours' },
    },
    {
      path: '/cours/search',
      name: 'search',
      component: () => import('@/views/Search.vue'),
      meta: { mainRout: 'cours' },
    },
    {
      path: '/cours/my-profile',
      name: 'myProfile',
      component: () => import('@/views/MyProfile.vue'),
      meta: { mainRout: 'cours', requiresAuth: true, requiresVerifiedEmail: true },
    },
    {
      path: '/codeEditor/:id/:lesson/:tab',
      name: 'codeEditor',
      component: () => import('@/views/CodeEditor.vue'),
      meta: { mainRout: 'cours', requiresAuth: true, requiresVerifiedEmail: true },
    },
    {
      path: '/cours/create-cours',
      name: 'createCours',
      component: () => import('@/views/CreateCours.vue'),
      meta: { mainRout: 'cours', requiresAuth: true, requiresVerifiedEmail: true },
    },
    {
      path: '/cours/my-cours',
      name: 'myCours',
      component: () => import('@/views/MyCours.vue'),
      meta: { mainRout: 'cours', requiresAuth: true, requiresVerifiedEmail: true },
    },
    {
      path: '/cours/page/:id',
      name: 'cours',
      component: () => import('@/views/Cours.vue'),
      meta: { mainRout: 'cours', requiresAuth: true, requiresVerifiedEmail: true },
    },
    {
      path: '/cours/my-follow',
      name: 'follow',
      component: () => import('@/views/myFollowing.vue'),
      meta: { mainRout: 'cours', requiresAuth: true, requiresVerifiedEmail: true },
    },
    {
      path: '/cours/user-profile/:uid',
      name: 'userProfile',
      component: () => import('@/views/UserProfile.vue'),
      meta: { mainRout: 'cours', requiresAuth: true, requiresVerifiedEmail: true },
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    // если нажали "назад"
    if (savedPosition) {
      return savedPosition
    }

    // если есть #anchor
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const el = document.querySelector(to.hash)
          if (el) {
            resolve({
              el,
              behavior: 'smooth',
            })
          } else {
            resolve({ top: 0 })
          }
        }, 200)
      })
    }

    // если обычный переход — скролл наверх
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
function getCurrentUser() {
  const auth = getAuth()

  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    })
  })
}

router.beforeEach(async (to, from, next) => {
  const appStore = useAppStore()
  const auth = getAuth()

  const user = auth.currentUser ?? (await getCurrentUser())

  if (to.meta.requiresAuth) {
    if (!user) {
      appStore.message(
        'Пожалуйста, выполните авторизацию, чтобы продолжить использование сервиса.',
        'yellow',
      )
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
