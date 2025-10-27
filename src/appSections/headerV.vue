<template>
  <div class="w-full flex justify-between items-center h-full">
    <burgerMenu v-if="this.appStore.sizeWindow < size" />
    <div
      class="flex items-center gap-1 heading text-lg text-[#336799] max-lg:text-base max-md:text-sm"
    >
      <component :is="img" class="max-lg:w-12 max-lg:h-12 max-md:w-10 max-md:h-10" />
      <h3 v-if="this.appStore.sizeWindow > size">{{ name }}</h3>
    </div>
    <nav v-if="this.appStore.sizeWindow > size">
      <ul class="flex items-center gap-10 max-lg:gap-5 max-md:gap-3 appText !font-semibold">
        <li v-for="i in nav">
          <router-Link
            :to="i.rout"
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
  data() {
    return {
      size: 640,
      name: 'Колледж ИЯиПКС',
      img: markRaw(logo),
      nav: [
        {
          id: 1,
          rout: '/',
          name: 'Главная',
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
          rout: '/login',
          name: 'Войти',
          active: 'login',
        },
      ],
    }
  },
  components: {
    userCard,
    burgerMenu,
  },

  mounted() {
    this.appStore.resizeWindow()
  },
}
</script>
