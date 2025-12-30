<template>
  <div
    class="bg-[#fff] border rounded-2xl shadow-md p-8 flex justify-center flex-col items-center gap-4 appText"
    data-aos="zoom-in"
  >
    <TransitionGroup class="w-1/2 flex flex-col gap-3" name="list" tag="ul">
      <li v-for="i in courses" class="flex items-center gap-4 w-full h-max" :key="i.id">
        <div class="w-full h-full flex">
          <span class="p-4 border">{{ i.id }}</span>
          <span class="p-4 w-full border overflow-hidden">{{ i.name }}</span>
          <span class="p-4 w-full border overflow-hidden">{{ i.url || 'Нет данных' }}</span>
          <span class="p-4 w-full border overflow-hidden">{{ i.zip.name }}</span>
        </div>
        <buttonV class="bg-red-500" @click="courses = courses.filter((it) => it.id !== i.id)"
          >-</buttonV
        >
      </li>
    </TransitionGroup>

    <div class="w-1/2 flex justify-center border p-4 rounded-xl flex-wrap border-[#E6A421]">
      <div>
        <p class="text-blue-500 text-center">{{ create.message }}</p>
      </div>
      <div class="flex w-[70%] flex-col gap-2 py-2">
        <div class="flex flex-col gap-1">
          <label :for="create.inputId" class="font-semibold">{{ create.inpLabel }}</label>
          <input
            type="text"
            :id="create.inputId"
            :placeholder="create.placeHolder"
            class="w-full bg-[#F2F2F2] p-4 outline-[#E6A421] rounded-md"
            v-model="this.appStore.vallue.nameLession"
            @input="
              this.appStore.validSend(
                this.appStore.vallue.nameLession,
                'nameLession',
                'nameLession',
              )
            "
          />
        </div>
        <div class="flex flex-col gap-1">
          <label :for="create.urlId" class="font-semibold">{{ create.urlLabel }}</label>
          <input
            type="url"
            required
            :id="create.urlId"
            :placeholder="create.urlPlaceholder"
            class="w-full bg-[#F2F2F2] p-4 outline-[#E6A421] rounded-md"
            v-model="this.appStore.vallue.urlLession"
          />
        </div>
      </div>
      <div class="w-[30%] flex justify-center items-center flex-col gap-1 py-2">
        <input
          type="file"
          :id="create.zipId"
          accept="application/zip"
          v-show="false"
          @change="choseZip"
        />
        <label
          :for="create.zipId"
          v-html="create.zip"
          class="p-4 font-bold cursor-pointer border text-xl"
        />
        <span>{{ create.filePlaceHolder }}</span>
      </div>
      <div>
        <buttonV @click="corectCours">{{ create.btn }}</buttonV>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      create: {
        filePlaceHolder: 'Выберите Zip file',
        zipId: 'c5',
        inputId: 'c3',
        inpLabel: 'Тема урока:',
        placeHolder: 'Введите тему!',
        zip: '<i class="pi pi-upload"/>',
        urlId: 'c4',
        urlLabel: 'Ссылка:',
        urlPlaceholder: 'Введите ссылку',
        message:
          'Выберите свои материалы урока, загрузите в зип формате чтобы ваш ученик курса мог получить знания. Можеж добавить цылку чтобы ваши ученики получили доп. знания.',
        btn: '+',
      },
      courses: [],
    }
  },
  methods: {
    choseZip(e) {
      const file = e.target.files[0]
      if (!file) return
      this.create.filePlaceHolder = file.name
      this.appStore.vallue.zipFile = file
    },
    corectCours() {
      if (!this.appStore.reWorkStatus.nameLession) {
        this.appStore.message('Введите название темы  корекно пожалуста!', 'red')
      } else if (!this.appStore.vallue.zipFile) {
        this.appStore.message('Выберите zip file!', 'red')
      } else if (!this.appStore.reWorkStatus.nameCours) {
        this.appStore.message('Введите название курса пожалуста!', 'red')
      } else if (!this.appStore.reWorkStatus.aboutCours) {
        this.appStore.message('Напишите информатцию о курсе', 'red')
      } else {
        this.createCours()
      }
    },
    createCours() {
      this.courses.push({
        id: this.courses.length + 1,
        name: this.appStore.vallue.nameLession,
        url: this.appStore.vallue.urlLession,
        zip: this.appStore.vallue.zipFile,
      })
      this.appStore.vallue.nameLession = ''
      this.appStore.vallue.urlLession = ''
      this.appStore.vallue.zipFile = null
      this.appStore.reWorkStatus.nameLession = false
    },
  },
}
</script>
<style scoped>
/* enter / leave */
.list-enter-active,
.list-leave-active {
  @apply transition-all duration-300 ease-out;
}

.list-enter-from {
  @apply opacity-0 translate-y-4;
}

.list-enter-to {
  @apply opacity-100 translate-y-0;
}

.list-leave-from {
  @apply opacity-100 translate-y-0;
}

.list-leave-to {
  @apply opacity-0 -translate-y-4;
}

/* move (important for v-for) */
.list-move {
  @apply transition-transform duration-300;
}
</style>
