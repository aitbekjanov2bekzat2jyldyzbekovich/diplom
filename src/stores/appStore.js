import { defineStore } from 'pinia'
import { auth, fdb } from '@/firebase/firebase'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  deleteUser,
  getAuth,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth'

import router from '@/router'

export const useAppStore = defineStore('app', {
  state: () => ({
    loader: {
      auth: false,
      user: false,
      isEmail: false,
      resetPassword: false,
      page: false,
      profile: false,
      reworkImg: false,
    },

    sizeWindow: window.innerWidth,
    alert: [],

    error: {
      email: '',
      password: '',
      userSurname: '',
      userName: '',
      resetPassword: '',
    },
    vallue: {
      email: '',
      password: '',
      userSurname: '',
      userName: '',
      newPassword: '',
      newEmail: '',
      type: 'Студент',
      resetPassword: '',
      reworkImg: null,
      reInputImg: null,
    },
    reWorkStatus: {
      img: false,
    },
    statusEmail: false,
    userProfile: null,
    resetPasswordStatus: false,
  }),
  actions: {
    async updateProfile(data) {
      this.loader.reworkImg = true
      const userRef = doc(fdb, 'users', this.userProfile.uid)
      try {
        await updateDoc(userRef, data)
        window.location.reload()
      } catch (error) {
        this.validate(error.code)
        Object.keys(this.reWorkStatus).forEach((key) => {
          this.reWorkStatus[key] = false
        })
        this.vallue.reworkImg = this.userProfile.avatar || '/images/avatar.png'
      } finally {
        this.loader.reworkImg = false
      }
    },
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
          this.message('Подтверждающее письмо отправлено!', 'blue')
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

          if (res.user.uid) {
            this.toRout('/')
            this.message('Вы успешно вошли в учётную запись', 'green')
          }
        } catch (err) {
          this.validate(err.code)
        } finally {
          this.loader.auth = false
        }
      }
    },
    async resetPassword() {
      try {
        this.loader.resetPassword = true
        await sendPasswordResetEmail(auth, this.vallue.resetPassword)
        this.message('Письмо для восстановления отправлено на ваш email!', 'blue')
        this.resetPasswordStatus = false
      } catch (err) {
        this.validate(err.code)
      } finally {
        this.loader.resetPassword = false
        this.clearForm()
      }
    },
    async logout() {
      try {
        await signOut(auth)
        this.toRout('/auth/sign-in')
        this.message('Вы вышли из учётной записи', 'green')
        this.userProfile = null
      } catch (error) {
        this.validate(error)
      }
    },
    async createUserProfile(user) {
      const userRef = doc(fdb, 'users', user.uid)
      const snap = await getDoc(userRef)
      const dataUser = JSON.parse(sessionStorage.getItem('data'))
      this.loader.isEmail = true

      if (snap.exists()) return

      await setDoc(userRef, {
        uid: user.uid || null,
        email: user.email || null,
        createdAt: new Date(),
        name: dataUser.name || null,
        surname: dataUser.surname || null,
        createrIs: dataUser.type || null,
        aboutPerson: null,
        skills: null,
        avatar: null,
        test: null,
        group: null,
      })

      this.loader.isEmail = false
      this.statusEmail = false
      document.body.style.overflow = ''
      this.toRout('/')
      this.message(
        `Добро пожаловать! Вы вошли в только что созданную учётную запись  ${user.uid}`,
        'green',
      )
    },

    async getUserProfile(uid) {
      const userRef = doc(fdb, 'users', uid)
      const snap = await getDoc(userRef)

      if (snap.exists()) {
        return snap.data()
      } else {
        console.error('Профиль не найден')
        return null
      }
    },
    initAuthListener() {
      onAuthStateChanged(auth, async (user) => {
        this.loader.profile = true
        if (!user) {
          console.error('Пользователь не найден')
          this.message(
            'Пожалуйста, выполните авторизацию, чтобы продолжить использование сервиса.',
            'yellow',
          )

          this.userProfile = null
          this.loader.profile = false
          return
        }

        await user.reload()

        if (!user.emailVerified) {
          this.closeIsEmail()
          this.statusEmail = true
          document.body.style.overflow = 'hidden'
          this.message('Подвердите свой email!', 'blue')
          this.loader.profile = false
        } else {
          await this.createUserProfile(user)
        }

        this.userProfile = await this.getUserProfile(user.uid)
        this.loader.profile = false
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

      const initialEmail = user ? user.email : null

      setTimeout(async () => {
        const currentUser = auth.currentUser
        if (!currentUser) return
        if (currentUser.emailVerified) return
        if (currentUser.email !== initialEmail) return

        this.clearError()
        this.clearForm()
        this.statusEmail = false

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
          this.error.newEmail = 'Введите корректный email!'
          this.error.resetPassword = 'Введите корректный email!'
          this.vallue.email = ''
          this.vallue.newEmail = ''
          this.valiue.resetPassword = ''
          break
        case 'auth/missing-email':
          this.error.email = 'Email не найдено '
          this.error.resetPassword = 'Email не найдено'
          this.vallue.email = ''
          this.vallue.newEmail = ''
          this.valiue.resetPassword = ''
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
        case 'auth/user-disabled':
          this.message('Ваш аккаунт отключён администратором.', 'red')
          this.clearForm()
          break
        case 'invalid-argument':
          this.clearForm()
          this.message('Данные больше 1мб!', 'red')
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
