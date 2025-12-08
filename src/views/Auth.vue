<template>

  <signIn v-if="this.$route.params.id === 'sign-in'" />
  <signup v-else />
</template>

<script>
import signup from '@/appSections/signup.vue'
import signIn from '@/appSections/signIn.vue'
export default {
  components: {
    signIn,
    signup,
  },
  watch: {
    '$route.path': {
      handler(newVal) {
        this.appStore.clearError()
        this.appStore.clearForm()
      },
      immediate: true, // сразу срабатывает при монтировании
      // deep: true здесь не нужен, так как $route.path — это строка
    },
  },
}
</script>
