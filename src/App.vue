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
  },
}
</script>
