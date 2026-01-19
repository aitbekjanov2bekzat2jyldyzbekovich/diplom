<template>
  <section-layout title="Создать курс" class="py-14">
    <createDataCours />
  </section-layout>
</template>
<script>
import createDataCours from '@/appSections/createDataCours.vue'
export default {
  components: {
    createDataCours,
  },

  mounted() {
    this.appStore.message(
      'Заполняйте данные правильно потому-что дальнейшей невозможно изменить!',
      'blue',
    )
  },
}
</script>
