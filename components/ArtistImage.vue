<template>
  <div class="artist-image-wrapper">
    <img v-if="props.artist.uuid === sergiStore.activeArtist" class="artist-image" ref="image" :src="props.artist.content.imageCropped.filename" :alt="props.artist.content.name">
  </div>
</template>

<script setup>
import { useSergiStore } from '@/stores/sergiStore'
import { ref, onMounted, watch } from 'vue'

const sergiStore = useSergiStore()
const storyblokApi = useStoryblokApi()

const image = ref(null)

onMounted(() => {
  //tal
})

const props = defineProps({
  artist: {
    type: Object,
    default: null
  },
})

</script>