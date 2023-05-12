<template>
  <div class="programa-section" ref="section">
    <div class="programa-sticky p-md" ref="sticky">
      <div class="font-size-lg mb-auto">{{props.section.content.title}}</div>
      <video :src="props.section.content.video.filename" autoplay muted></video>
    </div>
    <div class="programa-mesures p-md">
      <div v-for="mesura in props.section.content.starred" :key="mesura._uuid">
        <div class="font-size-sm">{{ mesura.overtitle }}</div>
        <div class="font-size-md mb-row">{{ mesura.title }}</div>
      </div>
      <div class="font-size-sm" v-html="renderRichText(props.section.content.list)"></div>
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
  
  let st = ScrollTrigger.create({
    trigger: section.value,
    pin: sticky.value,
    start: "top top",
    end: 'bottom bottom'
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
  }

  .programa-sticky {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100vh;

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

    .programa-sticky {
      height: auto;
      display: grid;
      grid-template-columns: 2fr 1fr;
    }

    .programa-mesures {
      max-width: 100%;
    }

    ol {
      transform: none;
    }
  }
}
</style>