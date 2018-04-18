function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
  background(0)
}

function draw() {
  fill(random(360),255,255);
  ellipse(random(width),random(height),20,20);
}