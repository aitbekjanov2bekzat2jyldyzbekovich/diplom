<template>
  <section-layout :title="`Курс: ${this.$route.params.id} `" class="py-14" v-if="cours">
    <headCours v-if="this.appStore.userProfile.uid === cours.createdId && !cours.lessons" />
    <coursIntro :dataIntro="cours" />
    <lessions :lesson="cours.lessons || {}" />
  </section-layout>
  <div v-else>
    <h2>Not found page 400</h2>
  </div>
</template>

<script>
import lessions from '@/appSections/lessions.vue'
import coursIntro from '@/appSections/coursIntro.vue'
import headCours from '@/appSections/headCours.vue'
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
  },
  methods: {
    isData() {
      if (!this.cours) {
        this.$router.push({ name: 'NotFound' })
        this.appStore.message('Курс не найден!', 'yellow')
      }
    },
  },

  mounted() {
    this.isData()
  },
  unmounted() {
    document.body.style.overflow = ''
  },
}
</script>
