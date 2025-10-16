<template>
  <div class="flex flex-col gap-28">
    <section>
      <div
        class="bg-fixed w-full h-screen bg-cover bg-center absolute z-0 left-0 top-[-15px] brightness-[30%]"
        :style="{ backgroundImage: `url(${bg})` }"
      ></div>
      <mainIntro />
    </section>
    <section>
      <aboutApp />
    </section>
    <section>
      <createdCours />
    </section>
    
  </div>
</template>
<script>
import aboutApp from '@/components/aboutApp.vue'
import bgImage from '@/assets/images/intro.jpg'
import mainIntro from '@/components/mainIntro.vue'
import createdCours from '@/components/createdCours.vue'
export default {
  data() {
    return {
      bg: bgImage,
    }
  },
  components: {
    mainIntro,
    createdCours,
    aboutApp,
  },
}
</script>
