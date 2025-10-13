<template>
  <div class="z-10 relative w-full h-screen flex items-center justify-center">
    <div class="w-[40%] flex flex-col gap-4">
      <h1 class="heading text-center">{{ heading }}</h1>
      <p class="appText !text-white">{{ text }}</p>
      <div class="flex gap-14">
        <buttonV v-for="i in btn">{{ i.name }}</buttonV>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonV from './buttonV.vue';

export default {
  data() {
    return {
      heading: 'Онлайн курсы для студентов колледжа города Нарын.',
      text: `Создавай свои собственные курсы, делись тем, что знаешь, и открывай новые возможности для обучения.
        Наш сайт — это платформа, где студенты колледжа могут не только проходить интересные курсы, но и становиться преподавателями, помогая другим расти.`,
      btn: [
        {
          id: 1,
          name: 'Создать курс',
          rout: '/creatCours',
        },
        {
          id: 2,
          name: 'Найти курсы',
        },
      ],
    }
  },
}
</script>
