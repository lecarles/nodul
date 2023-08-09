<template>
  <div>
    <div id="smooth-wrapper" ref="main">
      <div id="smooth-content">
        <app-nav />
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import { onMounted, onUnmounted, ref } from 'vue'
import { useSergiStore } from '../stores/sergiStore'

const sergiStore = useSergiStore()
let ctx
let smoother
const main = ref(null)

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)  
  ctx = gsap.context(() => {
    smoother = ScrollSmoother.create({
      smooth: 1.5, 
      effects: true, 
    })
  }, main.value)
})
      
onUnmounted(() => {
  ctx.revert();
})

function onResize() {
  sergiStore.setWindowSize({x: window.innerWidth,  y: window.innerHeight})
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
</script>

<style lang="scss">
#smooth-content { 
  background: var(--background);
  padding: 1px 0;
}
</style>