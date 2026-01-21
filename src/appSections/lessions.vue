<template>
  <div class="bg-[#fff] border rounded-2xl shadow-md p-8 flex flex-col gap-12">
    <div class="heading text-xl">
      <h5>Уроки</h5>
    </div>
    <div v-if="lesson"></div>
    <div v-else class="appText p-4 border rounded-2xl text-center">Нет данных</div>
  </div>
</template>

<script>
export default {
  props: {
    lesson: Object,
  },
}
</script>
