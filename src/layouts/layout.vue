<template>
  <loader v-if="status" />
  <div v-else>
    <header class="w-full h-20 bg-[#fff] shadow-md border-b sticky top-0 z-50">
      <div class="container mx-auto px-4 h-full">
        <headerV />
      </div>
    </header>
    <alertMessage />
    <aside
      v-if="this.$route.name !== 'main' && this.$route.name !== 'login'"
      class="w-96 h- px-4 bg-white"
    >
      sidbar
    </aside>
    <div class="relative w-full">
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
import footerV from '@/appSections/footerV.vue'
import headerV from '@/appSections/headerV.vue'
import loader from '@/components/loader.vue'
import alertMessage from '@/components/alertMessage.vue'
export default {
  components: {
    headerV,
    footerV,
    loader,
    alertMessage,
  },
  data() {
    return {
      status: true,
    }
  },
  methods: {
    loaderOff() {
      setTimeout(() => {
        this.status = false
      }, 1000)
    },
  },
  mounted() {
    this.loaderOff()
  },
}
</script>
