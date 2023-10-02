<template>
  <div>
    <div class="about-grid p-md">
      <div class="font-size-md about-header">
        {{ data.story.content.aboutHeader }}
      </div>
      <div class="font-size-md about-grid-text" v-html="renderRichText(data.story.content.aboutText)">
      </div>
    </div>
    <div class="filera-zero p-md">
      <div class="font-size-md about-header">
        {{ data.story.content.zeroHeader }}
      </div>
      <div>
        <div class="font-size-md filera-zero-text" v-html="renderRichText(data.story.content.zeroText)"></div>
        <a href="#" class="filera-btn">
          <span>Col·labora amb Nòdul</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const route = useRoute()
const { data } = await storyblokApi.get('cdn/stories/home/')
</script>

<style lang="scss">
.about-grid, .filera-zero {
  background: var(--primary);
  color: var(--background);
  display: grid;
  grid-template-columns: 2fr 3fr;
  height: calc(var(--vh, 1vh) * 100);

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.about-header {
  max-width: 20ch;
  line-height: 1.2;
}

.filera-zero {
  background: var(--background);
  color: var(--secondary);

  .filera-btn {
    margin-top: 1.5em;
    font-size: $font-size-md;
    max-width: 40ch;
    background: var(--secondary);
    color: var(--background);
    width: 100%;
    line-height: 1;
    transition: .15s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 4em;
    border-bottom-right-radius: 4em;
    padding: .75em .25em;
    height: fit-content;

    &:hover {
      background: var(--primary);
    }
  }
}

@media (max-width: $sm-breakpoint) {
  .about-grid, .filera-zero {
    grid-template-columns: 1fr;
    gap: 2rem;
    height: auto;

    &-text {
      font-size: $font-size-sm;
    }
  }
}
</style>