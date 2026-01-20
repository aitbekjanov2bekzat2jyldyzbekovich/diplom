<template>
  <div class="bg-[#fff] p-4 rounded-2xl shadow-md border">
    <div v-if="load" class="border w-full p-2 flex justify-center">
      <Loader />
    </div>
    <div class="" v-else>
      <div class="flex w-full">
        <div class="flex items-center gap-3 border p-1 rounded-xl">
          <div class=" w-16 h-16 rounded-full overflow-hidden">
            <img :src="profile.avatar" alt="avatar" class="object-cover w-full h-full" />
          </div>
          <div class="flex items-center heading text-lg gap-1">
            <h5>{{ profile.name || 'нет данных' }}</h5>
            <h5>{{ profile.surname || 'нет данных' }}</h5>
          </div>
        </div>
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
  async mounted() {
    this.profile = await this.appStore.getUserProfile(this.dataIntro.createdId)
    this.load = await false
  },
}
</script>
