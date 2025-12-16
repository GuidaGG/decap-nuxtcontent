// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/seo'],
  css: ['~/assets/css/tailwind.css'], //This is important 
  
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  site: {
    url: 'https://localhost', // Replace with your actual domain
    name: 'Prototype CMS',
    description: 'A modern CMS built with Nuxt and Nuxt Content',
    defaultLocale: 'en'
  },

  robots: {
    disallow: '/',
    sitemap: '/sitemap.xml'
  },

  sitemap: {
    enabled: true,

  }
})