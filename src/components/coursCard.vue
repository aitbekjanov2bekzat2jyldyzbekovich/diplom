<template>
  <div
    class="px-5 py-6 appText bg-white rounded-2xl shadow-md border hover:shadow-[#E6A421] cursor-pointer transition-v flex flex-col justify-between gap-10"
    data-aos="zoom-in"
  >
    <div class="flex justify-between gap-5">
      <div class="w-full overflow-hidden h-20 heading text-[#000] text-lg">
        <h3>{{ item.title }}</h3>
      </div>
      <div class="w-20 h-20 rounded-lg">
        <img
          v-if="item.img && item.img !== '/images/avatar.png'"
          :src="item.img"
          alt="logo cours"
          class="w-full h-full object-cover"
        />
        <img :src="img" alt="not found" class="w-full h-full object-cover" v-else />
      </div>
    </div>
    <div class="flex flex-col justify-between gap-2 items-start flex-wrap">
      <span class="text-[#E6A421] font-bold appText">
        <i class="pi pi-users" />
        Подписчики {{ Object.values(item.followers || {}).length }}
      </span>

      <div class="flex gap-5 w-full">
        <buttonV class="text-lg" @click="this.appStore.toRout(`/cours/page/${item.id}`)">{{
          btn
        }}</buttonV>
        <div v-if="this.appStore.userProfile && item.createdId !== this.appStore.userProfile.uid">
          <buttonV
            v-if="!this.appStore.isFollowed(item)"
            class="text-lg"
            @click="this.appStore.following(item.id)"
          >
            <i class="pi pi-bookmark-fill" />
          </buttonV>
          <buttonV v-else class="text-lg !bg-[#336799]" @click="this.appStore.unsubscribe(item)">
            <i class="pi pi-bookmark-fill text-[#E6A421]" />
          </buttonV>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      img: '/images/ImgnotFound.jpg',
      btn: 'Подробнее',
    }
  },
}
</script>
