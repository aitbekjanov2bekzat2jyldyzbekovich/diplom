import { defineStore } from 'pinia'
import { auth } from '@/firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import router from '@/router'

export const useAppStore = defineStore('app', {
  state: () => ({
    sizeWindow: window.innerWidth,
    alert: [],
    user: null,
    error: {
      email: '',
      password: '',
    },
    vallue: {
      email: '',
      password: '',
    },
  }),
  actions: {
    async login() {
      try {
        const res = await signInWithEmailAndPassword(auth, this.vallue.email, this.vallue.password)
        this.user = res.user
        console.log(res)
      } catch {}
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
    validate(err) {
      console.log(err)
    },
  },
})
