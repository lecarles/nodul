<template>
  <nuxt-link class="project-item" @mousemove="handleMove($event)" :to="'project/' + project.slug" @mouseenter="handleEnter()" @mouseleave="handleLeave()">
    <div class="project-item-title">
      <div class="project-item-data-left">{{ projectNumber }}</div>
      <div class="project-item-name">{{project.content.name}}</div>
      <div class="project-item-data-right">{{ year }}</div>
    </div>
    <div ref="imageWrap" class="project-item-img-wrapper">
      <img ref="image" :src="project.content.featuredPhoto.filename +'/m/1200x0'" alt="">
    </div>
  </nuxt-link>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue'
import { gsap } from 'gsap'
import scrollTrigger from "gsap/ScrollTrigger"
import CustomEase from "gsap/CustomEase"
import { useSergiStore } from '~/stores/sergiStore'

const sergiStore = useSergiStore()

const image = ref(null)
const imageWrap = ref(null)
let tl = null
let xTo = null
let yTo = null

const props = defineProps({
  project: {
    type: Object,
    default: null
  },

  i: {
    type: Number,
    default: 0
  }
})

const year = computed(() => {
  let file = props.project.content.featuredPhoto.filename.split("/").pop()
  return file.split('-')[0] + '—' + file.split('-')[1]
}) 

const projectNumber = computed(() => {
  return (props.i + 1) > 9 ? (props.i + 1) : '0' + (props.i + 1)
}) 

onMounted(() => {
  gsap.registerPlugin(CustomEase)
  setupTl()

  xTo = gsap.quickTo(image.value, "left", {duration: 1.25, ease: CustomEase.create("custom", "M0,0,C0.084,0.6,0.194,0.892,0.548,0.968,0.667,0.993,0.831,1,1,1")})
  yTo = gsap.quickTo(image.value, "top", {duration: 1.25, ease: CustomEase.create("custom", "M0,0,C0.084,0.6,0.194,0.892,0.548,0.968,0.667,0.993,0.831,1,1,1")})
})

function setupTl() {
  tl = gsap.timeline({paused:true, defaults: {ease: CustomEase.create("custom", "M0,0,C0.084,0.6,0.194,0.892,0.548,0.968,0.667,0.993,0.831,1,1,1")}})
  tl.add('enter')
  tl.to(image.value, {
    y: 0,
    duration: 1.2
  })
  tl.add('exit', '>')
  tl.to(image.value, {
    y: '110%',
    duration: 1.2
  })
  tl.set(image.value, {
    y: '-110%'
  }, '>')
}

function handleMove(e) {
  const cursorX = e.clientX/sergiStore.windowSize.x - 0.5
  const cursorY = e.clientY/sergiStore.windowSize.y - 0.5
  console.log(cursorX, cursorY)
  xTo((cursorX * e.clientX) * 0.8)
  yTo((cursorY * e.clientY) * 0.1)
}

function handleEnter() {
  tl.tweenFromTo('enter', 'exit')
  //console.log('enter')
}

function handleLeave() {
  tl.tweenFromTo('exit', tl.duration())
  //console.log('leave')  
}
</script>

<style lang="scss" scoped>
.project-item {
  background: transparent;
  display: grid;
  justify-items: center;
  align-items: center;
  position: relative;
  width: 100%;
  line-height: 1;

  &-name {
    color: white;
    mix-blend-mode: difference;
    font-size: clamp(5rem, 7vw, 14rem);
  }
   
  &-data {
    &-right {
      text-align: right;
    }

    &-left {
      text-align: left;
    }
  }

  &-title {
    display: grid;
    grid-template-columns: 5vw 1fr 5vw;
    width: 100%;
    line-height: .8;
  }

  &-img-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: absolute;
    height: 60vh;
    width: 70vw;
    object-fit: contain;
    top: 50%;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    margin: 0 auto;
    transform: translateY(-50%);
  }

  img {
    position: relative;
    transform: translateY(-110%);
    max-height: 60vh;
    max-width: 70vw;
    object-fit: contain;
  }

  &:focus {
    outline: none;

    .project-item-name {
      text-decoration-line: underline;
      text-decoration-thickness: .04em;
    }
  }
}
</style>