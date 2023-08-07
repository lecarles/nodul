<template>
  <div class="footer font-size-sm p-md mt-row-2">
    <footer-logos />
    <div class="grid-2 mt-row-2">
      <p>
        En Viu! rep una subvenció anual de 13080€ de l'Institut Valencià de Cultura per a l'Organització i manteniment d’estructures administratives i una subvenció de 25.588€ de per al foment d'activitats musicals per l'organització del Circuit Viu.
      </p>
      <div class="social-links">
        <a href="https://instagram.com/">Instagram</a>
        <a href="https://instagram.com/">Facebook</a>
        <a href="https://enviu.es">Enviu.es</a>
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
  }

  a {
    text-transform: uppercase;
    display: block;
  }
}

@media (max-width: $sm-breakpoint) {
  .footer {
    .social-links {
      justify-self: flex-start;
    }
  }
}
</style>