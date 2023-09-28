<script setup>
useSeoMeta({
  title: 'Nòdul - I Festival de la Vall del Xuquer',
  ogTitle: 'Nòdul - I Festival de la Vall del Xuquer',
  description: "Nòdul és el primer Festival de la Vall del Xúquer (a la Ribera Alta, València). És una festa que celebra la cultura, el patrimoni i la comunitat local.",
  ogDescription: "Nòdul és el primer Festival de la Vall del Xúquer (a la Ribera Alta, València). És una festa que celebra la cultura, el patrimoni i la comunitat local.",
  ogImage: 'https://a.storyblok.com/f/252738/1200x630/c43a335dd2/ogimage.png',
})

import { pageTransition } from '@/helpers/transitionConfig'

definePageMeta({
  pageTransition: pageTransition,
})
</script>

<template>
  <div>
    <intro-section />
    <concerts-list />
    <about-section />
    <app-footer />
  </div>
</template>