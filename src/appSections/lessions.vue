<template>
  <div class="bg-[#fff] border rounded-2xl shadow-md p-8 flex flex-col gap-12" data-aos="zoom-in">
    <div class="heading text-xl">
      <h5>Уроки</h5>
    </div>
    <div v-if="Object.values(lesson).length" class="flex flex-col gap-3">
      <div
        v-for="(i, index) in Object.values(lesson)"
        class="border flex flex-col gap-12 rounded-md appText"
      >
        <div
          class="border flex items-center rounded-md justify-between w-full cursor-pointer"
          @click="i.status = !i.status"
        >
          <div class="font-bold p-2 text-[#E6A421]">
            <span>{{ index + 1 }}</span>
          </div>
          <div class="border-x-2 p-2 w-full heading text-lg">
            <h5>{{ i.title || 'Нет данных' }}</h5>
          </div>
          <div
            class="text-[#E6A421] p-2 flex flex-col items-center gap-1 cursor-pointer"
            @click="downloadBase64Zip(i.zip)"
          >
            <i class="pi pi-download" />
            <span>Материалы </span>
          </div>
        </div>
        <transition
          enter-active-class="transition-v"
          leave-active-class="transition-v"
          enter-from-class="max-h-0 opacity-0"
          enter-to-class="max-h-40 opacity-100"
          leave-from-class="max-h-40 opacity-100"
          leave-to-class="max-h-0 opacity-0"
        >
          <div class="flex flex-col gap-10 p-3" v-if="i.status">
            <ul>
              <li class="flex gap-3">
                <span class="font-semibold">Доп. информация:</span>
                <a :href="i.dopUrl" target="_blank" class="underline text-[#E6A421]">{{
                  i.dopUrl || 'нет данных'
                }}</a>
              </li>
            </ul>
            <div class="w-full">
              <iframe
                v-if="isYouTube(i.urlVideo)"
                :src="getYouTubeEmbed(i.urlVideo)"
                class="w-full h-[400px]"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <!-- Обычное видео -->
              <iframe
                v-else-if="isVideo(i.urlVideo)"
                :src="i.urlVideo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                class="w-full h-96"
              ></iframe>
              <video
                v-else
                src="https://example.com/video/demo-video.mp4"
                controls
                class="w-full"
              ></video>
            </div>
            <div
              class="whitespace-pre-wrap p-4 h-96 overflow-hidden overflow-y-auto bg-[#F2F2F2] rounded-2xl"
            >
              {{ i.about || 'Нет данных' }}
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div v-else class="appText p-4 border rounded-2xl text-center">Нет данных</div>
  </div>
</template>

<script>
export default {
  props: {
    lesson: Object,
  },
  methods: {
    downloadBase64Zip(zip) {
      const base64 = zip.data.split(',')[1]

      const binary = atob(base64)
      const bytes = new Uint8Array(binary.length)

      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i)
      }

      const blob = new Blob([bytes], { type: 'application/zip' })
      const url = URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = url
      a.download = zip.name
      a.click()

      URL.revokeObjectURL(url)
    },
    isYouTube(url) {
      return /youtu\.be|youtube\.com/.test(url)
    },

    getYouTubeEmbed(url) {
      const regExp = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
      const match = url.match(regExp)
      return match ? `https://www.youtube.com/embed/${match[1]}` : null
    },

    isVideo(url) {
      return /\.(mp4|webm|ogg)$/i.test(url)
    },
  },
}
</script>
