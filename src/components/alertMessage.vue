<template>
  <transition name="fade">
    <div
      class="flex fixed z-50 flex-col bottom-3 left-1/2 -translate-x-1/2 gap-3 bg-black-100 w-[400px] max-[438px]:w-72"
      v-if="this.appStore.alert.length"
    >
      <transition-group name="fade">
        <div
          v-for="(i, index) in this.appStore.alert"
          :key="index"
          :class="[
            ' p-2 bg-white border-l-8 rounded-xl shadow-lg ',
            {
              'border-[#26A243] shadow-[#26a24383] ': i.type === 'green',
            },
          ]"
        >
          <p
            :class="[
              'appText  font-semibold',
              {
                'text-[#26A243]': i.type === 'green',
              },
            ]"
          >
            {{ i.message }}
          </p>
        </div>
      </transition-group>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      timeoutId: 0,
      ALERT_TIMEOUT: 3000,
    }
  },
  methods: {
    clearAlert() {
      clearTimeout(this.timeoutId)

      this.timeoutId = setTimeout(() => {
        this.appStore.alert = []
      }, this.ALERT_TIMEOUT)

      if (this.appStore.alert.length > 3) {
        this.appStore.alert.splice(0, this.appStore.alert.length - 3)
      }
    },
  },
  watch: {
    'appStore.alert': {
      handler(newVal) {
        if (newVal.length > 0) this.clearAlert()
      },
      deep: true,
    },
  },
  mounted() {
    if (this.appStore.alert.length > 0) this.clearAlert()
  },
  beforeUnmount() {
    clearTimeout(this.timeoutId)
  },
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-300 ease-out;
}
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 translate-y-4;
}
.fade-enter-to,
.fade-leave-from {
  @apply opacity-100 translate-y-0;
}
</style>
