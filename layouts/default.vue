<template>
  <div>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <navbar />
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import { onMounted } from 'vue'
import { useSergiStore } from '../stores/sergiStore'

const sergiStore = useSergiStore()

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)  
  const smoother = ScrollSmoother.create({
    smooth: 1.5,
    effects: true
  })
})

function onResize() {
  sergiStore.setWindowSize({x: window.innerWidth,  y: window.innerHeight})
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
</script>

<style lang="scss">
#smooth-content { 
  background: white;
  padding: 1px 0;
}
</style>