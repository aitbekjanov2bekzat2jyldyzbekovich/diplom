<template>
  <div class="flex flex-col gap-14">
    <div>
      <h2 class="heading !text-4xl">{{ title }}</h2>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>
