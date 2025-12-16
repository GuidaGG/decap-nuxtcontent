<script setup lang="ts">
const { data: projects } = await useAsyncData('projects-list', () => 
  queryCollection('projects').all()
)

// SEO
useSeoMeta({
  title: 'Projects',
  description: 'Browse our collection of projects',
  ogTitle: 'Projects',
  ogDescription: 'Browse our collection of projects',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="pt-20 px-20">
    <h1 class="text-4xl mb-8">Projects</h1>
    
    <div v-if="projects && projects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <NuxtLink
        v-for="project in projects"
        :key="project.path"
        :to="`/projects/${project.path.split('/').pop()}`"
        class="block p-6 border-2 border-black bg-green-100 hover:bg-green-300 rounded-lg"
      >
        <h2 class="text-black">{{ project.title }}</h2>
        <div v-if="project.date || project.category" class="flex gap-4 pt-2">
          <span v-if="project.date" class="text-sm ">{{ new Date(project.date).toLocaleDateString() }}</span>
          <span v-if="project.category" class="text-sm border-black border-2 rounded-full px-4">{{ project.category }}</span>
        </div>

        <p v-if="project.description" class="pt-10">{{ project.description }}</p>
      </NuxtLink>
    </div>
    
    <div v-else class="text-gray-600">
      <p>No projects found.</p>
    </div>
  </div>
</template>
