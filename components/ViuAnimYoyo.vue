<template>
  <div class="viu-yoyo">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 735 371.72">
      <path class="base" ref="v1" d="M64.6,371.72H56.78L0,333v-7.81L176.1,64h7.82l56.78,38.67v7.82Z"/>
      <path class="base" ref="v2" d="M109.24,333.25,290.89,63.75h7.82l56.78,38.68v7.81L208.19,328.72l-6.58,4.53Z"/>
      <path class="base" ref="vt" d="M90.39,333.25l25.23-37.44-.4,37.44Z"/>
      <path class="base" ref="i" d="M419,188.83h-7.82l-56.78-38.68v-7.81l38.68-57.19h7.82l56.78,38.67v7.82Zm-80.64-23h7.81L403,204.47v7.81L295.6,371.51h-7.82L231,332.84V325Z"/>  
      <path class="base" ref="u1" d="M410.21,371.51h-7.82l-56.78-38.67V325L453,165.79h7.82l56.78,38.68v7.81Z"/>
      <path class="base" ref="ut" d="M461.27,333.25H435.74l25.49-37.89Z" />
      <path class="base" ref="u2" d="M632.39,204.47v7.81L525,371.51h-7.81l-56.37-38.26V324.4l107-158.61h7.82Z"/>
      <path class="base" ref="p" d="M641.45,371.51h-7.82l-56.78-38.67V325l38.67-57.19h7.82l56.78,38.67v7.82Z"/>  
      <path class="ex" ref="pEx" d="M678.22,186.2,735,224.88v7.82L641.45,371.51h-7.82l-56.78-38.67V325L670.4,186.2Z"/>
      <path class="ex" ref="u2Ex" d="M632.11,82l56.78,38.68v7.81L525,371.51h-7.81l-56.37-38.26V324.4L624.29,82Z"/>
      <path class="ex" ref="u1Ex" d="M516.32,83l56.78,38.68v7.81l-162.89,242h-7.82l-56.78-38.67V325L508.5,83Z"/>
      <path class="ex" ref="iEx" d="M474.4,104.16h-7.81L409.81,65.48V57.66L447.23,1.47h7.82l56.78,38.68V48ZM400.7,85.29,457.48,124v7.81L295.6,371.51h-7.82L231,332.84V325L392.89,85.29Z"/>
      <path class="ex" ref="v2Ex" d="M109.24,333.25,333.39,0h7.82L398,38.68v7.81L208.19,328.72l-6.58,4.53Z"/>
      <path class="ex" ref="v1Ex" d="M226.67.21l56.78,38.68V46.7L64.6,371.72H56.78L0,333v-7.81L218.85.21Z"/>
    </svg>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import MorphSVGPlugin from "gsap/MorphSVGPlugin"
import CustomEase from "gsap/CustomEase"

let v1 = ref(null)
let v2 = ref(null)
let vt = ref(null)
let i = ref(null)
let u1 = ref(null)
let ut = ref(null)
let u2 = ref(null)
let p = ref(null)
let pEx = ref(null)
let u2Ex = ref(null)
let u1Ex = ref(null)
let iEx = ref(null)
let v2Ex = ref(null)
let v1Ex = ref(null)

let bounce = null
let v1Tl, v2Tl, iTl, u1Tl, u2Tl, pTl

const props = defineProps({
  delay: {
    type: Number, 
    default: 0
  }
})

function setupTimelines() {
  v1Tl = gsap.timeline()
  v1Tl.to(v1.value, { 
    morphSVG: v1Ex.value,
  })
  v1Tl.to(v1.value, {
    morphSVG: v1.value,
  })
  v2Tl = gsap.timeline()
  v2Tl.to( v2.value, { 
    morphSVG: v2Ex.value,
  })
  v2Tl.to(v2.value, {
    morphSVG: v2.value,
  })
  iTl = gsap.timeline()
  iTl.to(i.value, { 
    morphSVG: iEx.value,
  })
  iTl.to(i.value, {
    morphSVG: i.value,
  })
  u1Tl = gsap.timeline()
  u1Tl.to(u1.value, { 
    morphSVG: u1Ex.value,
  })
  u1Tl.to(u1.value, {
    morphSVG: u1.value,
  })
  u2Tl = gsap.timeline()
  u2Tl.to(u2.value, { 
    morphSVG: u2Ex.value,
  })
  u2Tl.to(u2.value, {
    morphSVG: u2.value,
  })
  pTl = gsap.timeline()
  pTl.to(p.value, { 
    morphSVG: pEx.value,
  })
  pTl.to(p.value, {
    morphSVG: p.value,
  })

  bounce = gsap.timeline({paused: false, repeat: -1, delay: props.delay})

  bounce.add(v1Tl, '<')
  bounce.add(v2Tl, '<')
  bounce.add(iTl, '<')
  bounce.add(u1Tl, '<')
  bounce.add(u2Tl, '<')
  bounce.add(pTl, '<')
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(CustomEase)
  gsap.registerPlugin(MorphSVGPlugin)

  setupTimelines()
})
</script>

<style lang="scss" scoped>
.viu-yoyo {
  display: flex;

  svg {
    position: absolute;
    fill: var(--primary);
    width: 100%;
    height: 64%;
  }
}
.ex {
  display: none;
}
</style>