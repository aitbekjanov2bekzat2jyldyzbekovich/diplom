<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto p-24 flex items-center justify-center"
    @click="$emit('closeInteres', '')"
  >
    <div
      class="w-full bg-[#fff] border rounded-2xl shadow-md p-14 flex flex-col gap-5"
      @click.stop
      data-aos="zoom-in"
    >
      <div class="w-full flex flex-wrap gap-2 justify-center">
        <buttonV v-for="i in interes" @click="getData(i)">{{ i }}</buttonV>
      </div>
      <div class="flex items-center justify-center flex-wrap gap-2 w-full">
        <p v-for="i in sendData" class="appText p-1 border rounded-3xl border-[#E6A421]">{{ i }}</p>
      </div>
      <div class="flex gap-3 justify-center" v-if="sendData.length">
        <buttonV
          class="bg-green-500"
          v-html="btn"
          @click="this.appStore.ollUpdateProfile({ skills: sendData })"
        />
        <buttonV class="bg-red-500" v-html="btn2" @click="clearItem" />
      </div>
    </div>
  </div>
</template>

<script>
import loader from './loader.vue'
export default {
  data() {
    return {
      interes: ['Програмирование', 'Рисование', 'Дизайн'],
      sendData: [],
      btn: '<i class="pi pi-file-edit"/>',
      btn2: '<i class="pi pi-times"/>',
    }
  },
  components: {
    loader,
  },
  methods: {
    getData(item) {
      this.sendData.push(item)
      this.interes = this.interes.filter((i) => i !== item)
    },
    clearItem() {
      const i = this.sendData.pop()
      this.interes.push(i)
    },
  },
  mounted() {
    this.appStore.message('После выбора не возможно изменить данные!', 'blue')
  },
  unmounted() {
    this.$emit('closeInteres', '')
  },
}
</script>
