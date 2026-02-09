<template>
  <workEmail />
  <alertMessage />
  <div
    v-if="this.appStore.loader.page"
    class="w-full bg-[#fff] h-screen flex justify-center items-center"
  >
    <loader class="!fill-[#E6A421]" />
  </div>

  <div v-else class="relative w-full">
    <header class="w-full h-20 bg-[#fff] shadow-md border-b sticky top-0 z-50">
      <div class="container mx-auto px-4 h-full">
        <headerV />
      </div>
    </header>
    <div class="flex gap-1 min-h-screen ">
      <transition
        enter-active-class="transition-all duration-300 "
        leave-active-class="transition-all duration-300"
        enter-from-class="-translate-x-5 opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-from-class="translate-x-0 opacity-100"
        leave-to-class="-translate-x-5 opacity-0"
      >
        <sidebar v-if="this.$route.name !== 'main' && this.$route.name !== 'auth'" />
      </transition>
      <main class="container mx-auto px-4">
        <router-view />
      </main>
    </div>

    <footer class="w-full bg-[#E6A421] shadow-top">
      <div class="container mx-auto px-4">
        <footerV />
      </div>
    </footer>
  </div>
</template>

<script>
import workEmail from '@/components/workEmail.vue'
import footerV from '@/appSections/footerV.vue'
import headerV from '@/appSections/headerV.vue'
import loader from '@/components/loader.vue'
import alertMessage from '@/components/alertMessage.vue'
import sidebar from '@/components/sidebar.vue'
export default {
  components: {
    headerV,
    footerV,
    loader,
    alertMessage,
    sidebar,
    workEmail,
  },
}
</script>
