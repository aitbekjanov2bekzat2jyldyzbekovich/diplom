import { defineStore } from 'pinia'
import router from '@/router'

export const useAppStore = defineStore('app', {
  state: () => ({
    sizeWindow: window.innerWidth,
    alert: [],
  }),
  actions: {
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
  },
})
