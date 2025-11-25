<template>
  <workEmail />
  <signIn v-if="this.$route.params.id === 'sign-in'" />
  <signup v-else />
</template>

<script>
import signup from '@/appSections/signup.vue'
import signIn from '@/appSections/signIn.vue'
import workEmail from '@/components/workEmail.vue'
export default {
  components: {
    signIn,
    signup,
    workEmail,
  },
  watch: {
    '$route.path': {
      handler(newVal) {
        this.appStore.clearError()
        this.appStore.clearForm()
      },

      deep: true,
    },
  },
}
</script>
