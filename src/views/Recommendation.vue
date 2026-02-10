<template>
  <section-layout title="Все курсы" class="py-14">
    <div class="flex flex-col gap-4">
      <div
        class="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-[480px]:grid-cols-1 gap-3"
        v-if="this.appStore.courses"
      >
        <div v-for="i in this.appStore.courses" :key="i.id" class="group">
          <coursCard :item="i" />
        </div>
      </div>

      <div class="w-full h-svh flex items-center justify-center appText font-semibold" v-else>
        <span>Нету данных</span>
      </div>
    </div>
  </section-layout>
</template>

<script>
import coursCard from '@/components/coursCard.vue'

export default {
  components: {
    coursCard,
  },
}
</script>
