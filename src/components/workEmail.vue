<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center h-screen justify-center max-[480px]:p-4"
    v-if="this.appStore.statusEmail"
  >
    <div
      class="bg-[#fff] border rounded-2xl shadow-md px-7 py-10 w-max flex flex-col gap-3 justify-center max-[480px]:w-full"
    >
      <div class="w-96 appText">{{ text }}</div>
      <buttonV @click="this.appStore.resendVerification()" class="flex justify-center items-center">
        <span v-if="!this.appStore.loader.user">{{ btn }}</span>
        <loader v-else />
      </buttonV>
      <buttonV @click="this.appStore.initAuthListener()" class="flex justify-center items-center">
        <span v-if="!this.appStore.loader.isEmail">{{ btn2 }}</span>
        <loader v-else />
      </buttonV>
    </div>
  </div>
</template>

<script>
import loader from './loader.vue'
export default {
  data: () => ({
    text: 'Здравствуйте! Спасибо за регистрацию. Письмо отправлено на вашу почту, пожалуста подвердите свой еmail!',
    btn: 'Отправить снова',
    btn2: 'Ok',
  }),
  components: {
    loader,
  },
}
</script>
