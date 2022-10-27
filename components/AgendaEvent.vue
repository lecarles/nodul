<template>
  <nuxt-link :to="'/events/' + event.fields.slug" class="agenda-event">
    <div class="agenda-date font-size-xl mb-row">{{day}}.{{month}}</div>
    <agenda-image :file="event.fields.image.fields.file" :poster="event.fields.cartell" />
    <div class="agenda-title font-size-md">{{event.fields.title}}</div>
    <div class="agenda-info mt-auto">
      <div class="agenda-info-place">
        ○ {{time}}
      </div>
      <div class="agenda-info-time">
        ● {{event.fields.place}}
      </div>
    </div>
    <div class="agenda-more-info mt-row">
      <span>Més informació</span><span class="ml-auto">→</span>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  event: Object,
})

const date = new Date(props.event.fields.date)
const year =  date.getFullYear()
const month = date.getMonth()+1
const day = date.getDate()
const time = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
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