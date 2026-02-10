<template>
  <section-layout :title="title">
    <created-cours-swiper :cours="cours" />
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
  computed: {
    cours() {
      return this.appStore.courses.slice().reverse()
    },
  },
  components: {
    createdCoursSwiper,
  },
}
</script>
