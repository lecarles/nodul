<template>
  <div class="yoyo-item">
    <viu-anim-yoyo class="yoyo-top"/>
    <viu-anim-yoyo :delay="0.5" class="yoyo-bot"/>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss">
.yoyo-item {
  position: relative;
  height: 40vh;
}

.yoyo-top svg {
  top: 0;
  transform: rotate(180deg) translateX(-12%);
}

.yoyo-bot svg {
  bottom: 0;
}
</style>