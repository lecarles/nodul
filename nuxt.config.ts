// https://v3.nuxtjs.org/api/configuration/nuxt.config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'title', content: 'Nòdul' }
      ],
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN },], 
    '@pinia/nuxt',
  ],
  vite: {
    plugins: [tailwindcss()],
  }
})
