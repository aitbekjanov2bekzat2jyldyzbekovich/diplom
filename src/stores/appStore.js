import { defineStore } from 'pinia'
import { auth } from '@/firebase/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

import router from '@/router'

export const useAppStore = defineStore('app', {
  state: () => ({
    loader: false,
    sizeWindow: window.innerWidth,
    alert: [],
    user: null,

    error: {
      email: '',
      password: '',
      userSurname: '',
      userName: '',
    },
    vallue: {
      email: '',
      password: '',
      userSurname: '',
      userName: '',
      newPassword: '',
      newEmail: '',
      type: 'Студент',
    },
  }),
  actions: {
    async signUp() {
      if (!this.vallue.newPassword.includes(' ')) {
        this.loader = true
        try {
          const res = await createUserWithEmailAndPassword(
            auth,
            this.vallue.newEmail,
            this.vallue.newPassword,
          )
          alert(res.user)
        } catch (err) {
          this.validate(err.code)
        } finally {
          this.loader = false
        }
      } else {
        this.error.password = 'Введите пароль!'
        this.vallue.newPassword = ''
        this.message('Синтаксическая ошибка','red')
      }
    },
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
          this.error.email = 'Введите корректный email!'
          this.vallue.email = ''
          this.vallue.newEmail = ''
          break
        case 'auth/email-already-in-use':
          this.message('Этот email уже зарегистрирован', 'yellow')
          this.vallue.newEmail = ''
          break
        case 'auth/missing-password':
          this.error.password = 'Введите пароль!'
          this.vallue.password = ''
          this.vallue.newPassword = ''
          break
        case 'auth/weak-password':
          this.error.password = 'Минимум 6 символов'
          this.vallue.newPassword = ''
          this.message('Пароль слишком слабый', 'yellow')
        case 'auth/invalid-credential':
          this.message('Пользователь не найден!', 'red')
          this.clearForm()
          break

        case 'auth/too-many-requests':
          this.message('Слишком много попыток, попробуйте позже!', 'yellow')
          this.clearForm()
          break
        case 'auth/network-request-failed':
          this.message('Проверьте интернет-соединение!', 'yellow')
          this.clearForm()
          break

        default:
          this.message(`code: ${err}!`, 'red')
          this.clearForm()
          break
      }
    },
    async login() {
      if (!this.loader) {
        this.loader = true
        try {
          const res = await signInWithEmailAndPassword(
            auth,
            this.vallue.email,
            this.vallue.password,
          )
          this.user = res.user
          if (res.user.uid) {
            this.toRout('/')
          }
        } catch (err) {
          this.validate(err.code)
        } finally {
          this.loader = false
        }
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
