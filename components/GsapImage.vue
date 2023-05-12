<template>
  <div class="gsap-image" ref="gsapImage">
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import CustomEase from "gsap/CustomEase"

let anim = null
const gsapImage = ref(null)

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  },
})

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(CustomEase)
  animate()
})

function animate() {
  anim = gsap.timeline({scrollTrigger: gsapImage.value, delay: props.delay, defaults: { ease: CustomEase.create("custom", "M0,0,C0.084,0.6,0.194,0.892,0.548,0.968,0.667,0.993,0.831,1,1,1"),}})
  anim.to(gsapImage.value, {
    opacity: 1,
    duration: .1
  })
  anim.fromTo(gsapImage.value.children, {
    y: '150%',
  },
  {
    y: 0,
    duration: 1,
    stagger: 0.15,
  }, '>')
}
</script>

<style lang="scss">
.gsap-image {
  overflow: hidden;
  opacity: 0;
}
</style>
