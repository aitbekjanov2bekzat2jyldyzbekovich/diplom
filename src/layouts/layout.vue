<template>
  <div class="flex flex-col gap-4">
    <header class="w-full h-20 bg-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-4 border border-black h-full">
        <headerV />
      </div>
    </header>
    <div class="w-full flex gap-4 relative">
      <!-- <aside class="w-96 h-svh px-4">sidbar</aside> -->
      <main class="container mx-auto px-4 border border-black">
        <router-view />
      </main>
    </div>
    <footer class="w-full h-20">
      <div class="container mx-auto px-4 border border-black">footer</div>
    </footer>
  </div>
</template>

<script>
import headerV from '@/components/headerV.vue'
export default {
  components: {
    headerV,
  },
}
</script>
