<template>
  <div id="canvas"></div>
</template>

<script>
export default {
  name: 'App',
  async mounted() {
    const { default: P5 } = await import('p5')

    let img;
    let tilesX = 92;
    let tilesY = 92;

    const script = p5 => {
      p5.preload = () => {
        img = p5.loadImage("corxea.png");
      }
      p5.setup = () => {
        p5.createCanvas(window.innerHeight, window.innerHeight)
        img.resize(tilesX, tilesY);
        p5.frameRate(12);
      }
      p5.draw = () => {
        let tileW = window.innerHeight / tilesX;
        let tileH = window.innerHeight / tilesY;
        p5.background("#fffef3");
        p5.noStroke();
        p5.ellipseMode(p5.CORNER);
        for (let x = 0; x < tilesX; x++) {
          for (let y = 0; y < tilesY; y++) {
            let c = img.get(x, y);
            let b = p5.brightness(c);
            let s = p5.map(b, 0, 255, 0.75, 0);
            let waveSinX = p5.map(p5.sin(p5.radians(p5.frameCount * 8 + x + y)), -1, 1, -10, 10);
            let waveSinY = p5.map(p5.sin(p5.radians(p5.frameCount * 12 + x + y)), -1, 1, -10, 10);
            let random = p5.random(-1, 1.4);
            p5.fill("#f9ca06");
            p5.ellipse(x * tileW + waveSinX, y * tileH + waveSinY, tileW * s + random, tileH * s + random)
          }
        }
      }
    }
    // Attach the canvas to the div
    const p5canvas = new P5(script, 'canvas');
  },
}
</script>