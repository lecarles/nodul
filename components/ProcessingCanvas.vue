<template>
  <div id="canvas"></div>
</template>

<script>
export default {
  name: 'App',
  async mounted() {
    const { default: P5 } = await import('p5')
    console.log('P5:', P5)

    let img;
    let TILES_X = 12 * 4;
    let TILES_Y = 14 * 2;
    let TILE_W, TILE_H;
    let FONT;
    let chars = ["░", "▒", "▓", "█"];
    let charsMod = ["░", "▒", "▓", "█", "▓", "▒", "▓", "▒"];
    let multipliers = [1.0, 2.0, 4.0, 8.0, 16.0];
    let fontSizes = [67.0, 34.0, 17.0, 8.5, 4.35];
    let activeMultiplierIndex = 1;

    const script = p5 => {
      p5.preload = () => {
        img = p5.loadImage("riu-flat-v3.png");
        //FONT = p5.loadFont("CascadiaCode.ttf");
      }
      p5.setup = () => {
        //p5.createCanvas(960, 1120);
        //img.resize(p5.width, p5.height);
        p5.createCanvas(window.innerHeight, window.innerHeight)
        img.resize(TILES_X, TILES_Y);
        TILE_W = window.innerHeight / TILES_X;
        TILE_H = window.innerHeight / TILES_Y;
        //p5.textFont(FONT);
        p5.textAlign(LEFT_ARROW, TOP);
        p5.textSize(34);
        p5.noFill();
        p5.rectMode(CENTER);
        p5.frameRate(3);
      }
      p5.draw = () => {
        p5.noStroke();
        p5.background("#F0F1E9");
        for (let x = 0; x < TILES_X; x++) {
          for (let y = 0; y < TILES_Y; y++) {
          TILE_W = p5.width / TILES_X;
          TILE_H = p5.height / TILES_Y;
          let px = p5.int(x * TILE_W);
          let py = p5.int(y * TILE_H);
          let c = img.get(px, py);
          let b = p5.brightness(c);
          let selector = p5.int(p5.map(b, 0, 255, 3, 0));
          let r = p5.int(p5.random(0, 8));
          p5.push();
          p5.translate(x * TILE_W, y * TILE_H);
          if (b < 200) {
              p5.fill("#1B9FF4");
              p5.ellipse(x * TILE_W + TILE_W / 2, y * TILE_H + TILE_H / 2, TILE_W * 0.8, TILE_H * 0.8);
              //p5.text(charsMod[r], 0, 0);
          } else {
              //p5.text(chars[selector], 0, 0);
          }
          p5.pop();
        }
      }
    }
    // Attach the canvas to the div
    const p5canvas = new P5(script, 'canvas');
    }
  }
}
</script>