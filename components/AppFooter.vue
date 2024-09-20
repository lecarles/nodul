<template>
  <div class="footer font-size-sm p-md mt-row-2">
    <footer-logos />
    <div class="footer-links mt-row-2">
      <div class="social-links">
        <a class="mr-auto" target="_blank" href="https://www.instagram.com/nodulfestival/">Instagram</a>
        <div class="nodul-brand">Nòdul – Festival de la Vall del Xúquer</div>
        <a target="_blank" href="https://2023.nodulfestival.com">I Edició (2023)</a>
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
    color: var(--foreground);
  }

  a {
    color: var(--foreground);
    display: block;
    text-decoration: underline;
  }
}

@media (max-width: $sm-breakpoint) {
  .footer {
    .social-links {
      display: block;
      justify-self: flex-start;

      .nodul-brand {
        margin-top: 1em;
      }
    }
  }
}
</style>