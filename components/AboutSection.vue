<template>
  <div>
    <div class="about-grid p-md">
      <div class="font-size-md about-header">
        {{ data.story.content.aboutHeader }}
      </div>
      <div class="font-size-md about-grid-text" v-html="renderRichText(data.story.content.aboutText)">
      </div>
    </div>
    <!-- <div class="filera-zero p-md">
      <div class="font-size-md about-header">
        {{ data.story.content.zeroHeader }}
      </div>
      <div class="font-size-md about-grid-text" v-html="renderRichText(data.story.content.zeroText)">
      </div>
    </div> -->
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const route = useRoute()
const { data } = await storyblokApi.get('cdn/stories/home/')
</script>

<style lang="scss">
.about-grid, .filera-zero {
  background: var(--secondary);
  color: var(--background);
  display: grid;
  grid-template-columns: 2fr 3fr;
  height: calc(var(--vh, 1vh) * 100);

  p {
    margin-bottom: 1rem;
  }
}

.about-header {
  max-width: 20ch;
  line-height: 1.2;
}

.filera-zero {
  background: var(--background);
  color: var(--secondary);
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