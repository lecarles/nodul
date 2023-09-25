<template>
  <div class="intro-section font-size-md grid-1">
    <div class="grid-5 a-self-start">
      <div class="intro-section-artists span-2-col">
        <div class="artist" v-for="artist in data.stories" :key="artist.uuid">{{artist.content.name}}</div>
      </div>
      <div class="intro-section-info font-size-sm col-4">
        <div>Nòdul</div>
        <div>I Festival de <br>La Vall del Xúquer</div>
        <div>11–15 d’Octubre</div>
        <div class="span-2-col">Alcàntera, Antella, Beneixida, Cotes, Càrcer, Gavarda, Sellent, Sumacàrcer</div>
      </div>
    </div>
    <div class="logo"><nodul-logo></nodul-logo></div>
  </div>
</template>

<script setup >
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'artists',
  sort_by: 'content.name:asc'
})
</script>

<style lang="scss" scoped>
.intro-section {
  height: calc(100vh);
  height: calc((var(--vh, 1vh) * 100));
  padding: $padding-x-md $padding-x-md;
  position: relative;

  &-artists {
    display: flex;
    align-self: start;
    width: 100%;
    flex-wrap: wrap;
    column-gap: .25em;

    .artist {
      &::after {
        content: ',';
      }

      &:last-child::after{
        content: '';
      }
    }
  }
  
  &-info {
    display: flex;
    flex-direction: column;
    align-self: start;
    gap: .5em;
  }
}
.logo {
  padding: $padding-x-md;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

@media (max-width: $sm-breakpoint) {
  .intro-section {
    .grid-5 {
      height: 100%;
    }

    &-artists {
      max-width: 100%;
    }

    &-info {
      max-width: 60%;
      margin-left: auto;
    }

    .logo {
      position: relative;
      padding: 0;
    }
  }
}
</style>