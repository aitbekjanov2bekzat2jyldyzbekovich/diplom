<template>
  <section-layout :title="`Курс: ${this.$route.params.id} `" class="py-14" v-if="cours">
    <headCours v-if="this.appStore.userProfile.uid === cours.createdId && !cours.lessons" />
    <coursIntro :dataIntro="cours" />
    <lessions />
  </section-layout>
</template>

<script>
import lessions from '@/appSections/lessions.vue'
import coursIntro from '@/appSections/coursIntro.vue'
import headCours from '@/appSections/headCours.vue'
export default {
  computed: {
    cours() {
      const id = this.$route.params.id
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
        this.$router.push('/')
        this.appStore.message('Курс не найден!', 'yellow')
      }
    },
  },
  
  mounted() {
    this.isData()
  },
}
</script>
