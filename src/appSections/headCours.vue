<template>
  <div class="bg-[#fff] p-4 rounded-2xl shadow-md border flex justify-center">
    <buttonV>Добавить уроки </buttonV>
  </div>

  <div
    class="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto flex items-center justify-center"
  >
    <div class="container mx-auto px-4">
      <div class="w-full bg-[#fff] border rounded-2xl shadow-md">
        <div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inp: null,
    }
  },
}
</script>
