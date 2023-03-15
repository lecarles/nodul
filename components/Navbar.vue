<template>
  <div :class="['navbar font-size-md']">
    <nuxt-link to="/" class="mr-auto">Sergi Aroca</nuxt-link>
    <nuxt-link to="/narrativa">hola@sergiaroca.com</nuxt-link>
  </div>
</template>

<style lang="scss">
.navbar {
  height: 4rem;
  display: flex;
  align-items: center;
  padding: .75rem $padding-x-md;
  gap: $col-gap;
  width: 100%;
}
</style>