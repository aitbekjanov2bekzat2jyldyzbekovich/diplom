<template>
  <section-layout title="Поиск" class="py-14">
    <div class="bg-[#fff] p-4 rounded-2xl shadow-md border flex items-center appText gap-1">
      <input
        type="text"
        placeholder="Введите название курса"
        id="s1"
        class="bg-[#F2F2F2] p-4 outline-[#E6A421] rounded-md w-full"
        v-model="query"
      />
      <label for="s1" class="p-4 bg-[#E6A421] rounded-md">
        <i class="pi pi-search" />
      </label>
    </div>

    <div>
      <div v-if="filteredCourses.length" class="appText flex flex-col gap-4">
        <div>
          <span class="font-semibold">Найденно: {{ filteredCourses.length }}</span>
        </div>
        <div
          class="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-[480px]:grid-cols-1 gap-3"
        >
          <div v-for="i in filteredCourses" :key="i.id" class="group">
            <coursCard :item="i" />
          </div>
        </div>
      </div>

      <div
        class="w-full h-svh flex items-center justify-center appText font-semibold overflow-hidden"
        v-else
      >
        <span>Поиск "{{ query }}"</span>
      </div>
    </div>
  </section-layout>
</template>

<script>
import coursCard from '@/components/coursCard.vue'
import Fuse from 'fuse.js'

export default {
  components: { coursCard },

  data() {
    return {
      query: '',
      fuse: null,
    }
  },

  computed: {
    appCourses() {
      return this.appStore.courses || []
    },

    filteredCourses() {
      if (!this.fuse || !this.query) return []
      return this.fuse.search(this.query).map((r) => r.item)
    },
  },

  watch: {
    appCourses: {
      handler(newCourses) {
        if (!newCourses.length) return
        this.fuse = new Fuse(newCourses, {
          keys: ['title'],
          threshold: 0.3,
        })
      },
      immediate: true,
    },
  },
}
</script>
