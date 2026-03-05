<template>
  <div>
    <!-- Изображение (URL или base64) -->
    <img
      v-if="isImage"
      :src="content"
      :alt="alt || 'image'"
      class="h-auto rounded-md shadow-md w-1/2"
    />

    <!-- SVG -->
    <div v-else-if="isSVG" v-html="content" class="w-16 h-16"></div>

    <!-- Текст -->
    <p v-else>
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AutoDisplay',
  props: {
    content: { type: String, required: true },
    alt: { type: String, default: '' },
  },
  computed: {
    isImage() {
      // Простейшая проверка URL на изображение или base64
      return (
        /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i.test(this.content) ||
        /^data:image\/[a-z]+;base64,/.test(this.content)
      )
    },
    isSVG() {
      // Проверяем, начинается ли с <svg
      return this.content.trim().startsWith('<svg')
    },
  },
}
</script>
