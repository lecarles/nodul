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
let locale = route.name.endsWith('es') ? 'es' : 'ca'

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
</script>

<template>
  <div class="concert-page">
    <div class="concert-main">
      <div class="p-md concert-info grid-1">
        <div class="concert-artists font-size-xl secondary">
          <div>{{data.story.content.artist1}}</div>
          <div v-if="data.story.content.artist2"> + {{data.story.content.artist2}}</div>
        </div>
        <div class="concert-data font-size-md secondary">
          <div class="concert-date">{{ day }} {{ fullMonth[locale] }}</div>
          <div class="concert-time">{{ time }}H</div>
          <a target="_blank" href="/" class="button font-size-md j-self-center">{{ $t('tickets') }}</a>
          <div class="concert-venue">{{ data.story.content.sala }}</div>
          <div class="concert-city">{{ data.story.content.localitat }}</div>
        </div>
      </div>
      <div v-if="data.story.content.imatgeartista1.filename">
        <div class="img-container">
          <image-switcher v-if="data.story.content.imatgeartista2.filename" :images="[data.story.content.imatgeartista1.filename, data.story.content.imatgeartista2.filename]"/>
          <img class="img-artista" v-else :src="data.story.content.imatgeartista1.filename + '/m/1400x0'" :alt="data.story.content.artist1">
          <marquee-viu class="marquee-viu-concert" data-speed="0.9"/>
        </div>
      </div>
    </div>
    <div class="concert-bios">
      <div class="concert-bio-item p-md">
        <div class="concert-bio-item-aside">
          <div class="font-size-lg">{{ data.story.content.artist1 }}</div>
          <xarxes-links :xarxes="data.story.content.xarxesartista1[0]"/>
        </div>
        <div class="concert-bio-item-text secondary font-size-md"  v-html="renderRichText(data.story.content.bio)"></div>
      </div>
      <div class="concert-bio-item p-md" v-if="data.story.content.artist2">
        <div class="concert-bio-item-aside">
          <div class="font-size-lg">{{ data.story.content.artist2 }}</div>
          <xarxes-links :xarxes="data.story.content.xarxesartista2[0]"/>
        </div>
        <div class="concert-bio-item-text secondary font-size-md"  v-html="renderRichText(data.story.content.bioArtista2)"></div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<style lang="scss" scoped>
.concert-page {
  min-height: 100vh;
  .concert-info {
    text-transform: uppercase;
    text-align: center;
  }

  .concert-bios {
    margin-top: calc($padding-x-md * 4 + 8rem);
  }

  .concert-data {
    display: grid;
    align-items: center;
    text-align: center;
    grid-template-columns: 1fr 1fr 12em 1fr 1fr;
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

  .img-container {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .img-artista {
    max-width: 70vw;
    max-height: 60vh;
    object-fit: contain;
    margin: 0 auto;
  }
}

@media (max-width: $sm-breakpoint) {
  .concert-page {
    .concert-main {
      min-height: 100vh;
      position: relative;
    }
    .concert-data {
    grid-template-columns: auto auto;
    grid-auto-flow: row;
    gap: .5em;
    width: 100%;

      .concert-date, .concert-venue {
        text-align: left;
      }

      .concert-time, .concert-city {
        text-align: right;
      }

      .concert-venue, .concert-city {
        grid-row: 2;
      }
      .button {
        grid-row: 3;
        grid-column: span 2;
      }
    }  

    .concert-bio-item {
      grid-template-columns: 1fr;
    }
  }
  
}
</style>

<style lang="scss">
.concert-page {
  .img-container {
    position: relative;
  }

  .marquee-viu-concert {
    position: absolute;
    bottom: -5rem;
  }
}

</style>
