<template>
  <div>
    <section class="about-grid p-md">
      <div class="text-md about-header">
        {{ data.story.content.aboutHeader }}
      </div>
      <div class="text-md about-grid-text" v-html="renderRichText(data.story.content.aboutText)">
      </div>
    </section>
    <section class="filera-zero p-md" id="colabora">
      <div class="text-md about-header">
        {{ data.story.content.zeroHeader }}
      </div>
      <div>
        <div class="text-md filera-zero-text" v-html="renderRichText(data.story.content.zeroText)"></div>
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
const { data } = await storyblokApi.get('cdn/stories/home/')
</script>

<style lang="scss">
.about-grid, .filera-zero {
  display: grid;
  grid-template-columns: 2fr 3fr;

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.about-grid {
  background: var(--primary);
  color: var(--foreground);
}

.filera-zero {
  background: var(--secondary);
  color: var(--foreground);
}

.about-grid {
  margin-top: 10vw;
}

.about-header {
  max-width: 20ch;
  line-height: 1.2;
}

.filera-btn {
    margin-top: 1.5em;
    font-size: var(--text-md);
    max-width: 40ch;
    background: transparent;
    color: var(--foreground);
    border: 1px solid var(--foreground);
    width: 100%;
    line-height: 1;
    transition: .15s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4em;
    padding: .75em .25em;
    height: fit-content;

    &:hover {
      background: var(--primary);
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