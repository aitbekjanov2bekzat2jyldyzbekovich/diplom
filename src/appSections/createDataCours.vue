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
        @input="this.appStore.validSend(this.appStore.vallue[input.model], 'nameCours', input.model)"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label :for="textArea.id" class="appText font-semibold">{{ textArea.label }}</label>
      <textarea
        class="w-full bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md h-96"
        :id="textArea.id"
        :placeholder="textArea.placeHolder"
        @input="
          this.appStore.validSend(this.appStore.vallue[textArea.model], 'aboutCours', textArea.model)
        "
        v-model="this.appStore.vallue[textArea.model]"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        label: 'Название курса:',
        id: 'c1',
        placeHolder: 'Введите название курса',
        type: 'text',
        model: 'coursName',
      },
      textArea: {
        id: 'c2',
        label: 'О курсе:',
        placeHolder: 'Введите информацию о курсе',
        model: 'aboutCours',
      },
    }
  },
}
</script>
