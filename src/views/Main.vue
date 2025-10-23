<template>
  <div class="flex flex-col gap-28 mb-28">
    <section>
      <div
        class="bg-fixed w-full h-dvh bg-cover bg-center absolute z-0 left-0 top-[-0] brightness-[30%]"
        :style="{ backgroundImage: `url(${bg})` }"
      ></div>
      <mainIntro />
    </section>
    <section id="about-app">
      <aboutApp />
    </section>
    <section>
      <createdCours />
    </section>
    <section>
      <instruction />
    </section>
  </div>
</template>
<script>
import aboutApp from '@/appSections/aboutApp.vue'
import mainIntro from '@/appSections/mainIntro.vue'
import instruction from '@/appSections/instruction.vue'
import createdCours from '@/appSections/createdCours.vue'
export default {
  data() {
    return {
      bg: '/images/intro.jpg',
    }
  },
  components: {
    instruction,
    mainIntro,
    createdCours,
    aboutApp,
  },
}
</script>
