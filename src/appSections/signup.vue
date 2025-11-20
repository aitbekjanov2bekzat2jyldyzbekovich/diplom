<template>
  <foundStudent :status="status"/>
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
              class="bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md"
              v-model="this.appStore.vallue[i.model]"
            />
            <button
              v-if="i.type === 'password'"
              class="absolute right-1 top-1/2 heading text-lg font-bold outline-none"
            >
              <i v-if="!i.show" class="pi pi-eye-slash" /> <i v-else class="pi pi-eye" />
            </button>
          </div>
        </form>
        <buttonV @click="findStudent">{{ btn }}</buttonV>
      </div>
    </div>
  </section-layout>
</template>

<script>
import foundStudent from '@/components/foundStudent.vue'
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
    btn: 'Зарегистрироваться',
    students: [],
    status: true,
  }),
  components: {
    foundStudent,
  },
  methods: {
    async getStudent() {
      const res = await fetch('/db/students.json')
      this.students = await res.json()
    },
    findStudent() {
      const name = this.appStore.vallue.userName.toLowerCase()
      const surname = this.appStore.vallue.userSurname.toLowerCase()

      const student = this.students.filter(
        (i) => i.name.toLowerCase() === name && i.surname.toLowerCase() === surname,
      )
      if (student.length === 1) {
      } else if (student.length > 1) {
      } else {
        alert('ошибка')
      }
    },
  },
  mounted() {
    this.getStudent()
  },
}
</script>
