<template>
  <div>
    <svg v-if="props.town === 'Alcàntera de Xúquer'" class="town-icon text-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.59 34.59">
      <path class="cls-1" d="M17.3,0h0c9.55,0,17.3,7.74,17.3,17.3v17.3H0v-17.3C0,7.74,7.74,0,17.3,0Z"/>
    </svg>
    <svg v-if="props.town === 'Beneixida'" class="town-icon text-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.64 35.64">
      <rect class="cls-1" x="0" y="0" width="35.64" height="35.64" rx="17.82" ry="17.82"/>
    </svg>
    <svg v-if="props.town === 'Cotes'" class="town-icon text-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.59 34.59">
      <path class="cls-1" d="M34.59,17.3h0c0,9.55-7.74,17.3-17.3,17.3H0V0h17.3c9.55,0,17.3,7.74,17.3,17.3Z"/>
    </svg>
    <svg v-if="props.town === 'Sellent'" class="town-icon text-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.59 34.59">
      <path class="cls-1" d="M17.3,34.59h0C7.74,34.59,0,26.85,0,17.3V0h34.59v17.3c0,9.55-7.74,17.3-17.3,17.3Z"/>
    </svg>
    <svg v-if="props.town === 'Sumacàrcer'" class="town-icon text-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.59 34.59">
      <path class="cls-1" d="M17.3,0H0v17.3c0,9.55,7.74,17.3,17.3,17.3h0c9.55,0,17.3-7.74,17.3-17.3h-17.3V0Z"/>
    </svg>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  town: {
    type: String,
    default: 'Alcàntera de Xúquer'
  }
})
</script>

<style lang="scss" scoped>
.town-icon {
    fill: currentColor;
    width: .8em;
    height: .8em;
  }
</style>