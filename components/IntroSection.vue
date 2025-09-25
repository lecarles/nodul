<template>
  <div class="intro-section font-size-sm grid-1 color-foreground">
    <div class="navbar a-self-start">
      <!-- <nodul-logo></nodul-logo> -->
      <div class="navbar-item intro-section-festi">
        <div>II Festival de <br>La Vall del Xúquer <br>
        9 → 13 d’octubre ‘24</div>
      </div>
      <div class="navbar-item intro-section-pobles">
        Alcàntera de Xúquer, Antella, Beneixida, Cotes, Sellent, Sumacàrcer
      </div>
      <div class="navbar-item intro-section-collab">
        <a href="#colabora" class="collab-btn">
          <span class="text-center">Col·labora amb Nòdul</span>
        </a>
      </div>
    </div>
    <div class="intro-section-artists">
      <div class="artist" v-for="artist in data.stories" :key="artist.uuid">
        <div class="artist-name font-size-lg">{{artist.content.name}}</div>
        <div class="artist-details" v-if="artist.content.concert[0]">
          {{ getConcert(artist.content.concert[0])[0].content.town }}
        </div>
      </div>
    </div>
    <div class="intro-section-artists-sm font-size-lg p-md">
      <template v-for="artist in data.stories" :key="artist.uuid">
        {{artist.content.name}},
      </template>
    </div>
    <div class="logo color-primary">
      <client-only>
        <vue-3-lottie
          :animation-data="nodulJSON"
        />
      </client-only>
    </div>
    <div class="logo-vert color-primary">
      <client-only>
        <vue-3-lottie
          :animation-data="nodulvertJSON"
        />
        <vue-3-lottie
          :animation-data="nodulvertJSON"
        />
      </client-only>
    </div>
  </div>
</template>

<script setup >
const storyblokApi = useStoryblokApi()
import gsap from 'gsap'
import nodulJSON from '@/assets/anim.json'
import nodulvertJSON from '@/assets/anim-vert.json'
import { onMounted } from 'vue';

onMounted(() => {
  const intro = gsap.timeline()
  intro.to('.logo', {
    opacity: 1,
    duration: 0.1,
  })
  intro.to('.navbar-item', {
    opacity: 1,
    duration: 0.1,
    stagger: 0.1
  }, '>0.1')
  intro.to('.artist', {
    opacity: 1,
    duration: 0.1,
    stagger: 0.1
  }, '>')
})

const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'artists/24',
  sort_by: 'slug:asc'
})

const concerts = await storyblokApi.get('cdn/stories', {
  starts_with: 'concerts/24',
  sort_by: 'content.date:asc'
})

function getConcert(id) {
  return concerts.data.stories.filter((story) => story.uuid === id)
}
</script>

<style lang="scss">
.intro-section {
  height: 100dvh;
  position: relative;

  .navbar {
    gap: 0;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    padding: var(--md) 0;

    &-item {
      opacity: 0;
    }

    .nodul-logo-svg {
      height: 3.2em;
    }
  }

  &-festi {
    grid-column: 3 / span 2;
    max-width: 90%;
  }

  &-pobles {
    grid-column: 5 / span 2;
    max-width: 90%;
  }

  &-collab {
    grid-column: 9 / span 2;
    max-width: calc(100% - var(--md));
  }

  .logo {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(10vw);
    pointer-events: none;
    z-index: -1;

    &-vert {
      display: none;
    }
  }

  .lottie-animation-container {
    display: flex;
  }

  &-artists {
    display: flex;
    flex-wrap: wrap;
    align-self: start;
    width: 100%;
    column-gap: 1em;
    align-items: center;
    color: var(--foreground);
    padding: 0 var(--md) 3.33vw;

    &-sm {
      display: none;
    }

    .artist {
      display: flex;
      gap: .5em;
      height: 3.33vw;
      align-items: flex-end;
      opacity: 0;

      &-name {
        line-height: .7;
      }

      &-details {
        border-bottom: 1px solid var(--foreground);
        border-right: 1px solid var(--foreground);
        padding: 0 2ch .2em 0;
        height: fit-content;
      }
    }
  }
  
  &-info {
    display: flex;
    flex-direction: column;
    align-self: start;
    gap: .5em;
  }

  .collab-btn {
    font-size: var(--text-xs);
    max-width: 40ch;
    border: 1px solid var(--foreground);
    color: var(--foreground);
    line-height: 1;
    width: 100%;
    transition: .15s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4em;
    padding: .5em 2.25em;
    align-self: end;

    &:hover {
      background: var(--primary);
    }
  }
}

@media (max-width: 1000px) {
  .intro-section {
    .navbar {
      grid-template-columns: repeat(2, 1fr);
      padding: var(--md);
    }

    .logo {
      display: none;

      &-vert {
        position: absolute;
        height: auto;
        width: 100%;
        right: 0;
        display: block;
        z-index: -1;
        bottom: 0;
      }
    }

    &-festi {
      grid-column: 1;
    }

    &-pobles {
      grid-column: 2;
    }

    &-artists {
      display: none;
    }

    &-collab {
      display: none;
    }

    &-artists-sm {
      display: block;
    }
  }
}
</style>