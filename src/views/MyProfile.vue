<template>
  <reworkProfile :status="isOpen" @closePanel="closePanel" />
  <div v-if="isOpenInteres">
    <interes @closeInteres="closeInteres" />
  </div>

  <section-layout
    title="Мой профиль"
    class="mt-14 mb-4"
    v-if="this.appStore.userProfile && !this.appStore.loader.profile"
  >
    <div class="bg-[#fff] border rounded-2xl shadow-md w-full p-5" data-aos="zoom-in">
      <headMyProfile @sendOpenPanel="openPanel" />
    </div>

    <div class="bg-[#fff] border rounded-2xl shadow-md w-full p-10" data-aos="zoom-in">
      <h3 class="heading mb-14 text-lg">Персональные данные</h3>
      <myProfileData @openrePanel="openPanel" @openInteres="openInteres" />
    </div>
    <div class="bg-[#fff] border rounded-2xl shadow-md w-full p-10" data-aos="zoom-in">
      <h3 class="heading mb-14 text-lg">Дополнительные данные</h3>
      <div class="w-full h-96 flex justify-center items-center text-[#00000057]">
        <pieChar :data-user="chartData" :labels="chartLabels" :colors="chartColors" />
      </div>
    </div>
  </section-layout>
  <div class="w-full bg-[#fff] h-screen flex justify-center items-center" v-else>
    <loader class="!fill-[#E6A421]" />
  </div>
</template>

<script>
import interes from '@/components/interes.vue'
import reworkProfile from '@/appSections/reworkProfile.vue'
import headMyProfile from '@/appSections/headMyProfile.vue'
import myProfileData from '@/appSections/myProfileData.vue'
import pieChar from '@/components/pieChar.vue'
import loader from '@/components/loader.vue'

export default {
  components: { headMyProfile, myProfileData, pieChar, loader, reworkProfile, interes },
  data() {
    return {
      isOpen: false,
      isOpenInteres: false,
    }
  },
  computed: {
    cours() {
      return this.appStore.courses.filter((i) => i.createdId === this.appStore.userProfile.uid)
    },
    chartData() {
      const myCourses = this.cours.length
      const subs = 0

      if (myCourses === 0 && subs === 0) {
        return [1]
      }

      return [myCourses, subs]
    },

    chartLabels() {
      if (this.cours.length === 0) {
        return ['Нет данных']
      }
      return ['Мои курсы', 'Подписки']
    },

    chartColors() {
      if (this.cours.length === 0) {
        return ['#E0E0E0']
      }
      return ['#E6A421', '#336799']
    },
  },
  methods: {
    openPanel() {
      this.isOpen = true
      document.body.style.overflow = 'hidden'
    },
    closePanel() {
      this.isOpen = false
      document.body.style.overflow = ''
    },
    openInteres() {
      this.isOpenInteres = true
      document.body.style.overflow = 'hidden'
    },
    closeInteres() {
      this.isOpenInteres = false
      document.body.style.overflow = ''
    },
  },
}
</script>
