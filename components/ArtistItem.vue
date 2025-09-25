<template>
  <div :class="['artist-item-wrapper', {'active' : props.artist[0].uuid === sergiStore.activeBio }]" v-if="props.artist[0]">
    <div class="artist-item" @mouseenter="setHoverArtist(props.artist[0].uuid)" @click="handleActiveBio(props.artist[0].uuid)">
      <div>
        <span class="mr-1">{{props.artist[0].content.name}}</span>
        <span class="more"> + </span>
      </div>
      <div class="italic" v-if="props.artist[0].content.subtitle">{{ props.artist[0].content.subtitle }}</div>
    </div>
    <Transition name="slide">
      <div class="artist-bio" v-show="props.artist[0].uuid === sergiStore.activeBio">
        <div class="font-size-sm" v-html="renderRichText(props.artist[0].content.bio)"></div>
        <img 
        class="artist-image-mb" 
        :src="props.artist[0].content.image.filename" 
        :alt="props.artist[0].content.name"
        v-if="props.artist[0].content.image.filename"
      >
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { nextTick } from 'vue'
import { useSergiStore } from '@/stores/sergiStore'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const sergiStore = useSergiStore()
const props = defineProps({
  artist: {
    type: Object
  },
})

function setHoverArtist(id) {
  sergiStore.activeArtist = id
  ScrollTrigger.refresh(true)
}

function handleActiveBio(id) {
  if (sergiStore.activeBio === id) {
    sergiStore.activeBio = ''
  } else {
    sergiStore.activeBio = id
  }

  nextTick(() => {
    ScrollTrigger.refresh(true)
  })

  ScrollTrigger.refresh(true)
}
</script>

<style lang="scss">
.mask {
  height: 0;
  width: 0;
}

.italic {
  font-style: italic;
}

.artist-item-wrapper {
  p {
    padding-top: .6em;
    max-width: 25ch;

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
  flex-direction: column;
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

@media (max-width: 1000px) {
  .artist-image-mb {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 1em;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all .35s ease;
  max-height: 800px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
  transition: all .35s ease;
  max-height: 0;
  overflow: hidden;
}
</style>