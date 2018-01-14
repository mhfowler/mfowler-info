function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var wWidth;

var triangles = [];

function setup() {
    wWidth = windowWidth + 300;
    var cnv = createCanvas(wWidth, windowHeight);
    cnv.parent('sketch-holder');
    var numRows = 10;
    var numCols = 10;
    var xDelta = wWidth / numCols;
    var yDelta = wWidth / numRows;
    for (var i = 0; i < numCols; i++) {
          for (var j = 0; j < numRows; j++) {
            triangles.push([i*xDelta+40 + randInt(0, i*100), j*yDelta+20 + randInt(0, j*100)]);
          }
    }
}

theta = 0;
function draw() {
  theta += 0.02 * 40;
  // noFill();
  background(255);
  // fill(0);
  noFill();
  for (var j = 0; j < triangles.length; j++) {
      var x = triangles[j][0];
      var y = triangles[j][1];
      rect(x, y, 200, 200);
      // if (theta < 250) {
      //   rect(x, y, theta, theta);
      // } else {
      //   rect(x, y, theta, theta);
      // }
    }
}