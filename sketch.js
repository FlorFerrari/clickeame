function setup() {
    createCanvas(512, 512);
    frameRate(60);
  }
  
  function draw() {
    //console.log(frameCount);
  
    if (frameCount == 1 || frameCount == 80) {
      background(100);
      strokeWeight(0);
      textSize(30);
      textStyle(ITALIC);
      text(`clickeame`, 180, 250);
    }
  }
  
  function generateDiagonals() {
    frameCount = 2;
    background(255);
    let gridSize = floor(random(15, 60));
    console.log(gridSize);
    
    const squareSize = 512 / gridSize;
  
    for (let i = 5; i < gridSize - 5; i++) {
      for (let j = 5; j < gridSize - 5; j++) {
        const x = i * squareSize;
        const y = j * squareSize;
  
        const diagonalType = floor(random(0, 2));
  
        stroke(150);
        strokeWeight(5);
        //strokeWeight(floor(random(2,5)));
        strokeCap(PROJECT);
  
        if (diagonalType === 1) {
          stroke(150);
          line(x, y, x + squareSize, y + squareSize);
        } else {
          stroke(0);
          line(x, y + squareSize, x + squareSize, y);
        }
      }
    }
  }
  
  function mouseClicked() {
    generateDiagonals();
  }
  