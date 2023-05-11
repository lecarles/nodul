<template>
  <div>
    <agenda-preview />
    <app-footer />
  </div>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    mode: 'in-out',
    onEnter: (el, done) => { 
      setTimeout(() => {
        done() 
      }, 2000)
    },
    onLeave: (el, done) => { 
      setTimeout(() => {
        done() 
      }, 2000)
    },
  }
})
</script>