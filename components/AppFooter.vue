<template>
  <div class="footer color-white font-size-sm">
    <div class="xarxes">
      <div class="mb-1">Xarxes</div>
      <a href="https://www.instagram.com/ac9octubre/">Instagram</a>
      <a href="https://twitter.com/cultural_9">Twitter</a>
      <a href="">Facebook</a>
    </div>
    <div class="activitats">
      <div class="mb-1">Activitats</div>
      <div class="grid-3 a-items-start">
        <div>
          <div>Agenda completa</div>
          <div>Volta a peu</div>
          <nuxt-link to="/narrativa">Concurs de narrativa</nuxt-link>
          <div>La 49</div>
        </div>
        <div>
          <a href="https://castellvilamarxant.com">El Castell</a>
          <div>Jornades d'història</div>
          <div>Literatura</div>
          <div>Concerts</div>
        </div>  
        <div>
          <div>Música Tradicional</div>
          <div>Estellés a Vilamarxant</div>
          <div>Documental 30 Anys</div>
          <div>Concerts</div>
        </div>
      </div>
    </div>
    <div class="contacte">
      <div class="mb-1">Contacte</div>
      <div class="soci">Fes-te soci/sòcia</div>
      <div>ac9octubre@gmail.com</div>
      <div>C/Font Nova, 6</div>
      <div>Vilamarxant, València</div>
    </div>
    <div class="logos a-self-end">
      <img src="@/assets/logos/logo-ac9o.svg" alt="Associació Cultural 9 d'Octubre">
      <img src="@/assets/logos/gva.svg" alt="Conselleria de Cultura">
      <img src="@/assets/logos/sempreteua.svg" alt="Sempre Teua">
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.footer {
  background: $red;
  display: grid;
  grid-template-columns: .75fr 3fr 1.25fr 2fr;
  column-gap: $col-gap;
  line-height: 1.1;

  a {
    color: $white;
    text-decoration: underline;
    display: block;
  }

  .contacte {
    margin-left: $padding-y-md;
  }

  .logos {
    display: flex;
    max-height: calc($font-size-sm * 3);
    justify-content: flex-end;
    width: 100%;
    
    img {
      max-height: calc($font-size-sm * 3);
      object-fit: contain;
      width: auto;
      margin-left: 1rem;
    }
  }
}
</style>