<template>
  <div class="separator-parent" ref="parent">
    <div class="separator" ref="separator"></div>
    <div class="extra-info" ref="extrainfo">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from "gsap"
import scrollTrigger from "gsap/ScrollTrigger"
import CustomEase from "gsap/CustomEase"

const separator = ref(null)
const parent = ref(null)
const extrainfo = ref(null)

let tlEnter = null

onMounted(() => {
  gsap.registerPlugin(scrollTrigger)
  gsap.registerPlugin(CustomEase)

  setupTimeline()
})

function setupTimeline() {
  tlEnter = gsap.timeline({ scrollTrigger: parent.value, defaults: { ease: CustomEase.create("custom", "M0,0,C0.084,0.6,0.194,0.892,0.548,0.968,0.667,0.993,0.831,1,1,1") }})
  tlEnter.to(separator.value,
  {
    width: '100%',
    duration: 1.25,  
  })
  tlEnter.to(extrainfo.value, {
    y: 0,
    duration: 1,
    stagger: 0.1
  }, '<0.2')
}
</script>

<style lang="scss">
.separator {
  background: $black;
  height: 1px;
  width: 0;

  &-parent {
    padding: 0 $padding-x-md;
    overflow: hidden;
  }
}

.extra-info {
  display: flex;
  margin-top: .75rem;
  width: 100%;
  transform: translateY(-50px);
}
</style>
