<template>
  <div class="flex justify-between items-center">
    <buttonV @click="$emit('sendOpenPanel')">{{ btn2 }}</buttonV>
    <buttonV @click="this.appStore.toRout('/cours/create-cours')">{{ btn3 }}</buttonV>
    <buttonV @click="this.appStore.logout()">{{ btn }}</buttonV>
  </div>
</template>

<script>
export default {
  data: () => ({
    btn: 'Выйти',
    btn2: 'Редактировать',
    btn3: 'Создать курс',
  }),
}
</script>
