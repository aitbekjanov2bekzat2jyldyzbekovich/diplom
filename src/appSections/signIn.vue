<template>
  <div class="w-full h-screen pt-14">
    <section-layout :title="title">
      <div class="w-full flex items-center justify-center pt-14">
        <div
          class="bg-[#fff] border rounded-2xl shadow-md flex flex-col gap-10 px-7 py-10 max-[500px]:w-full"
          data-aos="zoom-in"
        >
          <form
            class="flex-col flex gap-10 items-center w-96 max-[500px]:w-full"
            @submit.prevent
            @keydown.enter="this.appStore.login()"
          >
            <div v-for="i in forms" class="flex flex-col gap-1 w-full relative">
              <label :for="i.inputId" class="appText font-semibold">{{ i.label }}</label>
              <input
                :type="i.type"
                :id="i.inputId"
                :placeholder="i.placeHolder"
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
                v-if="i.inputId === 'signInPassword'"
                class="absolute right-1 top-1/2 heading text-lg font-bold outline-none"
                @click="
                  ((i.show = !i.show), (i.type = i.type === 'password' ? 'text' : 'password'))
                "
              >
                <i v-if="!i.show" class="pi pi-eye-slash" />
                <i v-else class="pi pi-eye" />
              </button>
            </div>
          </form>
          <div class="flex flex-col items-center gap-4">
            <buttonV class="w-full flex justify-center items-center" @click="this.appStore.login()">
              <span v-if="!this.appStore.loader.auth">{{ log }}</span>
              <loader v-else />
            </buttonV>
            <div class="flex justify-between items-center w-full">
              <button class="appText hover:text-[#E6A421] transition-v">{{ btn }}</button>
              <router-link :to="rout.link" class="appText hover:text-[#E6A421] transition-v">
                {{ rout.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section-layout>
  </div>
</template>

<script>
import loader from '@/components/loader.vue'
export default {
  data() {
    return {
      title: 'Войти в профиль',

      forms: [
        {
          id: 1,
          type: 'email',
          model: 'email',
          placeHolder: 'Введите свой Email',
          inputId: 'signInEmail',
          label: 'Электронный адрес:',
          error: 'email',
        },
        {
          id: 2,
          type: 'password',
          model: 'password',
          placeHolder: 'Введите свой пароль',
          inputId: 'signInPassword',
          label: 'Пароль:',
          show: false,
          error: 'password',
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
  components: {
    loader,
  },
}
</script>
