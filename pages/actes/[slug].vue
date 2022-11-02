<template>
  <div>
    <agenda-acte-full :acte="story"/>
  </div>
</template>

<script setup>
const { slug } = useRoute().params

const story = await useAsyncStoryblok('actes/' + slug, {
  version: 'draft',
})
</script>
