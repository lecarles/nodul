<template>
  <div class="concert-page">
    <div class="p-md concert-info grid-1">
      <div class="concert-artists font-size-xl secondary">
        <div>{{data.story.content.artist1}}</div><div v-if="data.story.content.artist2"> + {{data.story.content.artist2}}</div>
      </div>
      <div class="concert-data font-size-md secondary">
        <div class="concert-date">{{ day }} {{ fullMonth.ca }}</div>
        <div class="concert-time">{{ time }} H</div>
        <a href="/" class="button font-size-md j-self-center">Entrades</a>
        <div class="concert-venue">{{ data.story.content.sala }}</div>
        <div class="concert-city">{{ data.story.content.localitat }}</div>
      </div>
    </div>
    <div>
      <div>
        <image-switcher v-if="data.story.content.imatgeartista2" :images="[data.story.content.imatgeartista1.filename, data.story.content.imatgeartista2.filename]"/>
        <img v-else :src="data.story.content.imatgeartista1.filename" :alt="data.story.content.artist1">
      </div>
      <marquee-viu class="marquee-viu-concert" data-speed="0.9"/>
    </div>
    <div class="concert-bios mt-row-3">
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
import { onMounted } from 'vue'
import { useSergiStore } from '~/stores/sergiStore'
import gsap from 'gsap'

const sergiStore = useSergiStore()
const { slug } = useRoute().params
const storyblokApi = useStoryblokApi()
const route = useRoute()
const { data } = await storyblokApi.get('cdn/stories/concerts/' + slug, {
  language: route.name.endsWith('es') ? 'es' : 'ca'
})

const { year, month, day, time, fullMonth } = useDateFormatter(data.story.content.data)

onMounted(() => {
  gsap.set('html', {
    "--primary": sergiStore.colors[data.story.content.color],
  })
  gsap.set('html', {
    "--background": sergiStore.colors[data.story.content.bgcolor],
  })
  let color = (data.story.content.bgcolor === 'purple' ||  data.story.content.bgcolor === 'green') ? sergiStore.colors['white'] : sergiStore.colors['black']
  gsap.set('html', {
    "--secondary": color,
  })
})

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
    display: grid;
    align-items: center;
    text-align: center;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    gap: clamp(1em, 1.5vw, 2em);
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

<style lang="scss">
.concert-page {
  .marquee-viu-concert {
    position: absolute;
    top: 90vh;
  }
}

</style>
