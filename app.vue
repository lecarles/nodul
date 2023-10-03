<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  link: [
    { rel: 'apple-touch-icon', sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: 'icon', type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: 'icon', type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: 'manifest', href: "/site.webmanifest"},
    { rel: 'mask-icon', href: "/safari-pinned-tab.svg", color: "#5bbad5" }
  ],
})

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'
import { useSergiStore } from '@/stores/sergiStore'

const sergiStore = useSergiStore()

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
  gsap.registerPlugin(ScrollTrigger)  
})

function onResize() {
  sergiStore.setWindowSize({x: window.innerWidth,  y: window.innerHeight})
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
</script>

<style lang="scss">
.wrapper { 
  background: var(--background);
}
</style>