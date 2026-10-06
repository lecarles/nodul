<template>
  <div class="intro-section relative text-sm color-foreground">
    <div class="squares-grid">
      <square-anim v-for="i in 32" :key="i" :class="`square-${i}`"/>
    </div>
    <div class="cartell flex flex-col p-(--md) md:p-(--lg) text-white">
      <div class="header flex items-baseline text-base xl:text-md gap-2 leading-[1]">
        <div class="data text-balance">9 → 31 Octubre 2026 </div>
        <div class="f text-balance">IV Festival de la Vall del Xúquer</div>
        <nodul-logo class="h-[1.35em] w-auto ml-auto"/>
      </div>
      <div class="flex text-md md:text-lg xl:text-xl flex-wrap gap-x-2 gap-y-1 leading-[1] items-baseline mt-(--lg)">
        <div class="town font-serif"><town-icon town="Alcàntera de Xúquer" />Alcàntera de Xúquer</div>
        <div>L’Arannà</div> + <div class="mr-3">Romàntic Dimoni</div>
        <div class="town font-serif"><town-icon town="Beneixida" />Beneixida</div>
        <div>Anna Ferrer</div> + <div class="mr-3">Anna Andreu</div>
        <div class="town font-serif"><town-icon town="Cotes" />Cotes</div>
        <div>Isla Kumé</div> + <div class="mr-3">Terrae</div>
        <div class="town font-serif"><town-icon town="Sellent" />Sellent</div>
        <div>Animal Persona</div>
        <div class="town font-serif"><town-icon town="Sumacàrcer" />Sumacàrcer</div>
        <div>Doña Manteca</div> + <div>Marea Danza</div> + <div>Xaloq</div>
      </div>
      <div class="mt-auto text-base xl:text-md leading-[1] pt-3">Entrada gratuïta fins completar aforament</div>
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

  .town {
    display: flex;
    align-items: baseline;
    gap: .3em;
  }

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


@media (max-width: 110rem) {
  .intro-section {
    .cartell {
      width: 75%;
      height: 50%;
    }
  }
}

@media (max-width: 70rem) {
  .intro-section {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr;

    .squares-grid {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }

    .cartell {
      width: 100%;
      position: relative;
      height: 100%;
    }

    .square-17, .square-18, .square-19, .square-20, .square-21, .square-22, .square-23, .square-24, .square-25, .square-26, .square-27, .square-28, {
      display: none;
    }
  }
}

@media (max-width: 50rem) {
  .intro-section {
    .squares-grid {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }

    .square-29, .square-30, .square-31, .square-32 {
      display: none;
    }
  }
}

</style>