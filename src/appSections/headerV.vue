<template>
  <div class="w-full flex justify-between items-center h-full">
    <div class="flex items-center gap-1 heading !text-lg !text-[#336799]">
      <component :is="img" />
      <h3>{{ name }}</h3>
    </div>
    <nav>
      <ul class="flex items-center gap-10 appText !font-semibold">
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
export default {
  data() {
    return {
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
  },
}
</script>
