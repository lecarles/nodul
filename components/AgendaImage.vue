<template>
  <div :class="['agenda-image-container mb-row', {'agenda-poster' : poster }]" :style="file.description">
    <img class="agenda-image" :src="file.url" :alt="file.title">
    <img class="agenda-bg" :src="file.url">
  </div>
</template>

<script setup>
const props = defineProps({
  file: Object,
  poster: Boolean
})
</script>

<style lang="scss" scoped>
.agenda-image {
  width: 100%;
  object-fit: cover;
  height: 45vh;

  &-container {
    height: 45vh;
    position: relative;
    overflow: hidden;
  }
}

.agenda-bg {
  position: absolute;
  object-fit: fill !important;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  filter: blur(100px);
  z-index: -1;
}

.agenda-poster {
  width: 100%;

  img {
    padding: 1rem;
    object-fit: contain;
  }
}
</style>