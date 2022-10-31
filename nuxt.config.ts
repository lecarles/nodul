// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    kontent: {
      projectId: process.env.KONTENT_PROJECT_ID,
      previewApiKey: process.env.KONTENT_PREVIEW_KEY,
      defaultQueryConfig: {
        usePreviewMode: true
    }
  }
  },
  build: {
    transpile: ['gsap']
  },
  css: [
    '@/assets/scss/main.scss'
  ],
  modules: [['@storyblok/nuxt', { accessToken: 'mEjjNiDdoKMNjC6QSOafmgtt' }]],
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
