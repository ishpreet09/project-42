function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);

  let hr=hour();
  let mn=minute();
  let sc=second();
 
  strokeWeight(8);
  noFill();
  stroke("red");
  let hourAngle=map(hr%12,0,12,0,360);
  arc(0,0,300,300,0,hourAngle);
  push();
  rotate(hourAngle)
  stroke("red");
  line(0,0,50,0);
  pop();

  stroke(76,211,10);
  let min=map(mn,0,60,0,360);
  arc(0,0,280,280,0,min);
  push();
  rotate(min)
  stroke(76,211,10);
  line(0,0,75,0);
  pop();

  stroke("blue");
  let sec=map(sc,0,60,0,360);
  arc(0,0,260,260,0,sec);
 
  push();
  rotate(sec)
  stroke("blue");
  line(0,0,100,0);
  pop();
 
  stroke(255);
  point(0,0);

}