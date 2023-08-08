<script setup>
useSeoMeta({
  title: 'Circuit Viu',
  ogTitle: 'Circuit Viu',
  description: "Circuit Viu",
  ogDescription: "Circuit Viu",
  ogImage: 'https://a.storyblok.com/f/229615/1200x630/5a5953c342/artboard-1.png',
})
</script>

<template>
  <div>
    <viu-anim />
    <marquee-line />
    <concerts-list></concerts-list>
    <marquee-viu class="mt-row marquee-viu-intro"/>
    <app-footer />
  </div>
</template>

<style lang="scss">
.intro-section {
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-video {
    width: 75%;
    max-width: clamp(420px, 30vw, 1080px);
  }
}

.marquee-viu-intro {
  padding: 3em 0;
}
</style>
