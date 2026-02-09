<template>
  <h1 class="heading">для вас</h1>
</template>
<script>
export default {
  mounted() {
    this.appStore.sendUid(this.appStore.userProfile?.uid)
  },
}
</script>
