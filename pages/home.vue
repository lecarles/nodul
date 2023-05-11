<template>
  <div class="home-page" @click="drawHere($event)">
    <div class="image-wrapper" v-for="image in data.story.content.randomImages" :key="image._uuid" ref="images">
      <img :src="image.filename + '/m/1200x0'" :alt="image.alt">
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue'
import { gsap } from 'gsap'
import CustomEase from "gsap/CustomEase"
import { useSergiStore } from '~/stores/sergiStore'
import { Observer } from 'gsap/Observer'

const rando = ref(null)
const images = ref(null)

const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/home', {
  version: 'draft'
})

definePageMeta({
  pageTransition: {
    mode: 'in-out',
    onEnter: (el, done) => { 
      setTimeout(() => {
        done() 
      }, 2000)
    },
    onLeave: (el, done) => { 
      setTimeout(() => {
        done() 
      }, 2000)
    },
  }
})

const sergiStore = useSergiStore()
let tl = null
let xTo = null
let yTo = null

let activeElements = []

onMounted(() => {
  gsap.registerPlugin(CustomEase)
  gsap.registerPlugin(Observer)

  /* Observer.create({
    target: window,       
    type: "pointer",
    tolerance: 250,
    onChange: () => {
      animation()
    },
    onMove: () => {
      console.log('moved')
    },
  }) */

  //xTo = gsap.quickTo(rando.value, "x", {duration: 1.25, ease: CustomEase.create("custom", "M0,0,C0.084,0.6,0.194,0.892,0.548,0.968,0.667,0.993,0.831,1,1,1")})
  //yTo = gsap.quickTo(rando.value, "y", {duration: 1.25, ease: CustomEase.create("custom", "M0,0,C0.084,0.6,0.194,0.892,0.548,0.968,0.667,0.993,0.831,1,1,1")})
})

function drawHere(e) {
  const cursorX = e.clientX/sergiStore.windowSize.x - 0.5
  const cursorY = e.clientY/sergiStore.windowSize.y - 0.5

  let random = getRandomInt(images.value.length)
  let imageTl = gsap.timeline({ paused: true, defaults: { ease: CustomEase.create("custom", "M0,0,C0.084,0.6,0.194,0.892,0.548,0.968,0.667,0.993,0.831,1,1,1")}})
  imageTl.to(images.value[random], {
    x: cursorX * sergiStore.windowSize.x,
    y: cursorY * sergiStore.windowSize.y,
    duration: .25,
  }) 
  imageTl.to(images.value[random].firstElementChild, {
    y: 0,
    duration: 1.5,
    zIndex: activeElements.length + 1,
  }, '>')
  imageTl.play()

  //register if image is still in canvas and check to not animate again
  //z-index images to after exit
  //z-index images to activeImages.length + 1 before enter
  //image appears on mousemove, not click
  //image follows mouse until next image enters? idk
}

function animation() {
  let random = getRandomInt(images.value.length - 1)

  let cleanActive = gsap.timeline()

  cleanActive.to(activeElements, {
    onStart: activeElements = [],
    y: '-65vh',
    duration: 1.5,
    stagger: 0.1,
  })

  gsap.fromTo(images.value[random], {
    y: '65vh',
  },
  {
    y: 0,
    duration: 1.5,
    ease: CustomEase.create("custom", "M0,0,C0.084,0.6,0.194,0.892,0.548,0.968,0.667,0.993,0.831,1,1,1"),
    zIndex: activeElements.length + 1,
    onStart: activeElements.push(images.value[random])
  })
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
</script>

<style lang="scss" scoped>
.image-wrapper {
  height: 60vh;
  width: 50vw;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  img {
    transform: translateY(-65vh);
    position: absolute;
    top: 0; right: 0; left: 0; bottom: 0;
    width: 100%;
    height: 100%;
    max-height: 60vh;
    max-width: 50vw;
    object-fit: contain;
  }
}
.home-page {
  position: relative;
  height: 100vh;
  width: 100vw;
  height: calc(100vh - $navbar-height);
}

.test-button {
  position: absolute;
  bottom: 0;
  z-index: 100000;
}
</style>