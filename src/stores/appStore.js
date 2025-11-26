import { defineStore } from 'pinia'
import { auth, fdb } from '@/firebase/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  deleteUser,
  getAuth,
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
        this.loader.auth = true
        try {
          this.loader.auth = true
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
          this.loader.auth = false
        }
      }
    },

    async createUserProfile(user) {
      const userRef = doc(fdb, 'users', user.uid)
      const snap = await getDoc(userRef)
      this.loader.isEmail = true
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

      this.loader.isEmail = false
      this.statusEmail = false
      document.body.style.overflow = ''
      this.message(`Ваш профиль созданно: ${user.uid}`, 'green')
    },

    initAuthListener() {
      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          console.error('Пользователь не найден')
          return
        }

        await user.reload()

        if (!user.emailVerified) {
          this.closeIsEmail()
          this.statusEmail = true
          document.body.style.overflow = 'hidden'
          this.message('Подвердите свой email!', 'blue')
        } else {
          await this.createUserProfile(user)
        }
      })
    },

    async resendVerification() {
      const user = auth.currentUser
      if (user) {
        try {
          this.loader.user = true
          await sendEmailVerification(user)
          this.message('Письмо отправлено повторно на ваш email!', 'green')
        } catch (err) {
          this.validate(err.code)
        } finally {
          this.loader.user = false
        }
      } else {
        this.message('Пользователь не найден!', 'red')
      }
    },

    async closeIsEmail() {
      const auth = getAuth()
      const user = auth.currentUser

      // Сохраняем email пользователя на момент вызова
      const initialEmail = user ? user.email : null

      setTimeout(async () => {
        // Проверяем, что пользователь всё ещё тот же и email не подтверждён
        const currentUser = auth.currentUser
        if (!currentUser) return // уже вышел
        if (currentUser.emailVerified) return // подтвердил email
        if (currentUser.email !== initialEmail) return // это уже другой пользователь

        this.clearError()
        this.clearForm()
        this.statusEmail = false
        this.message()

        try {
          await deleteUser(currentUser)
          this.message('Попытайтесь снова!', 'red')
        } catch (error) {
          this.validate(error)
        }
      }, 60000)
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
        this.vallue[key] = this.vallue[key] === 'Студент' ? 'Студент' : ''
      })
    },
    clearError() {
      Object.keys(this.error).forEach((key) => {
        this.error[key] = ''
      })
    },
  },
})
