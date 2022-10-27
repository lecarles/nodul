<template>
  <div class="navbar font-size-md">
    <nuxt-link to="/" class="mr-auto">Associació Cultural 9 d'Octubre</nuxt-link>
    <nuxt-link to="/narrativa">Narrativa i il·lustració</nuxt-link>
    <nuxt-link to="/volta-a-peu">Volta a peu</nuxt-link>
    <nuxt-link to="/agenda">Agenda</nuxt-link>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.navbar {
  height: 4rem;
  display: flex;
  align-items: center;
  padding: .75rem $padding-x-md;
  gap: $col-gap;
  width: 100%;
}
</style>