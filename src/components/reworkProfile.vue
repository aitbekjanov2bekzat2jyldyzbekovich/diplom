<template>
  <div
    v-if="status && this.appStore.userProfile"
    class="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto"
  >
    <div class="container mx-auto px-4">
      <div class="w-full bg-[#fff] border rounded-2xl shadow-md my-28 p-14 flex flex-col gap-11">
        <div>
          <h4 class="heading text-2xl">Редактировать профиль</h4>
        </div>
        <div class="flex w-full justify-between items-center">
          <buttonV class="bg-green-500">{{ btn1 }} все</buttonV>
          <buttonV class="bg-red-500">{{ btn3 }} все</buttonV>
        </div>
        <div class="flex flex-wrap gap-3">
          <div class="w-full flex flex-col gap-10 items-center">
            <div class="flex flex-col items-center gap-3 relative overflow-hidden rounded-2xl w-full">
              <div class="absolute  bg-gray-500 bg-opacity-90 w-full h-full " />
              <div class="w-96 h-96 rounded-3xl overflow-hidden">
                <img
                  :src="this.appStore.userProfile.avatar || img.value"
                  alt="avatar"
                  class="object-cover w-full h-full"
                />
              </div>
              <label :for="img.id" class="p-2 border border-[#E6A421] appText cursor-pointer font-semibold transiton-v hover:bg-[#E6A421] rounded-md">{{ img.label }}</label>
              <input
                :type="img.type"
                v-show="img.statusChoose"
                :id="img.id"
                accept="image/png, image/jpeg"
              />
            </div>
            <div class="flex items-center gap-3">
              <buttonV class="bg-green-500">{{ btn1 }}</buttonV>
              <buttonV>{{ btn2 }}</buttonV>
              <buttonV class="bg-red-500">{{ btn3 }}</buttonV>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    status: Boolean,
  },
  data() {
    return {
      img: {
        id: 'r1',
        value: '/images/avatar.png',
        label: 'Добавить изобрежение',
        status: false,
        statusChoose: false,
        type: 'file',
      },
      btn1: 'Сохранить',
      btn2: 'Изменить',
      btn3: 'Отменить',
    }
  },
}
</script>
