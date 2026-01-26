<template>
  <div class="bg-[#fff] border rounded-2xl shadow-md p-8 flex flex-col gap-12" data-aos="zoom-in">
    <div class="heading text-xl">
      <h5>Уроки</h5>
    </div>
    <div v-if="Object.values(lesson).length" class="flex flex-col gap-3">
      <div
        v-for="(i, index) in Object.values(lesson)"
        class="border flex items-center rounded-md appText justify-between"
      >
        <div class="font-bold p-2 text-[#E6A421]">
          <span>{{ index + 1 }}</span>
        </div>
        <div class="border-x-2 p-2 w-full">
          <h5>{{ i.title }}</h5>
        </div>
        <div class="text-[#E6A421] p-2 flex flex-col items-center gap-1 cursor-pointer">
          <i class="pi pi-download" />
          <span>Материалы </span>
        </div>
      </div>
    </div>
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
