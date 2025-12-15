<template>
  <div class="flex flex-col items-center gap-3 overflow-hidden rounded-2xl w-full">
    <div class="w-96 h-96 rounded-3xl overflow-hidden relative">
      <loader class="absolute top-1/2 left-1/2" v-if="this.appStore.loader.reworkImg" />
      <img :src="this.appStore.vallue.reworkImg" alt="avatar" class="object-cover w-full h-full" />
    </div>
    <label
      :for="img.id"
      class="p-2 border border-[#E6A421] appText cursor-pointer font-semibold transiton-v hover:bg-[#E6A421] rounded-md mb-6"
      >{{ img.label }}</label
    >
    <div class="flex flex-col gap-1 w-96">
      <label :for="img.inputId" class="appText font-semibold">{{ img.imgInputLabel }}</label>
      <input
        type="text"
        :id="img.inputId"
        :placeholder="img.imgPlaceholder"
        class="bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md"
        v-model="this.appStore.vallue.reInputImg"
        @input="this.urlgetImage()"
      />
    </div>

    <input
      :type="img.type"
      v-show="img.statusChoose"
      :id="img.id"
      accept="image/png, image/jpeg"
      @change="chooseImg"
      ref="fileInput"
    />

    <div class="flex gap-3" v-if="this.appStore.reWorkStatus.img">
      <buttonV
        class="bg-green-500"
        v-html="img.btn"
        @click="this.appStore.updateProfile({ avatar: this.appStore.vallue.reworkImg })"
      />
      <buttonV class="bg-red-500" v-html="img.btn2" @click="clearGetImg()" />
    </div>
  </div>
</template>
<script>
import loader from './loader.vue'
export default {
  data() {
    return {
      img: {
        id: 'r1',
        label: 'Добавить изобрежение',
        statusChoose: false,
        type: 'file',
        inputId: 'imgUrl',

        imgInputLabel: 'Введите URL изобрежение',
        imgPlaceholder: 'https://exempl.png',
        btn: '<i class="pi pi-file-edit"/>',
        btn2: '<i class="pi pi-times"/>',
      },
    }
  },
  components: {
    loader,
  },
  methods: {
    chooseImg(e) {
      const file = e.target.files[0]
      if (!file) return
      const reader = new FileReader()

      reader.onload = () => {
        this.appStore.vallue.reworkImg = reader.result // здесь твой base64
      }
      this.appStore.reWorkStatus.img = true
      reader.readAsDataURL(file) // читаем как Base64
    },
    urlgetImage() {
      const valid = /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(this.appStore.vallue.reInputImg)

      if (valid) {
        this.appStore.reWorkStatus.img = true
        this.appStore.vallue.reworkImg = this.appStore.vallue.reInputImg
      } else {
        this.appStore.vallue.reworkImg = this.appStore.userProfile.avatar || '/images/avatar.png'
        this.appStore.reWorkStatus.img = false
      }
    },
    clearGetImg() {
      this.appStore.vallue.reworkImg = this.appStore.userProfile.avatar || '/images/avatar.png'
      this.$refs.fileInput.value = ''
      this.appStore.vallue.reInputImg = null
      this.appStore.reWorkStatus.img = false
    },
  },

  mounted() {
    this.clearGetImg()
  },
}
</script>
