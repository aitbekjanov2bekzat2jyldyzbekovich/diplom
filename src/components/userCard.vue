<template>
  <div class="flex items-center gap-2 border p-2 w-64 rounded-lg cursor-pointer" @click="openStatus = !openStatus">
    <img class="w-12 h-12 rounded-full" :src="user.img" alt="avatar" />

    <div>
      <h3 class="heading !text-lg">{{ user.name }}</h3>
      <span class="appText !text-sm !font-medium">{{ user.type }}</span>
    </div>
    <button class="text-3xl text-[#E6A421] ml-auto">
      <span>&#9660;</span>
    </button>
  </div>
  <div class="w-full bg-white absolute shadow-md rounded-md p-2" v-show="openStatus">{{ nav }}</div>
</template>

<script>
export default {
  data() {
    return {
      openStatus: false,
      user: {
        name: 'Пользователь',
        img: '/images/avatar.png',
        type: 'Неизвестно',
      },
      nav: [
        {
          id: 1,
          name: 'Мои курсы',
          rout: '/',
        },
      ],
    }
  },
}
</script>
