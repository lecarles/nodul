<template>
  <div>
    <div class="intro-section p-md">
      <video class="logo-video" src="@/assets/video/logo-1080.mp4" autoplay muted></video>
    </div>
    <animated-separator>
      <span class="mr-auto">La coalició</span>
      <span>1</span>
    </animated-separator>
    <div class="about-section p-md">
      <div class="about-lema mt-1">
        <div class="font-size-xl"><gsap-lines id="pertot">Per tot allò</gsap-lines></div>
        <div class="font-size-xl font-serif"><gsap-lines id="cor">que tens al cor</gsap-lines></div>
      </div>
      <div class="mt-row-2 mb-row-3 about-image">
        <img class="span-2-row" src="@/assets/grupal-lowres.jpg" alt="">
      </div>
      <div class="grid-3 mb-row-3">
        <div>
          <div class="font-size-sm about-texts">Un sèrie de propostes per tot allò que tens al cor, que podrem fer realitat amb tu a partir del 28 de maig</div>
          <gsap-button class="mt-1 font-size-md" id="programa"><a href="#"><span>Programa</span><span class="ml-auto">→</span></a></gsap-button>        </div>
        <div>
          <div class="font-size-sm about-texts">Acord per Vilamarxant som Compromís, Podem i Esquerra Unida units en una coalició d’esquerres històrica al nostre poble.</div>
          <gsap-button class="mt-1 font-size-md" id="list"><a href="#"><span>Coneix-nos</span><span class="ml-auto">→</span></a></gsap-button>
        </div>
        <div>
          <div class="font-size-sm about-texts">Parla amb nosaltres i assabenta't de la campanya. Para'ns pel carrer per a xarrar o segueix-nos a les xarxes</div>
          <gsap-button class="mt-1 font-size-md" id="list"><a href="#"><span>Participa</span><span class="ml-auto">→</span></a></gsap-button>
        </div>
      </div>
    </div>
    <animated-separator class="programa-separator" id="programa">
      <span class="mr-auto font-size-xs">Programa</span>
      <span>1</span>
    </animated-separator>
    <div class="programa mt-1">
      <div class="programa-section" v-for="section in data.stories" :key="section._uid">
        <div class="programa-sticky p-md">
          <div class="font-size-lg mb-auto">{{section.content.title}}</div>
          <video :src="section.content.video.filename" autoplay muted></video>
        </div>
        <div class="programa-mesures p-md">
          <div v-for="mesura in section.content.starred" :key="mesura._uuid">
            <div class="font-size-sm">{{ mesura.overtitle }}</div>
            <div class="font-size-md mb-row">{{ mesura.title }}</div>
          </div>
          <div class="font-size-sm" v-html="renderRichText(section.content.list)"></div>
        </div>
      </div>
    </div>
    <animated-separator id="candidates">
      <span class="mr-auto font-size-xs">La llista</span>
      <span>2</span>
    </animated-separator>
    <div class="p-md candidates-section mb-row-2">
      <div class="grid-2 font-size-md mt-row">
        <div class="candidates-text">
          Som un equip de vilamarxanters i vilamarxanteres decidit a treballar per un poble cohesionat, dinàmic i creatiu, 
          on valga la pena construir un projecte de vida. Assumim el repte de treballar amb el poble i per al poble, sense caure en personalismes.
        </div>
      </div>
      <div class="grid-3 mt-row-2">
        <div class="a-self-start" v-for="candidate in candidates.data.stories[0].content.body" :key="candidate._uid">
          <img class="image" :src="candidate.image.filename" alt="">
          <div class="font-size-md mt-1">{{candidate.name}} {{candidate.surnames}}</div>
          <div class="font-size-md font-serif">{{candidate.party}}</div>
        </div>
      </div>
      <div class="font-size-md mt-row-2">
        <div class="mb-row">A la llista també anem:</div>
        <div class="grid-4 font-size-sm candidates-grid">
          <div v-for="candidate in candidates.data.stories[0].content.candidates" :key="candidate._uid">
            <div>{{ candidate.name }} {{ candidate.surnames }}</div>
            <div class="font-serif">{{ candidate.party }}</div>
          </div>
        </div>
      </div>
    </div>
    <animated-separator>
      <span class="mr-auto font-size-xs">Participa</span>
      <span>3</span>
    </animated-separator>
    <div class="p-md grid-3 contact-section mt-row" id="contact">
      <div class="font-size-md span-2-col">Tu també pots formar part d'Acord per Vilamarxant</div>
      <div class="font-size-sm col-1">Segueix-nos a les xarxes i envia'ns un MD si tens qualsevol pregunta, suggerència o si vols implicar-te a la campanya.</div>
      <div class="font-size-sm col-1 social-list">
        <a href="https://www.instagram.com/acordvilamarxant/">Instagram</a>
        <a href="https://twitter.com/compromisvlmxnt">Twitter</a>
        <a href="https://www.facebook.com/acordvilamarxant/">Facebook</a>
        <a href="https://www.tiktok.com/@acordpervilamarxant">Tiktok</a>
      </div>
      <img src="@/assets/logo-tots.svg" class="span-2-col j-self-end a-self-end mt-row" alt="">
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue'

const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/', {
  starts_with: 'programa-resum',
  sort_by: 'content.order:asc'
})

const candidates = await storyblokApi.get('cdn/stories/', {
  starts_with: 'candidates',
})
</script>

<style lang="scss">
.intro-section {
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-video {
    width: 75%;
    max-width: clamp(420px, 30vw, 1080px);
  }
}

.about-section {
  .about-lema {
    text-align: center;
  }

  .about-texts {
    max-width: 30ch;
  }

  .about-image {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      max-width: clamp(420px, 35vw, 2000px);
    }
  }

  a {
    display: flex;
    width: 100%;
  }
}

.separator {
  width: 100%;
  height: 1px;
  background: black;
}

.programa-section {
  display: grid;
  grid-template-columns: .6fr 1fr;
  gap: $col-gap;

  .programa-mesures {
    max-width: 60%;
    margin: 0 auto;
  }

  .programa-sticky {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    video {
      width: 100%;
    }
  }

  ol {
    margin: 0;
    padding: 0;
    list-style: none;
    transform: translateX(calc(($col-gap * -1) - 20px));

    li {
      display: grid;
      grid-template-columns: 20px 1fr;
      gap: $col-gap;
      counter-increment: item;
      margin-bottom: .8rem;
    }

    li::before {
      text-align: right;
      content: counter(item);
    }
  }
}

.candidates-section {
  .candidates-text {
    max-width: 45ch;
  }

  .candidates-grid {
    gap: 1rem;
  }
}

.contact-section {
  img {
    height: 60px;
  }

  .social-list {
    align-self: end;
    display: flex;
    gap: .5rem;
    
    a {
      text-decoration: underline;
    }
  }
}

@media (max-width: $sm-breakpoint)  {
  .programa-section {
    grid-template-columns: 1fr;

    .programa-sticky {
      height: auto;
      display: grid;
      grid-template-columns: 2fr 1fr;
    }

    .programa-mesures {
      max-width: 100%;
    }

    ol {
      transform: none;
    }
  }

  .contact-section {
    img {
      height: auto;
      width: 100%;
    }
  }
}
</style>

<style lang="scss">
#pertot {
  .gsap-line-parent {
    padding: 0;
  }
}

.programa-separator {
  .separator {
    background: transparent;
  }
}
</style>