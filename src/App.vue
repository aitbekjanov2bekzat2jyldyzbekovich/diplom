<template>
  <layout />
</template>

<script>
import layout from './layouts/layout.vue'
export default {
  components: {
    layout,
  },
  mounted() {
    this.appStore.resizeWindow()
  },
}
</script>
