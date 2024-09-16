<template>
  <div class="artist-images">
    <div class="artist-image-wrapper" v-for="artist in data.stories" :key="artist.uuid">
      <img 
        v-if="artist.uuid === sergiStore.activeArtist" 
        class="artist-image" 
        :src="artist.content.image.filename" 
        :alt="artist.content.name"
        :style="{clipPath: 'url(#' + artist.uuid + ')'}"
      >
      <svg>
        <defs>
          <clipPath transform="scale(0.00148148148)" :id="artist.uuid" clipPathUnits="objectBoundingBox">
              <path :d="artist.content.path"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { useSergiStore } from '@/stores/sergiStore'

const storyblokApi = useStoryblokApi()
const sergiStore = useSergiStore()

const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'artists/23',
})

const props = defineProps({
  concerts: {
    type: Object,
    default: null
  }
})
</script>

<style lang="scss">
.artist-images {
  position: relative;
  top: calc((100vh/16) * 3);
  left: calc((100vh/16) * 3);
  height: calc((100vh/16) * 10);
  overflow: hidden;
  z-index: 1;
  
  .artist-image {
    height: calc((100vh/16) * 10);
    position: absolute;
    top: 0;

    &-wrapper {
      overflow: hidden;
    }
  }
}

@media (max-aspect-ratio: 6/5) {
  .artist-images {
    top: calc((100vh/16) * 4);
    height: calc((100vh/16) * 8);
    left: calc((100vh/16) * 5);

    .artist-image {
      height: calc((100vh/16) * 8);
    }
  }
}

@media (max-aspect-ratio: 1/1) {
  .background-pattern {
    display: none;
  }

  .artist-images {
    width: calc((100vh/16) * 8);
    left: 50%;
  }
}
</style>