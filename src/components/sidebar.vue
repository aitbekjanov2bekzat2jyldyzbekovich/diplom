<template>
  <transition
    enter-active-class="transition-all duration-300 "
    leave-active-class="transition-all duration-300 "
    enter-from-class="-translate-x-5 opacity-0"
    enter-to-class="translate-x-0 opacity-100"
    leave-from-class="translate-x-0 opacity-100"
    leave-to-class="-translate-x-5 opacity-0"
  >
    <aside
      class="bg-[#fff] border rounded-2xl shadow-md w-72 h-screen flex flex-col gap-3 py-4 overflow-hidden my-3 sticky top-[92px] max-sm:fixed max-sm:top-[-12px] max-sm:w-52 max-sm:z-50 z-40"
      v-if="status"
    >
      <div class="px-3 flex items-center justify-end">
        <button
          class="heading text-black text-xl hover:text-[#E6A421] transition-v"
          @click="status = !status"
        >
          <i class="pi pi-align-left"></i>
        </button>
      </div>
      <div class="w-full h-full px-3 overflow-y-auto flex flex-col gap-1">
        <router-Link
          v-for="value in sidebar"
          :to="value.rout.to"
          :class="[
            'appText w-full flex gap-3 items-center p-3 font-semibold hover:bg-[#E6A421] rounded-md hover:text-black transition-v',
            {
              'text-[#E6A421] bg-[#e6a42138]': this.$route.name === value.rout.name,
            },
          ]"
        >
          <i v-html="value.icon" />
          <span>{{ value.vall }}</span>
        </router-Link>
      </div>
    </aside>

    <div
      class="p-4 bg-[#fff] border rounded-full shadow-md my-3 fixed top-[92px] z-40 left-1 flex justify-center items-center"
      v-else
    >
      <button
        class="heading text-black text-xl hover:text-[#E6A421] transition-v"
        @click="status = !status"
      >
        <i class="pi pi-align-right" />
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      status: true,
      sidebar: [
        {
          id: 1,
          vall: 'Для вас',
          rout: {
            to: '/cours/recommendation',
            name: 'recommendation',
          },
          icon: '<i class="pi pi-microchip-ai "/>',
        },
        {
          id: 2,
          vall: 'Курс',
          rout: {
            to: `/cours/page/null`,
            name: 'cours',
          },
          icon: '<i class="pi pi-graduation-cap "/>',
        },
        {
          id: 3,
          vall: 'Создать курс',
          rout: {
            to: '/cours/create-cours',
            name: 'createCours',
          },
          icon: '<i class="pi pi-file-plus "/>',
        },
        {
          id: 4,
          vall: 'Мои курсы',
          rout: {
            to: '/cours/my-cours',
            name: 'myCours',
          },
          icon: '<i class="pi pi-book "/>',
        },
        {
          id: 5,
          vall: 'Мой профиль',
          rout: {
            to: '/cours/my-profile',
            name: 'myProfile',
          },
          icon: '<i class="pi pi-user "/>',
        },
      ],
    }
  },
  mounted() {
    this.status = this.appStore.sizeWindow < 641 ? false : true
  },
  watch: {
    '$route.fullPath': {
      handler() {
        this.status = this.appStore.sizeWindow < 641 ? false : true
      },
      immediate: true,
    },
  },
}
</script>
