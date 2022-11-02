<template>
  <div :class="['navbar font-size-md', { 'is-acte' : isActePage}]">
    <nuxt-link to="/" class="mr-auto">Associació Cultural 9 d'Octubre</nuxt-link>
    <nuxt-link to="/narrativa">Narrativa i il·lustració</nuxt-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const route = useRoute()

const isActePage = computed(() => {
  return route.path.startsWith('/actes')
})
</script>

<style lang="scss">
.navbar {
  height: 4rem;
  display: flex;
  align-items: center;
  padding: .75rem $padding-x-md;
  gap: $col-gap;
  width: 100%;
}

.is-acte {
  background: $red;
  color: $white;
  
  a {
    color: $white;
  }
}
</style>