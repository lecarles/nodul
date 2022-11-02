<template>
  <div class="agenda-full">
    <div class="agenda-full-header">
      <div class="agenda-full-header-info">
        <div class="mr-auto font-size-md"> 
          <div class="agenda-full-info-place">
            ○ {{acte.content.place}}
          </div>
          <div class="agenda-full-info-time">
            ● {{time}}
          </div>
        </div>
        <div class="agenda-full-date font-size-lg mb-row">{{day}}.{{month}}</div>
      </div>
      <div class="agenda-full-img"></div>
      <div class="agenda-full-title font-size-lg a-self-end">{{acte.content.title}}</div>
    </div>
    <div class="agenda-full-info">
      <div class="agenda-info-prim font-size-md">
        {{acte.content.detailsPrimary}}
      </div>
      <div class="agenda-info-second">
        {{acte.content.detailsSecondary}}
      </div>
      <div class="agenda-info-links font-size-md">
        {{acte.content.links}}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  acte: Object,
})

const { year, month, day, time } = useDateFormatter(props.acte.content.date)
</script>

<style lang="scss" scoped>
.agenda-full {
  height: 100vh;
  display: grid;
  grid-template-rows: 1.35fr 1fr;
  padding: $padding-x-md;
  color: $white;
  background: $red;

  &-header {
    display: grid;
    gap: $col-gap;
    grid-template-columns: 2.5fr 1fr;
    grid-template-rows: auto 1fr;

    &-info {
      display: flex;
      width: 100%;
    }
  }

  &-title {
    display: flex;
    border-bottom: 1px solid white;
    padding-bottom: $row-gap
  }

  &-img {
    background: white;
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-row: span 2;
  }

  &-info {
    display: grid;
    grid-template-columns: 3.75fr 1.25fr 2fr;
    column-gap: $col-gap;
    border-bottom: 1px solid white;
    align-items: end;
    padding: $padding-x-sm 0;
  }
}
</style>