<template>
  <swiper
    :modules="[Navigation, Pagination]"
    navigation
    :pagination="{
      clickable: true,
      dynamicBullets: true,
    }"
    :slides-per-view="4"
    :space-between="10"
    class="w-full h-auto"
  >
    <swiper-slide
      v-for="(item, index) in cours"
      :key="index"
      class="bg-white rounded-lg shadow-xl m-3"
    >
      <div class="w-full h-52 mb-10">
        <img src="/ImgnotFound.jpg" alt="coursImg" class="w-full h-full object-cover rounded-lg" />
      </div>

      <div class="p-2 flex flex-col gap-5">
        <h3 class="heading text-center">Lorem ipsum dolor sit amet consectetur.</h3>
        <p class="appText text-center !font-bold">Авг 08. 2024 до Сен 8. 2025</p>
        <p class="appText h-32 overflow-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus debitis libero, quia
          ipsum quibusdam expedita distinctio ab quo corrupti id rerum ipsam modi, corporis aliquam,
          autem quam odit nemo? Numquam.
        </p>
        <div class="flex justify-between">
          <buttonV>&#9733;</buttonV>
          <buttonV>Подробнее...</buttonV>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

// Swiper стили
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      cours: Array(20).fill({}), // чтобы сработал v-for
    }
  },
  setup() {
    return {
      Navigation,
      Pagination,
    }
  },
}
</script>
