<template>
  <div class="p-(--md)">
    <section class="about-grid p-(--md)">
      <div class="text-base about-header">
        {{ data.story.content.aboutHeader }}
      </div>
      <div class="text-base about-grid-text" v-html="renderRichText(data.story.content.aboutText)">
      </div>
    </section>
    <section class="filera-zero p-(--md)" id="colabora">
      <div class="text-base about-header">
        {{ data.story.content.zeroHeader }}
      </div>
      <div>
        <div class="text-base filera-zero-text" v-html="renderRichText(data.story.content.zeroText)"></div>
        <a href="https://www.primaveradh.com/tenda/producto/fila-zero/" target="blank" class="filera-btn mb-row-2">
          <span>Col·labora amb Nòdul</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const route = useRoute()
const { data } = await storyblokApi.get('cdn/stories/home25/')
</script>

<style lang="scss">
.about-grid, .filera-zero {
  display: grid;
  grid-template-columns: 2fr 3fr;
  min-height: 50dvh;

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.about-grid {
  background: var(--color-orange);
  border: 2px solid var(--color-black);
}

.filera-zero {
  border: 2px solid var(--color-black);
  border-top: none;
  background: var(--color-white);
  color: var(--color-black);
}

.about-grid {
  margin-top: 10vw;
}

.about-header {
  max-width: 45ch;
  line-height: 1.2;
}

.filera-btn {
    margin-top: 1.5em;
    font-size: var(--text-base);
    width: fit-content;
    padding: var(--sm);
    color: var(--color-black);
    border: 2px solid var(--color-black);
    display: flex;

    &:hover {
      background: var(--color-orange);
    }
  }

@media (max-width: 1000px) {
  .about-grid, .filera-zero {
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    gap: 2rem;

    &-text {
      font-size: var(--text-sm);
    }
  }
}
</style>