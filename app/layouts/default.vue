<template>
  <div class="min-h-screen ">
    <Header />
    
    <main class="flex-grow pt-20 min-h-[calc(100vh-6rem)]">
      <slot />
    </main>
    
    <footer class="bg-gray-900 text-white py-8 mt-auto h-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Your Site. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>
