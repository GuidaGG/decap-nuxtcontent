<template>
  <section class="text-block px-20 mx-auto">
    <h2>{{ heading }}</h2>
    <MarkdownRenderer :content="content" />
  </section>
</template>

<script setup>
defineProps({
  heading: String,
  content: String
})
</script>
