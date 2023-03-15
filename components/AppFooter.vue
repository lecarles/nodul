<template>
  <div class="footer color-white font-size-sm">
    footer
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.footer {
  background: $red;
  display: grid;
  grid-template-columns: .75fr 3fr 1.25fr 2fr;
  column-gap: $col-gap;
  line-height: 1.1;

  a {
    color: $white;
    text-decoration: underline;
    display: block;
  }

  .contacte {
    margin-left: $padding-y-md;
  }

  .logos {
    display: flex;
    max-height: calc($font-size-sm * 3);
    justify-content: flex-end;
    width: 100%;
    
    img {
      max-height: calc($font-size-sm * 3);
      object-fit: contain;
      width: auto;
      margin-left: 1rem;
    }
  }
}
</style>