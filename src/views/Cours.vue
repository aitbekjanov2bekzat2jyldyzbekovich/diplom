<template>
  <div v-if="this.appStore.userProfile">
    <section-layout :title="`Курс: ${this.$route.params.id} `" class="py-14" v-if="cours">
      <headCours v-if="this.appStore.userProfile?.uid === cours.createdId && !cours.lessons" />
      <coursIntro :dataIntro="cours" />
      <lessions :lesson="cours.lessons || {}" />
    </section-layout>
    <div v-else class="w-full flex items-center appText h-screen justify-center font-semibold">
      Нету данных
    </div>
  </div>
  <div class="w-full bg-[#fff] h-screen flex justify-center items-center" v-else>
    <loader class="!fill-[#E6A421]" />
  </div>
</template>

<script>
import lessions from '@/appSections/lessions.vue'
import coursIntro from '@/appSections/coursIntro.vue'
import headCours from '@/appSections/headCours.vue'
import loader from '@/components/loader.vue'
export default {
  computed: {
    cours() {
      const id = this.$route.params.id
      this.appStore.courses.forEach((i) => {
        i.status = false
      })
      return this.appStore.courses.find((i) => i.id === id) || null
    },
  },
  components: {
    headCours,
    coursIntro,
    lessions,
    loader,
  },

  unmounted() {
    document.body.style.overflow = ''
  },
}
</script>
