<template>
  <div class="flex flex-col gap-14">
    <div>
      <h2 class="heading ">{{ title }}</h2>
    </div>
    <createdCoursSwiper />
  </div>
</template>

<script>
import createdCoursSwiper from './createdCoursSwiper.vue'
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
