<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
    {{ story.content }}
    <div class="about p-md">
      <h2 class="color-white mb-auto">Som una associació cultural sense finalitat lucrativa que treballa des del 1983 per la promoció i ús del valencià i la difusió de la cultura del País Valencià.</h2>
    </div>
  </div>
</template>

<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  background: $red;
  justify-items: start;
  height: 80vh;

  h2 {
    max-width: 22ch;
  }
}
</style>