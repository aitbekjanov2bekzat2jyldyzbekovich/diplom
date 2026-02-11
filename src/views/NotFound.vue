<template>
  <div class="flex w-full items-center h-full justify-center flex-col gap-2">
    <div class="heading text-center border border-[#E6A421] p-6 rounded-2xl">
      <h4>404</h4>
      <span class="text-xl">Not found page!</span>
    </div>
    <buttonV @click="$router.go(-1)" class="flex items-center gap-8"><i class="pi pi-arrow-left"/>назад</buttonV>
  </div>
</template>
