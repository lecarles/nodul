<template>
  <section class="bars-section p-(--md) text-sm max-w-[1440px] mx-auto mt-(--xl)">
    <div class="mt-(--md) mb-(--md) text-base">Bars i restaurants de la Vall del Xúquer</div>
    <div v-for="bar in data.story.content.bars" :key="bar._uid" class="bar-item">
      <a target="_blank" :href="`https://www.google.es/maps/search/${bar.name} ${bar.town}`" class="bar-item-info">{{ bar.name }}</a>
      <a target="_blank" :href="`tel:${bar.phone}`" class="bar-item-info bar-item-info-phone" >{{ bar.phone }}</a>
      <a target="_blank" :href="`https://www.google.es/maps/search/${bar.name} ${bar.town}`" class="bar-item-info bar-item-info-location">{{ bar.location }}</a>
      <a target="_blank" :href="`https://www.google.es/maps/search/${bar.name} ${bar.town}`" class="bar-item-info bar-item-info-town">{{ bar.town }}</a>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const storyblokApi = useStoryblokApi()
const route = useRoute()
const { data } = await storyblokApi.get('cdn/stories/home26/')

let bars = null

onMounted(() => {
  bars = groupBy(data.story.content.bars, 'town')
})

function groupBy(arr, property) {
  return arr.reduce(function(memo, x) {
    if (!memo[x[property]]) { memo[x[property]] = [] }
    memo[x[property]].push(x)
    return memo
  }, {})
}
</script>

<style lang="scss" scoped>
.bars-section {
  .bar-item {
    display: grid;
    grid-template-columns: 1.25fr .5fr 1fr .75fr;
    gap: 1em;
    border-top: 2px dashed var(--color-foreground);

    &:last-child {
       border-bottom: 2px dashed var(--color-foreground);
    }

    &:hover a {
      color: var(--color-blue);
    }


    &-info {
      padding: .75em 0;
    }
  }
}

@media (max-width: 1000px) {
  .bars-section {
    .bar-item {
      grid-template-columns: 1fr 1fr;
      row-gap: 0;

      &-info {
        padding: .5em 0;
      }

      &-info-location, &-info-town {
        grid-column: span 2;
        padding: 0;
      }

      &-info-phone {
        align-self: end;
        text-align: right;
      }

      &-info-town {
        padding-bottom: .5em;
      }
    }
  }
}
</style>