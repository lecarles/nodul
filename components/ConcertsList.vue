<template>
  <div class="concerts-section">
    <div class="concert-list" ref="trigger">
      <div class="concert-grid text-sm">
        <div :class="['concert-item', { 'new-day' : computedDate(concert.content.date).day.value !== computedDate(data.stories[wtf(i)].content.date).day.value }]" 
              v-for="(concert, i) in data.stories" :key="concert.uuid"
        >
          <div class="concert-item-date">
            {{ computedDate(concert.content.date).day.value }} {{ computedDate(concert.content.date).fullMonth.value.ca }}
          </div>
          <div class="concert-item-time col-1 text-sm">{{computedDate(concert.content.date).time.value}}<span v-if="computedDate(concert.content.date).minutes.value !== '00'">:{{ computedDate(concert.content.date).minutes.value }}</span>h</div>
          <div class="concert-item-schedule col-2 text-sm">
            <div class="concert-item-place">{{concert.content.place}}</div>
            <div class="concert-item-town">{{concert.content.town}}</div>
          </div>
          <div class="text-base concert-item-artists col-2">
            <artist-item v-for="artist in concert.content.artists" :artist="getArtist(artist)" :key="artist.id"></artist-item>
          </div>
        </div>
        <div class="concert-item disclaimer">
          <div class="col-2 disclaimer-text">
            <p>L'entrada als concerts és lliure fins completar aforament i no cal adquirir ticket per accedir-ne.</p>
          </div>
        </div>
      </div>
      <div class="concert-image" ref="pin">
        <artist-images />
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { SteppedEase } from 'gsap'
import { onMounted, ref } from 'vue'

const storyblokApi = useStoryblokApi()
const trigger = ref(null)
const pin = ref(null)
const pattern = ref(null)
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
  starts_with: 'concerts/25',
  sort_by: 'content.date:asc'
})

const artists = await storyblokApi.get('cdn/stories', {
  starts_with: 'artists/25',
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
  color: var(--foreground);
  min-height: 100vh;

  .pin-section {
    z-index: -10;
  }
}

.concert-list {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 0 var(--md);
  margin-top: 5vw;
  display: grid;
  grid-template-columns: 70ch 1fr;
}

.concert-image {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5vw;
  width: 100%;
  pointer-events: none;
  height: 100vh;
  justify-self: end;
  overflow: hidden;
  pointer-events: none;
}

.concert-item {
  display: grid;
  grid-template-columns: 16ch 1fr;

  &-time {
    border-top: var(--md) solid var(--color-black);
  }

  &-schedule {
    border-top: 2px solid var(--color-black);
    border-left: 2px solid var(--color-black);
    border-right: 2px solid var(--color-black);
    background-color: var(--color-orange);
    font-family: var(--font-italic);
    padding: var(--sm);
    line-height: 1.2;
    max-width: 30ch;
    margin-top: calc(var(--md) - 2px);
  }

  .artist-item-wrapper {
    border-left: 2px solid var(--color-black);
    border-right: 2px solid var(--color-black);
    border-bottom: 2px solid var(--color-black);
    padding: var(--sm);
    line-height: 1.2;

    &:first-child {
      border-top: 2px solid var(--color-black);
    }
  }

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
      margin-top: calc(var(--md) * 2);
    }
  }

  &.disclaimer {
    margin-top: calc(var(--md) * 2);

    .disclaimer-text {
      font-size: var(--text-xs);
      line-height: 0.9;
    }
  }
}

.pin-spacer {
  pointer-events: none;
}

@media (max-width: 1000px) {
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
  }

  .concert-item-date {
    font-size: var(--text-sm);
  }
}
</style>