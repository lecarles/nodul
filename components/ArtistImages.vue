<template>
  <div class="artist-image-wrapper" v-for="artist in data.stories" :key="artist.uuid">
    <template v-if="artist.content.image.filename">
      <img 
        v-if="artist.uuid === sergiStore.activeArtist" 
        class="artist-image" 
        :src="artist.content.image.filename" 
        :alt="artist.content.name"
      >
    </template>
  </div>
</template>

<script setup>
import { useSergiStore } from '@/stores/sergiStore'

const storyblokApi = useStoryblokApi()
const sergiStore = useSergiStore()

const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'artists/26',
})

const props = defineProps({
  concerts: {
    type: Object,
    default: null
  }
})
</script>

<style lang="scss">
.artist-image {
  object-fit: contain;
  width: 100%;
  height: 100%;
  max-height: 90vh;
  max-width: 95%;

  &-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .grid-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
      pointer-events: none;
      opacity: 0.1;
      inset: 0;
      z-index: 10;
    }
  }
}
</style>