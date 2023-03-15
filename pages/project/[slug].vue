<template>
  <div class="grid-2">
    <div>{{story.name}}</div>
    <div>{{story.content.photos}}</div>
    <div v-for="photo in story.content.photos" :key="photo.id" class="col-2">
      <img :src="photo.filename + '/m/'" alt="">
    </div>
  </div>
</template>

<script setup>
const { slug } = useRoute().params

const story = await useAsyncStoryblok('projects/' + slug, {
  version: 'draft',
})
</script>
