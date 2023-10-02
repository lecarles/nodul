<template>
  <div class="artist-images">
    <artist-image v-for="artist in data.stories" :key="artist.uuid" :artist="artist"></artist-image>
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi()

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