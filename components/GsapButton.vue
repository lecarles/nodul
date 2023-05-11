<template>
  <div class="info-button" ref="infoButton" :id="id" @mouseover="hoverEnter()" @mouseleave="hoverLeave()">
      <div class="info-button-text" ref="text"><slot></slot></div>
      <div class="button-line" ref="line"></div>
      <div class="hover-line" ref="hoverLine"></div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import CustomEase from "gsap/CustomEase"

const text = ref(null)
const line = ref(null)
const infoButton = ref(null)
const hoverLine = ref(null)

let tlEnter = null
let tlLeave = null
let hoverTl = null
let exitTime = 0

const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  delay: {
    type: Number,
    default: 0
  },
})

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(CustomEase)

  setupTimeline()
  console.log('mount button')
})


function setupTimeline() {
  tlEnter = gsap.timeline({delay: props.delay, scrollTrigger: infoButton.value, defaults: {ease: CustomEase.create("custom", "M0,0,C0.084,0.6,0.194,0.892,0.548,0.968,0.667,0.993,0.831,1,1,1")}}) 
  tlEnter.fromTo(text.value, {
    y: '200%'
  },
  {
    y: 0,
    duration: .8,
    stagger: 0.1,
  })

  tlEnter.fromTo(line.value, {
    width: 0
  }, {
    width: '100%',
    duration: .8,
  }, '<0.2')


  hoverTl = gsap.timeline({paused:true, defaults:{duration:.6}, ease: 'Power3.out'})
  gsap.set(hoverLine.value, { width: 0, transformOrigin:"left center"})
  hoverTl.to(hoverLine.value, { width: '100%' })
  hoverTl.addPause("exit")
  exitTime = hoverTl.duration()
  hoverTl.to(hoverLine.value, { x: '100%' })
}

function hoverEnter () {
  if(hoverTl.time() < exitTime){
    hoverTl.play()
  } else {
    hoverTl.restart()
  }
}

function hoverLeave () {
  if(hoverTl.time() < exitTime){
    hoverTl.reverse()
  } else {
    hoverTl.play()
  }
}
</script>

<style lang="scss" scoped>
.info-button {
  cursor: pointer;
  display: block;
  width: 100%;
  padding-bottom: .5rem;
  position: relative;
  overflow: hidden;

  &-text {
    display: flex;
    width: 100%;
  }

  .hover-line, .button-line{
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    height: 1px;
    background: $black;
  }

  .hover-line {
    height: 2px;
  }
}
</style>


