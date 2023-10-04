<template>
  <div class="concerts-section">
    <div class="concert-list" ref="trigger">
      <div class="concert-grid font-size-md">
        <div :class="['concert-item', { 'new-day' : computedDate(concert.content.date).day.value !== computedDate(data.stories[wtf(i)].content.date).day.value }]" 
              v-for="(concert, i) in data.stories" :key="concert.uuid"
        >
          <div class="concert-item-date">
            {{ computedDate(concert.content.date).day.value }} d’{{ computedDate(data.stories[wtf(i)].content.date).fullMonth.value.ca }}
          </div>
          <div class="concert-item-schedule col-2 font-size-sm">
            <div class="concert-item-place">{{concert.content.place}}</div>
            <div class="concert-item-town">{{concert.content.town}}</div>
          </div>
          <div class="concert-item-time col-1 font-size-sm">{{computedDate(concert.content.date).time.value}}<span v-if="computedDate(concert.content.date).minutes.value !== '00'">:{{ computedDate(concert.content.date).minutes.value }}</span>h</div>
          <div class="font-size-md concert-item-artists col-2">
            <artist-item v-for="artist in concert.content.artists" :artist="getArtist(artist)[0]" :key="artist"></artist-item>
          </div>
        </div>
      </div>
      <div class="concert-image" ref="pin">
        <artist-images />
        <img class="background-pattern" src="@/assets/pattern.svg">
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { onMounted, ref } from 'vue'

const storyblokApi = useStoryblokApi()
const trigger = ref(null)
const pin = ref(null)
let st 


onMounted (() => {
  gsap.to(pin.value, {
    scrollTrigger: {
      trigger: trigger.value,
      pin: pin.value,
      start: "top top",
      end: "bottom bottom"
    }
  })
})

const { data } = await storyblokApi.get('cdn/stories', {
  starts_with: 'concerts',
  sort_by: 'content.date:asc'
})

const artists = await storyblokApi.get('cdn/stories', {
  starts_with: 'artists',
  sort_by: 'content.date:asc'
})

function getArtist(id) {
  return artists.data.stories.filter((story) => story.uuid === id)
}

function wtf(i){
  if(i-1 < 0) {
    return data.stories.length - 1
  } else return `${i-1}`
}

function computedDate(date){
  return useDateFormatter(date)
}

</script>

<style lang="scss">
.concerts-section {
  background: var(--secondary);
  color: var(--background);
  min-height: 100vh;
}
.concert-list {
  width: 100%;
  box-sizing: border-box;
  position: relative;
}

.concert-grid {
  padding: calc($padding-y-md * 3) $padding-x-md;
}

.concert-image {
  z-index: 1;
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  justify-self: end;
  aspect-ratio: 1;
  overflow: hidden;
  pointer-events: none;

  .background-pattern {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
  }
}


.concert-item {
  display: grid;
  grid-template-columns: 8em 1fr;
  gap: calc($row-gap / 3);
  column-gap: $col-gap;
  margin-bottom: calc($row-gap * 1);

  &:last-child {
    margin-bottom: 0;
  }

  &-date {
    display: none;
  }

  &.new-day {
    .concert-item-date {
      display: block;
    }

    &:not(:first-child) {
      margin-top: calc($row-gap * 2);
    }
  }
}

.pin-spacer {
  pointer-events: none;
}

@media (max-width: $sm-breakpoint) {
  .concert-image {
    display: none;
  }

  .concert-list {
    grid-template-columns: 1fr;
    .col-2 {
      grid-column: 2;
    }
  }

  .concert-item {
    grid-template-columns: 1fr 2fr;
    gap: calc($row-gap / 2);
  }

  .concert-item-date {
    font-size: $font-size-sm;
  }
}
</style>