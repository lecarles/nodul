<template>
  <div class="programa-section" ref="section">
    <div class="programa-sticky" ref="sticky">
      <div class="font-size-lg mb-auto sm-d-none">{{props.section.content.title}}</div>
      <video :src="props.section.content.video.filename" playsinline autoplay muted></video>
    </div>
    <div class="programa-mesures">
      <div class="font-size-lg mb-row md-d-none">{{props.section.content.title}}</div>
      <div v-for="mesura in props.section.content.starred" :key="mesura._uuid">
        <div class="font-size-md">{{ mesura.title }}</div>
        <div class="font-size-sm mt-1 mb-row">{{ mesura.overtitle }}</div>
      </div>
      <div class="font-size-sm mt-row-2" v-html="renderRichText(props.section.content.list)"></div>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import CustomEase from "gsap/CustomEase"
import { onMounted, ref } from 'vue'

const section = ref(null)
const sticky = ref(null)

const props = defineProps({
  section: {
    type: Object,
    default: null
  }
})

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  let mm = gsap.matchMedia()
    mm.add("(min-width: 950px)", () => {

    let st = ScrollTrigger.create({
      trigger: section.value,
      pin: sticky.value,
      start: "top top",
      end: 'bottom bottom'
    })  

    return () => {
      st.kill()
    }
  })
  mm.add("(max-width: 949px)", () => {
    let st = ScrollTrigger.create({
      trigger: section.value,
      pin: sticky.value,
      start: "top top",
      end: 'bottom bottom'
    }) 
  })
})
</script>

<style lang="scss">
.programa-section {
  display: grid;
  grid-template-columns: .6fr 1fr;
  gap: $col-gap;

  .programa-mesures {
    max-width: 60%;
    margin: 0 auto;
    padding: $padding-x-md;
  }

  .programa-sticky {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: $padding-x-md;

    video {
      width: 100%;
    }
  }

  ol {
    margin: 0;
    padding: 0;
    list-style: none;
    transform: translateX(calc(($col-gap * -1) - 20px));

    li {
      display: grid;
      grid-template-columns: 20px 1fr;
      gap: $col-gap;
      counter-increment: item;
      margin-bottom: .8rem;
    }

    li::before {
      text-align: right;
      content: counter(item);
    }
  }
}

@media (max-width: $sm-breakpoint)  {
  .programa-section {
    grid-template-columns: 1fr;
    position: relative;

    .programa-sticky {
      display: flex;
      align-items: flex-end;
      height: 100vh;
      display: grid;
      grid-template-columns: 1fr;
      z-index: 1;
      position: absolute;
      top: 0;
      padding: 0;
    }

    .programa-mesures {
      max-width: 100%;
      z-index: 2;
    }

    ol {
      transform: none;
    }
  }
}
</style>