var graphic;
var sizeBalls=10;
var zoomFactor=0.8;
function setup() {
  createCanvas(windowWidth,windowHeight);
  graphic=createGraphics(width,height);
  graphic.pixelDensity(1);
  graphic.colorMode(HSB);
}

function draw() {
  background(0)
  graphic.background(0,.002)
  graphic.fill(random(360),255,255);
  var whichSide=floor(random(4))
  
  if(whichSide==0){
    graphic.ellipse(sizeBalls/2, random(height),sizeBalls,sizeBalls )
  }else if(whichSide==1){
    graphic.ellipse(random(width), sizeBalls/2,sizeBalls,sizeBalls )
  }else if(whichSide==2){
    graphic.ellipse(width-sizeBalls/2, random(height),sizeBalls,sizeBalls )
  }else if(whichSide==3){
    graphic.ellipse(random(width), height-sizeBalls/2,sizeBalls,sizeBalls )
  }
  
  
  var pix=graphic.get( 0, 0, width, height);
  graphic.clear()
  graphic.image(pix,zoomFactor, zoomFactor, width-zoomFactor*2, height-zoomFactor*2);
  image(graphic,0,0)
}

p5.Renderer2D._copyHelper =
function (srcImage, sx, sy, sw, sh, dx, dy, dw, dh) {
  var canvas;
  if (srcImage instanceof p5.Image) {
    canvas = srcImage.canvas;
  } else if (srcImage instanceof p5.Graphics) {
    srcImage.loadPixels();
    canvas = srcImage.elt;
  }
  var s = canvas.width / srcImage.width;
  this.drawingContext.drawImage(canvas,
    s * sx, s * sy, s * sw, s * sh, dx, dy, dw, dh);
};