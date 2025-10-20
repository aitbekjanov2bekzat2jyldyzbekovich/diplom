<template>
  <section-layout :title="title">
    <created-cours-swiper />
  </section-layout>
</template>

<script>
import createdCoursSwiper from '@/components/createdCoursSwiper.vue'
export default {
  data() {
    return {
      title: 'Новые курсы',
    }
  },
  components: {
    createdCoursSwiper,
  },
}
</script>
