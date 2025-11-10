<template>
  <div class="w-full h-screen pt-14">
    <section-layout :title="title">
      <div class="w-full flex items-center justify-center pt-14">
        <div
          class="bg-[#fff] border rounded-2xl shadow-md flex flex-col gap-10 px-7 py-10"
          data-aos="zoom-in"
        >
          <form class="flex-col flex gap-10 items-center w-96">
            <div v-for="i in forms" class="flex flex-col gap-1 w-full">
              <label :for="i.inputId" class="appText font-semibold">{{ i.label }}</label>
              <input
                :type="i.type"
                :id="i.inputId"
                :placeholder="i.placeHolder"
                :class="[
                  'bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md',
                  { ' border-2 border-red-500': this.appStore.error[i.type] },
                ]"
                v-model="this.appStore.vallue[i.type]"
              />

              <span v-if="this.appStore.error[i.type]" class="text-red-500 text-sm appText">
                {{ this.appStore.error[i.type] }}
              </span>
            </div>
          </form>
          <div class="flex flex-col items-center gap-4">
            <buttonV class="w-full" @click="this.appStore.login(forms[0].value, forms[1].value)">{{
              log
            }}</buttonV>
            <div class="flex justify-between items-center w-full">
              <button class="appText hover:text-[#E6A421] transition-v">{{ btn }}</button>
              <router-link :to="rout.link" class="appText hover:text-[#E6A421] transition-v">{{
                rout.name
              }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </section-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Войти в профиль',

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
      log: 'Войти',
    }
  },
}
</script>
