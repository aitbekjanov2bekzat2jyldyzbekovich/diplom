<template>
  <section-layout title="Создать курс" class="py-14">
    <headCreateCours :nameRout="nameRoutd" @sendRout="getRout" />
    <createDataCours v-if="nameRoutd === 'CreateDataOfCours'" />
  </section-layout>
</template>
<script>
import headCreateCours from '@/appSections/headCreateCours.vue'
import createDataCours from '@/appSections/createDataCours.vue'
export default {
  components: {
    headCreateCours,
    createDataCours,
  },
  data() {
    return {
      nameRoutd: 'CreateDataOfCours',
    }
  },
  methods: {
    getRout(i) {
      this.nameRoutd = i
    },
  },
  mounted() {
    this.appStore.message(
      'Заполняйте данные правильно потому-что дальнейшей невозможно изменить!',
      'blue',
    )
  },
}
</script>
