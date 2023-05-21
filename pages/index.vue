<template>
  <div>
    <div class="intro-section p-md">
      <video class="logo-video" src="@/assets/video/logo-1080.mp4" autoplay muted></video>
    </div>
    <animated-separator>
      <span class="mr-auto">{{ $t('coalicio') }}</span>
      <span>1</span>
    </animated-separator>
    <div class="about-section p-md">
      <div class="about-lema mt-1">
        <div class="font-size-xl"><gsap-lines id="pertot">Per tot allò</gsap-lines></div>
        <div class="font-size-xl font-serif"><gsap-lines id="cor">que tens al cor</gsap-lines></div>
      </div>
      <div class="mt-row-2 mb-row-3 about-image">
        <gsap-image><img class="span-2-row" src="@/assets/grupal-lowres.jpg" alt=""></gsap-image>
      </div>
      <div class="grid-3 mb-row-3">
        <div>
          <gsap-image><div class="font-size-sm about-texts">{{ $t('about') }}</div></gsap-image>
          <gsap-button @click="scrollToSection('#candidates')" class="mt-1 font-size-md" id="meet"><span>{{ $t('meet') }}</span><span class="ml-auto">→</span></gsap-button>
        </div>
        <div>
          <gsap-image :delay="0.1"><div class="font-size-sm about-texts">{{ $t('aboutProgram') }}</div></gsap-image>
          <gsap-button @click="scrollToSection('#programa')" class="mt-1 font-size-md" id="program"><span>{{ $t('program') }}</span><span class="ml-auto">→</span></gsap-button>        
        </div>
        <div>
          <gsap-image :delay="0.2"><div class="font-size-sm about-texts">{{ $t('aboutContact') }}</div></gsap-image>
          <gsap-button @click="scrollToSection('#contact')" class="mt-1 font-size-md" id="participate"><span>{{ $t('participate') }}</span><span class="ml-auto">→</span></gsap-button>
        </div>
      </div>
    </div>
    <animated-separator class="programa-separator" id="programa">
      <span class="mr-auto font-size-xs">{{ $t('program') }}</span>
      <span>1</span>
    </animated-separator>
    <div class="programa mt-1">
      <programa-section v-for="section in data.stories" :key="section._uid" :section="section" />
    </div>
    <animated-separator id="candidates">
      <span class="mr-auto font-size-xs">{{ $t('list') }}</span>
      <span>2</span>
    </animated-separator>
    <div class="p-md candidates-section mb-row-2">
      <div class="grid-2 font-size-md mt-row">
        <div class="candidates-text">
          {{ $t('canidatesText') }}
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
        <div class="mb-row">{{ $t('moreCandidates') }}</div>
        <div class="grid-4 font-size-sm candidates-grid">
          <div v-for="candidate in candidates.data.stories[0].content.candidates" :key="candidate._uid">
            <div>{{ candidate.name }} {{ candidate.surnames }}</div>
            <div class="font-serif">{{ candidate.party }}</div>
          </div>
        </div>
      </div>
    </div>
    <animated-separator id="contact">
      <span class="mr-auto font-size-xs">{{ $t('participate') }}</span>
      <span>3</span>
    </animated-separator>
    <div class="p-md grid-3 contact-section mt-row">
      <div class="font-size-md span-2-col">{{ $t('participateHeader') }}</div>
      <div class="font-size-sm col-1">{{ $t('participateText') }}</div>
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
import { onMounted } from 'vue'
import { useSergiStore } from '../stores/sergiStore'

const sergiStore = useSergiStore()

useSeoMeta({
  title: 'Acord per Vilamarxant - Compromís + Podem + Esquerra Unida',
  ogTitle: 'Acord per Vilamarxant - Compromís + Podem + Esquerra Unida',
  description: "Acord per Vilamarxant és la coalició d'esquerres per Vilamarxant. El 28M, vota per tot allò que tens al cor. ",
  ogDescription: "Acord per Vilamarxant és la coalició d'esquerres per Vilamarxant. El 28M, vota per tot allò que tens al cor. ",
  ogImage: 'https://a.storyblok.com/f/229615/1200x630/5a5953c342/artboard-1.png',
})
const route = useRoute()

const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/', {
  starts_with: 'programa-resum',
  sort_by: 'content.order:asc',
  language: route.name.endsWith('es') ? 'es' : 'ca'
})

const candidates = await storyblokApi.get('cdn/stories/', {
  starts_with: 'candidates',
  language: route.name.endsWith('es') ? 'es' : 'ca'
})

onMounted(() => {
  console.log(sergiStore.smoother)
})

function scrollToSection(section) {
  console.log('click')
  sergiStore.smoother.scrollTo(section, true, "top 20px")
}
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