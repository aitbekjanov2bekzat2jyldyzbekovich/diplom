<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto py-10"
    v-if="status"
    @click="$emit('closeAdd', '')"
  >
    <div class="container mx-auto px-4">
      <div
        class="w-full bg-white border rounded-2xl shadow-md p-10 flex flex-col gap-14"
        @click.stop
        data-aos="zoom-in"
      >
        <!-- Информация о блоке -->
        <div
          class="border p-8 appText border-blue-500 rounded-2xl font-semibold text-blue-500 text-center"
        >
          <p>Добавленный урок не подлежит последующему редактированию.</p>
        </div>

        <!-- Основная форма -->
        <div class="flex flex-col gap-5">
          <!-- Название урока -->
          <div class="flex flex-col w-full gap-1 appText">
            <label class="font-semibold">Название урока:</label>
            <input
              type="text"
              placeholder="Введите название"
              v-model="appStore.vallue.nameLesson"
              class="bg-[#F2F2F2] p-4 rounded-md outline-[#E6A421]"
              @input="appStore.validSend(appStore.vallue.nameLesson, 'nameLesson', 'nameLesson')"
            />
          </div>

          <!-- URL видео -->
          <div class="flex flex-col w-full gap-1 appText">
            <label class="font-semibold">URL видео урока:</label>
            <input
              type="text"
              placeholder="Введите URL видео"
              v-model="appStore.vallue.urlVideo"
              class="bg-[#F2F2F2] p-4 rounded-md outline-[#E6A421]"
              @input="appStore.validSend(appStore.vallue.urlVideo, 'urlVideo', 'urlVideo')"
            />
          </div>

          <!-- Доп. ссылки -->
          <div class="flex flex-col w-full gap-1 appText mb-5">
            <label class="font-semibold">Ссылки:</label>
            <input
              type="text"
              placeholder="Введите дополнительные ссылки"
              v-model="appStore.vallue.dopUrl"
              class="bg-[#F2F2F2] p-4 rounded-md outline-[#E6A421]"
              @input="appStore.validSend(appStore.vallue.dopUrl, '', 'dopUrl')"
            />
          </div>

          <!-- Блоки контента (заголовок + описание) -->
          <div class="flex flex-col gap-5 w-full appText">
            <div
              v-for="(block, index) in contentBlocks"
              :key="index"
              class="flex flex-col gap-3 bg-[#F9F9F9] p-4 rounded-md"
            >
              <label class="font-semibold">Заголовок</label>
              <textarea
                type="text"
                v-model="block.title"
                placeholder="Введите заголовок"
                class="bg-[#F2F2F2] p-3 rounded-md h-32 outline-[#E6A421]"
              />

              <label class="font-semibold"> Пример:</label>
              <textarea
                v-model="block.about"
                placeholder="def say_hello(name):
    return f'Привет, {name}!'"
                class="bg-[#F2F2F2] p-3 rounded-md h-32 outline-[#E6A421]"
              ></textarea>

              <button
                v-if="contentBlocks.length > 1"
                @click="removeBlock(index)"
                class="text-red-500"
              >
                Удалить блок
              </button>
            </div>

            <button @click="addBlock" class="bg-blue-500 text-white px-4 py-2 rounded-md w-fit">
              + Добавить блок
            </button>
          </div>

          <!-- ZIP файл -->
          <div class="flex items-center gap-5 mt-5">
            <div class="flex flex-col">
              <label
                for="fileInput"
                class="h-full border-[#E6A421] border p-6 bg-[#F2F2F2] rounded-md cursor-pointer text-[#E6A421] text-center"
              >
                <i class="pi pi-file-plus"></i> Выберите ZIP
              </label>
              <span class="appText">{{ zip?.name }}</span>
              <input
                type="file"
                ref="fileInput"
                id="fileInput"
                v-show="false"
                accept=".zip"
                @change="onFileChange"
              />
            </div>

            <!-- Кнопка добавить урок в массив -->
            <button class="bg-green-500 text-white px-4 py-2 rounded-md" @click="addlesson">
              <i class="pi pi-plus"></i> Добавить урок
            </button>
          </div>
        </div>

        <!-- Список добавленных уроков -->
        <TransitionGroup name="list" tag="div" class="flex flex-col gap-3 mt-10">
          <button
            v-if="lessons.length"
            class="bg-green-500 text-white px-4 py-2 rounded-md w-fit"
            @click="addDb"
          >
            <span v-if="!load">Сохранить все уроки</span>
            <loader v-else />
          </button>

          <div
            v-for="(lesson, index) in lessons"
            :key="index"
            class="w-full flex gap-3 items-start"
          >
            <div class="w-full bg-[#F2F2F2] rounded-md p-4 flex flex-col gap-2">
              <span class="font-semibold">{{ index + 1 }}. {{ lesson.title }}</span>
              <div v-for="(block, i) in lesson.content" :key="i" class="pl-4">
                <p class="font-semibold">{{ block.title }}</p>
                <p>{{ block.about }}</p>
              </div>
            </div>
            <button class="bg-red-500 text-white px-2 py-2 rounded-md" @click="deleteLesson(index)">
              <i class="pi pi-trash"></i>
            </button>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script>
