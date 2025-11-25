import { defineStore } from 'pinia'
import { auth, fdb } from '@/firebase/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
} from 'firebase/auth'

import router from '@/router'

export const useAppStore = defineStore('app', {
  state: () => ({
    loader: {
      auth: false,
      user: false,
      isEmail: false,
    },
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
    statusEmail: false,
  }),
  actions: {
    async signUp() {
      if (!this.vallue.newPassword.includes(' ')) {
        this.loader.auth = true
        try {
          const res = await createUserWithEmailAndPassword(
            auth,
            this.vallue.newEmail,
            this.vallue.newPassword,
          )
          await sendEmailVerification(res.user)
          this.message('Письмо с подтверждением отправлено!', 'blue')
        } catch (err) {
          this.validate(err.code)
        } finally {
          this.loader.auth = false
        }
      } else {
        this.error.password = 'Введите пароль!'
        this.vallue.newPassword = ''
        this.message('Синтаксическая ошибка', 'red')
      }
    },
    async login() {
      if (!this.loader.auth) {
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

    async createUserProfile(user) {
      const userRef = doc(fdb, 'users', user.uid)
      const snap = await getDoc(userRef)

      // Если профиль уже существует — ничего не делаем
      if (snap.exists()) return

      // Если нет — создаём
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        createdAt: new Date(),
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
      })

      console.log('Профиль создан')
    },
    initAuthListener() {
      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          console.error('Пользователь не найден')
          return
        }

        await user.reload()

        if (!user.emailVerified) {
          this.statusEmail = true
          document.body.style.overflow = 'hidden'
          return
        }

        this.statusEmail = false
        document.body.style.overflow = 'auto'
      })
    },
    async checkEmailVerification() {
      const user = auth.currentUser
      await user.reload()
      try {
        this.loader.isEmail = true
        if (user.emailVerified) {
          this.statusEmail = false
          this.createUserProfile(user)
        } else {
          this.message('Ваш email ещё не подтверждён. Пожалуйста, проверьте почту.', 'red')
        }
      } catch (err) {
        this.validate(err)
      } finally {
        this.loader.isEmail = false
      }
    },
    async resendVerification() {
      const user = auth.currentUser
      if (user) {
        try {
          this.loader.user = true
          await sendEmailVerification(user)
          this.message('Письмо отправлено повторно!', 'green')
        } catch (err) {
          this.validate(err.code)
        } finally {
          this.loader.user = false
        }
      } else {
        this.message('Пользователь не найден!', 'red')
      }
    },

    validate(err) {
      this.clearError()
      switch (err) {
        case 'auth/invalid-email':
          this.error.email = 'Введите корректный email!'
          this.vallue.email = ''
          this.vallue.newEmail = ''
          break
        case 'auth/email-already-in-use':
          this.message('Этот email уже зарегистрирован', 'yellow')
          this.error.email = 'Введите новый email!'
          this.vallue.newEmail = ''
          break
        case 'auth/missing-password':
          this.error.password = 'Введите пароль!'
          this.vallue.password = ''
          this.vallue.newPassword = ''
          break
        case 'auth/weak-password':
          this.error.password = 'Введите минимум 6 символов!'
          this.vallue.newPassword = ''
          this.message('Пароль слишком слабый', 'yellow')
          break
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
    clearForm() {
      Object.keys(this.vallue).forEach((key) => {
        this.vallue[key] = ''
      })
    },
    clearError() {
      Object.keys(this.error).forEach((key) => {
        this.error[key] = ''
      })
    },
  },
})
