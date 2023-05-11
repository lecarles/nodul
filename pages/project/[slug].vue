<template>
  <div class="project-page">
    <div class="project-data grid-5">
      <nuxt-link to="/">← 00</nuxt-link>
      <div class="col-2-3">{{story.content.name}}</div>
      <div class="col-4 text-right">2022</div>
      <div class="col-5 text-right">11</div>
    </div>
    <photo-carousel :images="story.content.photos" />
  </div>
</template>

<script setup>
const { slug } = useRoute().params

const story = await useAsyncStoryblok('projects/' + slug, {
  version: 'draft',
})
</script>

<style lang="scss" scoped>
.project-page {
  margin-top: calc($navbar-height);
  padding: 0 $padding-x-md $padding-x-md;
}

.project-data {
  line-height: 1;
  padding-top: .5rem;
  padding-bottom: $padding-x-md;
}

</style>