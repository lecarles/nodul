<template>
  <div class="concert-grid font-size-md">
    <div :class="['concert-item', { 'new-day' : computedDate(concert.content.date).day.value !== computedDate(data.stories[wtf(i)].content.date).day.value }]" v-for="(concert, i) in data.stories" :key="concert.uuid">
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
</template>

<script setup>
import { computed } from 'vue'
const storyblokApi = useStoryblokApi()
const array = ['a1', 'a2', 'a3', 'a4']

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
.concert-grid {
  background: var(--secondary);
  color: var(--background);
  width: 100%;
  padding: $padding-y-md $padding-x-md $padding-y-md;
  box-sizing: border-box;
}


.concert-item {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: calc($row-gap / 3);
  margin-bottom: calc($row-gap * 1);

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
</style>