<template>
  <div class="intro-section font-size-sm grid-1 color-foreground">
    <div class="navbar a-self-start">
      <!-- <nodul-logo></nodul-logo> -->
      <div class="intro-section-festi">
        <div>II Festival de <br>La Vall del Xúquer <br>
        9 → 13 d’octubre ‘24</div>
      </div>
      <div class="intro-section-pobles">
        Alcàntera de Xúquer, Antella, Beneixida, Cotes, Càrcer, Gavarda, Sellent, Sumacàrcer
      </div>
      <div class="intro-section-collab">
        <a href="#colabora" class="collab-btn">
          <span>Col·labora amb Nòdul</span>
        </a>
      </div>
    </div>
    <div class="intro-section-artists p-md">
      <div class="artist" v-for="artist in data.stories" :key="artist.uuid">
        <div class="artist-name font-size-lg">{{artist.content.name}}</div>
        <div class="artist-details">
          <div v-if="artist.content.concert[0]">
            {{ getConcert(artist.content.concert[0])[0].content.town }}
            <span v-if="artist.content.concert[1]">
              i {{getConcert(artist.content.concert[1])[0].content.town}}
            </span>
          </div>
          <div v-if="artist.content.concert[0]">
              {{ useDateFormatter(getConcert(artist.content.concert[0])[0].content.date).fullDay }}
              {{ useDateFormatter(getConcert(artist.content.concert[0])[0].content.date).day }}
              <span v-if="artist.content.concert[1]">
              i {{ useDateFormatter(getConcert(artist.content.concert[1])[0].content.date).fullDay }}
                {{ useDateFormatter(getConcert(artist.content.concert[1])[0].content.date).day }}
              </span>
          </div>
        </div>
      </div>
    </div>
    <div class="logo color-primary">
      <client-only>
        <vue-3-lottie
          :animation-data="nodulJSON"
        />
      </client-only>
    </div>
    <div class="logo-vert color-primary">
      <client-only>
        <vue-3-lottie
          :animation-data="nodulvertJSON"
        />
        <vue-3-lottie
          :animation-data="nodulvertJSON"
        />
      </client-only>
    </div>
  </div>
</template>

<script setup >
const storyblokApi = useStoryblokApi()
import nodulJSON from '@/assets/anim.json'
import nodulvertJSON from '@/assets/anim-vert.json'

const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  starts_with: 'artists/24',
  sort_by: 'content.name:asc'
})

const concerts = await storyblokApi.get('cdn/stories', {
  starts_with: 'concerts/24',
  sort_by: 'content.date:asc'
})

function getConcert(id) {
  return concerts.data.stories.filter((story) => story.uuid === id)
}
</script>

<style lang="scss">
.intro-section {
  height: 100dvh;
  position: relative;

  .navbar {
    gap: 0;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    padding: $padding-x-md 0;

    .nodul-logo-svg {
      height: 3.2em;
    }
  }

  &-festi {
    grid-column: 3 / span 2;
    max-width: 90%;
  }

  &-pobles {
    grid-column: 5 / span 2;
    max-width: 90%;
  }

  &-collab {
    grid-column: 9 / span 2;
    max-width: calc(100% - $padding-x-md);
  }

  .logo {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(10vw);
    pointer-events: none;
    z-index: -1;

    &-vert {
      display: none;
    }
  }

  .lottie-animation-container {
    display: flex;
  }

  &-artists {
    display: flex;
    align-self: start;
    width: 100%;
    flex-wrap: wrap;
    column-gap: 1em;
    row-gap: .9em;
    align-items: center;
    color: var(--foreground);

    .artist {
      display: flex;
      gap: .5em;

      &-name {
        line-height: .78;
      }

      &-details {
        border-bottom: 1px solid var(--foreground);
        border-right: 1px solid var(--foreground);
        padding: 0 .4em .1em 0;
        min-width: 10ch;
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
    border: 1px solid var(--foreground);
    color: var(--foreground);
    line-height: 1;
    width: 100%;
    transition: .15s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4em;
    padding: .5em 2.25em;
    align-self: end;

    &:hover {
      background: var(--primary);
    }
  }
}

@media (max-width: $sm-breakpoint) {
  .intro-section {
    .navbar {
      grid-template-columns: repeat(2, 1fr);
      padding: $padding-x-md;
    }

    .logo {
      display: none;

      &-vert {
        position: absolute;
        height: auto;
        width: 100%;
        right: 0;
        display: block;
        z-index: -1;
        bottom: 0;
      }
    }

    &-festi {
      grid-column: 1;
    }

    &-pobles {
      grid-column: 2;
    }

    &-collab {
      display: none;
    }

    &-artists {
      column-gap: .65em;
      row-gap: .65em;
    }

    .artist-name {
      &::after {
        content: ',';
      }
    }

    .artist-details {
      display: none;
    }
  }
}
</style>