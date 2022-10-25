<script setup>
import gsap from 'gsap'
import { ref, onMounted } from 'vue'

const showRed = ref(true)

function toggleRed () {
  showRed.value = !showRed.value
}

onMounted(() => {
  gsap.from('.items', {
    opacity: 0,
    duration: 3
  })
})

const config = useRuntimeConfig()

const { data } = await useAsyncData('article', async (nuxtApp) => {
  const { $contentfulClient } = nuxtApp
  return await $contentfulClient.getEntries({
    content_type: 'project',
  })
})

const items = data.value.items
</script>

<template>
  <div>
    <nuxt-link to="/narrativa">narrativa</nuxt-link>
    <button @click="toggleRed">Toggle Red</button>
    <div class="red" v-show="showRed">
    </div>
    <div class="items">
      {{ items }}
    </div>
    <div class="blue">
    </div>
    <div>end</div>
  </div>
</template>

<style scoped lang="scss">
.red {
  background: purple;
  height: 800px;
  width: 300px;
  font-size: $font-size-lg;

  .hi {
    color: black;
  }
}

button {
  font-size: $font-size-lg;
}

.blue {
  background: blue;
  height: 900px;
  width: 300px;
}
</style>