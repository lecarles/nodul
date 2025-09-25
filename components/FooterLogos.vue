<template>
  <div class="grid-1">
    <div class="logos">
      <img src="@/assets/logos/generalitat-ivc.svg" alt="Generalitat Valenciana Institut Valencià de Cultura">
      <img src="@/assets/logos/dipu-sarc.svg" alt="Diputació de València">
      <img src="@/assets/logos/aie.svg" alt="AIE Artistas Intérpretes o Ejecutantes">
      <img src="@/assets/logos/primavera.svg" alt="Primavera d'Hivern">
    </div>
    <div class="logos logos-ajuntaments">
      <img src="@/assets/logos/alcantera.svg" alt="Ajuntament d'Alcàntera de Xúquer">
      <img src="@/assets/logos/antella.svg" alt="Ajuntament d'Antella">
      <img src="@/assets/logos/beneixida.svg" alt="Ajuntament de Beneixida">
      <img src="@/assets/logos/cotes.svg" alt="Ajuntament de Cotes">
      <img src="@/assets/logos/sellent.svg" alt="Ajuntament de Sellent">
      <img src="@/assets/logos/sumacarcer.svg" alt="Ajuntament de Sumacàrcer">
    </div>
    <div class="logos logos-patrocinadors">
      <img src="@/assets/logos/vondom.svg" alt="Vondom">
      <img src="@/assets/logos/blauverd.svg" alt="Blauverd Impressors">
    </div>
  </div>
</template>

<script setup>

</script> 

<style lang="scss" scoped>
.logos {
  display: flex;
  gap: 1.75em;
  margin: 0 auto;

  img {
    width: auto;
    height: 2.5em;
  }

  &-ajuntaments img{
    height: 2.5em;
  }

  &-patrocinadors img {
    height: 2em;
  }
}
.logo {
  fill: var(--secondary);
}


@media (max-width: 1000px) {
  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0;
    gap: .75em
  }
}
</style>