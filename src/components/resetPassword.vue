<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center h-screen justify-center max-[480px]:px-4"
    v-if="this.appStore.resetPasswordStatus"
    @click="closeResetPassword()"
    data-aos="zoom-in"
    data-aos-duration="500"
  >
    <div class="bg-[#fff] border rounded-2xl shadow-md px-7 py-10 max-[480px]:w-full" @click.stop>
      <div class="w-96 max-[480px]:w-full">
        <h3 class="heading text-xl mb-10 max-[335px]:text-base">{{ title }}</h3>

        <p class="appText mb-10">{{ text }}</p>

        <form
          @submit.prevent
          @keydown.enter="this.appStore.resetPassword()"
          class="flex flex-col gap-2 mb-4"
        >
          <label :for="input.id" class="appText font-semibold">{{ input.label }}</label>
          <input
            :type="input.type"
            :id="input.id"
            :class="[
              'bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md',
              { ' border-2 border-red-500': this.appStore.error[input.error] },
            ]"
            :placeholder="input.placeholder"
            v-model="this.appStore.vallue[input.value]"
          />
          <p v-if="this.appStore.error[input.error]" class="text-red-500 text-sm appText">
            {{ this.appStore.error[input.error] }}
          </p>
        </form>

        <buttonV @click="this.appStore.resetPassword()">
          <span v-if="!this.appStore.loader.resetPassword">{{ btn }}</span>
          <loader v-else />
        </buttonV>
      </div>
    </div>
  </div>
</template>

<script>
import loader from '@/components/loader.vue'
export default {
  data: () => ({
    title: 'Восстановление паролья',
    text: 'Введите адрес электронной почты, который вы использовали при регистрации. Мы вышлем письмо со ссылкой, по которой вы сможете создать новый пароль. Нажмите ссылку и создайте новый  пароль ',
    input: {
      type: 'email',
      placeholder: 'Введите свой email',
      error: 'resetPassword',
      value: 'resetPassword',
      id: 'resetPasswordInput',
      label: 'Электронный адрес:',
    },
    btn: 'Восстановить пароль',
  }),
  methods: {
    closeResetPassword() {
      this.appStore.vallue.resetPassword = this.appStore.vallue.email
      this.appStore.clearError()
      this.appStore.resetPasswordStatus = false
      document.body.style.overflow = ''
    },
  },
  components: {
    loader,
  },
  unmounted() {
    this.closeResetPassword()
  },
}
</script>
