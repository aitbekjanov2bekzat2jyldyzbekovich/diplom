<template>
  <section>
    <div
      class="bg-fixed w-full h-screen bg-cover bg-center absolute z-0 left-0 top-[-15px] brightness-[30%]"
      :style="{ backgroundImage: `url(${bg})` }"
    ></div>
    <mainIntro />
  </section>
</template>
<script>
import bgImage from '@/assets/images/intro.jpg'
import mainIntro from '@/components/mainIntro.vue'
export default {
  data() {
    return {
      bg: bgImage,
    }
  },
  components: {
    mainIntro,
  },
}
</script>
