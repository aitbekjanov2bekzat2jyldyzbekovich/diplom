<template>
  <div class="bg-[#fff] border rounded-2xl shadow-md p-8 flex flex-col gap-5" data-aos="zoom-in">
    <div class="flex flex-col gap-1">
      <label :for="input.id" class="appText font-semibold">{{ input.label }}</label>
      <input
        class="w-full bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md"
        :type="input.type"
        :id="input.id"
        :placeholder="input.placeHolder"
        v-model="this.appStore.vallue[input.model]"
        @input="
          this.appStore.validSend(this.appStore.vallue[input.model], 'nameCours', input.model)
        "
      />
    </div>
    <div class="flex flex-col gap-1">
      <label :for="input2.id" class="appText font-semibold">{{ input2.label }}</label>
      <input
        class="w-full bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md"
        :type="input2.type"
        :id="input2.id"
        :placeholder="input2.placeHolder"
        v-model="this.appStore.vallue[input2.model]"
        @input="
          this.appStore.validSend(this.appStore.vallue[input2.model], 'dopInfo', input2.model)
        "
      />
    </div>
    <div class="flex flex-col gap-1">
      <label :for="textArea.id" class="appText font-semibold">{{ textArea.label }}</label>
      <textarea
        class="w-full bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md h-96"
        :id="textArea.id"
        :placeholder="textArea.placeHolder"
        v-model="this.appStore.vallue[textArea.model]"
      />
    </div>
    <div class="flex gap-2">
      <label :for="dateC.id" class="appText font-semibold">{{ dateC.label }}</label>
      <input
        :min="minDate"
        :type="dateC.type"
        :id="dateC.id"
        class="appText border px-2 border-[#E6A421] rounded-xl"
        v-model="this.appStore.vallue[dateC.model]"
      />
    </div>
    <div
      class="w-full flex justify-end"
      v-if="
        appStore.reWorkStatus.nameCours &&
        appStore.reWorkStatus.dopInfo &&
        appStore.vallue.aboutCours &&
        appStore.vallue.aboutCours.trim() !== ''
      "
    >
      <buttonV class="bg-green-500" @click="createCours">
        <span v-if="!this.appStore.loader.createCors">{{ btn }}</span>
        <loader v-else />
      </buttonV>
    </div>
  </div>
</template>

<script>
import loader from '@/components/loader.vue'
export default {
  components: {
    loader,
  },
  data() {
    const today = new Date()
    return {
      input: {
        label: 'Название курса:',
        id: 'c1',
        placeHolder: 'Введите название курса',
        type: 'text',
        model: 'coursName',
      },
      input2: {
        label: 'Доп. информация:',
        id: 'c4',
        placeHolder: 'Например курс идет офлай и онлай  в кабинете 104 итд.',
        type: 'text',
        model: 'dopInfo',
      },
      textArea: {
        id: 'c2',
        label: 'Цель курса:',
        placeHolder: 'Введите цель курса',
        model: 'aboutCours',
      },
      btn: 'Создать',
      dateC: {
        id: 'c3',
        label: 'Выберите дату окончания курса:',
        model: 'dateCours',
        type: 'date',
      },
      minDate: today.toISOString().split('T')[0],
    }
  },
  methods: {
    createCours() {
      this.appStore.addCourse({
        id: this.appStore.courses.length + 1,
        title: this.appStore.vallue.coursName,
        img: this.appStore.userProfile.avatar,
        end: this.appStore.vallue.dateCours
          ? this.appStore.vallue.dateCours
          : (() => {
              const d = new Date()
              d.setFullYear(d.getFullYear() + 1)
              return d.getTime()
            })(),
        about: this.appStore.vallue.aboutCours,
        uid: this.appStore.userProfile.uid,
        dopInfo: this.appStore.vallue.dopInfo,
      })
    },
  },
  mounted() {
    this.appStore.reWorkStatus.nameCours = false
  },
}
</script>
