<template>
  <div class="w-full h-screen flex items-center justify-center" data-aos="zoom-in">
    <div class="w-full bg-[#fff] border rounded-2xl shadow-md flex justify-between overflow-hidden">
      <div class="w-1/2 px-48 py-7 bg-[#E6A421] flex items-center justify-center flex-col gap-8">
        <img :src="avatar" alt="avatar" class=" w-14 h-14"/>

        <h2 class="heading text-[#fff] text-3xl leading-10 text-center">{{ title }}</h2>
      </div>
      <div class="w-1/2 p-7 flex flex-col items-center justify-center gap-10">
        <form action="" class="flex-col flex gap-10 w-full items-center">
          <div v-for="i in forms" class="flex flex-col gap-1">
            <label :for="i.inputId" class="appText font-semibold">{{ i.label }}</label>
            <input
              :type="i.type"
              :id="i.inputId"
              :placeholder="i.placeHolder"
              class="bg-[#F2F2F2] w-96 p-4 appText outline-[#E6A421] rounded-md"
            />
          </div>
        </form>
        <buttonV class="w-96">{{ log }}</buttonV>
        <button class="appText hover:text-[#E6A421] transition-v">{{ btn }}</button>
        <router-link :to="rout.link" class="appText hover:text-[#E6A421] transition-v">{{
          rout.name
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Добро пожаловать! Пожалуйста, войдите в свой аккаунт',
      avatar: '/images/avatar.png',
      forms: [
        {
          id: 1,
          type: 'email',
          placeHolder: 'Введите свой Email',
          inputId: 'signInEmail',
          label: 'Email *',
        },
        {
          id: 2,
          type: 'password',
          placeHolder: 'Введите свой пароль',
          inputId: 'signInPassword',
          label: 'Password *',
          status: false,
        },
      ],
      btn: 'Забыли пароль?',
      rout: {
        link: '/auth/sign-up',
        name: 'У вас нет аккаунта?',
      },
      log: 'Авторизоваться',
    }
  },
}
</script>
