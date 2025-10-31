<template>
  <section-layout :title="title">
    <created-cours-swiper />
    <div class="flex">
      <button class="ml-auto flex items-center font-bold appText gap-1 text-[#E6A421]">
        {{ btn }}
        <i class="pi pi-arrow-right" />
      </button>
      <div>
        <div>
          <h3>{{ btn }}</h3>
        </div>
        <div></div>
      </div>
    </div>
  </section-layout>
</template>

<script>
import coursCard from '@/components/coursCard.vue'
import createdCoursSwiper from '@/components/createdCoursSwiper.vue'
export default {
  data() {
    return {
      title: 'Новые курсы',
      btn: 'Все новые курсы',
      cours: [],
    }
  },
  components: {
    createdCoursSwiper,
    coursCard,
  },
}
</script>
