<template>
  <div class="agenda-grid grid-5">
    <agenda-event v-for="event in events" :event="event" :key="event.sys.id"/>
  </div>
</template>

<script setup>
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
    return ordered.slice(0, 4);
  }
})

const events = data
</script>

<style lang="scss" scoped>
.agenda-grid {
  justify-items: start;
  padding: $padding-y-md $padding-x-md $padding-y-md;
  height: calc(100vh - 4rem);
}
</style>