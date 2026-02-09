<template>
  <div class="bg-[#fff] p-4 rounded-2xl shadow-md border flex justify-center">
    <buttonV @click="active">Добавить уроки </buttonV>
  </div>
  <addLessons :status="status" @closeAdd="active" />
</template>
<script>
import addLessons from '@/components/addLessons.vue'
export default {
  data() {
    return {
      status: false,
    }
  },
  methods: {
    active() {
      this.status = !this.status
      document.body.style.overflow = this.status ? 'hidden' : ''
    },
  },
  components: {
    addLessons,
  },
}
</script>
