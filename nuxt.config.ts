// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['gsap']
  },
  css: [
    '@/assets/scss/main.scss'
  ],
  modules: [['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN },], '@pinia/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;'
        }
      }
    }
  }
})
