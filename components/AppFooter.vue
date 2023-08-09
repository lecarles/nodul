<template>
  <div class="footer font-size-sm p-md mt-row-2">
    <footer-logos />
    <div class="grid-2 mt-row-2">
      <div class="social-links left">
        <a target="_blank" href="https://instagram.com/">Instagram</a>
        <a target="_blank" href="https://instagram.com/">Facebook</a>
      </div>
      <div class="social-links">
        <a target="_blank" href="https://enviu.es">Enviu.es</a>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.footer {
  display: grid;
  column-gap: $col-gap;
  line-height: 1.1;

  .social-links {
    display: flex;
    align-self: flex-end;
    justify-self: flex-end;
    gap: 1rem;

    &.left {
      justify-self: flex-start;
    }
  }

  a {
    text-transform: uppercase;
    display: block;
  }
}

@media (max-width: $sm-breakpoint) {
  .footer {
    .social-links {
      justify-self: center;
    }
  }
}
</style>