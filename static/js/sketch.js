var canvas;
var theta = 0.0;

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
  canvas = createCanvas(window.outerWidth, window.outerHeight);
  canvas.parent('sketch-holder');
}

function draw() {
  // ellipse(50, 50, 80, 80);
      theta += 0.02;
  strokeWeight(1);
  var l1Height = 65;
  var xPos = window.outerWidth * 0.2;
  line(xPos, 0, xPos, l1Height);
  line(xPos-100, l1Height, xPos+100, l1Height);

  var xPosBase = window.outerWidth / 2.0;
  for (var i = 0; i < 30; i++) {
    var xPos2 = xPosBase + 50*i;
    line(xPos2, 0, xPos2 + randInt(-20, 20), randInt(0, window.outerHeight * 4));
  }
}