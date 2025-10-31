<template>
  <section-layout :title="title">
    <created-cours-swiper :cours="cours" />
    <div class="flex" v-if="cours.length > 4">
      <button
        class="ml-auto flex items-center font-bold appText gap-1 text-[#E6A421] hover:underline transition-v"
        v-show="cours.length > 4 && !status"
        @click="status = true"
      >
        {{ btn }}
        <i class="pi pi-arrow-right" />
      </button>
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95 translate-y-2"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100 translate-y-0"
        leave-to-class="opacity-0 scale-95 translate-y-2"
      >
        <div
          v-show="status"
          class="flex flex-col gap-12 border-t border-[#E6A421] py-5 w-full relative"
        >
          <button
            @click="status = false"
            class="!absolute top-2 right-0 font-bold text-[#E6A421] text-xl hover:text-[#336799] transition-v"
          >
            <i class="pi pi-lock" />
          </button>
          <div>
            <h3 class="heading text-2xl">{{ btn }}: {{ cours.length }}</h3>
          </div>
          <div
            class="grid grid-cols-4 gap-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-[480px]:grid-cols-1"
          >
            <card v-for="i in cours" :item="i" />
          </div>
        </div>
      </transition>
    </div>
  </section-layout>
</template>

<script>
import card from '@/components/coursCard.vue'
import createdCoursSwiper from '@/components/createdCoursSwiper.vue'
export default {
  data() {
    return {
      title: 'Новые курсы',
      btn: 'Все новые курсы',
      status: false,
      cours: [
        {
          id: 1,
          title: 'информатика изучение о области окружности.',
          date: 'Авг 08. 2024 до Сен 8. 2025',
          img: '/images/ImgnotFound.jpg',
        },
        {
          id: 1,
          title: 'информатика изучение о области окружности.',
          date: 'Авг 08. 2024 до Сен 8. 2025',
          img: '/images/ImgnotFound.jpg',
        },
        {
          id: 1,
          title: 'информатика изучение о области окружности.',
          date: 'Авг 08. 2024 до Сен 8. 2025',
          img: '/images/ImgnotFound.jpg',
        },
        {
          id: 1,
          title: 'информатика изучение о области окружности.',
          date: 'Авг 08. 2024 до Сен 8. 2025',
          img: '/images/ImgnotFound.jpg',
        },
        {
          id: 1,
          title: 'информатика изучение о области окружности.',
          date: 'Авг 08. 2024 до Сен 8. 2025',
          img: '/images/ImgnotFound.jpg',
        },
        {
          id: 1,
          title: 'информатика изучение о области окружности.',
          date: 'Авг 08. 2024 до Сен 8. 2025',
          img: '/images/ImgnotFound.jpg',
        },
        {
          id: 1,
          title: 'информатика изучение о области окружности.',
          date: 'Авг 08. 2024 до Сен 8. 2025',
          img: '/images/ImgnotFound.jpg',
        },
        {
          id: 1,
          title: 'информатика изучение о области окружности.',
          date: 'Авг 08. 2024 до Сен 8. 2025',
          img: '/images/ImgnotFound.jpg',
        },
        {
          id: 1,
          title: 'информатика изучение о области окружности.',
          date: 'Авг 08. 2024 до Сен 8. 2025',
          img: '/images/ImgnotFound.jpg',
        },
      ],
    }
  },
  components: {
    createdCoursSwiper,
    card,
  },
}
</script>
