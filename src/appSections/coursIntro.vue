<template>
  <div class="bg-[#fff] p-8 rounded-2xl shadow-md border flex flex-col gap-24">
    <div v-if="load" class="border w-full p-2 flex justify-center">
      <Loader />
    </div>

    <div class="flex w-full justify-between items-center" v-else>
      <div class="flex items-center gap-3 border p-2 rounded-2xl border-[#E6A421]">
        <div class="w-16 h-16 rounded-full overflow-hidden border-[#E6A421] border-2">
          <img :src="profile.avatar" alt="avatar" class="object-cover w-full h-full" />
        </div>
        <div class="flex items-center heading text-lg gap-1">
          <h5>{{ profile.name || 'нет данных' }}</h5>
          <h5>{{ profile.surname || 'нет данных' }}</h5>
        </div>
      </div>
      <div class="flex gap-1 appText border items-center px-10 py-3 rounded-2xl border-[#E6A421]">
        <span class="font-semibold text-[#E6A421]">Группа:</span>
        <span>{{ profile.group || 'Нет данных' }}</span>
      </div>
    </div>
    <div class="border-t border-b p-4 py-14 flex flex-col gap-24">
      <div class="flex justify-between items-start">
        <span class="appText">{{ formattedDate(dataIntro.createdAt) }}</span>
        <buttonV v-if="dataIntro.createdId !== this.appStore.userProfile.uid">Подписаться</buttonV>
      </div>
      <div class="flex items-start justify-between gap-10">
        <div class="w-1/2 overflow-hidden rounded-2xl border-2 border-[#E6A421]">
          <img
            class="object-cover w-full h-full"
            :src="dataIntro.img"
            alt="logo"
            v-if="dataIntro.img && dataIntro.img !== '/images/avatar.png'"
          />
          <img
            src="/images/ImgnotFound.jpg"
            alt="not found"
            class="w-full h-full object-cover"
            v-else
          />
        </div>
        <ul class="w-full px-24 appText flex flex-col gap-5">
          <li class="text-center heading text-xl">
            <h3>{{ dataIntro.title }}</h3>
          </li>
          <li class="flex gap-3 items-center">
            <span class="heading text-lg">Подписчики:</span>
            <span>{{ Object.values(dataIntro.folowers || {}).length }}</span>
          </li>
          <li class="flex gap-3 items-center">
            <span class="heading text-lg">Уроки:</span>
            <span>{{ Object.values(dataIntro.lessons || {}).length }}</span>
          </li>
          <li class="flex gap-3 items-center">
            <span class="heading text-lg">Время:</span>
            <span
              >{{ formattedDate(dataIntro.createdAt) }} до
              {{ formattedDate(dataIntro.endCourse) }}</span
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <h5 class="heading text-lg">О курсе</h5>
      <div class="border p-6 rounded-2xl h-96 overflow-y-auto appText">
        <p>{{ dataIntro.about || 'Нет данных' }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Loader from '@/components/loader.vue'

export default {
  components: {
    Loader,
  },
  props: {
    dataIntro: Object,
  },
  data() {
    return {
      profile: null,
      load: true,
    }
  },
  methods: {
    formattedDate(timestamp) {
      return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(timestamp))
    },
  },
  async mounted() {
    this.profile = await this.appStore.getUserProfile(this.dataIntro.createdId)
    this.load = await false
  },
}
</script>
