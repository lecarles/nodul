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
        <div class="span-2-col">Alcàntera de Xúquer, Antella, Beneixida, Cotes, Càrcer, Gavarda, Sellent, Sumacàrcer</div>
      </div>
      <div class="col-5 a-self-start j-self-end collab-container">
        <a href="#colabora" class="collab-btn">
          <span>Col·labora amb Nòdul</span>
        </a>
      </div>
    </div>
    <div class="logo"><nodul-logo></nodul-logo></div>
  </div>
</template>

<script setup >
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'artists/24',
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

  .collab-btn {
    font-size: $font-size-xs;
    max-width: 40ch;
    background: var(--primary);
    color: var(--background);
    line-height: 1;
    width: auto;
    transition: .15s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 4em;
    border-bottom-right-radius: 4em;
    padding: .5em 2.25em;
    width: fit-content;

    &:hover {
      background: var(--secondary);
    }
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

  .collab-container {
    display: none;
  }
}
</style>