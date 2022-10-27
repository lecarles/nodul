<script setup>
import gsap from 'gsap'
import { ref, onMounted } from 'vue'

onMounted(() => {
  console.log('moputn')
})

const today = new Date().toISOString()

const { data } = await useAsyncData('article', async (nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  const entries = await $contentfulClient.getEntries({
    content_type: 'acte',
  })
  const ordered = entries.items.sort(function(a,b){
    return a.fields.date.localeCompare(b.fields.date)
  })

  const filtered = ordered.filter(entry => entry.fields.date > today)
  if (filtered.length > 0) {
    return filtered
  } else {
    return array.slice(0, 4);
  }
})
</script>

<template>
  <div>
    <div class="agenda-grid grid-5">
      <agenda-event v-for="event in data" :event="event" :key="event.sys.id"/>
    </div>
    <div class="about p-md">
      <h2 class="color-white mb-auto">Som una associació cultural sense finalitat lucrativa que treballa des del 1983 per la promoció i ús del valencià i la difusió de la cultura del País Valencià.</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.agenda-grid {
  justify-items: start;
  padding: $padding-y-md $padding-x-md $padding-y-md;
  height: calc(100vh - 4rem);
}

.about {
  display: flex;
  flex-direction: column;
  background: $red;
  justify-items: start;
  height: 80vh;

  h2 {
    max-width: 22ch;
  }
}
</style>