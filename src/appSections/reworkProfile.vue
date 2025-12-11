<template>
  <div
    v-if="status && this.appStore.userProfile"
    class="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto"
  >
    <div class="container mx-auto px-4">
      <div class="w-full bg-[#fff] border rounded-2xl shadow-md my-28 p-14 flex flex-col gap-11">
        <h4 class="heading text-2xl">Редактировать профиль</h4>

        <div class="flex w-full justify-between items-center">
          <buttonV class="bg-green-500">{{ btn1 }} все</buttonV>
          <buttonV class="bg-red-500">{{ btn3 }} все</buttonV>
        </div>
        <div class="flex flex-wrap gap-3">
          <reworkAvatar />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import reworkAvatar from '@/components/reworkAvatar.vue'
export default {
  props: {
    status: Boolean,
  },
  components: {
    reworkAvatar,
  },
  data() {
    return {
      btn1: 'Сохранить',
      btn3: 'Отменить',
    }
  },
}
</script>
