<template>
  <layout v-if="this.appStore.sizeWindow > 300" />
</template>

<script>
import layout from './layouts/layout.vue'
export default {
  components: {
    layout,
  },
  mounted() {
    this.appStore.resizeWindow()
    this.appStore.initAuthListener()
    this.appStore.fetchCourses()

    window.addEventListener('offline', () => {
      this.appStore.message('Интернет соединение потеряно', 'red')
    })

    window.addEventListener('online', () => {
      this.appStore.message('Интернет соединение восстановлено', 'green')
    })
  },
}
</script>
