import { defineStore } from 'pinia'
import { auth, fdb, db } from '@/firebase/firebase'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { ref, push, set, onValue, getDatabase, remove } from 'firebase/database'

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
      page: true,
      profile: false,
      reworkImg: false,
      reAboutMe: false,
      firstname: false,
      lastName: false,
      group: false,
      ollUpdateProfile: false,
      createCors: false,
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
      reaboutMe: '',
      firstname: '',
      lastName: '',
      group: '',
      coursName: '',
      aboutCours: null,
      dateCours: null,
      nameLesson: '',
      urlVideo: '',
      dopUrl: '',
      dopInfo: '',
    },
    reWorkStatus: {
      img: false,
      aboutMe: false,
      firstname: false,
      lastName: false,
      group: false,
      nameCours: false,

      nameLesson: false,
      urlVideo: false,
      dopInfo: false,
    },
    statusEmail: false,
    userProfile: null,
    resetPasswordStatus: false,
    courses: [],
  }),
  actions: {
    isFollowed(course) {
      if (!course.followers) return false
      return course.followers.some((f) => f.uid === this.userProfile.uid)
    },
    following(id) {
      const course = this.courses.find((c) => c.id === id)
      if (!course) return
      if (!course.followers) {
        this.addField(
          id,
          'followers',
          { uid: this.userProfile.uid, courseId: id },
          `Вы подписались: ${id}`,
        )
        return
      }

      const isFollowed = course.followers.some((f) => f.uid === this.userProfile.uid)

      // если НЕ подписан — подписываем
      if (!isFollowed) {
        this.addField(
          id,
          'followers',
          [...course.followers, { uid: this.userProfile.uid, courseId: id }],
          `Вы подписались: ${id}`,
        )
      }
    },
    async addField(courseId, fieldPath, data, message) {
      try {
        const fieldRef = ref(db, `courses/${courseId}/${fieldPath}`)
        const newItemRef = push(fieldRef)
        const item = await {
          id: newItemRef.key,
          ...data,
        }
        await set(newItemRef, item)

        return newItemRef.key // вернёт ID созданной записи
      } catch (error) {
        this.validate(error.message)
      } finally {
        this.message(`${message} `, 'green')
      }
    },

    async deleteCourse(courseId) {
      try {
        const db = getDatabase()
        const courseRef = ref(db, `courses/${courseId}`)

        await remove(courseRef)

        this.courses = this.courses.filter((course) => course.id !== courseId)

        this.message(`Курс удален: ${courseId}`, 'green')
      } catch (error) {
        this.validate(error.massage)
      }
    },
    async fetchCourses() {
      try {
        const coursesRef = ref(db, 'courses')
        onValue(coursesRef, (snapshot) => {
          const data = snapshot.val()
          this.courses = data ? Object.values(data) : []
        })
      } catch {
      } finally {
        this.loader.page = false
      }
    },
    async addCourse(corse) {
      try {
        this.loader.createCors = true
        const coursesRef = ref(db, 'courses')

        const newCourseRef = push(coursesRef)
        const courseId = newCourseRef.key
        await set(newCourseRef, {
          title: corse.title || '',
          id: courseId,
          img: corse.img || '',
          endCourse: corse.end || '',
          about: corse.about || '',
          createdId: corse.uid || '',
          createdAt: Date.now(),
          dopInfo: corse.dopInfo,
        })
        this.message(`Создано успешно: ${this.vallue.coursName}`, 'green')
        this.toRout('/cours/my-cours')
      } catch (err) {
        this.validate(err.message)
      } finally {
        this.clearForm()
        this.loader.createCors = false
      }
    },
    async ollUpdateProfile(data) {
      this.loader.ollUpdateProfile = true
      const userRef = doc(fdb, 'users', this.userProfile.uid)
      try {
        await updateDoc(userRef, data)
        window.location.reload()
      } catch (error) {
        this.validate(error.code)
        window.location.reload()
      } finally {
        this.loader.ollUpdateProfile = false
      }
    },
    async updateProfile(data, name, loader, status) {
      this.loader[loader] = true
      const userRef = doc(fdb, 'users', this.userProfile.uid)
      try {
        await updateDoc(userRef, data)
        window.location.reload()
      } catch (error) {
        this.validate(error.code)
        this.reWorkStatus[status] = false
        this.vallue[name] =
          name === 'reworkImg' ? this.userProfile.avatar || '/images/avatar.png' : ''
      } finally {
        this.loader[loader] = false
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
          this.message('Данные больше 1мб!', 'red')
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
    validSend(value, status, valName) {
      const maxWords = 50

      const words = value.trim().split(/\s+/).filter(Boolean)

      if (words.length === 0) {
        this.reWorkStatus[status] = false
        return
      }

      if (words.length <= maxWords) {
        this.reWorkStatus[status] = true
      } else {
        // аккуратно обрезаем до лимита
        this.vallue[valName] = words.slice(0, maxWords).join(' ')

        this.message(`Ошибка: превышено количество слов (макс. ${maxWords})`, 'yellow')
      }
    },
  },
})
