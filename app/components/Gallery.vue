<template>
  <section class="flex gap-1">
    <div v-for="img in images" :key="img" class="w-1/3 bg-red-100">
      <img :src="img" alt="" class="w-full h-full object-cover" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  images: Array
})
</script>
