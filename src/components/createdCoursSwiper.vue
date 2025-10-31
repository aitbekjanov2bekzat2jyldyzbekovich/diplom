<template>
  <div class="relative">
    <swiper
      :modules="[Navigation]"
      :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }"
      :slides-per-view="slide"
      :slides-per-group="slide"
      :space-between="10"
      class="w-full h-auto"
    >
      <swiper-slide v-for="(item, index) in cours" :key="index">
        <card :item="item" />
      </swiper-slide>
    </swiper>

    <button
      v-if="this.appStore.sizeWindow > 484"
      class="custom-prev absolute left-0 top-1/2 -translate-y-1/2 bg-white text-[#E6A421] rounded-full w-10 h-10 flex items-center justify-center z-10 cursor-pointer transition-v hover:text-white shadow-lg hover:bg-[#E6A421] disabled:hidden"
    >
      <i class="pi pi-arrow-left" />
    </button>
    <button
      v-if="this.appStore.sizeWindow > 484"
      class="custom-next absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer transition-v hover:text-white bg-white shadow-lg hover:bg-[#E6A421] text-[#E6A421] rounded-full w-10 h-10 flex items-center justify-center z-10 disabled:hidden"
    >
      <i class="pi pi-arrow-right" />
    </button>
  </div>
</template>

<script>
import card from '@/components/coursCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    card,
  },
  data() {
    return {
      slide: 4,

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
  methods: {
    swiperSize() {
      this.$emit('sendItem')
      if (this.appStore.sizeWindow < 485) {
        this.slide = 1
      } else if (this.appStore.sizeWindow < 1025) {
        this.slide = 2
      } else if (this.appStore.sizeWindow < 1281) {
        this.slide = 3
      } else {
        this.slide = 4
      }
    },
  },
  setup() {
    return {
      Navigation,
    }
  },
  mounted() {
    this.swiperSize()
    window.addEventListener('resize', this.swiperSize)
  },
}
</script>
