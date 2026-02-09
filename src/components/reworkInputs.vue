<template>
  <div class="grid grid-cols-2 gap-4 w-full max-[540px]:grid-cols-1">
    <div class="flex gap-2 h-max">
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
          @input="this.appStore.validSend(this.appStore.vallue.reaboutMe, 'aboutMe', 'reaboutMe')"
          :id="textArea.id"
          :placeholder="textArea.placeHolder"
          class="w-full h-52 bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md"
        />
      </div>
      <div class="flex gap-3 items-center justify-center" v-if="this.appStore.reWorkStatus.aboutMe">
        <buttonV
          class="bg-green-500"
          v-html="btn"
          @click="
            this.appStore.updateProfile(
              { aboutPerson: this.appStore.vallue.reaboutMe },
              'reaboutMe',
              'reAboutMe',
              'aboutMe',
            )
          "
        />
        <buttonV class="bg-red-500" v-html="btn2" @click="clearForm('reaboutMe', 'aboutMe')" />
      </div>
    </div>
    <div class="flex gap-2 h-max" v-for="i in inputs">
      <div class="flex flex-col gap-2 w-full relative">
        <div
          class="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          v-if="this.appStore.loader[i.loader]"
        >
          <loader />
        </div>
        <label class="appText font-semibold" :for="`rf${i.id}`">{{ i.label }}</label>
        <input
          :id="`rf${i.id}`"
          :type="i.type"
          :placeholder="i.placeHolder"
          class="w-full bg-[#F2F2F2] p-4 appText outline-[#E6A421] rounded-md"
          v-model="this.appStore.vallue[i.val]"
          @input="this.appStore.validSend(this.appStore.vallue[i.val], i.buttonStatus, i.val)"
        />
      </div>
      <div class="flex items-end gap-2" v-if="this.appStore.reWorkStatus[i.buttonStatus]">
        <buttonV
          class="bg-green-500"
          v-html="btn"
          @click="
            this.appStore.updateProfile(
              { [i.upName]: this.appStore.vallue[i.val] },
              i.val,
              i.loader,
              i.buttonStatus,
            )
          "
        />
        <buttonV class="bg-red-500" v-html="btn2" @click="clearForm(i.val, i.buttonStatus)" />
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
        label: 'О мне:',
        id: 'reworkAboutme',
        placeHolder: 'Напишите коротко о себе....',
        status: false,
      },

      btn: '<i class="pi pi-file-edit"/>',
      btn2: '<i class="pi pi-times"/>',

      inputs: [
        {
          id: 1,
          label: 'Ваше имя:',
          buttonStatus: 'firstname',
          loader: 'firstname',
          val: 'firstname',
          placeHolder: 'Изменить имя',
          type: 'text',
          upName: 'name',
        },
        {
          id: 2,
          label: 'Фамилия:',
          buttonStatus: 'lastName',
          loader: 'lastName',
          val: 'lastName',
          placeHolder: 'Изменить фамилию',
          type: 'text',
          upName: 'surname',
        },
        {
          id: 3,
          label: 'Группа:',
          buttonStatus: 'group',
          loader: 'group',
          val: 'group',
          placeHolder: 'Введите факультет группу!',
          type: 'text',
          upName: 'group',
        },
      ],
    }
  },
  components: {
    loader,
  },
  methods: {
    clearForm(valName, status) {
      this.appStore.vallue[valName] = this.appStore.userProfile.aboutPerson || ''
      this.appStore.reWorkStatus[status] = false
    },
  },
  mounted() {
    this.appStore.vallue.reaboutMe = this.appStore.userProfile.aboutPerson || ''
    this.appStore.vallue.firstname = this.appStore.userProfile.name || ''
    this.appStore.vallue.lastName = this.appStore.userProfile.surname || ''
    this.appStore.vallue.group = this.appStore.userProfile.group || ''
  },
}
</script>
