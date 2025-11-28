<template>
  <div class="w-full flex justify-between items-center h-full">
    <burgerMenu
      v-if="appStore.sizeWindow < 501"
      :nav="filteredNav"
      :name="menu.name"
      :img="menu.img"
    />

    <div
      class="flex items-center gap-1 heading text-lg text-[#336799] max-lg:text-base max-md:text-sm"
    >
      <component :is="img" class="max-lg:w-12 max-lg:h-12 max-md:w-10 max-md:h-10 sm" />
      <h3 v-if="this.appStore.sizeWindow > 768">{{ name }}</h3>
    </div>
    <nav v-if="this.appStore.sizeWindow > 500">
      <ul class="flex items-center gap-10 max-lg:gap-5 max-md:gap-3 appText font-semibold">
        <li v-for="i in filteredNav">
          <router-Link
            :to="i.rout"
            @click="i.method"
            class="hover:text-[#E6A421] transition-v"
            :class="{ 'text-[#E6A421]': $route.meta.mainRout === i.active }"
          >
            {{ i.name }}</router-Link
          >
        </li>
      </ul>
    </nav>
    <div class="relative">
      <userCard />
    </div>
  </div>
</template>

<script>
import { markRaw } from 'vue'
import userCard from '@/components/userCard.vue'
import logo from '@/assets/objects/logo.svg'
import burgerMenu from '@/components/burgerMenu.vue'
export default {
  components: {
    userCard,
    burgerMenu,
  },

  data() {
    const name = 'Колледж ИЯиПКС'
    const img = markRaw(logo)
    const nav = [
      {
        id: 1,
        rout: '/',
        name: 'Главная',
        method: async () => {
          if (this.$route.hash) {
            window.history.replaceState(null, '', window.location.pathname)
            window.location.reload()
          } else {
            await this.$router.push('/')
            await window.location.reload()
          }
        },
        active: '',
      },
      {
        id: 2,
        rout: '/cours',
        name: 'Курсы',
        active: 'cours',
      },
      {
        id: 3,
        rout: '/#about-app',
        name: 'О сайте',
        active: 'aboutApp',
      },
      {
        id: 4,
        rout: '/auth/sign-in',
        name: 'Войти',
        active: 'auth',
      },
    ]
    return {
      name,
      img,
      nav,
      menu: {
        nav,
        name,
        img,
      },
    }
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
}
</script>