import loader from './loader.vue'

export default {
  data() {
    return {
      zip: null,
      lessons: [],
      load: false,
      contentBlocks: [{ title: '', about: '' }],
    }
  },
  props: {
    status: Boolean,
  },
  components: {
    loader,
  },
  computed: {
    canAddLesson() {
      // Проверяем, что есть название урока, URL видео, хотя бы один контент и zip
      return (
        this.appStore.vallue.nameLesson &&
        this.appStore.vallue.urlVideo &&
        this.zip &&
        this.contentBlocks.every((block) => block.title.trim() && block.about.trim())
      )
    },
  },
  methods: {
    // Добавление блока
    addBlock() {
      this.contentBlocks.push({ title: '', about: '' })
    },
    removeBlock(index) {
      this.contentBlocks.splice(index, 1)
    },

    // Работа с ZIP
    onFileChange(event) {
      const file = event.target.files[0]
      this.$refs.fileInput.value = null
      if (!file) return

      if (!file.name.endsWith('.zip')) {
        this.appStore.message('Только ZIP файлы', 'yellow')
        return
      }

      const reader = new FileReader()
      reader.onload = () => {
        this.zip = { name: file.name, data: reader.result }
      }
      reader.readAsDataURL(file)
    },

    // Добавление урока в массив
    addlesson() {
      if (!this.canAddLesson) {
        this.appStore.message('Пожалуйста, заполните все поля и добавьте ZIP файл', 'yellow')
        return
      }
      this.lessons.push({
        title: this.appStore.vallue.nameLesson,
        zip: this.zip,
        content: this.contentBlocks,
        dopUrl: this.appStore.vallue.dopUrl,
        urlVideo: this.appStore.vallue.urlVideo,
      })

      // Очистка формы
      this.contentBlocks = [{ title: '', about: '' }]
      this.zip = null
      this.appStore.vallue.nameLesson = ''
      this.appStore.vallue.urlVideo = ''
      this.appStore.vallue.dopUrl = ''
      this.appStore.reWorkStatus.nameLesson = false
    },

    // Сохранение в БД
    async addDb() {
      try {
        this.load = true
        for (const lesson of this.lessons) {
          await this.appStore.addField(
            this.$route.params.id,
            'lessons',
            lesson,
            `Добавлено ${lesson.title}`,
          )
        }
      } catch (err) {
        this.appStore.validate(err.message)
      } finally {
        this.load = false
        document.body.style.overflow = ''
      }
    },

    // Удаление урока из списка
    deleteLesson(index) {
      this.lessons.splice(index, 1)
    },
  },
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.list-move {
  transition: transform 0.3s ease;
}
</style>
