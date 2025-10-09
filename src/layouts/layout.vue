<template>
  <div class="flex flex-col gap-4">
    <header class="w-full h-20 border">
      <div class="container mx-auto px-4">
        header
      </div>
    </header>
    <div class="w-full flex gap-4">
      <aside class="border w-96 h-svh px-4">sidbar</aside>
      <main class="container mx-auto px-4 border">
        <router-view />
      </main>
    </div>
    <footer class="w-full h-20 border">
      <div class="container mx-auto px-4">
       footer 
      </div>
    </footer>
  </div>
</template>
