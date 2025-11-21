<template>
  <section-layout :title="title" class="pt-14 h-screen">
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-full bg-[#fff] border rounded-2xl shadow-md px-7 py-10">
        <form @submit.prevent class="grid grid-cols-2 w-full mb-10 gap-10">
          <div v-for="i in defualtForms" class="flex flex-col gap-2 relative">
            <label :for="i.inputId" class="appText font-semibold">{{ i.label }}</label>
            <input
              :id="i.inputId"
              :placeholder="i.placeHolder"
              :type="i.type"
              :class="[
                'bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md',
                { ' border-2 border-red-500': this.appStore.error[i.model] },
              ]"
              v-model="this.appStore.vallue[i.model]"
            />
            <span v-if="this.appStore.error[i.model]" class="text-red-500 text-sm appText">
              {{ this.appStore.error[i.model] }}
            </span>
            <button
              v-if="i.type === 'password'"
              class="absolute right-1 top-1/2 heading text-lg font-bold outline-none"
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
              class="py-2 border px-10 heading text-base border-[#E6A421] rounded-2xl hover:bg-[#E6A421] hover:text-[#fff] transition-v"
            >
              {{ i }}
            </button>
          </div>
        </div>

        <buttonV @click="getDataUser">{{ btn }}</buttonV>
      </div>
    </div>
  </section-layout>
</template>

<script>
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
      },
      {
        id: 2,
        type: 'text',
        model: 'userSurname',
        placeHolder: 'Введите свое фамилие',
        label: 'Фамилия:',
        inputId: 'userSurname',
      },

      {
        id: 3,
        type: 'email',
        model: 'newEmail',
        placeHolder: 'Введите  Email',
        inputId: 'signUpEmail',
        label: 'Электронный адрес: ',
      },
      {
        id: 4,
        type: 'password',
        model: 'newPassword',
        placeHolder: 'Придумайте пароль',
        inputId: 'signUpPassword',
        label: 'Пароль:',
        show: false,
      },
    ],
    choosed: ['Студент', 'От коледжа'],
    btn: 'Зарегистрироваться',
    label: 'Вы студент или от коледжа?',
  }),
  methods: {
    getDataUser() {
      if (this.appStore.userSurname !== ' '  && this.appStore.userName !== ' ') {
        alert('true')
      } else if (!this.appStore.vallue.userName) {
        this.appStore.error.userName = 'Введите свое имя!'
        this.appStore.vallue.userName = ''
      } else if (!this.appStore.vallue.userSurname) {
        this.appStore.error.userSurname = 'Введите свою фамилию!'
        this.appStore.vallue.userSurname = ''
      } else {
        this.appStore.error.userSurname = 'Введите свою фамилию!'
        this.appStore.vallue.userSurname = ''
        this.appStore.error.userName = 'Введите свое имя!'
        this.appStore.vallue.userName = ''
      }
    },
  },
}
</script>
