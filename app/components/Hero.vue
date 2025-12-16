<template>
  <section class="hero relative ">
    <div class="w-full overflow-hidden max-h-[50vh] overflow-hidden">
        <img :src="image" alt="" class="object-cover w-full object-bottom"/>
    </div>  
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
      <h1>{{ heading }}</h1>
      <p>{{ subheading }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  heading: String,
  subheading: String,
  image: String
})
</script>