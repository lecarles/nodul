<template>
  <div :class="['artist-item-wrapper', {'active' : data.story.uuid === sergiStore.activeBio }]">
    <div class="artist-item" @mouseenter="setHoverArtist(data.story.uuid)" @click="handleActiveBio(data.story.uuid)">
      <span class="mr-col">{{data.story.content.name}}</span>
      <span class="more"> + </span>
    </div>
    <Transition name="slide">
      <div class="artist-bio" v-show="data.story.uuid === sergiStore.activeBio">
        <div class="font-size-sm" v-html="renderRichText(data.story.content.bio)"></div>
        <img class="artist-image-mb" :src="data.story.content.image.filename" :alt="data.story.content.name">
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useSergiStore } from '@/stores/sergiStore'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const sergiStore = useSergiStore()
const storyblokApi = useStoryblokApi()

const props = defineProps({
  artist: {
    type: String,
    default: '0'
  },
})

function setHoverArtist(id) {
  sergiStore.activeArtist = id
}

function handleActiveBio(id) {
  if (sergiStore.activeBio === id) {
    sergiStore.activeBio = ''
  } else {
    sergiStore.activeBio = id
  }
  ScrollTrigger.refresh(true)
}

const { data } = await storyblokApi.get('cdn/stories/' + props.artist, {
  find_by: 'uuid',
})

</script>

<style lang="scss">
.artist-item-wrapper {
  p {
    padding-top: .6em;

    &:last-child {
      padding-bottom: 1em;
    }
  }
}
.active .artist-item {
  color: var(--primary);

  .more {
    transform: rotate(45deg);
  }
}
.artist-item {
  transition: .2s ease;
  display: flex;
  width: 100%;

  .more {
    visibility: hidden;
    opacity: 0;
  }

  &:hover {
    color: var(--primary);
    cursor: pointer;

    .more {
      visibility: visible;
      opacity: 1;
    }
  }
}

.artist-image-mb {
  display: none;
}

@media (max-width: $sm-breakpoint) {
  .artist-image-mb {
    display: block;
    width: 100%;
    height: auto;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all .3s ease-out;
  max-height: 1200px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
  transition: all .3s ease-out;
  max-height: 0;
  overflow: hidden;
}
</style>