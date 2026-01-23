<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto flex items-center justify-center"
    v-if="status"
    @click="$emit('closeAdd', '')"
  >
    <div class="container mx-auto px-4">
      <div class="w-full bg-[#fff] border rounded-2xl shadow-md p-10 flex flex-col gap-14" @click.stop>
        <div class="border p-8 appText border-blue-500 rounded-2xl font-semibold text-blue-500 text-center">
          <p>Добавленный урок не подлежит последующему редактированию. </p>
        </div>
        <div class="flex items-center gap-5 justify-between">
          <div class="flex gap-1 flex-col w-full appText">
            <label for="t1" class="font-semibold">Тема урока: </label>
            <input
              type="text"
              id="t1"
              placeholder="Введите называние "
              v-model="this.appStore.vallue.nameLesson"
              class="bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md"
              @input="
                this.appStore.validSend(this.appStore.vallue.nameLesson, 'nameLesson', 'nameLesson')
              "
            />
          </div>
          <div>
            <label
              for="t2"
              class="h-full border-[#E6A421] border p-6 bg-[#F2F2F2] rounded-md pi pi-file-plus text-[#E6A421] cursor-pointer"
            />
            <span class="appText">{{ zip?.name }}</span>
            <input
              type="file"
              ref="t3"
              id="t2"
              v-show="false"
              accept=".zip"
              @change="onFileChange"
            />
          </div>
          <buttonV
            class="bg-green-500"
            v-if="this.appStore.reWorkStatus.nameLesson && zip"
            @click="addlesson"
          >
            <i class="pi pi-plus" />
          </buttonV>
        </div>
        <TransitionGroup  
        name="list"
        tag="div" 
        class="flex flex-col gap-3 items-start">
          <buttonV v-if="lessons.length" class="bg-green-500" @click="addDb">
            <span v-if="!load">Сохранить</span>
            <loader v-else/>
          </buttonV>
          <div v-for="i in lessons" :key="i.id"  class="w-full flex gap-3">
            <div class="w-full bg-[#F2F2F2] rounded-md appText flex items-center px-8 gap-4">
              <span class="font-semibold heading text-lg">{{ i.id }}</span>
              <span>{{ i.title }}</span>
            </div>
            <buttonV class="bg-red-500" @click="deleteLesson(i.id)">
              <i class="pi pi-trash" />
            </buttonV>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script>
import loader from './loader.vue';
export default {
  data() {
    return {
      zip: null,
      base64Zip: null,
      lessons: [],
      load: false
    }
  },
  components: {
    loader
  },
  props: {
    status: Boolean
  },

  methods: {
    onFileChange(event) {
      const file = event.target.files[0]
      this.$refs.t3.value = null
      if (!file) return

      if (!file.name.endsWith('.zip')) {
        this.appStore.message('Только ZIP файлы', 'yellow')
        this.$refs.t3.value = null
        return
      }

      const reader = new FileReader()
      reader.onload = () => {
        this.base64Zip = reader.result // data:application/zip;base64,...
      }
      reader.readAsDataURL(file)
      this.zip = file
    },
    addlesson() {
      this.lessons.push({
        id: this.lessons.length + 1,
        title: this.appStore.vallue.nameLesson,
        zip: this.base64Zip,
      })
      this.appStore.vallue.nameLesson = ''
      this.appStore.reWorkStatus.nameLesson = false
      this.base64Zip = null
      this.zip = null
    },
    async addDb() {
      try {
        this.load = true
        this.lessons.forEach((i) => {
          this.appStore.addField(this.$route.params.id, 'lessons', i)
        })
      } catch(err){
        this.appStore.validate(err.message)
      }
      finally{
       this.load = false
      }
    },
    deleteLesson(id) {
      this.lessons = this.lessons.filter((lesson) => lesson.id !== id)
    },
  },

}
</script>

<style lang="css" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* required for move animations */
.list-move {
  transition: transform 0.3s ease;
}
</style>

