var car;
var wall;
var speed , weight ;


function setup() {
  createCanvas(16,400);
speed = random(55,90)
weight = random(400,1500)
car = createSprite(50,200,50,50);
wall = createSprite(1500,200,60,height/2);
car.velocityX = speed;
car.x = wall.x
{
  deformation = 0.5*weight*speed*speed/22500
}
deformation<100=car.shapeColor(green);
100<deformation<=180=car.shapeColor(yellow);
deformation<180=car.shapeColor(red);
}


function draw() {
  background(255,255,255);  
  drawSprites();
}