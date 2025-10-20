<template>
  <section-layout :title="title">
    <div class="bg-[#fff] border rounded-2xl shadow-md flex ">
      <div class="w-1/2 border-r-2 border-r-[#E6A421] border-dashed"></div>
      <div class="w-1/2 p-8 flex items-center justify-center border-l-2 border-l-[#E6A421] border-dashed">
        <component :is="icon" class="fill-[#E6A421]  w-96 " />
      </div>
    </div>
  </section-layout>
</template>

<script>
import instruction from '@/assets/objects/instruction.svg'
import { markRaw } from 'vue'

export default {
  data() {
    return {
      title: 'Инструкция по cозданию курса',
      icon: markRaw(instruction),
    }
  },
}
</script>
