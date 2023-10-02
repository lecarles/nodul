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
          <div class="concert-item-time col-1 font-size-sm">{{computedDate(concert.content.date).time.value}}h</div>
          <div class="font-size-md concert-item-artists col-2">
            <artist-item v-for="artist in concert.content.artists" :artist="artist" :key="artist"></artist-item>
          </div>
        </div>
      </div>
      <div class="concert-image" ref="pin">
        <artist-images></artist-images>
        <img src="@/assets/background.png">
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
  version: 'draft',
  starts_with: 'concerts',
  sort_by: 'content.date:asc'
})

function wtf(i){
  if(i-1 < 0) {
    return data.stories.length - 1
  } else return `${i-1}`
}

function computedDate(date){
  return useDateFormatter(date)
}

</script>

<style lang="scss" scoped>
.concerts-section {
  background: var(--secondary);
  color: var(--background);
  padding-bottom: $padding-x-md;
}
.concert-list {
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2fr 3fr;
}

.concert-grid {
  padding: $padding-y-md $padding-x-md 0 $padding-x-md;
}

.concert-image {
  pointer-events: none;
  position: relative;
  height: 100vh;
  justify-self: end;
  aspect-ratio: 1;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    aspect-ratio: 1;
    width: 100%;
    height: 100%;
  }
}


.concert-item {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: calc($row-gap / 3);
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