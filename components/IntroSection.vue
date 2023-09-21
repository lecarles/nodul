<template>
  <div class="intro-section font-size-md grid-1">
    <div class="intro-artists a-self-start"><span v-for="artist in data.stories" :key="artist.uuid">{{artist.content.name}}, </span></div>
    <div class="logo"><nodul-logo></nodul-logo></div>
  </div>
</template>

<script setup >
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'artists',
  sort_by: 'content.name:asc'
})
</script>

<style lang="scss" scoped>
.intro-section {
  height: calc(100vh - $navbar-height);
  height: calc((var(--vh, 1vh) * 100) - $navbar-height);
  padding: 0 $padding-x-md $padding-x-md;
}

.intro-artists {
  max-width: 50%;
}
</style>