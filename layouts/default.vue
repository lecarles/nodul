<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <navbar />
      <slot/>
      <app-footer class="p-md" />
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

<style>
#smooth-content { 
  border-top: 1px solid transparent; 
  border-bottom: 1px solid transparent; 
}
</style>