<template>
  <div class="flex flex-wrap w-full">
    <div class="w-1/2 flex gap-2 pr-2">
      <div class="w-full flex flex-col gap-2">
        <label :for="textArea.id" class="appText font-semibold">{{ textArea.label }}</label>
        <textarea
          :id="textArea.id"
          :placeholder="textArea.placeHolder"
          class="w-full h-52 bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md"
        ></textarea>
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
    }
  },
}
</script>
