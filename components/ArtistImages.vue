<template>
  <div class="artist-images">
    <div class="artist-image-wrapper" v-for="artist in data.stories" :key="artist.uuid">
      <img v-if="artist.uuid === sergiStore.activeArtist" class="artist-image" :src="artist.content.image.filename" :alt="artist.content.name">
    </div>
  </div>
</template>

<script setup>
import { useSergiStore } from '@/stores/sergiStore'

const storyblokApi = useStoryblokApi()
const sergiStore = useSergiStore()

const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'artists',
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
  
  .artist-image {
    height: calc((100vh/16) * 10);
    position: absolute;
    top: 0;

    &-wrapper {
      overflow: hidden;
    }
  }
}
</style>