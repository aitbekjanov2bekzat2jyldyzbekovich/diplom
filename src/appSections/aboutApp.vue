<template>
  <section-layout :title="heading">
    <div class="grid gap-4 grid-cols-2 w-full max-sm:grid-cols-1">
      <div
        v-for="i in info"
        class="bg-[#fff] p-8 rounded-2xl shadow-md border flex flex-col gap-5 items-center"
        data-aos="zoom-in"
      >
        <div class="w-28 h-28 max-md:w-20 max-md:h-20">
          <component :is="i.icon" class="fill-[#E6A421]" />
        </div>
        <div>
          <h3 class="heading !text-2xl text-center max-md:text-lg">{{ i.title }}</h3>
        </div>
        <div class="appText" v-html="i.text" />
        <router-link
          to="/#instruction"
          v-if="i.rout"
          class="appText font-bold text-[#E6A421] hover:underline transition-v"
          >{{ i.rout }}
          <i class="pi pi-arrow-right" />
        </router-link>
        <div v-if="i.message" class="border p-2 border-blue-500 rounded-md cursor-none text-center">
          <span class="appText !font-bold !text-blue-500"> {{ i.message }} </span>
        </div>
      </div>
    </div>
  </section-layout>
</template>

<script>
import { markRaw } from 'vue'
import ai from '@/assets/objects/ai.svg'
import createCours from '@/assets/objects/createCours.svg'
import interfacee from '@/assets/objects/interface.svg'
import video from '@/assets/objects/video.svg'
export default {
  data() {
    return {
      heading: 'Информатция о сайте',
      info: [
        {
          id: 1,
          title: 'Видеоуроки и лайфхаки',
          text: '<p class=" text-center">Не успел за программой? Просто открой видеоуроки — и ты снова в потоке!. Ты можешь проверить дополнительные ссылки от афтора курса, которые помогут тебе освоить тему.</p>',
          message: 'Автор курса может выкладывать любые видео!',
          icon: markRaw(video),
        },
        {
          id: 2,
          title: 'Понятный интерфейс',
          text: '<ul class="list-disc"><li>Понятно расписано прохождение уроков.</li> <li>Обший чат группы.</li><li>Информатция о авторе курса.</li><li>Информатция о том как пройдет курс.</li></ul>',
          icon: markRaw(interfacee),
        },
        {
          id: 3,
          title: 'Свои курсы',
          text: '<p class=" text-center">Ты можешь создавать собственные курсы, если хочешь обучать других студентов. </p> ',
          rout: 'Инструкция по созданию курса',
          icon: markRaw(createCours),
        },
        {
          id: 4,
          title: 'Тест от AI',
          text: '<p class="text-center">Ты должен пройти тест на знание чтобы создать курс. </p>',
          icon: markRaw(ai),
        },
      ],
    }
  },
}
</script>
