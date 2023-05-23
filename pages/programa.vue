<template>
  <div class="programa-full font-size-sm">
    <div class="programa-full-sticky" ref="sticky">
      <div>
        <div class="font-size-lg mb-1">Programa electoral</div>
        <div><nuxt-link to="/">↓ <span class="underline">Versió resumida</span></nuxt-link></div>
        <div><a href="https://a.storyblok.com/f/229615/x/e538eacc96/carta-vilamarxant.pdf">↓ <span class="underline">Carta</span></a></div>
        <div><a href="https://a.storyblok.com/f/229615/x/8a9cdfc7cd/triptic-programa-v3.pdf">↓ <span class="underline">Tríptic</span></a></div>
      </div>
      <video class="logo-video" ref="video" src="@/assets/video/logo-1080.mp4" autoplay muted></video>
    </div>
    <div ref="programa" class="p-md programa-full-content" v-html="renderRichText(data.story.content.programa)"></div>
  </div>
</template>

<script setup>
const route = useRoute()
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/programa', {
  language: route.name.endsWith('es') ? 'es' : 'ca'
})

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { onMounted, ref } from 'vue'

const programa = ref(null)
const sticky = ref(null)
const video = ref(null)

onMounted(() => {
  let mm = gsap.matchMedia()

  mm.add("(min-width: 950px)", () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(video.value, {
      scrollTrigger: {
        trigger: programa.value,
        pin: sticky.value,
        start: "top top",
        end: 'bottom bottom',
      },
      y: 0,
      duration: .1
    })
  })
})
</script>

<style lang="scss">
.programa-full {
  display: grid;
  grid-template-columns: .6fr 1fr;
  gap: $col-gap;

  &-wrapper {
    box-sizing: border-box;
    width: 100%;
  }

  &-content {
    box-sizing: border-box;
    max-width: 60%;
    margin: 0 auto;
    padding: $padding-x-md;

    h2 {
      margin: $row-gap 0;
    }

    h3 {
      margin: .5em 0;
    }
  }

  &-sticky {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: $padding-x-md;
    height: 100vh;
    // height: calc(100vh - $padding-x-sm * 2 - 2em);

    video {
      box-sizing: border-box;
      margin-top: auto;
      width: 100%;
      transform: translateY(calc($padding-x-sm * -2 - 2em))
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
  .programa-full {
    grid-template-columns: 1fr;
    position: relative;
    height: auto;

    &-sticky {
      height: auto;
    }

    .logo-video {
      margin-top: 2rem;
    }

    &-content {
      max-width: 100%;
      z-index: 2;
    }

    ol {
      transform: none;
    }
  }
}
</style>