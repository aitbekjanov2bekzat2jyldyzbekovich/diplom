<template>
  <div class="flex flex-col gap-14">
    <div>
      <h2 class="heading max-lg:text-3xl max-md:text-2xl max-sm:text-xl text-4xl">{{ title }}</h2>
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
