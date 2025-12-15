<template>
  <div
    @click="closeReworkPanelSend"
    v-if="status && this.appStore.userProfile"
    class="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto"
  >
    <div class="container mx-auto px-4">
      <div
        @click.stop
        data-aos="zoom-in"
        data-aos-duration="500"
        class="w-full bg-[#fff] border rounded-2xl shadow-md my-28 p-14 flex flex-col gap-11 relative"
      >
        <h4 class="heading text-2xl">Редактировать профиль</h4>

        <div class="flex w-full justify-between items-center">
          <buttonV class="bg-green-500">{{ btn1 }} все</buttonV>
          <buttonV class="bg-red-500">{{ btn3 }} все</buttonV>
        </div>
        <div class="flex flex-wrap gap-3">
          <reworkAvatar />
          <reworkInputs />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import reworkAvatar from '@/components/reworkAvatar.vue'
import reworkInputs from '@/components/reworkInputs.vue'
export default {
  props: {
    status: Boolean,
  },
  components: {
    reworkAvatar,
    reworkInputs,
  },
  data() {
    return {
      btn1: 'Сохранить',
      btn3: 'Отменить',
    }
  },
  methods: {
    closeReworkPanelSend() {
      this.$emit('closePanel', '')
    },
  },
  unmounted() {
    this.closeReworkPanelSend()
  },
}
</script>
