<template>
  <section-layout title="Мои курсы" class="py-14">
    <div class="flex flex-col gap-4">
      <div class="bg-[#fff] p-4 rounded-2xl shadow-md border">
        <h4 class="appText font-semibold">Создано: {{ cours.length }}</h4>
      </div>
      <div class="flex gap-2 flex-wrap">
        <coursCard :item="i" v-for="i in cours" />
      </div>
    </div>
  </section-layout>
</template>

<script>
import coursCard from '@/components/coursCard.vue'
export default {
  computed: {
    cours() {
      return this.appStore.courses.filter((i) => i.createdId === this.appStore.userProfile.uid)
    },
  },
  components: {
    coursCard,
  },
}
</script>
