<template>
  <div v-if="status" class="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
    <div class="container mx-auto px-4 flex h-full items-center">
      <div class="w-full bg-[#fff] border rounded-2xl shadow-md px-7 py-10 flex flex-col gap-10">
        <div>
          <h4 class="heading text-lg ">Найдено {{ students.length }}</h4>
        </div>
        <div>
          <div v-for="i in students" class="w-full flex justify-between p-3">
            <div class="border ">
              <img src="/images/avatar.png" />
            </div>
            <div>
              <p>Айтбекжанов Бекзат</p>
            </div>
            <div>
              <span>П-23-2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: Boolean,
    students: { type: Array, default: [1] },
  },
}
</script>
