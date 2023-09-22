<template>
  <div>
    {{ props.artist }}
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi()

const props = defineProps({
  artist: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>

</style>