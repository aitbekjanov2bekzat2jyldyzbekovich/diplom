<template>
  <div class="relative w-full h-dvh flex items-center justify-center">
    <div class="w-[50%] flex flex-col gap-12">
      <h1 class="heading text-center !text-[#fff]">{{ heading }}</h1>
      <p class="appText !text-[#fff] text-center">{{ text }}</p>
      <div class="flex gap-14 justify-center w-full max-sm:flex-col max-sm:gap-3">
        <buttonV v-for="i in btn" @click="this.appStore.toRout(i.rout)">{{ i.name }}</buttonV>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      heading: 'Онлайн курсы для студентов колледжа города Нарын',
      text: `Создавай свои собственные курсы, делись тем, что знаешь, и открывай новые возможности для обучения.
        Наш сайт — это платформа, где студенты колледжа могут не только проходить интересные курсы, но и становиться преподавателями, помогая другим расти.`,
      btn: [
        {
          id: 1,
          name: 'Создать курс',
          rout: '/cours/create-cours',
        },
        {
          id: 2,
          name: 'Найти курсы',
          rout: '/cours/recommendation',
        },
      ],
    }
  },
}
</script>
