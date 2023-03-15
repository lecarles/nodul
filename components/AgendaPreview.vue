<template>
  <div class="agenda-grid grid-5">
    <nuxt-link :to="'project/' + project.slug" v-for="project in data.stories" :key="project.id">{{project.name}}</nuxt-link>
    <span>{{ data }}</span>
  </div>
</template>

<script setup>
const actes = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'project',
})
</script>

<style lang="scss" scoped>
.agenda-grid {
  justify-items: start;
  padding: $padding-y-md $padding-x-md $padding-y-md;
  height: calc(100vh - 4rem);
}
</style>