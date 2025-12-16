<script setup>
const props = defineProps({
  error: Object
})

useSeoMeta({
  title: props.error?.statusCode === 404 ? 'Page Not Found' : 'Error',
  description: props.error?.message || 'An error occurred'
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <div class="min-h-screen flex items-center justify-center px-4">
      <div class="text-center">
        <h1 class="text-9xl font-bold mb-4">{{ error?.statusCode || '500' }}</h1>
        <h2 class="text-3xl mb-4">
          {{ error?.statusCode === 404 ? 'Page Not Found' : 'Something Went Wrong' }}
        </h2>
        <p class="text-xl text-gray-600 mb-8">
          {{ error?.message || 'An unexpected error occurred' }}
        </p>
        <button 
          @click="handleError"
          class="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
