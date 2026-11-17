<template>
  <div class="footer bg-black text-white text-sm md:text-base p-(--md)">
    <footer-logos />
    <div class="footer-links">
      <div class="text-sm text-center mb-(--xl)">
        El Nòdul està subvencionat per l'IVC amb una ajuda al Foment de la Música de 14.099,93€
      </div>
      <div class="social-links">
        <a class="mr-auto" target="_blank" href="https://www.instagram.com/nodulfestival/">Instagram</a>
        <div class="nodul-brand">Nòdul – Festival de la Vall del Xúquer</div>
        <div class="flex flex-wrap gap-x-2">
          <a target="_blank" href="https://2023.nodulfestival.com">I Edició (2023)</a>
          <a target="_blank" href="https://2024.nodulfestival.com">II Edició (2024)</a>
          <a target="_blank" href="https://2025.nodulfestival.com">III Edició (2025)</a>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.footer {
  display: grid;
  column-gap: var(--md);
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

@media (max-width: 1000px) {
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