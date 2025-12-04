<template>
  <section-layout title="Мой профиль" class="mt-14 mb-4" v-if="this.appStore.userProfile">
    <div class="bg-[#fff] border rounded-2xl shadow-md w-full p-5">
      <headMyProfile />
    </div>

    <div class="bg-[#fff] border rounded-2xl shadow-md w-full p-10">
      <h3 class="heading mb-14 text-lg">Персональные данные</h3>
      <myProfileData />
    </div>
  </section-layout>
</template>

<script>
import headMyProfile from '@/appSections/headMyProfile.vue'
import myProfileData from '@/appSections/myProfileData.vue'

export default {
  components: { headMyProfile, myProfileData },
}
</script>
