<template>
  <div>
    {{ event }}
  </div>
</template>

<script setup>
  const route = useRoute()

  const { event } = await useAsyncData('article', async (nuxtApp) => {
    const { $contentfulClient } = nuxtApp
    return await $contentfulClient.getEntries({
      content_type: 'acte',
      limit: 1,
      "fields.slug": route.params.id
    })
  })
</script>

<style lang="scss" scoped>

</style>