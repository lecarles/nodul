<template>
  <div class="p-(--md) text-base sm:text-md max-w-[1400px] mx-auto mt-(--xl)">
    <section class="about-grid bg-blue text-background p-(--md)">
      <div class="about-header">
        {{ data.story.content.aboutHeader }}
      </div>
      <div class="about-grid-text" v-html="renderRichText(data.story.content.aboutText)">
      </div>
    </section>
    <section class="filera-zero bg-orange text-background p-(--md) mt-4" id="colabora">
      <div class="about-header">
        {{ data.story.content.zeroHeader }}
      </div>
      <div>
        <div class="filera-zero-text" v-html="renderRichText(data.story.content.zeroText)"></div>
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
const { data } = await storyblokApi.get('cdn/stories/home26/')
</script>

<style lang="scss">
.about-grid, .filera-zero {
  display: grid;
  grid-template-columns: 2fr 3fr;
  min-height: 50dvh;
  gap: var(--lg);

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.about-header {
  max-width: 45ch;
  line-height: 1.2;
  text-wrap: balance;
}

.filera-btn {
    margin-top: 1.5em;
    width: fit-content;
    padding: var(--sm) var(--lg);
    color: var(--color-black);
    border: 2px solid var(--color-black);
    display: flex;

    &:hover {
      background: var(--color-background);
      color: var(--color-orange);
    }
  }

@media (max-width: 1000px) {
  .about-grid, .filera-zero {
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    gap: 2rem;
  }
}
</style>