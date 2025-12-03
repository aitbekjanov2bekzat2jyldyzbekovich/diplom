<template>
  <div class="flex justify-between items-center">
    <buttonV >{{ btn2 }}</buttonV>
    <buttonV>{{ btn }}</buttonV>
  </div>
</template>

<script>
export default {
  data: () => ({
    btn: 'Выйти',
    btn2: 'Редактировать',
  }),
}
</script>
