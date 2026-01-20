<template>
  <section-layout title="Мои курсы" class="py-14">
    <div class="flex flex-col gap-4">
      <div class="bg-[#fff] p-4 rounded-2xl shadow-md border">
        <h4 class="appText font-semibold">Создано: {{ cours.length }}</h4>
      </div>
      <div
        class="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-[480px]:grid-cols-1 gap-3"
        v-if="cours.length"
      >
        <div v-for="i in cours" class="group">
          <coursCard :item="i" />
          <buttonV
            class="float-end mt-1 hidden group-hover:block bg-red-500"
            @click="this.appStore.deleteCourse(i.id)"
          >
            <i class="pi pi-trash" />
          </buttonV>
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
