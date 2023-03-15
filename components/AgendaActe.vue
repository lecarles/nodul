<template>
  <nuxt-link :to="'/actes/' + acte.slug" class="agenda-event">
    <div class="agenda-date font-size-xl mb-row">{{day}}.{{month}}</div>
    <agenda-image :file="acte.content.image" :poster="acte.content.isPoster" />
    <div class="agenda-title font-size-md">{{acte.content.title}}</div>
    <div class="agenda-info mt-auto">
      <div class="agenda-info-place">
        ○ {{time}}
      </div>
      <div class="agenda-info-time">
        ● {{acte.content.place}}
      </div>
    </div>
    <div class="agenda-more-info mt-row">
      <span>Més informació</span><span class="ml-auto">→</span>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  acte: Object,
})

const { year, month, day, time } = useDateFormatter(props.acte.content.date)
</script>

<style lang="scss" scoped>
.agenda {
  &-event {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  &-more-info {
    display: flex;
    padding-bottom: .5rem;
    border-bottom: 1px solid $red;
  }
}
</style>