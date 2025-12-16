<script setup>
// Default SEO
useHead({
  titleTemplate: '%s | Whitebox CMS',
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title: 'Whitebox CMS',
  description: 'A modern CMS built with Nuxt and Nuxt Content',
  ogImage: '/uploads/hero.jpg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(0px);
}
</style>
