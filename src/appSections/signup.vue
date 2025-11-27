<template>
  <section-layout :title="title" class="pt-14 h-screen">
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full bg-[#fff] border rounded-2xl shadow-md px-7 py-10" data-aos="zoom-in">
        <form
          @submit.prevent
          @keydown.enter="getDataUser()"
          class="grid grid-cols-2 w-full mb-10 gap-10"
        >
          <div v-for="i in defualtForms" class="flex flex-col gap-2 relative">
            <label :for="i.inputId" class="appText font-semibold">{{ i.label }}</label>
            <input
              :id="i.inputId"
              :placeholder="i.placeHolder"
              :type="i.type"
              :class="[
                'bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md',
                { ' border-2 border-red-500': this.appStore.error[i.error] },
              ]"
              v-model="this.appStore.vallue[i.model]"
            />
            <span v-if="this.appStore.error[i.error]" class="text-red-500 text-sm appText">
              {{ this.appStore.error[i.error] }}
            </span>
            <button
              type="button"
              v-if="i.inputId === 'signUpPassword'"
              class="absolute right-1 top-1/2 heading text-lg font-bold outline-none"
              @click="((i.show = !i.show), (i.type = i.type === 'password' ? 'text' : 'password'))"
            >
              <i v-if="!i.show" class="pi pi-eye-slash" /> <i v-else class="pi pi-eye" />
            </button>
          </div>
        </form>
        <div class="flex flex-col gap-3">
          <span class="appText font-semibold">{{ label }}</span>
          <div class="mb-10 flex gap-24">
            <button
              v-for="i in choosed"
              :class="[
                'py-2 border px-10 heading text-base border-[#E6A421] rounded-2xl hover:bg-[#E6A421] hover:text-[#fff] transition-v',
                { 'bg-[#E6A421] text-white': this.appStore.vallue.type === i },
              ]"
              @click="this.appStore.vallue.type = i"
            >
              {{ i }}
            </button>
          </div>
        </div>

        <buttonV @click="getDataUser" class="flex justify-center items-center">
          <span v-if="!this.appStore.loader.auth">{{ btn }}</span>
          <loader v-else />
        </buttonV>
      </div>
    </div>
  </section-layout>
</template>

<script>
import loader from '@/components/loader.vue'

export default {
  data: () => ({
    title: 'Зарегистрироваться',

    defualtForms: [
      {
        id: 1,
        type: 'text',
        model: 'userName',
        placeHolder: 'Введите свое имя',
        label: 'Имя:',
        inputId: 'userName',
        error: 'userName',
      },
      {
        id: 2,
        type: 'text',
        model: 'userSurname',
        placeHolder: 'Введите свое фамилие',
        label: 'Фамилия:',
        inputId: 'userSurname',
        error: 'userSurname',
      },

      {
        id: 3,
        type: 'email',
        model: 'newEmail',
        placeHolder: 'Введите  Email',
        inputId: 'signUpEmail',
        label: 'Электронный адрес: ',
        error: 'email',
      },
      {
        id: 4,
        type: 'password',
        model: 'newPassword',
        placeHolder: 'Придумайте пароль',
        inputId: 'signUpPassword',
        label: 'Пароль:',
        show: false,
        error: 'password',
      },
    ],
    choosed: ['Студент', 'От коледжа'],
    btn: 'Зарегистрироваться',
    label: 'Вы студент или от коледжа?',
  }),
  components: {
    loader,
  },
  methods: {
    getDataUser() {
      sessionStorage.removeItem('data')
      if (!this.appStore.loader.auth) {
        const name = (this.appStore.vallue?.userName ?? this.appStore.userName ?? '').trim()
        const surname = (
          this.appStore.vallue?.userSurname ??
          this.appStore.userSurname ??
          ''
        ).trim()
        this.appStore.clearError()
        if (name !== '' && surname !== '') {
          sessionStorage.setItem(
            'data',
            JSON.stringify({
              name: name,
              surname: surname,
            }),
          )
          this.appStore.signUp()
        } else if (name === '') {
          this.appStore.error.userName = 'Введите свое имя!'
          this.appStore.vallue.userName = ''
        } else if (surname === '') {
          this.appStore.error.userSurname = 'Введите свою фамилию!'
          this.appStore.vallue.userSurname = ''
        } else {
          this.appStore.error.userName = 'Введите свое имя!'
          this.appStore.vallue.userName = ''
          this.appStore.error.userSurname = 'Введите свою фамилию!'
          this.appStore.vallue.userSurname = ''
        }
      }
    },
  },
}
</script>
