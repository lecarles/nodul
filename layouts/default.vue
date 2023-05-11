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
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  onResize()
  window.addEventListener('resize', onResize)
  
  const smoother = ScrollSmoother.create({
    smooth: 1.5,
    effects: true
  })
})


function onResize() {
  sergiStore.setWindowSize({x: window.innerWidth,  y: window.innerHeight})
  console.log(sergiStore.windowSize)
}
</script>

<style lang="scss">
#smooth-content { 
  background: white;
  padding: 1px 0;
}
</style>