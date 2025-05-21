//The setup function only happens once
var flushing= 0;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(250,176,210); 
}

//The draw function happens over and over again
function draw() {
  //an RGB color for the canvas' background
  //circle
  stroke(54,51,88); // an RGB color for the circle's border
  strokeWeight(5);
  fill(225,217,222,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(100,100,flushing,flushing); // center of canvas, 
  
  fill(238, 199, 59);
  strokeWeight(0);
  ellipse(mouseX-25,mouseY-25,50,50);
  stroke(248,76,19);
  strokeWeight(5);
  line(30,200,400,flushing);
  strokeWeight(2);
  triangle(300,110,230,50,175,mouseY);
  strokeWeight(2);
  fill(random(20,230),197,random(20,130));
  textSize(100);
  textFont("Helvetica");
  text('Fun Times',22,300);
  stroke(0,0,0);
  ellipse(random(width),random(height),10,10);
}

function mousePressed () {

if (flushing >= 255) 
  {flushing=0;

  } else {
    flushing= flushing+10;
  }

}