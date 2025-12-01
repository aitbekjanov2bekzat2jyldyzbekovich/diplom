<template>
  <div v-if="this.appStore.loader.profile">
    <loader />
  </div>

  <div
    v-else
    class="flex items-center gap-2 border p-2 max-lg:p-1 max rounded-lg cursor-pointer"
    @click="openStatus = !openStatus"
  >
    <img
      class="w-12 h-12 max-lg:-z-10 max-lg:h-10 max-md:h-9 max-md:w-9 rounded-full"
      :src="user.img"
      alt="avatar"
    />

    <div>
      <h3 class="heading text-lg max-lg:text-lg max-md:text-base max-sm:text-sm">
        {{ user.name }}
      </h3>
      <span class="appText lg:text-sm md:text-sm sm:text-xs font-medium">{{ user.type }}</span>
    </div>
    <button
      class="text-[#E6A421] font-bold text-xl transition-v"
      :class="{ 'rotate-180': openStatus && this.appStore.userProfile }"
    >
      <i class="pi pi-chevron-down" />
    </button>
  </div>
  <transition
    enter-active-class="transition-v"
    enter-from-class="opacity-0 translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-1"
  >
    <div
      class="w-full bg-white absolute shadow-md rounded-md p-2"
      v-if="openStatus && this.appStore.userProfile"
    >
      <ul class="appText font-semibold">
        <li v-for="i in nav" class="hover:border-b hover:border-[#E6A421] transition-v">
          <router-link
            :to="i.rout"
            class="w-full flex items-center gap-5 py-2 hover:text-[#E6A421] transition-v justify-start"
          >
            <span v-html="i.icon" />
            <span>{{ i.name }}</span>
          </router-link>
        </li>
        <li>
          <button
            @click="this.appStore.logout()"
            class="w-full flex items-center gap-5 py-2 hover:text-[#E6A421] hover:border-b hover:border-[#E6A421] transition-v"
          >
            <span>
              <i class="pi pi-sign-out" />
            </span>
            <span>{{ btn }}</span>
          </button>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import loader from './loader.vue'
export default {
  data() {
    return {
      openStatus: false,
      user: {
        name: 'Пользователь',
        img: '/images/avatar.png',
        type: 'Неизвестно',
      },
      nav: [
        {
          id: 1,
          name: 'Профиль',
          rout: '/cours/profile',
          icon: '<i class="pi pi-user "/>',
        },
        {
          id: 2,
          name: 'Изучение',
          rout: '/cours/learn',
          icon: '<i class="pi pi-graduation-cap "/>',
        },
        {
          id: 3,
          name: 'Мои курсы',
          rout: '/cours/my-cours',
          icon: '<i class="pi pi-book "/>',
        },
        {
          id: 4,
          name: 'Создать',
          rout: '/cours/createCours',
          icon: '<i class="pi pi-file-plus "/>',
        },
        {
          id: 4,
          name: 'Уведомление',
          rout: '/cours/notification',
          icon: '<i class="pi pi-bell "/>',
        },
      ],
      btn: 'Выйти',
    }
  },
  components: {
    loader,
  },
  watch: {
    '$route.fullPath': {
      handler() {
        this.openStatus = false
      },
      immediate: true,
    },
  },
}
</script>
