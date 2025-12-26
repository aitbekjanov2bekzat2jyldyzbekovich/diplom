<template>
  <div
    class="bg-[#fff] border rounded-2xl shadow-md p-8 flex justify-center appText"
    data-aos="zoom-in"
  >
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
        <buttonV @click="addCours">{{ create.btn }}</buttonV>
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
    addCours() {
      if (!this.appStore.reWorkStatus.nameLession) {
        this.appStore.message('Введите название темы  корекно пожалуста!', 'red')
      } else if (!this.appStore.vallue.zipFile) {
        this.appStore.message('Выберите zip file!', 'red')
      } else {
        alert('ok')
      }
    },
  },
}
</script>
