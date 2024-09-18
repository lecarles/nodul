<template>
  <div class="footer font-size-sm p-md mt-row-2">
    <footer-logos />
    <div class="footer-links mt-row-2">
      <div class="social-links">
        <a target="_blank" href="https://www.instagram.com/nodulfestival/">Instagram</a>
        <div class="ml-auto">
          Nòdul – II Festival de la Vall del Xúquer
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.footer {
  display: grid;
  column-gap: $col-gap;
  line-height: 1.1;
  //border-top: 1px solid var(--foreground);

  .social-links {
    display: flex;
    gap: 1rem;
    color: var(--primary);
  }

  a {
    display: block;
  }
}

@media (max-width: $sm-breakpoint) {
  .footer {

    &-links {
      display: flex;
      gap: 1rem;
    }
    .social-links {
      justify-self: center;
    }
  }
}
</style>