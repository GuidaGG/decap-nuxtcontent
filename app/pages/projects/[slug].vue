<template>
    <div class="p-20">
        <div v-if="project">
            <h1 >{{ project.title }}</h1>
            <p v-if="project.description" class="text-xl text-gray-700">{{ project.description }}</p>
            <div v-if="project.date || project.category" class="flex gap-4 pt-2">
            <span v-if="project.date" class="text-sm ">{{ new Date(project.date).toLocaleDateString() }}</span>
            <span v-if="project.category" class="text-sm border-black border-2 rounded-full px-4">{{ project.category }}</span>
            </div>

            
            <div v-if="project.sections" class="pt-10">
                <component
                    v-for="(section, index) in project.sections"
                    :key="index"
                    :is="getComponent(section.type)"
                    v-bind="section"
                />
            </div>
            
            <ContentRenderer v-if="project.body" :value="project" class="prose prose-lg max-w-none pt-10" />
        </div>
        <div v-else>
            <p>Project not found</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Hero from '~/components/Hero.vue'
import Text from '~/components/Text.vue'
import Gallery from '~/components/Gallery.vue'

const route = useRoute()
const slug = route.params.slug as string

const { data: project } = await useAsyncData(`project-${slug}`, () => 
  queryCollection('projects')
    .path(`/projects/${slug}`)
    .first()
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project Not Found' })
}

// SEO
useSeoMeta({
  title: project.value?.title || 'Project',
  description: project.value?.description || 'View this project',
  ogTitle: project.value?.title,
  ogDescription: project.value?.description,
  ogImage: project.value?.sections?.find(s => s.type === 'hero')?.image,
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