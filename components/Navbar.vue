<template>
  <div class="navbar">
    <nuxt-link class="font-size-sm logo-acord mr-auto" to="/">
      <div>Acord per</div>
      <div class="font-serif">Vilamarxant</div>
    </nuxt-link>
    <img class="logo-partits d-sm-none" src="@/assets/acord-partits.svg" alt="">
  </div>
</template>

<style lang="scss">
.navbar {
  box-sizing: border-box;
  display: flex;
  padding: $padding-x-md;
  line-height: .8;
  width: 100%;
  z-index: 200;

  .logo {
    &-acord {
      line-height: 1;
    }

    &-partits {
      height: 45px;
    }
  }
}

@media (max-width: $sm-breakpoint)  {
  .logo {
    &-acord {
      text-align: center;
      width: 100%;
      margin: 0 auto;
    }

    &-partits {
      display: none;
    }
  }
}
</style>