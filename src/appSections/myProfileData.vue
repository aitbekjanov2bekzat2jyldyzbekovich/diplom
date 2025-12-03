<template>
  <div class="flex">
    <div class="w-1/2 flex flex-col gap-5">
      <div>
        <img
          v-if="this.appStore.userProfile.avatar"
          :src="this.appStore.userProfile.avatar"
          alt="avatar"
          class="w-96 h-96 rounded-3xl"
        />
        <img v-else :src="img" alt="avatar" />
      </div>
      <div class="w-96 flex flex-col gap-3 items-center">
        <h3 class="heading text-xl text-[#000]">
          {{ this.appStore.userProfile.surname || 'Нет данных' }}
          {{ this.appStore.userProfile.name || 'Нет данных' }}
        </h3>
        <span class="appText text-lg font-semibold text-[#E6A421]">{{
          this.appStore.userProfile.createrIs || 'Нет данных'
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    img: '/images/avatar.png',
  }),
}
</script>
