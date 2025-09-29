<template>
  <div class="intro-section text-sm color-foreground">
    <div class="sidebar-primary">
      <div class="map-scale">
        <div v-for="i in 6" :key="i" class="map-scale-item"></div>
      </div>
      <div class="px-(--md) sidebar-primary-content">
        <nodul-logo class="text-orange"></nodul-logo>
        <div class="mt-(--md) leading-[0.9]">
          <div>III Festival de <br> La Vall del Xúquer </div>
          <div class="mt-(--xs)">9 → 12 d’octubre 2025</div>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="artist" v-for="artist in data.stories" :key="artist.uuid">
        <div class="artist-name">{{artist.content.name}}</div>
        <div class="artist-details" v-if="artist.content.concert[0]">
          {{ getConcert(artist.content.concert[0])[0].content.town }}
        </div>
      </div>
    </div>
    <div class="sidebar-secondary justify-end">
      <div class="navbar-item intro-section-collab mr-(--sm)">
        <a href="#colabora" class="collab-btn underline">
          <span class="text-right">Col·labora amb Nòdul</span>
        </a>
      </div>
      <div class="map-scale">
        <div v-for="i in 6" :key="i" class="map-scale-item"></div>
      </div>
    </div>
  </div>
</template>

<script setup >
const storyblokApi = useStoryblokApi()
import gsap from 'gsap'
import { onMounted } from 'vue';

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
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: var(--md);

  .main-content {
    background: lightblue;
    width: 100%;
    height: 100%;
    aspect-ratio: 6/7;
  }

  .sidebar-primary, .sidebar-secondary {
    display: flex;
    width: 100%;
  }

  .sidebar-primary{
    &-content {
      .nodul-logo-svg {
        max-height: 3em;
      }
    }
  }

  .map-scale {
    height: 100%;
    width: var(--sm);
    display: grid;
    grid-template-rows: repeat(6, 1fr);

    &-item {
      border: 2px solid var(--color-orange);

      &:nth-child(odd) {
        background: var(--color-orange);
      }
    }
  }
}

@media (max-width: 1000px) {
  .intro-section {
    grid-template-columns: 1fr;
    width: 100vw;

    .sidebar-primary, .sidebar-secondary {
      flex-direction: column-reverse;
    }

    .sidebar-primary {
      margin-bottom: auto;
    }

    .sidebar-secondary {
      margin-top: auto;

      .intro-section-collab {
        display: none;
      }
    }

    .sidebar-primary-content {
      display: flex;
      margin-bottom: var(--md);
      gap: var(--sm);
      
      .nodul-logo-svg {
        margin-right: auto;
        max-height: 3.2em;
      }
    }

    .map-scale {
        width: 100%;
        height: var(--md);
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: none;

        &-item {
          height: 100%;
          width: 100%;

          &:nth-child(odd) {
            background: var(--color-orange);
          }
        }
      }

    .main-content {
      height: auto;
    }
  }
}

</style>