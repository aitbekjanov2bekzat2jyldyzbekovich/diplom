import { defineStore } from 'pinia'
import { auth } from '@/firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import router from '@/router'

export const useAppStore = defineStore('app', {
  state: () => ({
    loader: false,
    sizeWindow: window.innerWidth,
    alert: [],
    user: null,
    student: [],
    error: {
      email: '',
      password: '',
    },
    vallue: {
      email: '',
      password: '',
      userSurname: '',
      userName: '',
      newPassword: '',
      newEmail: '',
    },
  }),
  actions: {
    clearForm() {
      Object.keys(this.vallue).forEach((key) => {
        this.vallue[key] = ''
      })
    },
    validate(err) {
      this.error.email = ''
      this.error.password = ''
      switch (err) {
        case 'auth/invalid-email':
          this.error.email = 'Введите корректный email'
          this.vallue.email = ''
          break
        case 'auth/invalid-credential':
          this.message('Пользователь не найден', 'red')
          this.vallue.email = ''
          this.vallue.password = ''
          this.clearForm()
          break

        case 'auth/missing-password':
          this.error.password = 'Введите пароль'
          this.vallue.password = ''
          break
        case 'auth/too-many-requests':
          this.message('Слишком много попыток, попробуйте позже', 'red')
          this.clearForm()
          break
        case 'auth/network-request-failed':
          this.message('Проверьте интернет-соединение', 'red')
          this.clearForm()
          break

        default:
          this.message(`code: ${err}`, 'red')
          this.clearForm()
          break
      }
    },
    async login() {
      try {
        this.loader = true
        const res = await signInWithEmailAndPassword(auth, this.vallue.email, this.vallue.password)
        this.user = res.user
        console.log(res.user)

        if (res.user.uid) {
          this.toRout('/')
        }
      } catch (err) {
        this.validate(err.code)
      } finally {
        this.loader = false
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
  },
})
