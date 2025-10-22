<template>
  <div class="w-full py-9 flex flex-col gap-5 items-center">
    <div class="flex gap-3">
      <a :href="i.src" target="_blank" v-for="i in medias" class="p-2 bg-white rounded-full">
        <component :is="i.name" class="w-6 h-6 fill-[#E6A421]"  />
      </a>
    </div>
    <div class="flex gap-2 items-center">
      <p class="appText !text-white">{{ text }}</p>
      <h6 class="heading !text-sm !text-white underline">
        <a target="_blank" :href="link.src">{{ link.text }}</a>
      </h6>
    </div>
  </div>
</template>

<script>
import { markRaw } from 'vue'
import facebook from '@/assets/objects/facebook.svg'
import instagram from '@/assets/objects/instagram.svg'
export default {
  data() {
    return {
      text: 'Выполнено в рамках дипломного проекта, 2025.',
      link: {
        text: 'НАРЫНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ ИМЕНИ САТЫБАЛДЫ НААМАТОВА',
        src: 'https://nsu.kg/',
      },
      medias: [
        {
          id: 1,
          src: 'https://www.facebook.com/nguimeninaamatova/?locale=ru_RU',
          name: markRaw(facebook),
        },
        {
          id: 2,
          src: 'https://www.instagram.com/ngu_imeni_naamatova/',
          name: markRaw(instagram),
        },
      ],
    }
  },
}
</script>
