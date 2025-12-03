<template>
  <section-layout title="Мой профиль" class="mt-14 mb-4" v-if="this.appStore.userProfile">
    <div class="bg-[#fff] border rounded-2xl shadow-md w-full p-5 flex flex-col gap-14">
      <headMyProfile />
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
