import { defineStore } from 'pinia'
import { auth } from '@/firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import router from '@/router'

export const useAppStore = defineStore('app', {
  state: () => ({
    sizeWindow: window.innerWidth,
    alert: [],
    user: null,
    error: null,
    val: {},
  }),
  actions: {
    async login(email, password) {
      this.error = null
      try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        this.user = res.user
        console.log(res)
      } catch (err) {
        this.error = err.message
        console.log(err.message)
      }
    },
    resizeWindow() {
      window.addEventListener('resize', () => {
        this.sizeWindow = window.innerWidth
      })
    },
    toRout(path) {
      router.push(path)
    },
    message(message, type) {
      this.alert.push({
        message: message,
        type: type,
      })
    },
    validate(email, password) {},
  },
})
