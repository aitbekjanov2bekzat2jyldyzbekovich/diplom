<template>
  <div class="flex flex-wrap w-full">
    <div class="w-1/2 flex gap-2 pr-2">
      <div class="w-full flex flex-col gap-2 relative">
        <div
          class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          v-if="this.appStore.loader.reAboutMe"
        >
          <loader />
        </div>
        <label :for="textArea.id" class="appText font-semibold">{{ textArea.label }}</label>
        <textarea
          v-model="this.appStore.vallue.reaboutMe"
          @input="validSend(this.appStore.vallue.reaboutMe, 'aboutMe', 'reaboutMe')"
          :id="textArea.id"
          :placeholder="textArea.placeHolder"
          class="w-full h-52 bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md"
        />
      </div>
      <div class="flex gap-3 items-center justify-center" v-if="this.appStore.reWorkStatus.aboutMe">
        <buttonV
          class="bg-green-500"
          v-html="btn"
          @click="this.appStore.updateProfile({ aboutPerson: this.appStore.vallue.reaboutMe },'reaboutMe','reaboutMe',)"
        />
        <buttonV class="bg-red-500" v-html="btn2" @click="clearForm('reaboutMe', 'aboutMe')" />
      </div>
    </div>
  </div>
</template>

<script>
import loader from './loader.vue'

export default {
  data() {
    return {
      textArea: {
        label: 'О мне',
        id: 'reworkAboutme',
        placeHolder: 'Напишите коротко о себе....',
        status: false,
      },

      btn: '<i class="pi pi-file-edit"/>',
      btn2: '<i class="pi pi-times"/>',
    }
  },
  components: {
    loader,
  },
  methods: {
    validSend(value, status, valName) {
      if (value.length < 300 && value.trim() !== '') {
        this.appStore.reWorkStatus[status] = true
      } else {
        this.appStore.vallue[valName] = this.appStore.vallue[valName].slice(0, -1)
        this.appStore.reWorkStatus[status] = value < 1 ? false : true
        this.appStore.message('Синактическая  ошибка, или количества слов привешает!', 'yellow')
      }
    },
    clearForm(valName, status) {
      this.appStore.vallue[valName] = this.appStore.userProfile.aboutPerson || ''
      this.appStore.reWorkStatus[status] = false
    },
  },
  mounted() {
    this.appStore.vallue.reaboutMe = this.appStore.userProfile.aboutPerson || ''
  },
}
</script>
