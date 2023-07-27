<template>
  <div class="concert-page">
    <div class="p-md concert-info grid-1">
      <div class="concert-artists font-size-xl secondary">
        <div>{{data.story.content.artist1}}</div><div v-if="data.story.content.artist2"> + {{data.story.content.artist2}}</div>
      </div>
      <div class="concert-data font-size-md secondary">
        <div class="concert-date">{{ day }} {{ fullMonth.ca }}</div>
        <div class="concert-time">{{ time }}</div>
        <div class="concert-venue">{{ data.story.content.sala }}</div>
        <div class="concert-city">{{ data.story.content.localitat }}</div>
      </div>
      <a href="/" class="button font-size-md j-self-center">
        Entrades
      </a>
    </div>
    <div>image</div>
    <div>separator</div>
    <div class="concert-bios">
      <div class="concert-bio-item p-md">
        <div class="concert-bio-item-aside">
          <div class="font-size-lg">{{ data.story.content.artist1 }}</div>
          <div>links</div>
        </div>
        <div class="concert-bio-item-text secondary">
          bio
        </div>
      </div>
      <div class="concert-bio-item p-md" v-if="data.story.content.artist2">
        <div class="concert-bio-item-aside">
          <div class="font-size-lg">{{ data.story.content.artist2 }}</div>
          <div>links</div>
        </div>
        <div class="concert-bio-item-text secondary">
          bio
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const { slug } = useRoute().params
const storyblokApi = useStoryblokApi()
const route = useRoute()
const { data } = await storyblokApi.get('cdn/stories/concerts/' + slug, {
  language: route.name.endsWith('es') ? 'es' : 'ca'
})

const { year, month, day, time, fullMonth } = useDateFormatter(data.story.content.data)

definePageMeta({
  pageTransition: {
    mode: 'in-out',
    onEnter: (el, done) => { 
      setTimeout(() => {
        done() 
      }, 1000)
    },
    onLeave: (el, done) => { 
      setTimeout(() => {
        done() 
      }, 1000)
    },
  }
})
</script>

<style lang="scss" scoped>
.concert-page {
  .concert-info {
    text-transform: uppercase;
    text-align: center;
  }

  .concert-data {
    display: flex;
    text-align: center;
    gap: 1rem;
    margin: 0 auto;
  }

  .concert-bio-item {
    display: grid;
    grid-template-columns: 1fr 2.25fr;
    gap: 2rem;

    &-aside {
      text-transform: uppercase;
    }
  }
}
</style>
