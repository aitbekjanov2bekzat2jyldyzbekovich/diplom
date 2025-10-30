<template>
  <section-layout :title="title">
    <created-cours-swiper />
   
  </section-layout>
</template>

<script>
import ButtonV from '@/components/buttonV.vue'
import createdCoursSwiper from '@/components/createdCoursSwiper.vue'
export default {
  data() {
    return {
      title: 'Новые курсы',
      btn: 'Все новые курсы',
    }
  },
  components: {
    createdCoursSwiper,
  },
}
</script>
