<template>
  <div class="intro-section relative text-sm color-foreground">
    <div class="squares-grid">
      <square-anim v-for="i in 32" :key="i" :class="`square-${i}`"/>
    </div>
    <div class="cartell flex flex-col p-(--md) md:p-(--lg) text-white">
      <div class="header flex items-baseline text-base xl:text-md gap-2 leading-[1]">
        <div class="data">2 → 4 Octubre 2026 </div>
        <div class="f">IV Festival de la Vall del Xúquer</div>
        <nodul-logo class="h-[1.35em] w-auto ml-auto"/>
      </div>
      <div class="flex text-md md:text-lg xl:text-xl flex-wrap gap-x-2 gap-y-1 leading-[1] items-baseline mt-(--lg)">
        <svg class="town-icon text-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.59 34.59">
          <path class="cls-1" d="M17.3,0h0c9.55,0,17.3,7.74,17.3,17.3v17.3H0v-17.3C0,7.74,7.74,0,17.3,0Z"/>
        </svg>
        <div class="town font-serif">Alcàntera de Xúquer</div>
        <div>L’Arannà</div> + <div class="mr-3">Romàntic Dimoni</div>
        <svg class="town-icon text-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.64 35.64">
          <rect class="cls-1" x="0" y="0" width="35.64" height="35.64" rx="17.82" ry="17.82"/>
        </svg>
        <div class="town font-serif">Beneixida</div>
        <div>Anna Ferrer</div> + <div class="mr-3">Anna Andreu</div>
        <svg class="town-icon text-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.59 34.59">
          <path class="cls-1" d="M34.59,17.3h0c0,9.55-7.74,17.3-17.3,17.3H0V0h17.3c9.55,0,17.3,7.74,17.3,17.3Z"/>
        </svg>
        <div class="town font-serif">Cotes</div>
        <div>Isla Kumé</div> + <div class="mr-3">Terrae</div>
        <svg class="town-icon text-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.59 34.59">
          <path class="cls-1" d="M17.3,34.59h0C7.74,34.59,0,26.85,0,17.3V0h34.59v17.3c0,9.55-7.74,17.3-17.3,17.3Z"/>
        </svg>
        <div class="town font-serif">Sellent</div>
        <div>Animal Persona</div> <div>+</div> <div class="mr-3">La Ludwig Band</div>
        <svg class="town-icon text-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.59 34.59">
          <path class="cls-1" d="M17.3,0H0v17.3c0,9.55,7.74,17.3,17.3,17.3h0c9.55,0,17.3-7.74,17.3-17.3h-17.3V0Z"/>
        </svg>
        <div class="town font-serif">Sumacàrcer</div>
        <div>Doña Manteca</div> + <div>Marea Danza</div> + <div>Xaloq</div>
      </div>
      <div class="mt-auto text-base xl:text-md leading-[1]">Entrada gratuïta fins completar aforament</div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'

onMounted(() => {
  let steps = 8
})
</script>

<style lang="scss">
.intro-section {
  background-color: var(--color-black);

  .squares-grid {
    position: relative;
    display: grid;
    gap: 0;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  
  .cartell {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 50%;
    background-color: var(--color-black);
    z-index: 10;
    text-wrap: wrap;
  }

  .town-icon {
    fill: currentColor;
    width: .8em;
    height: .8em;
  }
}


@media (max-width: 96rem) {
  .intro-section {
    .squares-grid {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }

    .cartell {
      width: 66.67%;
      height: 50%;
    }
    
    .square-25, .square-26, .square-27, .square-28, .square-29, .square-30, .square-31, .square-32 {
      display: none;
    }
  }
}

@media (max-width: 60rem) {
  .intro-section {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr;

    .squares-grid {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }

    .cartell {
      width: 100%;
      position: relative;
      height: 100%;
    }

    .square-17, .square-18, .square-19, .square-20, .square-21, .square-22, .square-23, .square-24 {
      display: none;
    }
  }
}

</style>