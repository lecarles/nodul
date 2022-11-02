<template>
  <div class="agenda-grid grid-5">
    <agenda-acte v-for="acte in actes" :acte="acte" :key="acte.uuid"/>
  </div>
</template>

<script setup>
const today = new Date().toISOString()
const actes = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'actes',
})

actes.value = data.stories

const ordered = actes.value.sort(function(a,b){
  return a.content.date.localeCompare(b.content.date)
})

const filtered = ordered.filter(acte => acte.content.date > today)
if (filtered.length > 0) {
  actes.value = filtered
} else {
  actes.value = array.slice(0, 4);
}
</script>

<style lang="scss" scoped>
.agenda-grid {
  justify-items: start;
  padding: $padding-y-md $padding-x-md $padding-y-md;
  height: calc(100vh - 4rem);
}
</style>