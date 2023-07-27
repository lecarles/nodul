<template>
  <div class="marquee" ref="marquee">
    <div ref="inner" class="marquee-inner" aria-hidden="true">
      <div class="marquee-part">
        CONCERTS EN SALES · AIORA · CIRCUIT VIU 2023 · ALACANT · CONCERTS EN SALES · ALBORAIA · CIRCUIT VIU 2023 · ALMÀSSERA · 
        CONCERTS EN SALES · CASTELLÓ · CIRCUIT VIU 2023 · MISLATA · CONCERTS EN SALES · ST. JOAN D'ALACANT · CIRCUIT VIU 2023 · ST. VICENT DEL RASPEIG ·  CONCERTS EN SALES · VALÈNCIA · 
      </div>
      <div class="marquee-part">
        CIRCUIT VIU 2023 · AIORA · CONCERTS EN SALES · ALACANT · CIRCUIT VIU 2023 · ALBORAIA · CONCERTS EN SALES · ALMÀSSERA · 
        CIRCUIT VIU 2023 · CASTELLÓ · CONCERTS EN SALES · MISLATA · CIRCUIT VIU 2023 · ST. JOAN D'ALACANT · CONCERTS EN SALES · ST. VICENT DEL RASPEIG ·  CIRCUIT VIU 2023 · VALÈNCIA · 
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

let inner = ref(null)
let marquee = ref(null)

onMounted (() => {
  runMarquee()
})
  
function  runMarquee () {
  const tween = gsap.to('.marquee-part', { xPercent: -100, repeat: -1, duration: 20, ease: 'linear' }).totalProgress(0.5)

  gsap.set('.marquee-inner', { xPercent: -50 })
}
  



</script>

<style lang="scss">
.marquee-part {
  display: inline;
  flex-shrink: 0;
  font-smooth: always;
  line-height: 1.1;
}

.marquee {
  pointer-events: none;
  color: var(--background);
  background: var(--primary);
  font-size: $font-size-md;
  perspective-origin: center;
  overflow: hidden;
  padding: .45em 0 .22em 0;
}

.marquee-inner {
  -webkit-font-smoothing: antialiased;
  width: fit-content;
  display: flex;
  flex: auto;
  flex-direction: row;
}

</style>
