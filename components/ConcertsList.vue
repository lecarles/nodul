<template>
  <div class="concert-grid">
    <div class="concert-item" v-for="concert in data.stories" :key="concert.uuid">
      <div>{{concert.content.date}}</div>
      <div>
        <div>{{concert.content.place}}</div>
        <div>{{concert.content.town}}</div>
        <div>
          <artist-item v-for="artist in concert.content.artists" :artist="artist" :key="artist"></artist-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi()

const data = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'concerts',
  sort_by: 'content.data:asc'
})

</script>

<style lang="scss" scoped>
.concert-grid {
  background: var(--secondary);
  color: var(--background);
  display: grid;
  width: 100%;
  text-align: center;
  justify-items: start;
  padding: $padding-y-md $padding-x-md $padding-y-md;
  box-sizing: border-box;
}
</style>