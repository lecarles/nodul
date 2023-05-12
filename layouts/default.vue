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

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)  
  const smoother = ScrollSmoother.create({
    smooth: 1.5,
    effects: true
  })
})
</script>

<style lang="scss">
#smooth-content { 
  background: white;
  padding: 1px 0;
}
</style>