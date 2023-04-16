<template>
  <div class="footer font-size-sm grid-5">
    <div class="col-3">
      <a href="https://instagram.com/sergi-aroca">Instagram</a>
      <a href="https://instagram.com/sergi-aroca">Linkedin</a>
    </div>
    <a class="col-4" href="mailto:hola@sergiaroca.com">hola@sergiaroca.com</a>
  </div>
</template>


<style lang="scss" scoped>
.footer {
  text-transform: uppercase;
  display: grid;
  grid-template-columns: .75fr 3fr 1.25fr 2fr;
  column-gap: $col-gap;
  line-height: 1.1;

  a {
    text-decoration: underline;
    display: block;
  }
}
</style>