<template>
  <reworkProfile />
  <div class="flex">
    <div class="w-1/2 flex flex-col gap-5">
      <div class="w-96 h-96 rounded-3xl overflow-hidden">
        <img
          v-if="this.appStore.userProfile.avatar"
          :src="this.appStore.userProfile.avatar"
          alt="avatar"
          class="object-cover w-full h-full"
        />
        <img v-else :src="img" alt="avatar" class="object-cover w-full h-full" />
      </div>
      <div class="w-96 flex flex-col gap-3 items-center">
        <h3 class="heading text-xl text-[#000]">
          {{ this.appStore.userProfile.surname || 'Нет данных' }}
          {{ this.appStore.userProfile.name || 'Нет данных' }}
        </h3>
        <span class="appText text-lg font-semibold">{{
          this.appStore.userProfile.createrIs || 'Нет данных'
        }}</span>
      </div>
    </div>
    <div class="w-1/2 flex flex-col gap-10">
      <div class="flex gap-2 flex-col">
        <h5 class="heading text-lg">{{ aboutPerson }}:</h5>
        <div v-if="this.appStore.userProfile.aboutPerson" class="w-full">
          <p class="appText">{{ this.appStore.userProfile.aboutPerson }}</p>
        </div>
        <div
          v-else
          class="w-full border-2 flex items-center justify-center rounded-xl h-28 border-dashed border-[#E6A421] cursor-pointer transition-v hover:bg-[#e6a4212d]"
        >
          <p class="appText font-semibold">Написать обо мне</p>
        </div>
      </div>
      <ul class="flex flex-col gap-2">
        <li v-if="this.appStore.userProfile.createrIs === 'Студент'" class="flex gap-2">
          <h5 class="heading text-lg">{{ group }}:</h5>
          <p class="appText">{{ this.appStore.userProfile.group || 'Нет данных' }}</p>
        </li>
        <li class="flex gap-2">
          <h5 class="heading text-lg">{{ email }}:</h5>
          <p class="appText">{{ this.appStore.userProfile.email || 'Нет данных' }}</p>
        </li>
        <li v-if="this.appStore.userProfile.createrIs === 'Студент'" class="flex gap-2">
          <h5 class="heading text-lg">{{ skills }}:</h5>
          <div
            v-if="this.appStore.userProfile.skills"
            v-for="i in this.appStore.userProfile.skills"
          >
            <p class="appText">{{ i.name }}</p>
          </div>
          <button v-else class="appText font-bold">Добавить</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import reworkProfile from '@/components/reworkProfile.vue'

export default {
  data: () => ({
    img: '/images/avatar.png',
    aboutPerson: 'Обо мне',
    email: 'Email',
    group: 'Группа',
    skills: 'Скилы',
  }),
  components: {
    reworkProfile,
  },
}
</script>
