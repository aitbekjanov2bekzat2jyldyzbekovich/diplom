<template>
  <div>
    <button
      v-show="!status"
      @click="menuOpen"
      class="px-2 text-lg rounded-md font-bold text-[#E6A421] hover:bg-[#E6A421] hover:text-white transition-v"
    >
      <i class="pi pi-bars" />
    </button>

    <div v-show="status" class="fixed inset-0 bg-black bg-opacity-90 z-50 pr-10" @click="closeMenu">
      <transition
        enter-active-class="transition-transform transition-v"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-300"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div
          class="w-full bg-white h-full p-5 flex flex-col gap-10 relative"
          v-show="status"
          @click.stop
        >
          <button class="absolute right-0 top-0 p-2 rounded hover:border" @click="closeMenu">
            <i class="pi pi-times font-bold" />
          </button>
          <div class="flex items-center justify-center gap-1">
            <component :is="img" class="w-12 h-12" />
            <h3 class="heading !text-lg text-[#336799]">{{ name }}</h3>
          </div>
          <nav>
            <ul class="flex flex-col gap-1">
              <li v-for="item in filteredNav" :key="item.id" class="border-b border-[#E6A421] rounded">
                <router-link
                  :to="item.rout"
                  class="appText p-2 font-bold w-full flex items-center hover:text-[#E6A421] transition-v"
                  :class="{ 'text-[#E6A421]': $route.meta.mainRout === item.active }"
                  @click="item.method"
                >
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
    }
  },

  props: {
    nav: Array,
    name: String,
    img: [String, Object],
  },
  computed: {
    filteredNav() {
      const isLoggedIn = !!this.appStore.userProfile
      return this.nav.filter((item) => {
        if (item.name === 'Войти' && isLoggedIn) return false
        return true
      })
    },
  },
  methods: {
    menuOpen() {
      this.status = true
      document.body.style.overflow = 'hidden' // блокируем прокрутку
    },
    closeMenu() {
      this.status = false
      document.body.style.overflow = '' // возвращаем прокрутку
    },
  },
  watch: {
    '$route.fullPath': {
      handler() {
        this.closeMenu()
      },
      immediate: true,
    },
  },
}
</script>
