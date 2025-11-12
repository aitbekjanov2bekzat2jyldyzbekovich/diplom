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
}
</script>
