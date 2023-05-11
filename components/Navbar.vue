<template>
  <div class="navbar grid-5">
    <nuxt-link to="/">Sergi Aroca</nuxt-link>
    <nuxt-link to="/home" class="col-2">Projectes</nuxt-link>
    <a class="col-5 text-right" href="mailto:hola@sergiaroca.com">hola@sergiaroca.com</a>
  </div>
</template>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  padding: $padding-x-md $padding-x-md 0;
  gap: $col-gap;
  line-height: .8;
  width: 100%;
  z-index: 200;
}
</style>