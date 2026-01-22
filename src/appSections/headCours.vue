<template>
  <div class="bg-[#fff] p-4 rounded-2xl shadow-md border flex justify-center">
    <buttonV>Добавить уроки </buttonV>
  </div>
  <addLessons />
</template>
<script>
import addLessons from '@/components/addLessons.vue'
export default {
  data() {
    return {}
  },
  methods: {},
  components: {
    addLessons,
  },
}
</script>
