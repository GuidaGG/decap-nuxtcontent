<template>
  <div v-html="renderedHtml" class="markdown-content"></div>
</template>

<script setup>
import { marked } from 'marked'
import { computed } from 'vue'

const props = defineProps({
  content: {
    type: String,
    default: ''
  }
})

const renderedHtml = computed(() => {
  return marked(props.content || '')
})
</script>

<style scoped>
.markdown-content :deep(h1) {
  @apply text-3xl font-bold mb-4;
}

.markdown-content :deep(h2) {
  @apply text-2xl font-bold mb-3;
}

.markdown-content :deep(h3) {
  @apply text-xl font-bold mb-2;
}

.markdown-content :deep(p) {
  @apply mb-4;
}

.markdown-content :deep(ul) {
  @apply list-disc ml-6 mb-4;
}

.markdown-content :deep(ol) {
  @apply list-decimal ml-6 mb-4;
}

.markdown-content :deep(a) {
  @apply text-blue-600 hover:underline;
}

.markdown-content :deep(strong) {
  @apply font-bold;
}

.markdown-content :deep(em) {
  @apply italic;
}
</style>
