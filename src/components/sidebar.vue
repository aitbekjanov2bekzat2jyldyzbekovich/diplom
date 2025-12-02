<template>
  <aside class=" bg-[#fff] border rounded-2xl shadow-md w-72 h-screen flex flex-col gap-3 py-4 overflow-hidden my-3">
    <div class="px-3 flex justify-end">
      <button class="heading text-black text-xl">
        <i class="pi pi-align-left"></i>
      </button>
    </div>
    <div class="w-full h-full px-3 overflow-y-auto flex flex-col gap-1">
      <router-Link v-for="value in sidebar" :to="value.rout.to" class="appText w-full flex gap-3 items-center p-3 font-semibold hover:bg-[#E6A421] rounded-md transition-v">
        <i v-html="value.icon" />
        <span>{{ value.vall }}</span>
      </router-Link>
    </div>
  </aside>
</template>

<script>
export default {
  data: () => ({
    sidebar: [
      {
        id: 1,
        vall: 'Для вас',
        rout: {
          to: '/cours/recomendation',
          name: 'recomendation',
        },
        icon: '<i class="pi pi-microchip-ai "/>',
      },
      {
        id: 2,
        vall: 'Мой профиль',
        rout: {
          to: '/cours/my-profile',
          name: 'myProfile',
        },
        icon: '<i class="pi pi-user "/>',
      },
    ],
  }),
}
</script>
