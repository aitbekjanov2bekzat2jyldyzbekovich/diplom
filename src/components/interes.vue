<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto p-24 flex items-center justify-center"
  >
    <div class="w-full bg-[#fff] border rounded-2xl shadow-md p-14">
      <div class="w-full flex flex-wrap gap-2 justify-center">
        <buttonV v-for="i in interes">{{ i }}</buttonV>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interes: ['Програмирование', 'Рисование', 'Дизайн'],
    }
  },
}
</script>
