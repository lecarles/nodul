<template>
  <div class="square-anim">
    <svg ref="svgRef" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 6480">
      <path class="cls-1" d="M540,0h0c298.23,0,540,241.77,540,540v540H0v-540C0,241.77,241.77,0,540,0Z"/>
      <path class="cls-1" d="M540,5400h0c298.23,0,540,241.77,540,540v540H0v-540C0,5641.77,241.77,5400,540,5400Z"/>
      <rect class="cls-1" x="0" y="1080" width="1080" height="1080" rx="540" ry="540"/>
      <path class="cls-1" d="M0,2160h540c298.23,0,540,241.77,540,540h0c0,298.23-241.77,540-540,540H0v-1080Z"/>
      <path class="cls-1" d="M0,3240h1080v540c0,298.23-241.77,540-540,540h0C241.77,4320,0,4078.23,0,3780v-540Z"/>
      <path class="cls-1" d="M540,4320H0v540c0,298.23,241.77,540,540,540h0c298.23,0,540-241.77,540-540h-540v-540Z"/>
    </svg>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

const svgRef = ref(null)

onMounted(() => {
  // set gsap to 12 fps
  gsap.ticker.fps(12)
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.1 })
  for (let i = 1; i < 6; i++) {
    tl.to(svgRef.value, {
      yPercent: -100/6 * i,
      duration: .4,
    }, '>0.6')
  } 
})
</script>

<style scoped lang="scss">
.square-anim {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: var(--color-blue);

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    fill: var(--color-black);
  }
}

.square-anim:nth-child(5n) {
  background-color: var(--color-black);
  
  svg {
    fill: var(--color-orange);
  }
}

.square-anim:nth-child(5n+1) {
  background-color: var(--color-orange);
  svg {
    fill: var(--color-white);
  }
}

.square-anim:nth-child(5n+3) {
  background-color: var(--color-black);
  svg {
    fill: var(--color-white);
  }
}

.square-anim:nth-child(5n+4) {
  background-color: var(--color-blue);
  svg {
    fill: var(--color-black);
  }
}


</style>