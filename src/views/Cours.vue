<template>
  <section-layout :title="`Курс: ${this.$route.params.id} `" class="py-14" v-if="cours">
    <headCours v-if="this.appStore.userProfile.uid === cours.createdId" />
    <coursIntro :dataIntro="cours" />
  </section-layout>
</template>

<script>
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
  },
  methods: {
    isData() {
      if (!this.cours) {
        this.$router.push('/')
      }
    },
  },
  mounted() {
    this.isData()
  },
}
</script>
