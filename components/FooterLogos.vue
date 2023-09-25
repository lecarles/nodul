<template>
  <div class="grid-1">
    <div class="logos">
      <img src="@/assets/logos/generalitat.svg" alt="Generalitat Valenciana">
      <img src="@/assets/logos/ivc.svg" alt="Institut Valencià de Cultura">
      <img src="@/assets/logos/dipu.svg" alt="Diputació de València - Àrea de Cultura">
      <img src="@/assets/logos/primavera.svg" alt="Primavera d'Hivern">
      <img src="@/assets/logos/europa.svg" alt="Finançat per la Unió Europea Next Generation EU ">
    </div>
    <div class="logos logos-ajuntaments">
      <img src="@/assets/logos/alcantera.png" alt="Ajuntament d'Alcàntera">
      <img src="@/assets/logos/antella.png" alt="Ajuntament d'Antella">
      <img src="@/assets/logos/beneixida.png" alt="Ajuntament de Beneixida">
      <img src="@/assets/logos/carcer.png" alt="Ajuntament de Càrcer">
      <img src="@/assets/logos/cotes.png" alt="Ajuntament de Cotes">
      <img src="@/assets/logos/gavarda.png" alt="Ajuntament de Gavarda">
      <img src="@/assets/logos/sellent.png" alt="Ajuntament de Sellent">
      <img src="@/assets/logos/sumacarcer.png" alt="Ajuntament de Sumacàrcer">
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
    height: 2.75em;
  }

  &-ajuntaments img{
    height: 2em;
  }
}
.logo {
  fill: var(--secondary);
}


@media (max-width: $sm-breakpoint) {
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