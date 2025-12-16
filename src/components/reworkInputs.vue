<template>
  <div class="flex flex-wrap w-full">
    <div class="w-1/2 flex gap-2 pr-2">
      <div class="w-full flex flex-col gap-2">
        <label :for="textArea.id" class="appText font-semibold">{{ textArea.label }}</label>
        <textarea
          v-model="this.appStore.vallue.reaboutMe"
          @input="validSend(this.appStore.vallue.reaboutMe, 'reaboutMe')"
          :id="textArea.id"
          :placeholder="textArea.placeHolder"
          class="w-full h-52 bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md"
        ></textarea>
      </div>
      <div
        class="flex gap-3 items-center justify-center"
        v-if="this.appStore.vallue.reaboutMe.trim() !== ''"
      >
        <buttonV
          class="bg-green-500"
          v-html="btn"
          @click="this.appStore.updateProfile({ aboutPerson: this.appStore.vallue.reaboutMe },)"
        />
        <buttonV class="bg-red-500" v-html="btn2" />
      </div>
    </div>
  </div>
</template>

<script>
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
  methods: {
    validSend(vallue, name) {
      if (vallue.length > 100) {
        this.appStore.vallue[name] = ''
        this.appStore.message('ошибка', 'red')
      }
    },
  },
}
</script>
