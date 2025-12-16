<script setup lang="ts">
import Hero from '~/components/Hero.vue'
import Text from '~/components/Text.vue'
import Gallery from '~/components/Gallery.vue'

const route = useRoute()
const slug = route.params.slug as string

const { data: page } = await useAsyncData(`page-${slug}`, () => 
  queryCollection('content').path(`/${slug}`)
    .first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

// SEO
useSeoMeta({
  title: page.value?.title || slug,
  description: page.value?.tagline || page.value?.description || 'View this page',
  ogTitle: page.value?.title,
  ogDescription: page.value?.tagline || page.value?.description,
  ogImage: page.value?.sections?.find(s => s.type === 'hero')?.image,
  twitterCard: 'summary_large_image'
})

const getComponent = (type: string) => {
  const components: Record<string, any> = {
    hero: Hero,
    text: Text,
    gallery: Gallery
  }
  return components[type]
}
</script>

<template>
  <div v-if="page" class="space-y-20">
    <component
      v-for="(section, index) in page.sections"
      :key="index"
      :is="getComponent(section.type)"
      v-bind="section"
    />
  </div>

  <div v-else class="p-8">
    <p>Page not found</p>
  </div>
</template>