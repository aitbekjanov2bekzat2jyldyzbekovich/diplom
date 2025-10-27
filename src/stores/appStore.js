import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    sizeWindow: window.innerWidth,
  }),
  actions: {
    resizeWindow() {
      window.addEventListener('resize', () => {
        this.sizeWindow = window.innerWidth
      })
    },
  },
})
