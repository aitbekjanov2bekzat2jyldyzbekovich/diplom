<template>
  <div class="w-full flex justify-between items-center h-full">
    <div class="flex items-center gap-1 heading !text-lg !text-[#336799]">
      <img :src="img" alt="logo" />
      <h3>{{ name }}</h3>
    </div>
    <nav>
      <ul class="flex items-center gap-10 appText !font-semibold ">
        <li v-for="i in nav">
          <router-Link :to="i.rout"> {{ i.name }}</router-Link>
        </li>
      </ul>
    </nav>
    <div class="flex items-center gap-2 border p-2 w-64 rounded-lg ">
      <img class=" w-12 h-12 rounded-full" :src="user.img" alt="avatar" />

      <div>
        <h3 class="heading !text-lg">{{ user.name }}</h3>
        <span class="appText !text-sm !font-medium">{{ user.type }}</span>
      </div>
      <button class="text-3xl text-[#626CE1] ml-auto ">
        <span>&#9660;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Колледж ИЯиПКС',
      img: '/logo.svg',
      nav: [
        {
          id: 1,
          rout: '/',
          name: 'Главная',
        },
        {
          id: 2,
          rout: '/cours',
          name: 'Курсы',
        },
        {
          id: 3,
          rout: '/login',
          name: 'Войти',
        },
      ],
      user: {
        name: 'Пользователь',
        img: '/avatar.png',
        type: 'Неизвестно',
      },
    }
  },
}
</script>
