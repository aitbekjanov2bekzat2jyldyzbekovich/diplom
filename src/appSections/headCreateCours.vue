<template>
  <div class="bg-[#fff] rounded-2xl shadow-md border flex flex-wrap overflow-hidden">
    <div
      v-for="i in routs"
      @click="$emit('sendRout', i.rout)"
      :class="[
        'heading w-1/2 text-xl p-2 text-center cursor-pointer transition-v',
        { 'bg-[#E6A421] text-[#fff]  transition-v': nameRout === i.rout },
      ]"
    >
      {{ i.name }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routs: [
        {
          id: '1',
          name: 'Данные курса',
          rout: 'CreateDataOfCours',
        },
        {
          id: '2',
          name: 'создание уроков',
          rout: 'createLessonOfCours',
        },
      ],
    }
  },
  props: {
    nameRout: String,
  },
}
</script>
