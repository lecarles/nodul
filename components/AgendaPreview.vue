<template>
  <div class="project-grid">
    <project-link :project="project" :i="i" v-for="(project, i) in data.stories" :key="project._uuid"></project-link>
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'project',
})
</script>

<style lang="scss" scoped>
.project-grid {
  margin: 15vh 0;
  display: grid;
  gap: 1.5rem;
  width: 100%;
  text-align: center;
  justify-items: start;
  padding: $padding-y-md $padding-x-md $padding-y-md;
}


</style>