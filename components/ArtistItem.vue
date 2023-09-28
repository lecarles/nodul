<template>
  <div class="artist-item">
    {{data.story.content.name}}
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi()

const props = defineProps({
  artist: {
    type: String,
    default: '0'
  },
})

const { data } = await storyblokApi.get('cdn/stories/' + props.artist, {
  find_by: 'uuid',
})

</script>

<style lang="scss" scoped>

</style>