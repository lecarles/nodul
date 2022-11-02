<template>
  <div>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <navbar />
        <slot/>
        <app-footer class="p-md" />
      </div>
    </div>
    <div class="red-background"></div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import { onMounted } from 'vue'

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  
  const smoother = ScrollSmoother.create({
    smooth: 1.5,
    effects: true
  })
})
</script>

<style lang="scss">
.red-background {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: $red;
}

#smooth-content { 
  background: var(--web-background);
  padding: 1px 0;
}
</style>