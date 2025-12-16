<script setup>
useSeoMeta({
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist'
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="text-center">
      <h1 class="text-9xl font-bold mb-4">404</h1>
      <h2 class="text-3xl mb-4">Page Not Found</h2>
      <p class="text-xl text-gray-600 mb-8">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <NuxtLink 
        to="/"
        class="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>
