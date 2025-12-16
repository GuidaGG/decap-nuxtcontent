<template>
  <header class="bg-white fixed w-full top-0 border-b-2 border-black z-10 min-h-20">
    <nav class="px-20 py-5">
      <div class="flex justify-between">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-2xl font-bold text-gray-900">
            Logo
          </NuxtLink>
        </div>
        
        <div class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="text-gray-700 hover:text-gray-900 px-3">
            Home
          </NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-gray-900 ">
            About
          </NuxtLink>
          <NuxtLink to="/projects" class="text-gray-700 hover:text-gray-900 ">
            Projects
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
</script>
