<script setup>
import Hero from '~/components/Hero.vue'
import Text from '~/components/Text.vue'
import Gallery from '~/components/Gallery.vue'

const { data: home } = await useAsyncData('home-page', () => queryCollection('content').path('/').first())

if (!home.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

// SEO
useSeoMeta({
  title: home.value?.title || 'Home',
  description: home.value?.tagline || home.value?.description || 'Welcome to our site',
  ogTitle: home.value?.title || 'Home',
  ogDescription: home.value?.tagline || home.value?.description,
  ogImage: home.value?.sections?.find(s => s.type === 'hero')?.image,
  twitterCard: 'summary_large_image'
})

const getComponent = (type) => {
  const components = {
    hero: Hero,
    text: Text,
    gallery: Gallery
  }
  return components[type]
}
</script>

<template>

  <div v-if="home" class="space-y-20">
    <component
      v-for="(section, index) in home.sections"
      :key="index"
      :is="getComponent(section.type)"
      v-bind="section"
    />
  </div>

  <div v-else>
    <p>Loading or no content found.</p>
  </div>
</template>
