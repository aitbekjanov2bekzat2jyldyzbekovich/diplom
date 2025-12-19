<template>
  <div
    @click="closeReworkPanelSend"
    v-if="status && this.appStore.userProfile"
    class="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto"
  >
    <div class="container mx-auto px-4">
      <div
        @click.stop
        data-aos="zoom-in"
        data-aos-duration="500"
        class="w-full bg-[#fff] border rounded-2xl shadow-md my-28 p-14 flex flex-col gap-11 relative"
      >
        <h4 class="heading text-2xl">Редактировать профиль</h4>

        <div class="flex w-full justify-between items-center">
          <buttonV class="bg-green-500 flex items-center justify-center" @click="getData">
            <loader v-if="this.appStore.loader.ollUpdateProfile" />
            <span v-else>{{ btn1 }} все</span>
          </buttonV>
          <buttonV class="bg-red-500" @click="clearData">{{ btn3 }} все</buttonV>
        </div>
        <div class="flex flex-wrap gap-20">
          <reworkAvatar />
          <reworkInputs />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import reworkAvatar from '@/components/reworkAvatar.vue'
import reworkInputs from '@/components/reworkInputs.vue'
import loader from '@/components/loader.vue'
export default {
  props: {
    status: Boolean,
  },
  components: {
    reworkAvatar,
    reworkInputs,
    loader,
  },
  data() {
    return {
      btn1: 'Сохранить',
      btn3: 'Отменить',
    }
  },
  methods: {
    closeReworkPanelSend() {
      this.$emit('closePanel', '')
    },
    getData() {
      const valid = /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(this.appStore.vallue.reInputImg)
      const datta = {
        aboutPerson: this.appStore.vallue.reaboutMe || this.appStore.userProfile.aboutPerson,
        avatar: valid
          ? this.appStore.vallue.reInputImg
          : this.appStore.vallue.reworkImg ||
            '/images/avatar.png' ||
            this.appStore.userProfile.avatar,
        group: this.appStore.vallue.group || this.appStore.userProfile.group,
        name: this.appStore.vallue.firstname || this.appStore.userProfile.name,
        surname: this.appStore.vallue.lastName || this.appStore.userProfile.surname,
      }
      this.appStore.ollUpdateProfile(datta)
    },
    clearData() {
      this.appStore.vallue.reworkImg = this.appStore.userProfile.avatar || '/images/avatar.png'
      this.appStore.vallue.reaboutMe = this.appStore.userProfile.aboutPerson
      this.appStore.vallue.group = this.appStore.userProfile.group
      this.appStore.vallue.firstname = this.appStore.userProfile.name
      this.appStore.vallue.lastName = this.appStore.userProfile.surname
      this.appStore.vallue.reInputImg = ''
      Object.keys(this.appStore.reWorkStatus).forEach((key) => {
        this.appStore.reWorkStatus[key] = false
      })
    },
  },
  unmounted() {
    this.closeReworkPanelSend()
  },
}
</script>
